"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Success() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300">
      {/* Confetti Effect */}
      <Confetti width={dimensions.width} height={dimensions.height} recycle={false} numberOfPieces={400} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-12 text-center max-w-lg border border-green-200"
      >
        {/* Icon */}
        <motion.div
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <CheckCircle2 className="w-20 h-20 text-green-600" />
        </motion.div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-extrabold text-green-700">
          Payment Successful!
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Thank you for your payment.  
          Your transaction has been completed successfully 🎉
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/shop"
            className="px-6 py-3 rounded-xl border border-green-500 text-green-700 font-semibold hover:bg-green-50 transition"
          >
            View Orders
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
