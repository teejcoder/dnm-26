"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Thanh Vu",
    role: "Owner | Q Nails",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Denim transformed our vision into a product that exceeded all expectations. The attention to detail and speed of delivery was remarkable.",
  },
  {
    name: "Mark Juan",
    role: "Owner | Master Cobblers",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Working with Denim felt like having a senior tech co-founder. They understood our business and delivered exactly what we needed.",
  },
  {
    name: "Matt Simpson",
    role: "Owner | Twang Brewing",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",

    quote:
      "The best technical partner we've ever worked with. Fast, professional, and always thinking three steps ahead.",
  },

  {
    name: "Kisa Evelyn",
    role: "Founder | Kish Creates",
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "From concept to launch in 6 weeks. Denim made the impossible possible with incredible design and functionality.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-8 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
            Client <span className="text-primary">love</span>
          </h2>
          <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-foreground/5 p-8 border border-foreground/10"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary mb-6" />

              {/* Quote */}
              <p className="text-foreground/80 font-medium leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden border border-foreground/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60 uppercase tracking-wide">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
