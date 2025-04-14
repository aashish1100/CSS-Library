"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#docs", label: "Docs" },
    { href: "#contact", label: "Contact" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
  ];

  return (
    <>
      {/* Sidebar Background Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-[var(--background)] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-start py-10 px-6 space-y-6">
          {/* Logo / Title */}
          <Link
            href="#"
            className="text-[var(--color-primary)] font-heading text-3xl font-semibold mb-6"
            onClick={() => setIsOpen(false)}
          >
            ShadowKit
          </Link>

          {/* Nav Items */}
          <nav className="flex flex-col space-y-4 w-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--color-primary)] text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Dummy Data */}
          <div className="mt-6 border-t border-[var(--color-muted)] pt-6 w-full">
            <h3 className="text-[var(--foreground)] text-xl font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:text-[var(--color-primary)] text-sm transition-colors">
                  Getting Started Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:text-[var(--color-primary)] text-sm transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[var(--foreground)] hover:text-[var(--color-primary)] text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 p-3 rounded-md text-[var(--color-muted)] sm:hidden bg-[var(--background)] shadow-md hover:bg-[var(--color-muted)] transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
}
