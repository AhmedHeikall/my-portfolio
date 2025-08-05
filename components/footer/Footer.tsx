import Link from "next/link";
import React from "react";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className=" max-ms:py-4 " id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src={`/footer-grid.svg`}
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <h2 className="  tracking-widest text-center text-white-200 mt-10 mb-10">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </h2>

        <Link href="mailto:aheikal424@icloud.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center mt-10">
        <p className="md:text-base text-sm md:font-normal font-light max-md:mb-5">
          Copyright © 2025 Heikal v.1
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link href={profile.link} target="_blank" key={profile.id}>
              <div className="w-10 h-10 cursor-pointer justify-center items-center">
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
