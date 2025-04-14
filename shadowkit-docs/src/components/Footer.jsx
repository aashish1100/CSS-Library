import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--color-foreground)] py-10 mt-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="text-[var(--color-primary)] font-heading text-2xl">
            ShadowKit
          </span>
          <p className="text-sm text-[var(--color-foreground)]">
            © 2025 ShadowKit. All rights reserved.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-6">
          <Link
            href="#privacy"
            className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="text-sm text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
