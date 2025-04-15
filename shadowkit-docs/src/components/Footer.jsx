import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--color-foreground)] py-14 mt-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <span className="text-[var(--color-primary)] font-heading text-3xl font-bold">
            ShadowKit
          </span>
          <p className="text-sm text-[var(--color-foreground)] opacity-70">
            © 2025 ShadowKit. All rights reserved.
          </p>
        </div>

        <div className="flex gap-10 text-sm">
          <Link
            href="#privacy"
            className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
          >
            Privacy Policy
          </Link>
          <Link
            href="#terms"
            className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-300 font-medium"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
