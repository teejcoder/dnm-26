"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Zap, Layout, Database, Cog } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Web Development",
    description: "User-centric & performance optimised websites built with modern frameworks.",
    color: "from-primary to-pink-500",
  },
    {
    icon: Code2,
    title: "App Development",
    description: "Engaging mobile apps for iOS and Android.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Minimum Viable Products",
    description: "Plan, design, and launch your MVP. Rapid development to validate ideas quickly.",
    color: "from-secondary to-yellow-400",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Smart workflows and integrations that save time and eliminate repetitive tasks.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust, scalable APIs and backend systems that power your applications.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Cog,
    title: "Tech Consulting",
    description: "Strategic guidance on architecture, tooling, and technical decisions.",
    color: "from-orange-500 to-red-400",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">build</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            From concept to deployment, we build products designed to scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
