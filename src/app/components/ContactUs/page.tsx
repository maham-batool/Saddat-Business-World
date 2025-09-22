'use client';

import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    const formAction = 'https://formsubmit.co/hiarc.d@gmail.com';

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = formAction;

    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    const autoResponseInput = document.createElement('input');
    autoResponseInput.type = 'hidden';
    autoResponseInput.name = '_autoresponse';
    autoResponseInput.value =
      'Thank you for contacting us! Our team will get back to you shortly.';
    form.appendChild(autoResponseInput);

    const redirectInput = document.createElement('input');
    redirectInput.type = 'hidden';
    redirectInput.name = '_next';
    redirectInput.value = 'https://yourdomain.com/thank-you';
    form.appendChild(redirectInput);

    const subjectInput = document.createElement('input');
    subjectInput.type = 'hidden';
    subjectInput.name = '_subject';
    subjectInput.value = 'New Contact Form Submission';
    form.appendChild(subjectInput);

    document.body.appendChild(form);
    form.submit();

    alert('Thank you for contacting us! We will reach out soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setCaptchaValue(null);
  };

  return (
    <section
      id="contactus"
      className="bg-[#1A3C36] min-h-screen py-20 px-4 md:px-20 text-[#7ED6C1] flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-2 text-center"
      >
        GET IN TOUCH!
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
      />

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-12 w-full max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="TELL US ABOUT YOUR PROJECT"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-white text-black placeholder:text-gray-600 focus:outline-none"
            required
          ></textarea>

          <div className="flex justify-center mt-4">
            <ReCAPTCHA
              sitekey="6LfAT5srAAAAAOtoAqxGCgHAqAwuL_KkSbhKbk50"
              size={
                typeof window !== 'undefined' && window.innerWidth < 768
                  ? 'compact'
                  : 'normal'
              }
              onChange={setCaptchaValue}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-[#7ED6C1] text-[#1A3C36] font-semibold px-6 py-3 rounded hover:bg-white transition-all w-full"
          >
            MAKE AN APPOINTMENT
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6">ADDRESS</h2>
          <div className="w-full h-[295px]">
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.786168113401!2d74.3496938!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd7bcb0b65%3A0x70f4a4d08c9e2603!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1623925317922!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </motion.div>
      </form>
    </section>
  );
}
