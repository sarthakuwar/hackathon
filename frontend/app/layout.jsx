// app/layout.js
'use client'
import { Providers } from "./providers";
import localFont from "next/font/local";
import Header from "@/components/Header"
import Navbar from "@/components/Navbar";
import "./globals.css";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import VoiceToTextComponent from "./profile/texttospeech";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



const queryClient = new QueryClient();


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
        <Providers>
        <Header/>
        {children}
            <VoiceToTextComponent/>
            <Navbar />
            
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}