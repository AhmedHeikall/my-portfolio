"use client";
import Link from "next/link";
import { GridBackgroundDemo } from "../ui/GridBackground";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";

import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
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

          <TextGenerateEffect
            words="Transforming real-world needs into digital products."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ahmed, a FullStack Engineer based in Egypt.
          </p>

          <Link href={"#"}>
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
