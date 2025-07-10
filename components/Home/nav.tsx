"use client";
import React, { useState } from 'react';
import { FaRegCompass } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';

function Nav() {
  const [sidebar, setSidebar] = useState(false);
 

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 h-16 font-sans z-50 bg-[#172554] shadow-lg transition-colors duration-300"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
            <FaRegCompass className="text-white text-2xl" />
          </div>
          <span className="text-white font-bold text-xl tracking-wide">TRIPI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">Home</a>
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">About</a>
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">Destination</a>
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">Blog</a>
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">Dashboard</a>
          <a href="#" className="text-white font-medium hover:text-amber-200 transition">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-amber-400 text-[#172554] rounded-lg px-6 py-2 font-semibold text-base shadow hover:bg-amber-300 transition">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setSidebar(prev => !prev)}
          aria-label="Open Menu"
        >
          <HiMenu />
        </button>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${sidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebar(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-64 bg-[#172554] z-40 transform transition-transform duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
              <FaRegCompass className="text-white text-xl" />
            </div>
            <span className="text-white font-bold text-lg">TRIPI</span>
          </div>
          <button
            className="text-white text-2xl"
            onClick={() => setSidebar(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-6 px-6">
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">Home</a>
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">About</a>
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">Destination</a>
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">Blog</a>
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">Dashboard</a>
          <a href="#" className="text-white text-lg font-medium py-3 hover:text-amber-200 transition">Contact</a>
          <button className="mt-4 bg-amber-400 text-[#172554] rounded-lg px-4 py-2 font-semibold text-base shadow hover:bg-amber-300 transition">
            Book Now
          </button>
        </nav>
      </aside>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

export default Nav;