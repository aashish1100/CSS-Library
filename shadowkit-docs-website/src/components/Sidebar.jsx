"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Info,
  Download,
  Layout,
  MousePointerClick,
  Table,
  Layers,
  ChevronDownSquare,
  LayoutPanelTop,
  Search,
  SlidersHorizontal,
  Palette,
  Type,
  Move,
  Image,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const sections = [
    {
      title: "Introduction & Download",
      items: [
        { key: "introduction", icon: <BookOpen className="w-5 h-5" /> },
        { key: "overview", icon: <Info className="w-5 h-5" /> },
        { key: "download", icon: <Download className="w-5 h-5" /> },
      ],
    },
    {
      title: "Utility Classes",
      items: [
        { key: "color", icon: <Palette className="w-5 h-5" /> },
        { key: "text", icon: <Type className="w-5 h-5" /> },
        { key: "size", icon: <Move className="w-5 h-5" /> },
        { key: "bg", icon: <Image className="w-5 h-5" /> },
      ],
    },
    {
      title: "Reusable Components",
      items: [
        { key: "navbar", icon: <Layout className="w-5 h-5" /> },
        { key: "button", icon: <MousePointerClick className="w-5 h-5" /> },
        { key: "table", icon: <Table className="w-5 h-5" /> },
        { key: "card", icon: <Layers className="w-5 h-5" /> },
        { key: "dropdown", icon: <ChevronDownSquare className="w-5 h-5" /> },
        { key: "footer", icon: <LayoutPanelTop className="w-5 h-5" /> },
        { key: "searchbar", icon: <Search className="w-5 h-5" /> },
        { key: "slider", icon: <SlidersHorizontal className="w-5 h-5" /> },
      ],
    },
  ];

  const formatTitle = (key) =>
    key
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <aside className="bg-[var(--background)] p-6 rounded-3xl shadow-lg border-l-8 border-[var(--color-primary)] space-y-6">
      <div className="pb-4 border-b border-[var(--muted)]">
        <h2 className="text-2xl lg:text-3xl font-semibold text-[var(--color-primary)] tracking-tight">
          Table of Contents
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-1">
          Navigate through the ShadowKit docs.
        </p>
      </div>

      <nav className="space-y-6">
        {sections.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
              {title}
            </h3>
            <div className="space-y-3">
              {items.map(({ key, icon }) => {
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
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
