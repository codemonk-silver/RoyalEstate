import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Footer: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-10"
    >
      <div className="bg-blue-950 w-full h-auto px-5 sm:px-10 md:px-20 lg:px-32 py-10 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
          
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 w-full lg:w-[400px] lg:mr-20"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="w-32 h-auto"
              src={assets.logo_dark}
              alt="footer_logo"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              minima nesciunt tempore excepturi, natus voluptatem beatae neque
              dolorum quae quidem quisquam.
            </p>
          </motion.div>

          {/* Middle Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col w-full sm:w-[200px]"
          >
            <h1 className="text-2xl font-medium mb-2.5">Company</h1>
            <div className="flex flex-col space-y-1">
              <motion.a 
                whileHover={{ x: 5, color: "#ffffff" }}
                className="text-gray-300"
                href=""
              >
                Home
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: "#ffffff" }}
                className="text-gray-300"
                href=""
              >
                About Us
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: "#ffffff" }}
                className="text-gray-300"
                href=""
              >
                Contact Us
              </motion.a>
              <motion.a 
                whileHover={{ x: 5, color: "#ffffff" }}
                className="text-gray-300"
                href=""
              >
                Privacy Policy
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col w-full lg:w-[400px]"
          >
            <h1 className="text-2xl font-medium mb-2.5">
              Subscribe to our newsletter
            </h1>
            <p className="text-gray-300">
              The latest news, articles and resources sent to your inbox weekly.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-3">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                className="border-gray-500 border-2 py-1.5 px-2 w-full sm:w-auto"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 px-5 py-3 rounded-sm w-full sm:w-auto"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.hr 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full border-gray-600 border mt-10" 
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 flex justify-center mt-4"
        >
          Copyright 2025, All Right Reserved.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;