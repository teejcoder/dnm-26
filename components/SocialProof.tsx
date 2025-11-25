"use client";

const companies = [
  "TECHCORP",
  "INNOVATE",
  "NEXUS",
  "QUANTUM",
  "ZENITH",
  "APEX",
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "3x", label: "Faster Time to Market" },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-6 md:px-8 border-y border-foreground/10 bg-background">
      <div className="container max-w-7xl mx-auto">
        {/* Trusted By */}
        <div className="text-center mb-12">
          <p className="text-sm text-foreground/50 uppercase tracking-widest mb-8 font-bold">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="font-heading text-xl font-bold text-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-foreground/10 pt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/70 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
