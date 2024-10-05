import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlightDemo } from "@/components/ui/Card-spot";
import Cofounders from "@/components/ui/Cofounders";
import { Features } from "@/components/ui/Features";
import HeroSection from "@/components/ui/HeroSection";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import Link from "next/link";
const people = [
  {
    id: 1,
    name: "Nikhara Nirghin",
    designation: "Co-Founder",
    image:
      "/founder2n.png",
  },
  {
    id: 2,
    name: "Kiara Nirghin",
    designation: "Co-Founder",
    image:
      "/founder1n.png",

  },
    
  ];
export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
     <Features/>
     <div className="bg-black height-[40rem] mt-40 relative w-full text-center">
    <h1 className="mt-30 mb-30 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      Meet our founders
    </h1>
    <div className="mt-20 flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  </div>
      <div className="flex flex-wrap justify-center gap-4 mt-20 mb-20">
     <div className="flex flex-col md:flex-row justify-center gap-4 mt-20">
     
  <CardSpotlightDemo
    title="Agentic System"
    description="We build the industry's leading AI Systems, purpose-built for the Enterprise, enabling the quick and accurate automation of workflows of any complexity. From manual tasks to multi-step processes, we lead with advanced models to handle it all."
    footer="Ensuring your account is properly secured helps protect your personal information and data."
  />
  
  <CardSpotlightDemo
    title="Specialized Use Cases"
    description="Once integrated end-to-end, our Human Reasoning Systems are deployed across business functions like marketing, customer support, sales, operations, compliance, security and beyond."
    footer="Transform data into strategic advantages with our intuitive platform."
  />

  <CardSpotlightDemo
    title="Custom Interfaces"
    description="We deploy our Systems’ capabilities in custom enterprise interfaces, built and intelligently refined with each interaction. We go beyond chat interfaces with embedded workflows."
    footer="Stay ahead of the curve and drive growth through analytics."
  />
   
</div>

</div>
<footer className="w-full flex items-center justify-center py-3 mb-4">
        <Link
          className="flex items-center gap-1 text-current"
          href="https://www.linkedin.com/in/suraj-sharma-239894223/"
          title="Suraj's LinkedIn"
        >
          <span className="text-default-600">Redesigned & built by</span>
          <p className="text-primary">Suraj Sharma</p>
        </Link>
      </footer>

    </div>
    
  );
}
