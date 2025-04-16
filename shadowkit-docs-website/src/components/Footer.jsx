import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--background)] text-[var(--foreground)] border-t border-white/10 py-16 mt-28 overflow-hidden">
      
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
        
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
          <span className="text-[var(--color-primary)] font-heading text-3xl font-bold tracking-tight">
            ShadowKit
          </span>
          <p className="text-sm text-[var(--foreground)]/70">
            © 2025 ShadowKit. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <Link
            href="#privacy"
            className="hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
