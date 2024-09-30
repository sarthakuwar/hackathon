import React from 'react'
import { HeartHandshake, Home, UserRound } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[80px] flex items-center gap-3 w-full bg-white shadow-[0_-2px_9px_0_rgba(0,0,0,0.3)] fixed bottom-0 left-0 right-0'>
      <div className='flex justify-evenly text-lg items-center w-full px-8'>
        <Link href={'/'}><Home size={24} /></Link>
        <Link href={'/marketplace'}><HeartHandshake size={24} /></Link>
        <Link href={'/'}><UserRound size={24} /></Link>
      </div>
    </div>
  )
}

export default Navbar