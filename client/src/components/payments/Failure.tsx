"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function Failure() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-rose-200 to-red-300">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-12 text-center max-w-lg border border-red-200"
      >
        {/* Icon */}
        <motion.div
          initial={{ rotate: 90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center"
        >
          <XCircle className="w-20 h-20 text-red-600" />
        </motion.div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-extrabold text-red-700">
          Payment Failed!
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Oops! Something went wrong with your transaction.  
          Please try again or use a different payment method.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/checkout"
            className="px-6 py-3 rounded-xl border border-red-500 text-red-700 font-semibold hover:bg-red-50 transition"
          >
            Retry Payment
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
