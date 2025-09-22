'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/slide9.jpg',
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
  '/slide4.jpg',
  '/slide5.jpg',
  '/slide6.jpg',
  '/slide7.jpg',
  '/slide8.jpg',
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section
      id="home"
      className="relative w-full  overflow-hidden bg-[#1A3C36] h-[50vh] sm:h-[80vh] md:h-screen"
    >
      <div className="absolute inset-0 transition-opacity duration-1000">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#7ED6C1] scale-125'
                : 'bg-[#7ED6C1]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
