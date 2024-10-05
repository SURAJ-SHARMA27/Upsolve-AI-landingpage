import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "./moving-border";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[80vh] md:h-[60vh] w-full flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mt-40 relative z-10 w-full text-center">
          <h1
            className="mt-30 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >Chima AI</h1>
          <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          >
           The Intelligent Enterprise.
           Chima is building the future of Enterprise AGI.
           We are pioneering the Compound Human Reasoning system to perform any workflow, role or function for your business.
          </p>
          <div className="mt-10">
            <Button
              borderRadius="1.75rem"
              className="bg-[#1a1a1a]  text-black dark:text-white border-neutral-200 dark:border-slate-800"
              duration={4000}
            >
              <Link href={"/request"}>Get Started</Link>
            </Button>
          </div>
          
        </div>
      </div>

      {/* Adjusted ContainerScroll to appear just below */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll titleComponent={<></>}>
          <Image
            src={`/image.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
};


export default HeroSection;
