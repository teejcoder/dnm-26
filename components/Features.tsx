"use client";

import { Code2, Rocket, Zap, Layout, Database, Cog } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Web Development",
    description: "User-centric & performance optimised websites built with modern frameworks — including web design, hosting, and domains.",
  },
    {
    icon: Code2,
    title: "App Development",
    description: "Engaging mobile apps for iOS and Android.",
  },
  {
    icon: Rocket,
    title: "Minimum Viable Products",
    description: "Plan, design, and launch your MVP. Rapid development to validate ideas quickly.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Smart workflows and integrations that save time and eliminate repetitive tasks.",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust, scalable APIs and backend systems that power your applications.",
  },
  {
    icon: Cog,
    title: "Tech Consulting",
    description: "Strategic guidance on architecture, tooling, and technical decisions.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 md:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            What we <span className="text-primary">build</span>
          </h2>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            From concept to deployment, we build products designed to scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-background p-12 hover:bg-foreground/5 transition-colors duration-300"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
