"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12 px-6 md:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-foreground">DENIM</span>
            <span className="text-foreground/50">|</span>
            <span className="text-foreground/70 text-sm">Tech Consultancy</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-foreground/50 text-sm">
            <span>© {new Date().getFullYear()} Denim. Crafted with</span>
            <div>
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
