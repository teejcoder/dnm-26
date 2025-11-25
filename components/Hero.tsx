"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center pt-20 bg-background">
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading text-7xl md:text-9xl font-bold mb-12 leading-[0.9] tracking-tighter text-foreground">
            Apps. <br />
            <span className="text-primary">Websites.</span> <br />
            Automations.
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 font-light max-w-2xl mb-12">
            We create digital products that people enjoy using.
            Simple, effective, and built for growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-bold px-8 py-6 text-lg rounded-none"
              asChild
            >
              <a href="#contact">
                Start a project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-bold px-8 py-6 text-lg rounded-none"
              asChild
            >
              <a href="#showcase">View our work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
