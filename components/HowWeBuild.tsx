'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";


export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative py-32 px-6 md:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Build</span>
          </h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            We build with a bias toward modularity, clarity, and long-term maintainability. No vague process
            diagrams—just concrete decisions that make software fast, stable, and pleasant to work on.
          </p>
        </motion.div>

        <Card className="bg-card/10 border border-card/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-secondary">Architecture Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Next.js is our backbone. Every feature lives as a self-contained module: UI, server logic,
              validation, caching strategy, and tests all in one place. Keeping boundaries tight avoids the
              spaghetti death-spiral.
            </p>
            <p>
              We avoid brittle abstractions by sticking to a simple rule: if an abstraction doesn’t remove
              cognitive load, it’s not an abstraction—it’s a future bug.
            </p>
            <p>
              Performance budgets matter. We treat them like gravity: always pulling us toward leaner
              components, fewer network calls, and predictable render paths.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="structure" className="w-full">
          <TabsList className="grid grid-cols-3 w-full bg-card/20 border border-card/20">
            <TabsTrigger value="structure">App Structure</TabsTrigger>
            <TabsTrigger value="api">API Pattern</TabsTrigger>
            <TabsTrigger value="ui">UI Composition</TabsTrigger>
          </TabsList>

          <TabsContent value="structure">
            <Card className="bg-card/10 border border-card/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Feature-First Foldering</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-white whitespace-pre-wrap bg-black/40 p-4 rounded-md overflow-x-auto">
                  {`app/
  dashboard/
    page.tsx
    components/
    actions/
    queries/
    schema.ts
  auth/
    login/
      page.tsx
      actions/
      schema.ts
  api/
    users/
      route.ts`}
                </pre>
                <p className="text-muted-foreground mt-4">
                  Each feature owns its UI, logic, and schema. You always know where a responsibility lives.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card className="bg-card/10 border border-card/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Typed Server Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-white whitespace-pre-wrap bg-black/40 p-4 rounded-md overflow-x-auto">
                  {`// app/api/users/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2)
});

export async function POST(req: Request) {
  const data = await req.json();
  const parsed = UserSchema.safeParse(data);

  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });

  // pretend DB call
  return NextResponse.json({ created: true });
}`}
                </pre>
                <p className="text-muted-foreground mt-4">
                  Validation stays close to the handler. Everything stays type-safe. No mystery pipes.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ui">
            <Card className="bg-card/10 border border-card/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Composable UI</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm text-white whitespace-pre-wrap bg-black/40 p-4 rounded-md overflow-x-auto">
                  {`// dashboard/components/StatCard.tsx
import { Card, CardContent } from "@/components/ui/card";

export function StatCard({ label, value }) {
  return (
    <Card className="bg-white text-foreground p-4">
      <CardContent className="space-y-1">
        <p className="text-sm opacity-70">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}`}
                </pre>
                <p className="text-muted-foreground mt-4">
                  Components stay tiny. Composition scales. No 700-line React monsters.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
