'use client';

import { portfolioData } from './data';
import PortfolioGrid from './PortfolioGrid';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <main className="bg-[#1A3C36] min-h-screen flex flex-col items-center justify-center py-8">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-3xl font-bold text-[#7ED6C1] tracking-widest mb-2 text-center"
      >
        PORTFOLIO
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-[2px] bg-[#7ED6C1] mb-12 origin-left"
      />

      {portfolioData.map((section, idx) => (
        <PortfolioGrid
          key={idx}
          category={section.category}
          projects={section.projects}
        />
      ))}
    </main>
  );
}
