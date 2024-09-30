'use client'

import { signIn, signOut } from "next-auth/react"

import CarouselCard from "@/components/CarouselCard";
import CarouselVideo from "@/components/CarouselVideo";

import { useSession } from "next-auth/react";
import { useGetElderProfile } from "./services/queries";



export default function Home() {
  const { data: session } = useSession();

  return (
    <>

      <button className="w-[20vw] m-1 p-2 bg-gray-800 " onClick={() => { signIn() }}>signIn</button>
      <button className="w-[20vw] m-1 p-2 bg-slate-500 " onClick={() => { signOut() }}>LogOut</button>
      <div className="flex flex-col justify-center items-center align-middle w-full ">
        {session ? <span>{session.user?.email}</span> : ""}
        <CarouselCard />
        <CarouselVideo />
      </div>

    </>
  );
}
