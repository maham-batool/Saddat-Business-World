'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  tag: string;
  image: string;
  index: number;
};

export default function PortfolioCard({ tag, image, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
    >
      <Image
        src={image}
        alt={tag}
        width={400}
        height={500}
        className="w-full h-64 object-cover"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <span className="text-xs uppercase font-semibold text-[#1A3C36] bg-white px-3 py-1 rounded mb-1 inline-block">
          {tag}
        </span>
      </div>
    </motion.div>
  );
}
