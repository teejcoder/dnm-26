"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "AWS",
  "Docker",
  "GraphQL",
  "Prisma",
  "tRPC",
  "Supabase",
];

export default function TechStackMarquee() {
  return (
    <section className="relative py-20 overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="relative">
        <p className="text-center text-sm text-white/50 uppercase tracking-widest mb-8">
          Powered by modern technology
        </p>
        
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Increased from 20 to 30 seconds
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                <span className="font-heading text-white/80 font-medium whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
