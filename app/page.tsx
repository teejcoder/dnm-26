import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import AnimatedDivider from "@/components/AnimatedDivider";
import Features from "@/components/Features";
import TechStackMarquee from "@/components/TechStackMarquee";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowWeBuild from "@/components/HowWeBuild";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <AnimatedDivider />
      <HowWeBuild />
      <TechStackMarquee />
      <Showcase />
      <AnimatedDivider />
      <Testimonials />
      <AnimatedDivider />
      <Contact />
      <Footer />
    </main>
  );
}
