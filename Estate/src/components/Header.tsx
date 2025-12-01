import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full overflow-hidden min-h-[70vh] sm:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      <Navbar />

      <div className="flex flex-col h-screen items-center justify-center px-4">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-white 
            font-bold 
            text-center 
            leading-none 
            mt-14
            sm:mt-20
            text-[40px] 
            sm:text-[55px] 
            md:text-[65px] 
            lg:text-[75px]
            w-full 
            sm:w-[500px] 
            md:w-[650px] 
            lg:w-[750px]
          "
        >
          Explore homes that fits your dreams
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            flex 
            flex-col 
            sm:flex-row 
            gap-4 
            sm:gap-5 
            mt-12 
            sm:mt-16
          "
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#project"
            className="border text-white rounded-sm w-[70vw] sm:w-auto px-5 py-2 text-sm text-center"
          >
            Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-blue-500 text-white rounded-sm w-[70vw] sm:w-auto px-5 py-2 text-sm text-center"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Header