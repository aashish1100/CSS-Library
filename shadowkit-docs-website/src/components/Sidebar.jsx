"use client";

import { useState, useEffect, useRef } from "react";
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
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef();

  // Lock scroll on mobile when sidebar is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isSidebarVisible ? "hidden" : "auto";
    }
  }, [isSidebarVisible]);

  // Close sidebar if clicked outside (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarVisible]);

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
        { key: "grid", icon: <Type className="w-5 h-5" /> },
        { key: "layout", icon: <Move className="w-5 h-5" /> },
        { key: "size", icon: <Image className="w-5 h-5" /> },
        { key: "spacing", icon: <Type className="w-5 h-5" /> },
        { key: "typography", icon: <Type className="w-5 h-5" /> },
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

  const handleLinkClick = () => setSidebarVisible(false);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setSidebarVisible(!isSidebarVisible)}
        className="fixed bottom-4 left-4 p-3 bg-[var(--color-primary)] text-white rounded-full shadow-lg z-50 lg:hidden"
      >
        {isSidebarVisible ? "Hide" : "Show"} Sidebar
      </button>

      {/* Backdrop for mobile (click to close) */}
      {isSidebarVisible && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-20 left-0 h-[calc(100%-5rem)] w-72 z-40 bg-[var(--background)] p-6 border-r-4 border-[var(--color-primary)] rounded-r-3xl shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto
        ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <div className="pb-4 border-b border-[var(--muted)]">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] tracking-tight">
            Table of Contents
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            Navigate through the ShadowKit docs.
          </p>
        </div>

        <nav className="space-y-6 mt-6">
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
                      onClick={handleLinkClick}
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
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-72 sticky top-20 self-start p-6 bg-[var(--background)] rounded-3xl shadow-lg border-l-8 border-[var(--color-primary)] space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="pb-4 border-b border-[var(--muted)]">
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] tracking-tight">
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
      </div>
    </>
  );
}
