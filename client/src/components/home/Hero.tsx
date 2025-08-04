'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-white to-purple-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl  md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover the Best Deals<br />
            on Trendy Products
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Shop the latest fashion, gadgets, and essentials — all in one place with unbeatable discounts.
          </p>
          <Link href="/shop">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/nature.jpg" // Replace with your image in public folder
            alt="Shopping Hero"
            width={500}
            height={700}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
