"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "FinanceFlow",
    category: "SaaS Product",
    description: "AI-powered financial analytics platform for modern businesses.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "CreatorHub",
    category: "Web App",
    description: "Content management system built for creators and influencers.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "AutoFlow",
    category: "Automation",
    description: "No-code workflow automation tool for enterprise teams.",
    image: "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "DataVault",
    category: "API Platform",
    description: "Secure data storage and management API for developers.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "MarketPulse",
    category: "Web App",
    description: "Real-time market analytics dashboard for traders.",
    image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "TeamSync",
    category: "SaaS Product",
    description: "Collaborative workspace for distributed teams.",
    image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-32 px-6 md:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">work</span>
          </h2>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            A selection of projects we&apos;re proud to have shipped.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative block"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden mb-6 bg-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-background" />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
