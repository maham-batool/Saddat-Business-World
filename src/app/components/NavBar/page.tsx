'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT US', href: '#contactus' },
  ];

  return (
    <nav className="fixed transparent top-0 left-0 w-full z-50  shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a href="#home" className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        <ul className="hidden md:flex space-x-8 text-[#7ED6C1] font-extrabold tracking-wide">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-white transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#7ED6C1] hover:text-white transition"
        >
          <Menu size={28} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#122925] z-40 flex flex-col items-center pt-16 px-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-[#7ED6C1] hover:text-white transition"
          >
            <X size={28} />
          </button>

          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-12 cursor-pointer"
          />

          <ul className="text-center text-lg font-medium space-y-6 tracking-wide">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-[#7ED6C1] hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
