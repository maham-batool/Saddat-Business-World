'use client';

import React from 'react';
import { Home, Ruler, Hammer, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    { name: 'ARCHITECTS', icon: <Ruler size={40} />, link: '/construction' },
    { name: 'INTERIOR DESIGN', icon: <Home size={40} />, link: '/construction' },
    { name: 'PLANNERS', icon: <Map size={40} />, link: '/construction' },
    { name: 'CONSTRUCTION', icon: <Hammer size={40} />, link: '/construction' },
  ];

  return (
    <section
      id="services"
      className="min-h-[110vh] bg-[#1A3C36] text-[#7ED6C1] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold tracking-widest mb-2 text-center"
      >
        OUR SERVICES
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-20 sm:w-24 h-[2px] bg-[#7ED6C1] mb-10 origin-left"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl w-full">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F5F5F5] text-[#1A3C36] w-full h-[180px] sm:h-[220px] flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all duration-300 [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]"
            >
              <div className="mb-3 sm:mb-4">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <p className="text-sm sm:text-base tracking-wide text-center font-light">
                {service.name}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
