"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "FinanceFlow",
    category: "SaaS Product",
    description: "AI-powered financial analytics platform for modern businesses.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "CreatorHub",
    category: "Web App",
    description: "Content management system built for creators and influencers.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AutoFlow",
    category: "Automation",
    description: "No-code workflow automation tool for enterprise teams.",
    image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-primary to-pink-500",
  },
  {
    title: "DataVault",
    category: "API Platform",
    description: "Secure data storage and management API for developers.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "MarketPulse",
    category: "Web App",
    description: "Real-time market analytics dashboard for traders.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-orange-500 to-red-400",
  },
  {
    title: "TeamSync",
    category: "SaaS Product",
    description: "Collaborative workspace for distributed teams.",
    image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-secondary to-yellow-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-32 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">work</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            A selection of projects we&apos;re proud to have shipped.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-secondary font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 font-light text-sm">
                  {project.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
