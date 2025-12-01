import React from "react";
import { motion } from "framer-motion";
import { testimonialsData, assets } from "../assets/assets";

const Testimonials: React.FC = () => {
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
        lg:px-32 
        py-10
      "
      id="Testimonials"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col mb-10 items-center"
      >
        <p className="text-3xl font-bold">
          Customer{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            Testimonials
          </span>
        </p>

        <p className="text-gray-500 w-[290px] text-center mt-3">
          Real Stories from those who found home with us
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="
              max-w-[340px] 
              border 
              shadow-lg 
              rounded 
              px-8 
              py-12 
              text-center
            "
          >
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 + 0.1
              }}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />

            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 + 0.2
              }}
              className="text-xl text-gray-700 font-medium"
            >
              {testimonial.name}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 + 0.3
              }}
              className="text-gray-500 text-sm mb-4"
            >
              {testimonial.title}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 + 0.4
              }}
              className="flex justify-center gap-1 text-red-500 mb-4"
            >
              {Array.from(
                { length: testimonial.rating },
                (_, starIndex) => (
                  <motion.img 
                    key={starIndex} 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.2 + 0.5 + starIndex * 0.1
                    }}
                    src={assets.star_icon} 
                    alt="" 
                  />
                )
              )}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 + 0.6
              }}
              className="text-gray-600"
            >
              {testimonial.text}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;