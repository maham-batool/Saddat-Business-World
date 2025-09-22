'use client';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-screen min-h-screen bg-[#122925] text-gray-300 px-6 py-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-30 gap-8 flex-1">
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFORMATION</h3>
          <p className="mb-2">
            Salman Mehmood <br />
            +92-0315-4153665
          </p>

          <p className="mb-2">
            Nouman Khalid <br />
            +92-0300-0099666
          </p>

          <p>hiarc.d@gmail.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL INFORMATION</h3>
          <ul className="space-y-2 text-[#7ED6C1]">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-white text-[#1A3C36] rounded hover:bg-[#7ED6C1] hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-[#1A3C36] rounded hover:bg-[#7ED6C1] hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-[#1A3C36] rounded hover:bg-[#7ED6C1] hover:text-white transition"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">SUBSCRIBE</h3>
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full mb-3 px-4 py-2 bg-white text-[#1A3C36] rounded focus:outline-none"
          />
          <button className="w-full bg-[#7ED6C1] text-[#1A3C36] font-semibold py-2 rounded hover:bg-white hover:text-[#1A3C36] transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-12">
        Copyrights © HIARC – All Rights Reserved – Developed by Evibes
        Development
      </p>
    </footer>
  );
}
