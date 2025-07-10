"use client";
import React, { useState } from 'react';
import { FaMapMarkedAlt, FaCalendarAlt, FaUserFriends } from 'react-icons/fa';

function Home() {
  // States for form fields
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guest, setGuest] = useState(1);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle search logic here
    alert(`Location: ${location}\nStart: ${startDate}\nEnd: ${endDate}\nGuest: ${guest}`);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div  className="relative z-10 flex flex-col items-center justify-center h-full px-2">
        <h1 data-aos="fade-up" className="text-white text-4xl md:text-5xl font-extrabold tracking-widest text-center mb-2 uppercase">
          LETS ENJOY THE NATURE
        </h1>
        <p data-aos="fade-up" className="text-white text-lg md:text-xl text-center mb-8">
          Get the best prices on 2,000,000+ properties, worldwide
        </p>
        {/* Search Box */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-5xl bg-white bg-opacity-95 rounded-xl shadow-lg flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 px-4 md:px-8 py-6 relative"
        >
          {/* Location */}
          <div className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 py-3 md:py-0">
            <FaMapMarkedAlt className="text-blue-600 text-2xl" />
            <div>
              <label className="block text-gray-700 font-semibold">Location</label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent outline-none text-gray-600 w-full"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Start Date */}
          <div className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 py-3 md:py-0">
            <FaCalendarAlt className="text-blue-600 text-2xl" />
            <div>
              <label className="block text-gray-700 font-semibold">Start Date</label>
              <input
                type="date"
                className="bg-transparent outline-none text-gray-600 w-full"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* End Date */}
          <div className="flex-1 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-200 py-3 md:py-0">
            <FaCalendarAlt className="text-blue-600 text-2xl" />
            <div>
              <label className="block text-gray-700 font-semibold">End Date</label>
              <input
                type="date"
                className="bg-transparent outline-none text-gray-600 w-full"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Guest */}
          <div className="flex-1 flex items-center gap-3 py-3 md:py-0">
            <FaUserFriends className="text-blue-600 text-2xl" />
            <div>
              <label className="block text-gray-700 font-semibold">Guest</label>
              <select
                className="bg-transparent outline-none text-gray-600 w-full"
                value={guest}
                onChange={e => setGuest(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''} 1 Room</option>
                ))}
              </select>
            </div>
          </div>
          {/* Search Button */}
          <div className="w-full absolute left-0 -bottom-12 flex justify-center">
            <button
              type="submit"
              className="bg-[#e11d48] hover:bg-[#be123c] text-white font-bold rounded-2xl px-12 py-4 shadow-lg text-lg tracking-wide transition-all duration-200  hover:scale-105"
              style={{ boxShadow: '0 8px 24px 0 rgba(225,29,72,0.15)' }}
            >
              Search
            </button>
          </div>
        </form>
                

      </div>
    </div>
  );
}

export default Home;