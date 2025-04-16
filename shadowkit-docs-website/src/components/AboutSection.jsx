"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-[var(--color-muted)] text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[var(--color-muted)] to-[var(--color-secondary)] opacity-20 blur-2xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-extrabold text-[var(--color-primary)] mb-8 tracking-tight"
        >
          About ShadowKit
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-[var(--foreground)] max-w-3xl mx-auto leading-relaxed"
        >
          ShadowKit is your gateway to building sleek, responsive, and customizable user interfaces — faster. With utility-first
          classes and thoughtfully designed components, you can streamline your workflow while delivering premium results.
        </motion.p>
      </div>
    </section>
  );
}
