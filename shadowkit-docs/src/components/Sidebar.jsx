import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-[var(--background)] rounded-lg shadow-xl p-6 border border-[var(--color-foreground)]">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--color-primary)] tracking-wide">Table of Contents</h2>
        <nav className="space-y-4">
          <Link
            href="#installation"
            className="block text-lg text-[var(--foreground)] hover:text-white hover:bg-[var(--color-primary)] p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Installation
          </Link>
          <Link
            href="#usage"
            className="block text-lg text-[var(--foreground)] hover:text-white hover:bg-[var(--color-primary)] p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Usage
          </Link>
          <Link
            href="#components"
            className="block text-lg text-[var(--foreground)] hover:text-white hover:bg-[var(--color-primary)] p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Components
          </Link>
        </nav>
      </div>
    </div>
  );
}
