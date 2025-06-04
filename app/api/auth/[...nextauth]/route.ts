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
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: Record<'username' | 'password', string> | undefined) {
                if (!credentials) return null;
                await connectToDB();
                console.log("username:", credentials.username, "password", credentials.password);

                const user = await User.findOne({ username: "chatanya" });
                console.log('User found:', user);

                if (!user) throw new Error('No user found');

                if (!user.password) throw new Error('User has no password set');

                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.password as string
                );

                if (!isPasswordCorrect) throw new Error('Invalid password');

                return {
                    id: user._id.toString(),
                    name: user.username,
                    image: user.image || null,
                    isAdmin: (user as any).isAdmin || false,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.image = user.image;
                token.isAdmin = (user as any).isAdmin || false;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = String(token.id);
            session.user.isAdmin = Boolean(token.isAdmin);
            console.log('Session user:', session.user);
            // Extend session.user here too
            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
