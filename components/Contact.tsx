"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background Effects - Reduced animation intensity */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1], // Reduced range
            opacity: [0.3, 0.4, 0.3], // Reduced range
          }}
          transition={{
            duration: 12, // Increased duration
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Let&apos;s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">together</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-8">
            Have a project in mind? Let&apos;s chat about how we can bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          {/* Email CTA */}
          <div className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6"
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Drop us a line
            </h3>
            <a
              href="mailto:hello@denim.tech"
              className="text-2xl font-light text-primary hover:text-secondary transition-colors"
            >
              hello@denim.tech
            </a>
          </div>

          {/* Divider */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0a0a0a] text-white/50">or reach out on social</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>

          {/* Alternative CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg rounded-full group"
              asChild
            >
              <a href="mailto:hello@denim.tech">
                Start a conversation
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-white/50 text-sm mt-12"
        >
          Typically respond within 24 hours
        </motion.p>
      </div>
    </section>
  );
}
