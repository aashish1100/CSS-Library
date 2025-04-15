"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
      <div className="text-center max-w-screen-xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-[var(--color-primary)]"
        >
          ShadowKit Docs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto"
        >
          Build modern, premium user interfaces effortlessly. Dive into installation, components, and advanced customization with ShadowKit.
        </motion.p>
      </div>

      <div className="max-w-screen-xl mx-auto space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Getting Started</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            Start your journey with ShadowKit by exploring installation, usage, and customization options.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { href: "/docs/installation", label: "Installation" },
              { href: "/docs/usage", label: "Usage" },
              { href: "/docs/customization", label: "Customization" },
              { href: "/docs/components", label: "Components" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="bg-[var(--background)] border border-[var(--muted)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 rounded-xl px-6 py-4 text-lg font-medium shadow-md"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">About ShadowKit</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            ShadowKit is a modern utility-first UI library designed for simplicity and scalability. Whether you're working on a side project or a full-scale app, ShadowKit brings consistent and customizable design at your fingertips.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--card)] border border-[var(--muted)] p-8 rounded-2xl shadow-lg space-y-4"
        >
          <h2 className="text-3xl font-semibold text-[var(--color-primary)]">More Resources</h2>
          <p className="text-[var(--muted-foreground)] text-lg">
            For full documentation, examples, and contribution guidelines, visit the official repository.
          </p>
          <Link
            href="https://github.com/your-repo/shadowkit"
            target="_blank"
            className="inline-block mt-2 text-lg text-[var(--color-primary)] underline hover:text-white hover:bg-[var(--color-primary)] transition-all duration-300 px-4 py-2 rounded-lg"
          >
            View on GitHub →
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
