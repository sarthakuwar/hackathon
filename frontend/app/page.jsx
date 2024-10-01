'use client'

import { signIn, signOut } from "next-auth/react"

import CarouselCard from "@/components/CarouselCard";
import CarouselVideo from "@/components/CarouselVideo";

import { useSession } from "next-auth/react";
import { useGetElderProfile } from "./services/queries";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center align-middle w-full ">
        <CarouselCard />
        <CarouselVideo />
      </div>
    </>
        )
           
      }
      
