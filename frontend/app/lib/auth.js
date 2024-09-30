// app/lib/auth.js (or wherever your NEXT_AUTH configuration is located)

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
      },
      async authorize(credentials) {
        console.log(credentials);
        // Implement your actual authentication logic here
        return { id: "user1", email: credentials.email };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signin: '/auth/signin',
    // Add other custom pages if needed
  }
};