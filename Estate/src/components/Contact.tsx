import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7e4661b0-90c7-489e-b9f9-89157cbc5d7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-5 sm:px-10 md:px-20 lg:px-32 py-10"
      id="contact"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col mb-10 items-center"
      >
        <p className="text-3xl font-bold">
          Contact{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            With Us
          </span>
        </p>
        <p className="text-gray-500 w-[290px] text-center mt-3">
          Ready to make a move? Let's build your future together
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col w-full sm:w-auto"
          >
            <label className="text-md text-gray-800" htmlFor="name">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="border-gray-300 border-2 py-2 px-2 w-full sm:w-sm"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col w-full sm:w-auto"
          >
            <label className="text-md text-gray-800" htmlFor="email">
              Your Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="border-gray-300 border-2 py-2 px-2 w-full sm:w-sm"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-6"
        >
          <div className="flex flex-col w-full md:w-[800px]">
            <label className="text-md text-gray-800" htmlFor="message">
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              className="w-full h-[200px] border-2 border-gray-300"
              name="message"
              required
            ></motion.textarea>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-5"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-20 py-1.5 rounded-full"
          >
            {result ? result : "send message"}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;