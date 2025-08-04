'use client';
import { useState } from "react";
import Link from "next/link";
// import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex-wrap  flex items-center justify-between">

        <div className="text-white font-bold text-xl tracking-wide  text-nowrap">
          <Link href="#">Sp Tech</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <Link href="#" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="#" className="hover:text-yellow-300 transition">Contact</Link>
          <Link href="#" className="hover:text-yellow-300 transition">Blog</Link>
          <Link href="#" className="hover:text-yellow-300 transition">Details</Link>
        </div>

        <div className="text-white flex gap-2">
          <input
            className="bg-white py-2 px-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            type="text " />
          <button
            className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md transition">
            Search
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2">
          <Link href="#"><a className="block py-2 text-white hover:bg-pink-600 rounded">Home</a></Link>
          <Link href="#"><a className="block py-2 text-white hover:bg-pink-600 rounded">About</a></Link>
          <Link href="#"><a className="block py-2 text-white hover:bg-pink-600 rounded">Services</a></Link>
          <Link href="#"><a className="block py-2 text-white hover:bg-pink-600 rounded">Contact</a></Link>
        </div>
      )}
    </nav>
  );
}
