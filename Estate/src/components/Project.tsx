import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import right_arrows from "../assets/right_arrow.svg";
import left_arrows from "../assets/left_arrow.svg";
import { projectsData } from "../assets/assets";

const Project: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

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
      id="project"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="font-bold text-2xl">
          Projects{" "}
          <span className="underline text-2xl font-light">Completed</span>
        </p>
        <p className="text-gray-500 w-[290px] text-center mt-3">
          Passionate About Properties, Dedicated To Your Vision
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-end items-center my-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevProject}
          className="p-3 bg-gray-300 rounded mr-2"
          aria-label="previous projects"
        >
          <img src={left_arrows} alt="previous" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextProject}
          className="p-3 bg-gray-300 rounded mr-2"
          aria-label="next projects"
        >
          <img src={right_arrows} alt="next" />
        </motion.button>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: `-${(currentIndex * 100) / cardsToShow}%`
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="relative shrink-0 w-full sm:w-1/4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="absolute left-0 right-0 bottom-5 flex justify-center"
              >
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-gray-800 text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="mx-3">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;