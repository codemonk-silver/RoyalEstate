import React from 'react'
import { testimonialsData, assets } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='px-32 py-10' id='Testimonials'>
        <div className='flex flex-col mb-10 items-center'>
            <p className='text-3xl font-bold'>Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span></p>
            <p className='text-gray-500 w-[290px] text-center mt-3'>Real Stories from those who found home with us</p>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index)=>
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 text-sm mb-4'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({length: testimonial.rating}, (item, index)=>(
                                <img key={index} src={assets.star_icon} alt='' />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                )}
        </div>
    </div>
  )
}

export default Testimonials