import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full overflow-hidden min-h-screen bg-cover bg-center' style={{backgroundImage: "url('/header_img.png')"}} id='header'>
        <Navbar />
    <div className='flex flex-col h-screen items-center justify-center'>
        <p className='text-white text-[75px] font-bold text-center w-[750px] leading-none mt-20'>
            Explore homes that fits your dreams
        </p>
        <div className='flex gap-5 mt-16'>
            <button className='border text-white rounded-sm px-5 py-2 text-sm'>
                Projects
            </button>
            <button className='bg-blue-500 text-white rounded-sm px-5 py-2 text-sm'>
                Contact Us
            </button>
        </div>
    </div>
    </div>
  )
}

export default Header