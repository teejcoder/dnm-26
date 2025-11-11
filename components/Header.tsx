"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#features" },
  { name: "Work", href: "#showcase" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    // Throttle scroll updates to reduce memory usage
    const updateActiveSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(updateActiveSection, {
      threshold: 0.3,
      rootMargin: "-50% 0px -50% 0px", // Only trigger when section is in center
    });

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

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
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </motion.header>
  );
}
