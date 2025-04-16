import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShadowKit - Build with Speed",
  description: "Custom UI library for rapid development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />

        <div className="flex min-h-screen pt-20">
          <main className="flex-1 px-4 md:px-8 py-6">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
