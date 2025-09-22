'use client';

import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';

type Props = {
  category: string;
  projects: {
    tag: string;
    image: string;
  }[];
};

export default function PortfolioGrid({ category, projects }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="my-12 w-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-center text-[#35a48a] mb-8"
      >
        {category}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
        {visibleProjects.map((project, idx) => (
          <PortfolioCard key={idx} {...project} index={idx} />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#7ED6C1] text-[#1A3C36] font-semibold shadow-md hover:bg-white hover:text-[#1A3C36] transition duration-300"
          >
            {showAll ? 'View Less' : 'View All'}
          </motion.button>
        </div>
      )}
    </section>
  );
}
