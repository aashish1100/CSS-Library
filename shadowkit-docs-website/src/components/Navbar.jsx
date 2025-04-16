"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/docs/introduction", label: "Docs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--background)/80] backdrop-blur-xl shadow-lg z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="text-[var(--color-primary)] font-heading text-3xl font-bold tracking-tight hover:opacity-90 transition-opacity duration-300"
        >
          ShadowKit
        </Link>

        <div className="hidden sm:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden bg-[var(--background)] backdrop-blur-xl shadow-xl px-6 py-6 space-y-6 rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
