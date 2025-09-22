'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioIntroPage() {
  const items = [
    {
      title: 'ARCHITECTURE',
      href: '/PortfolioPage',
      image: '/slide1.jpg',
    },
    {
      title: 'INTERIOR DESIGN',
      href: '/PortfolioPage',
      image: '/slide2.jpg',
    },
    {
      title: 'CONSTRUCTION',
      href: '/PortfolioPage',
      image: '/slide5.jpg',
    },
       {
      title: 'HEALTHCARE',
      href: '/PortfolioPage',
      image: '/slide4.jpg',
    },
  ];

  return (
    <section className="min-h-screen bg-[#1A3C36] flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-wide">
        OUR PORTFOLIO
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-6xl w-full">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#7ED6C1]"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#7ED6C1] tracking-wide text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
