"use client";

import { Mail, Github, Twitter, Linkedin, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";

// const socialLinks = [
  // { icon: Mail, href: "mailto:hello@denim.melbourne", label: "Email" },
  // { icon: Instagram, href: "#", label: "Instagram" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
// ];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-8 bg-background">
      <div className="container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            Let&apos;s build <span className="text-primary">together</span>
          </h2>
          <p className="text-xl text-foreground/70 text-balance font-light max-w-2xl mx-auto mb-8">
            Have a project in mind? Let&apos;s chat about how we can bring your vision to life.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-foreground/5 border border-foreground/10 p-12">
          {/* Email CTA */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Mail className="w-10 h-10 text-foreground" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              Drop us a line
            </h3>
            <a
              href="mailto:hello@denim.melbourne"
              target="_blank"
              className="text-md md:text-xl font-light text-primary hover:text-foreground transition-colors"
            >
              hello@denim.melbourne
            </a>
          </div>
    
          {/* Divider */}
          {/* <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-foreground/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-foreground/50">or reach out on social</span>
            </div>
          </div> */}

          {/* Social Links */}
          {/* <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center justify-center w-14 h-14 bg-foreground/5 border border-foreground/10 rounded-full hover:bg-primary hover:text-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div> */}

          {/* Alternative CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-foreground hover:bg-primary hover:text-foreground text-background font-semibold px-6 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-none w-full sm:w-auto"
              asChild
            >
              <a
                href="mailto:hello@denim.melbourne?subject=Let%27s%20build%20together&body=Hi%2C%0A%0AI%20have%20a%20project%20I%27d%20like%20to%20discuss.%20Briefly%20describe%20it%20here...%0A%0AThanks%2C"
                target="_blank"
                className="inline-flex items-center"
              >
                Send an Email
                <Send className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-foreground/50 text-sm mt-12">
          Typically respond within 24 hours
        </p>
      </div>
    </section>
  );
}
