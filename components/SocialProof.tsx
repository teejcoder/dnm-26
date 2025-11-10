"use client";

import { motion } from "framer-motion";

const companies = [
  "TECHCORP",
  "INNOVATE",
  "NEXUS",
  "QUANTUM",
  "ZENITH",
  "APEX",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3x", label: "Faster Time to Market" },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 px-6 md:px-8 overflow-hidden border-y border-white/10">
      <div className="container max-w-7xl mx-auto">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-white/50 uppercase tracking-widest mb-8">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {companies.map((company) => (
              <motion.div
                key={company}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="font-heading text-xl font-bold text-white/70"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
