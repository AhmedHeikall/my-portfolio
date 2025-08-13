"use client";
import Link from "next/link";
import { GridBackgroundDemo } from "../ui/GridBackground";
import { Spotlight } from "../ui/Spotlight";
import MagicButton from "../ui/MagicButton";

import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 mb-16">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>

      {/* grid background */}
      <GridBackgroundDemo />

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:mx-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase  tracking-widest text-xs text-center text-blue-100 max-w-80">
            HELLO TO MY WORLD.
          </h2>

          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold my-4 dark:text-white text-black  leading-snug tracking-wide">
            Transforming real-world needs into{" "}
            <span className="text-purple"> digital products.</span>
          </h1>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ahmed, a Full Stack Engineer | Cloud & DevOps
            Specialist based in Egypt.
          </p>

          <Link
            href={"https://github.com/AhmedHeikall?tab=repositories"}
            target="_blank"
          >
            <MagicButton
              title="See my work"
              icon={<FaGithub />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
