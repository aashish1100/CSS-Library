"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative bg-[var(--color-primary)] text-white py-24 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] via-[#00000033] to-[var(--color-secondary)] opacity-20 blur-2xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/80 mb-10"
        >
          Have questions or need support? We’d love to hear from you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-6 text-left"
        >
          <div className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-4 bg-white text-black rounded-xl shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition duration-300 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-4 mt-4 bg-[var(--color-secondary)] text-white rounded-xl font-semibold shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
