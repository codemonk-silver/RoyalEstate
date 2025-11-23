import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-32 py-5 fixed top-0 w-full z-10'>
        <div className='flex justify-between items-center'>
            <img src={logo} alt='' />
            <span className='flex gap-6 text-white'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Project</Link>
                <Link to='/testimonial'>Testimonial</Link>
            </span>
            <button className='bg-white px-5 py-1.5 text-black rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar