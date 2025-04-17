"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden px-4 py-20 md:px-6 md:py-24">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-[var(--color-primary)] opacity-20 rounded-full mix-blend-multiply blur-3xl z-0"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[var(--color-secondary)] opacity-20 rounded-full mix-blend-multiply blur-3xl z-0"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-2 sm:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold mb-6 leading-tight tracking-tight"
        >
          Welcome to <span className="text-[var(--color-primary)]">ShadowKit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Build beautiful and premium user interfaces with speed and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/features"
            aria-label="Start exploring ShadowKit"
            className="w-full sm:w-auto bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
          >
            Get Started
          </Link>
          <Link
            href="/docs/introduction"
            aria-label="View documentation"
            className="w-full sm:w-auto bg-[var(--color-secondary)] text-white px-8 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
          >
            Documentation
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        className="relative z-10 mt-14 w-full px-4 sm:px-0"
      >
        <img
          src="/hero-image1.png"
          alt="Illustration showcasing ShadowKit UI components"
          className="rounded-xl shadow-xl w-full max-w-xl h-auto mx-auto"
        />
      </motion.div>
    </section>
  );
}
