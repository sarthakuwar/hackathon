// app/lib/auth.js

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
      },
      async authorize(credentials) {
        console.log("Credentials login attempt:", credentials);
        // Implement your actual authentication logic here
        return { id: "user1", email: credentials.email };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        console.log("Google profile:", profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        console.log("Google sign in:", { user, account, profile });
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
      }
      if (account && account.provider === "google") {
        token.googleId = profile.sub;
        token.accessToken = account.access_token;
      }
      console.log("JWT callback:", { token, user, account, profile });
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.googleId = token.googleId;
      }
      console.log("Session callback:", session);
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  debug: process.env.NODE_ENV === 'development',
};