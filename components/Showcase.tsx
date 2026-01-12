"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import litreAndLevyPng from "@/public/images/lnl.png";
import swashPng from "@/public/images/swash.png";
import togetherishPng from "@/public/images/togetherish.png";
import mc from "@/public/images/mc.png";
import qnails from "@/public/images/qnails.png";
import cfss from "@/public/images/cf-sss.png";

const projects = [
  {
    title: "Togetherish",
    category: "SaaS Platform",
    description:
      "Collaborative platform for remote teams to work together seamlessly.",
    image: togetherishPng,
  },
  {
    title: "Master Cobblers",
    category: "Marketing Website",
    description: "Marketing website for a premium cobbler service.",
    image: mc,
  },
  {
    title: "Swash Agency",
    category: "Marketing Website",
    description:
      "Website for a booking agency specialising in performance artists.",
    image: swashPng,
  },
  {
    title: "Litre & Levy",
    category: "Compliance SaaS",
    description: "Compliance softeware for the beverage alcohol industry.",
    image: litreAndLevyPng,
  },
  {
    title: "Q Nails",
    category: "Marketing Website",
    description: "Website for a high-end nail salon in North QLD.",
    image:
      qnails,
  },
  {
    title: "Colourfully",
    category: "AI Design Tool",
    description: "Colour Palette generator using AI to inspire designers.",
    image:
    cfss,
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
            <div key={project.title} className="group relative block">
              {/* Image */}
              <div className="relative h-80 overflow-hidden mb-6 bg-foreground/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:grayscale-0 transition-all duration-500"
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
