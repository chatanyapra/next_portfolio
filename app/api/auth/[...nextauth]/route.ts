import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import User from '@/models/userModel';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined) {
                if (!credentials) return null;

                await connectToDB();

                const user = await User.findOne({ email: credentials.email });

                if (!user) throw new Error('No user found');

                if (!credentials.password || !user.password) throw new Error('Invalid password');
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordCorrect) throw new Error('Invalid password');

                return { id: user._id.toString(), email: user.get('email'), name: user.get('name') };
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
