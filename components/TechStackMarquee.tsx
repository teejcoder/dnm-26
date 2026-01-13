"use client";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "AWS",
  "Docker",
  "GraphQL",
  "Prisma",
  "tRPC",
  "Supabase",
];

export default function TechStackMarquee() {
  return (
    <section className="py-20 border-y border-foreground/10 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-sm text-foreground/50 uppercase tracking-widest mb-12 font-bold">
          Powered by modern technology
        </p>
        
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 border border-foreground/20 hover:bg-primary hover:text-foreground transition-colors duration-300"
            >
              <span className="font-heading font-medium text-lg">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
