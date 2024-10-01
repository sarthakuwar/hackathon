import { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/",
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isRegistered = await fetch("https://elderly.dedomil.workers.dev/elder/data/check", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: auth?.user?.email
                })
            })
           const {status} = await isRegistered.json()

            if (status && isLoggedIn) {
                return Response.redirect(new URL("/", nextUrl));
                 // Redirect unauthenticated users to login page
            } else  {
                return Response.redirect(new URL("/login", nextUrl));
            }
            // return true;
        },
    },
    providers: [], // Add providers with an empty array for now
    secret: process.env.AUTH_SECRET,
} 