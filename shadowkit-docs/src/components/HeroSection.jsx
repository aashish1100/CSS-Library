"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-[var(--background)] text-[var(--foreground)] overflow-hidden px-6 py-24">
      
      {/* Background blobs */}
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

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight"
        >
          Welcome to <span className="text-[var(--color-primary)]">ShadowKit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Build beautiful and premium user interfaces with speed and elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] focus:ring-opacity-50">
            Get Started
          </button>
          <button className="bg-[var(--color-secondary)] text-white px-8 py-3 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] focus:ring-opacity-50">
            Documentation
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        className="relative z-10 mt-14"
      >
        <Image
          src="/hero-image.webp"
          alt="Illustration showcasing ShadowKit UI components"
          width={640}
          height={420}
          className="rounded-xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}
