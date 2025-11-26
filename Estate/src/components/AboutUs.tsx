import React from 'react'
import brand_img from '../assets/brand_img.png'

const AboutUs = () => {
  return (
    <div className='px-52 py-10' id='about'>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-2xl'>About <span className='underline text-2xl font-light'>Our Brand</span></p>
          <p className='text-gray-500 w-[290px] text-center mt-3'>Passionate About Properties, Dedicated To Your Vision</p>
        </div>
        <div className='flex gap-20'>
              <img className='w-[400px] h-auto' src={brand_img} alt='' />
              <div className='flex flex-col gap-2'>
                  <div className='grid grid-cols-2 gap-8 mt-10 w-[400px]'>
                      <div className='flex flex-col'>
                        <p className='text-2xl font-semibold'>10+</p>
                        <p className='text-gray-500'>10 Years of Excellency</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-2xl font-semibold'>12+</p>
                        <p className='text-gray-500'>Project completed</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-2xl font-semibold'>20+</p>
                        <p className='text-gray-500'>Mn.Sq.Ft.Delivered</p>
                      </div>
                      <div className='flex flex-col'>
                        <p className='text-2xl font-semibold'>25+</p>
                        <p className='text-gray-500'>Ongoing Project</p>
                      </div>
                  </div>
                  <p className='text-gray-500 mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid soluta non laborum, totam ullam perspiciatis dolores reiciendis nesciunt, magnam possimus recusandae dolorum ipsum libero nostrum natus nihil? Eius, vitae dolorum?</p>
                  <button className='px-7 py-2 mt-5 bg-blue-600 rounded-xl text-white w-[150px]'>Learn More</button>
              </div>
          </div>
    </div>
  )
}

export default AboutUs