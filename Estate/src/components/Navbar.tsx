import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='px-32 py-5 fixed top-0 w-full z-10'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt='' />
            <span className='flex gap-6 text-white'>
                <a href='#header'>Home</a>
                <a href='#about'>About</a>
                <a href='#project'>Project</a>
                <a href='#Testimonials'>Testimonial</a>
            </span>
            <button className='bg-white px-5 py-1.5 text-black rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar