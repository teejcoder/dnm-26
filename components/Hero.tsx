"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background - Reduced complexity */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.4, 0.3], 
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.4, 0.3], 
          }}
          transition={{
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-white/80">We're a team that loves building things</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-16 leading-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
              Apps. <br/> Websites. <br/> Automations.
            </span>
          </motion.h1>

          {/* Subheadline */}
            {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto mb-12"
            >
            We create digital products that people enjoy using.
            </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full group"
              asChild
            >
              <a href="#contact">
                Start a project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full"
              asChild
            >
              <a href="#showcase">View our work</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Reduced to 2 elements and less aggressive animation */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -8, 0], 
            transition: {
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
          }}
          className="absolute top-1/3 right-20 hidden lg:block"
        >
          <div className="w-2 h-2 bg-secondary rounded-full shadow-lg shadow-secondary/50" />
        </motion.div>
      </div>


    </section>
  );
}
