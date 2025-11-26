import React, { useEffect, useState } from 'react'
import right_arrows from '../assets/right_arrow.svg'
import left_arrows from '../assets/left_arrow.svg'
import { projectsData } from '../assets/assets.ts'

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(()=>{
        const updateCardsToShow = ()=>{
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize', updateCardsToShow);
            return ()=> window.removeEventListener('resize', updateCardsToShow);
    },[])

    const nextProject = ()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = ()=>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 :
        prevIndex - 1)
    }
  return (
    <div className='px-32 py-10' id='project'>
        <div className='flex flex-col items-center'>
            <p className='font-bold text-2xl'>Projects <span className='underline text-2xl font-light'>Completed</span></p>
            <p className='text-gray-500 w-[290px] text-center mt-3'>Passionate About Properties, Dedicated To Your Vision</p>
        </div>
        <div className='flex justify-end items-center my-8'>
            <button onClick={prevProject} 
            className='p-3 bg-gray-300 rounded mr-2' aria-label='previous projects'>
                <img src={left_arrows} alt='previous' />
            </button>
             <button onClick={nextProject} 
             className='p-3 bg-gray-300 rounded mr-2' aria-label='previous projects'>
                <img src={right_arrows} alt='next' />
            </button>
        </div>
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'
                            >
                                <h2 className='text-gray-800 text-xl font-semibold'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} <span className='mx-3'>|</span> {project.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project