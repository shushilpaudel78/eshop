import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            style={{ clipPath: 'polygon(38% 0, 63% 18%, 100% 0, 100% 100%, 0 100%, 0 1%, 28% 20%)' }}
            className="bg-gradient-to-r pt-40 lg:pt-20  from-purple-700 via-pink-500 to-red-400 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10">

                {/* Brand Info */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-4 text-uppercase">SP SHOP</h2>
                    <p className="text-sm">
                        Your one-stop destination for sustainable and eco-friendly products.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white">Home </Link></li>
                        <li><Link href="/shop" className="hover:text-white">Shop </Link></li>
                        <li><Link href="/about" className="hover:text-white">About Us </Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact </Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm mb-2">Get updates on new products and discounts.</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full p-2 rounded-l-md text-black border-none outline-none bg-white focus:ring-2 focus:ring-purple-300"
                        />
                        <button className="bg-green-600 px-4 cursor-pointer text-white rounded-r-md hover:bg-green-700">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media */}

            </div>

            <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="flex  gap-2 space-x-4 text-white text-lg">
                    <Link href="#"><FaFacebookF className="hover:text-blue-500" /></Link>
                    <Link href="#"><FaTwitter className="hover:text-sky-400" /></Link>
                    <Link href="#"><FaInstagram className="hover:text-blue-400" /></Link>
                    <Link href="#"><FaLinkedinIn className="hover:text-blue-400" /></Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white text-center text-sm py-4">
                © {new Date().getFullYear()} EcoShop. All rights reserved.
            </div>
        </footer>
    );
}
