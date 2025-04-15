"use client";

import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="text-center max-w-screen-xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-[var(--color-primary)]"
        >
          Documentation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-lg md:text-xl text-[var(--color-foreground)] mb-12 max-w-3xl mx-auto"
        >
          Explore the complete guide to building premium user interfaces using ShadowKit. Learn how to set up, use, and customize components in your projects.
        </motion.p>
      </div>

      <div className="max-w-screen-xl mx-auto space-y-12">
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
            className="text-lg text-[var(--color-foreground)] mb-6"
          >
            To get started with ShadowKit, install it via npm by running the following command in your project directory:
          </motion.p>
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-foreground)]"
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
            className="text-lg text-[var(--color-foreground)] mb-6"
          >
            Once installed, you can import ShadowKit into your project and start using its components:
          </motion.p>
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-foreground)]"
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
            className="text-lg text-[var(--color-foreground)] mb-6"
          >
            ShadowKit provides various pre-built UI components like buttons, forms, and more. Here’s an example of how to use a button component:
          </motion.p>
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-foreground)]"
          >
            <code>&lt;Button color="primary"&gt;Click Me&lt;/Button&gt;</code>
          </motion.pre>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-lg text-[var(--color-foreground)] mt-4"
          >
            You can customize components by passing props like `color`, `size`, and more to match your design needs.
          </motion.p>
        </section>

        <section id="customization">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-semibold mb-6 text-[var(--color-primary)]"
          >
            Customization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-lg text-[var(--color-foreground)] mb-6"
          >
            ShadowKit is highly customizable. You can easily override the default theme, modify components, and more. Use the following to change global settings:
          </motion.p>
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="bg-[var(--background)] p-6 rounded-lg shadow-md text-sm font-mono text-[var(--foreground)] border border-[var(--color-foreground)]"
          >
            <code>
              {`const theme = {
          primary: "#FF5733",
          secondary: "#4CAF50",
        };`}
            </code>
          </motion.pre>
        </section>

      </div>
    </div>
  );
}
