"use client";

import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 px-6 md:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Denim Logo" width={80} height={80} />
            <span className="text-foreground/50">|</span>
            <span className="text-foreground/70 text-sm">Tech Consultancy</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-foreground/50 text-sm">
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
