import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center text-4xl 
    font-bold text-center h-screen'>
        <Image src={"/404.jpg"} alt='404 image' width={700} height={700}  className='w-auto h-auto' />
        <div className='flex-row'>
        You think say you dey wise... page does not exist!
        </div>
        <div className='flex-row'>
            <Link href={"/"}>
            <button className='text-blue-500' >back home {"->"} </button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound