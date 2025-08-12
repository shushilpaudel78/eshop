'use client';
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactForm() {
   

  return (
    <div className="min-h-screen  pt-30 pb-20 px-4 md:px-16  bg-purple-200 mb-10">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8  overflow-hidden">
        
        {/* Google Map */}
        <div className="h-[400px] md:h-auto  bg-white shadow-lg rounded-2xl overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0354664327274!2d85.32395921506015!3d27.7172459827897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190b7d9d53f1%3A0x9d8e9b66e2e4cbb5!2sKathmandu!5e0!3m2!1sen!2snp!4v1689599999999!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Contact Form & Info */}
        <div className="p-6 flex flex-col justify-center  bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="mt-8 space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" /> Kathmandu, Nepal
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" /> +977-9812345678
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" /> info@example.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 text-gray-600">
            <Link href="#" className="hover:text-blue-600"><FaFacebook size={20} /></Link>
            <Link href="#" className="hover:text-blue-400"><FaTwitter size={20} /></Link>
            <Link href="#" className="hover:text-blue-700"><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
