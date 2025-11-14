"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#features" },
  { name: "Work", href: "#showcase" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: headerBlur.get() > 0 ? `blur(${headerBlur.get()}px)` : undefined,
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <nav className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex items-center justify-between gap-2">
          <li>
            <a href="#hero" className="font-heading text-xl font-bold text-white hover:text-primary transition-colors">
              DENIM
            </a>
          </li>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white/70 hover:text-white hover:bg-white/5"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
          <Button
            className="md:hidden p-2 text-white/70 hover:bg-secondary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </ul>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-2 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/70 hover:text-primary hover:bg-secondary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
