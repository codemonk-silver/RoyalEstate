import React from 'react'
import { motion } from 'framer-motion'
import brand_img from '../assets/brand_img.png'

const AboutUs: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        px-6 
        sm:px-10 
        md:px-20 
        lg:px-52 
        py-10
      " 
      id="about"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="font-bold text-2xl">
          About <span className="underline text-2xl font-light">Our Brand</span>
        </p>
        <p className="text-gray-500 w-[290px] text-center mt-3">
          Passionate About Properties, Dedicated To Your Vision
        </p>
      </motion.div>

      {/* Main content */}
      <div 
        className="
          flex 
          flex-col 
          lg:flex-row 
          gap-10 
          lg:gap-20 
          mt-10
          items-center
        "
      >
        {/* Image */}
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[400px] h-auto"
          src={brand_img} 
          alt="" 
        />

        {/* Text section */}
        <div className="flex flex-col gap-2">
          
          {/* Stats grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              grid 
              grid-cols-2 
              gap-6 
              sm:gap-8 
              mt-5 
              w-full 
              sm:w-[350px] 
              md:w-[380px] 
              lg:w-[400px]
            "
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <p className="text-2xl font-semibold">10+</p>
              <p className="text-gray-500">10 Years of Excellency</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <p className="text-2xl font-semibold">12+</p>
              <p className="text-gray-500">Project completed</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <p className="text-2xl font-semibold">20+</p>
              <p className="text-gray-500">Mn.Sq.Ft.Delivered</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <p className="text-2xl font-semibold">25+</p>
              <p className="text-gray-500">Ongoing Project</p>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 mt-10"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid soluta non laborum, totam ullam perspiciatis dolores reiciendis nesciunt, magnam possimus recusandae dolorum ipsum libero nostrum natus nihil? Eius, vitae dolorum?
          </motion.p>

          {/* Button */}
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-2 mt-5 bg-blue-600 rounded-xl text-white w-[150px]"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutUs