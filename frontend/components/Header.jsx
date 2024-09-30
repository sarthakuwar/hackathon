import React from 'react'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <>
    <div className='h-[50px] flex justify-between items-center w-full bg-white shadow-lg sticky top-0 px-3 z-50'>
        <div className='flex flex-row'>
        <img src="../images/logo.png" className='w-[30px] h-[30px]' alt="" />
        <p className='text-2xl font-bold'>Sahara</p>
        </div>
    </div>
    </>
  )
}

export default Header