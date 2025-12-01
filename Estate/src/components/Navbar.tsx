import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.svg'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-10 md:px-20 lg:px-32 py-5 absolute top-0 w-full z-10"
    >
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <motion.img 
          whileHover={{ scale: 1.05 }}
          src={logo} 
          alt="logo" 
          className="w-[120px] sm:w-[140px] md:w-[160px]" 
        />

        {/* Desktop Nav Links */}
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden sm:flex gap-4 md:gap-6 text-white text-sm md:text-base"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#header"
          >
            Home
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#about"
          >
            About
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#project"
          >
            Project
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#Testimonials"
          >
            Testimonial
          </motion.a>
        </motion.span>

        {/* Desktop Button */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden sm:block bg-white px-4 sm:px-5 py-1.5 text-black rounded-full text-sm md:text-base"
        >
          Sign Up
        </motion.a>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="sm:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white text-black mt-4 px-5 py-4 rounded-xl shadow-lg space-y-5 overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='flex flex-col w-full items-center text-xl space-y-3'
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#header" 
                className=""
              >
                Home
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#about" 
                className=""
              >
                About
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#project" 
                className=""
              >
                Project
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#Testimonials" 
                className=""
              >
                Testimonial
              </motion.a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="block bg-black text-white text-center py-2 rounded-full"
            >
              Sign Up
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar