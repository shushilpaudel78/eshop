'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
// import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    getCartCount(); // Initial load

    const handleUpdate = () => getCartCount();
    window.addEventListener("cartUpdated", handleUpdate);

    return () => window.removeEventListener("cartUpdated", handleUpdate);
  }, []);

  return (
    <nav className="bg-gradient-to-r fixed w-full z-90 from-purple-700 via-pink-500 to-red-500 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex-wrap  flex items-center justify-between">

        <div className="text-white font-bold text-xl tracking-wide  text-nowrap">
          <Link href="#"
            className="text-[30px] font-cursive font-bol">Sp Electronic</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">

          <Link href="/" className="hover:text-yellow-300 transition flex items-center gap-2 flex-nowrap">
            {pathname == '/' && (
              <div className=""><FaArrowRight /></div>
            )}
            Home
          </Link>

          <Link href="/shop" className="hover:text-yellow-300 transition flex flex-nowrap gap-1 items-center">
            {pathname == '/shop' && (
              <div className=""><FaArrowRight /></div>
            )}
            Shop
          </Link>


          <Link href="/about" className="hover:text-yellow-300 transition flex items-center gap-1 flex-nowrap">
            {pathname == '/about' && (
              <div className=""><FaArrowRight /></div>
            )}
            About
          </Link>


          <Link href="/contact" className="hover:text-yellow-300 flex gap-1 items-center flex-nowrap transition">
            {pathname == '/contact' && (
              <div className=""><FaArrowRight /></div>
            )}
            Contact
          </Link>
        </div>

        <div className="text-white pr-10 md:pr-0 flex flex-wrap items-center  lg:flex-nowrap gap-4">

          {cartCount > 0 && (
            <div className="relative flex  items-center justify-center w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full transition cursor-pointer">
              <span className="absolute -top-2 -right-3 bg-white text-pink-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>

              <Link href='/checkout'
              className=""
              >
                <FaCartArrowDown className="text-2xl  md:mr-0 cursor-pointer" />
              </Link>
            </div>
          )}

          <input
            className="bg-white py-2 px-2 hidden md:block rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
            type="text " />
          <button
            className="bg-purple-600 hidden md:block hover:bg-purple-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md transition">
            Search
          </button>
          <Link href="/login" className="cursor-pointer text-white text-2xl">
            <FaRegUser />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-4 top-3">
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
        <div className="md:hidden mt-2 px-4 space-y-2 flex flex-col w-full items-center">
          <Link href="/" className="block py-2 text-white hover:bg-pink-600 rounded">Home</Link>
          <Link href="/about" className="block py-2 text-white hover:bg-pink-600 rounded">About</Link>
          <Link href="/blog" className="block py-2 text-white hover:bg-pink-600 rounded">Services</Link>
          <Link href="/contact" className="block py-2 text-white hover:bg-pink-600 rounded">Contact</Link>
        </div>
      )}
    </nav>
  );
}
