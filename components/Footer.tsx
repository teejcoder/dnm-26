"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-white">DENIM</span>
            <span className="text-white/50">|</span>
            <span className="text-white/70 text-sm">Tech Consultancy</span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <span>© {new Date().getFullYear()} Denim. Crafted with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
