"use client";

import { motion } from "framer-motion";

export default function AnimatedDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(254, 1, 154, 0.7)",
            "0 0 0 6px rgba(254, 1, 154, 0)", // Reduced from 10px to 6px
          ],
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          boxShadow: {
            duration: 3, // Increased from 2 to 3 seconds
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}
