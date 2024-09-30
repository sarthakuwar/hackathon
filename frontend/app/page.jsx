'use client'

import Navbar from "@/components/Navbar";
import {signIn, signOut, useSession} from "next-auth/react"
import Header from "@/components/Header"
import CarouselCard from "@/components/CarouselCard";
import CarouselVideo from "@/components/CarouselVideo";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
    <Header/>
{/* <button className="w-[20vw] m-1 p-2 bg-gray-800 " onClick={()=>{signIn()}}>signIn</button>
<button className="w-[20vw] m-1 p-2 bg-slate-500 " onClick={()=>{signOut()}}>LogOut</button> */}
<div className="flex flex-col justify-center items-center align-middle w-full ">
<CarouselCard />
<CarouselVideo/>
</div>
<Navbar/>
</>
  );
}
