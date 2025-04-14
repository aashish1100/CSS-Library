"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DocsPage() {
  return (
    <section className="relative bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative py-24 px-6 text-center max-w-screen-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight text-[var(--color-primary)]"
        >
          Documentation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-[var(--color-muted)] mb-12 max-w-2xl mx-auto"
        >
          Explore the complete guide to building premium user interfaces using ShadowKit.
        </motion.p>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-[var(--background)] rounded-lg shadow-lg p-6 border border-[var(--color-muted)]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Table of Contents</h2>
              <nav className="space-y-3">
                <Link
                  href="#installation"
                  className="text-lg text-[var(--foreground)] hover:text-[var(--color-primary)]"
                >
                  Installation
                </Link>
                <Link
                  href="#usage"
                  className="text-lg text-[var(--foreground)] hover:text-[var(--color-primary)]"
                >
                  Usage
                </Link>
                <Link
                  href="#components"
                  className="text-lg text-[var(--foreground)] hover:text-[var(--color-primary)]"
                >
                  Components
                </Link>
              </nav>
            </motion.div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            <section id="installation">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-3xl font-semibold mb-6 text-[var(--color-primary)]"
              >
                Installation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-lg text-[var(--color-muted)] mb-6"
              >
                To get started with ShadowKit, install it via npm:
              </motion.p>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-muted)]"
              >
                <code>npm install shadowkit</code>
              </motion.pre>
            </section>

            <section id="usage">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-3xl font-semibold mb-6 text-[var(--color-primary)]"
              >
                Usage
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-lg text-[var(--color-muted)] mb-6"
              >
                Once installed, you can import ShadowKit into your project like this:
              </motion.p>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-muted)]"
              >
                <code>import Button from 'shadowkit';</code>
              </motion.pre>
            </section>

            <section id="components">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-3xl font-semibold mb-6 text-[var(--color-primary)]"
              >
                Components
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-lg text-[var(--color-muted)] mb-6"
              >
                ShadowKit provides various pre-built UI components like buttons, forms, and more. Here's an example of how to use a component:
              </motion.p>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-muted)]"
              >
                <code>
                  &lt;Button color="primary"&gt;Click Me&lt;/Button&gt;
                </code>
              </motion.pre>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
