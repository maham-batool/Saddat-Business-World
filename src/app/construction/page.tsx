'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './placeholderStyles.css';

export default function Construction() {
  const [formData, setFormData] = useState({
    name: '',
    _replyto: '',
    projectType: '',
    area: '',
    location: '',
    additionalInfo: '',
    attachmentUrl: '',
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && files.length > 0 && name === 'attachment') {
      uploadFile(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'YOUR_UPLOAD_PRESET');

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const fileData = await res.json();
      setFormData((prev) => ({ ...prev, attachmentUrl: fileData.secure_url }));
    } catch (err) {
      console.error('File upload failed:', err);
      alert('File upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
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
    <div className="w-full min-h-screen bg-[#1A3C36] flex flex-col items-center justify-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-3xl font-bold text-[#7ED6C1] tracking-widest mb-2 text-center"
      >
        GET INVOLVE WITH US FOR CONSTRUCTION!
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
      />

      <motion.form
        action="https://formsubmit.co/zmaheen05@gmail.com"
        method="POST"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        encType="multipart/form-data"
        className="w-full max-w-[1100px] mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <input type="hidden" name="_next" value={formData._replyto} />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Your application has been received. Our team will contact you soon."
        />
        <input
          type="hidden"
          name="attachmentUrl"
          value={formData.attachmentUrl}
        />

        <motion.input
          custom={0}
          variants={inputAnimation}
          type="text"
          name="name"
          placeholder="NAME"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
        />

        <motion.input
          custom={1}
          variants={inputAnimation}
          type="text"
          name="area"
          placeholder="AREA/SFT"
          required
          value={formData.area}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
        />

        <motion.input
          custom={2}
          variants={inputAnimation}
          type="email"
          name="_replyto"
          placeholder="EMAIL"
          required
          value={formData._replyto}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
        />
  
        <motion.input
          custom={3}
          variants={inputAnimation}
          type="text"
          name="location"
          placeholder="LOCATION"
          required
          value={formData.location}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
        />

        <motion.input
          custom={4}
          variants={inputAnimation}
          type="text"
          name="projectType"
          placeholder="PROJECT TYPE"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 transition-all duration-300 focus:border-white"
        />

        <motion.input
          custom={5}
          variants={inputAnimation}
          type="file"
          name="attachment"
          accept=".jpg,.png,.pdf,.doc,.docx"
          onChange={handleChange}
          disabled={uploading}
          className="w-full text-[#7ED6C1] file:mr-4 file:py-2 file:px-4 file:rounded file:border-2 file:border-[#7ED6C1] file:bg-transparent file:text-sm file:font-semibold file:text-[#7ED6C1] hover:file:bg-[#7ED6C1] hover:file:text-[#1A3C36] cursor-pointer"
        />
        {uploading && (
          <p className="text-[#7ED6C1] text-sm">Uploading file...</p>
        )}

        <motion.textarea
          custom={6}
          variants={inputAnimation}
          name="additionalInfo"
          placeholder="ADDITIONAL INFO"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#7ED6C1] text-[#7ED6C1] placeholder-[#7ED6C1] placeholder-uppercase focus:outline-none py-1 resize-none transition-all duration-300 focus:border-white"
        />

        <motion.button
          custom={7}
          variants={inputAnimation}
          type="submit"
          disabled={uploading}
          className="bg-[#7ED6C1] text-[#1A3C36] font-bold py-3 px-6 rounded hover:bg-[#6bb7a4] transition-all duration-300"
        >
          {uploading ? 'Please wait...' : 'Submit'}
        </motion.button>
      </motion.form>
    </div>
  );
}
