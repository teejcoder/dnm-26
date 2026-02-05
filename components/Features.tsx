"use client";

import { Rocket, Zap, Layout, Database, Cog, Check, Wrench } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Web & App Development",
    description: [
      "Web Design & Development",
      "E-commerce Solutions",
      "Cross-platform Mobile Apps (iOS & Android)",
      "Web Hosting & Domain Registration",
      "Support & Maintenance",
    ],
  },
  {
    icon: Rocket,
    title: "Minimum Viable Products",
    description: [
      "Plan, design, and launch your MVP",
      "Rapid development to validate ideas quickly",
      "Tech stack selection and architecture design",
      "CI/CD pipeline setup and deployment",
      "End-to-end testing before launch",
    ],
  },
  {
    icon: Zap,
    title: "Automation",
    description: [
      "Smart workflows and integrations",
      "Eliminate repetitive tasks",
      "Save time across your operations",
      "Custom scripts and tooling for your stack",
      "Webhook and event-driven automation",
    ],
  },
  {
    icon: Database,
    title: "API Development",
    description: [
      "Robust, scalable APIs",
      "Backend systems that power your applications",
      "RESTful and GraphQL endpoint design",
      "Auth, rate limiting, and security hardening",
      "Full API documentation and versioning",
    ],
  },
  {
    icon: Cog,
    title: "Tech Consulting",
    description: [
      "Strategic architecture guidance",
      "Tooling and technical decisions",
      "Code review and refactoring sessions",
      "Performance profiling and optimisation",
      "DevOps and infrastructure setup",
    ],
  },
  {
    icon: Wrench,
    title: "Vibe Coded Off a Cliff?",
    description: [
      "Untangle messy, AI-generated code",
      "Debug and stabilise broken builds",
      "Get your project back on track",
      "Refactor and reduce technical debt",
      "Unit and integration test coverage",
    ],
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
              className="group relative bg-background p-12 hover:bg-primary/10 transition-colors duration-300"
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
                <ul className="space-y-2">
                  {feature.description.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/70 font-light leading-relaxed">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
