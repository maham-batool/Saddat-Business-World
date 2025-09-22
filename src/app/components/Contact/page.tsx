'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormField = 'name' | 'email' | 'phone';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <div className="w-full min-h-screen bg-[#1A3C36] mt-10 flex flex-col items-center justify-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-3xl font-bold text-[#7ED6C1] tracking-widest mb-2 text-center"
      >
        MAKE AN APPOINTMENT
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
      />

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-[1100px] mx-auto px-4 py-20 space-y-14"
      >
        {(['name', 'email', 'phone'] as FormField[]).map((field, i) => (
          <motion.input
            key={field}
            custom={i}
            variants={inputAnimation}
            type={
              field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'
            }
            name={field}
            placeholder={field.toUpperCase()}
            value={formData[field]}
            onChange={handleChange}
            className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
          />
        ))}

        <motion.textarea
          custom={3}
          variants={inputAnimation}
          name="message"
          placeholder="TELL US ABOUT YOUR PROJECT"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b-1 border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] uppercase focus:outline-none py-1 resize-none transition-all duration-300 focus:border-white"
        />
      </motion.form>
    </div>
  );
}
