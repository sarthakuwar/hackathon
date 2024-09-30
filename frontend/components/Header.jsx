import React from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <>
    <div className='h-[50px] flex justify-between items-center w-full bg-white shadow-lg sticky top-0 px-3 z-50'>

        <p className='text-2xl font-bold'>Sahara</p>
        <div className='flex gap-7'>
        <Button className='px-5'>Button</Button>
        <Button className='px-5'>Profile</Button>
        </div>
    </div>
    </>
  )
}

export default Header