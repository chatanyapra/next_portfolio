// types/next-auth.d.ts
import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  export interface Session {
    user: {
      id: string;
      name?: string | null;
      image?: string | null;
      isAdmin?: boolean;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  export interface JWT {
    id?: string;
    isAdmin?: boolean;
  }
}
declare module 'next-auth/adapters' {
  export interface AdapterUser {
    isAdmin?: boolean;
  }
}
