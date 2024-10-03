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
    name: "Ka Ling Wu",
    designation: "Co-Founder",
    image:
      "/founder2.png",
  },
  {
    id: 2,
    name: "Serguei Balanovich",
    designation: "Co-Founder",
    image:
      "/founder1.png",

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
    title="Rome wasn’t built in a day. Your dashboard will be."
    description="Connect your data with first-class connectors. Build a dashboard using natural language and an intuitive drag-and-drop interface. Ship your customer-facing analytics dashboard in one day."
    footer="Ensuring your account is properly secured helps protect your personal information and data."
  />
  
  <CardSpotlightDemo
    title="Ship & upgrade with a single click."
    description="Spin up new dashboards or ship upgrades to existing ones with a single click. Just drop in Upsolve's React/Vue component and your dashboard seamlessly becomes a part of your application. Focus on your core product and leave the analytics to Upsolve."
    footer="Transform data into strategic advantages with our intuitive platform."
  />

  <CardSpotlightDemo
    title="Unlock infinite possibilities for your users."
    description="Customers love Upsolve. We amplify engagement and stickiness by letting your end-users drill down on your data to get custom insights with Upsolve's intuitive AI features. Give customers the superpower to wield their own data and get twice as much value out of your product immediately."
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
