"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Download,
  Info,
  Palette,
  Square,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const sections = [
    { key: "introduction", icon: <BookOpen className="w-5 h-5" /> },
    { key: "download", icon: <Download className="w-5 h-5" /> },
    { key: "overview", icon: <Info className="w-5 h-5" /> },
    { key: "color", icon: <Palette className="w-5 h-5" /> },
    { key: "button", icon: <Square className="w-5 h-5" /> },
  ];

  const formatTitle = (key) =>
    key
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <aside className="bg-[var(--background)] p-6 rounded-2xl shadow-xl border border-[var(--color-foreground)] space-y-6">
      <div className="pb-4 border-b border-[var(--muted)]">
        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-primary)] tracking-tight">
          Table of Contents
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Navigate through the ShadowKit docs.
        </p>
      </div>

      <nav className="space-y-3">
        {sections.map(({ key, icon }) => {
          const isActive = pathname === `/docs/${key}`;
          return (
            <Link
              key={key}
              href={`/docs/${key}`}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium capitalize text-base
                ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                    : "text-[var(--foreground)] hover:bg-[var(--color-primary)] hover:text-white hover:scale-105"
                }`}
            >
              {icon}
              {formatTitle(key)}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
