import Link from "next/link";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

interface ProjectCardProps {
  img?: string;
  title?: string;
  descrption?: string;
  link: string;
  projectIcons: string[];
}

const ProjectCard = ({
  img,
  title,
  descrption,
  link,
  projectIcons,
}: ProjectCardProps) => {
  return (
    <div
      className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-white/[0.1]"
      style={{ backgroundColor: "#13162D" }}
    >
      <div className="p-4">
        <img
          className="w-full h-full object-cover object-center max-h-64 rounded-xl"
          src={img}
          alt={descrption}
        />
      </div>

      <div className="px-6 py-4">
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {title}
        </h1>
        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {descrption}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3  max-md:flex-col">
          <div className="flex items-center">
            {projectIcons.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <Link href={link} target="_blank">
            <div className="flex justify-center items-center max-md:mt-4">
              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                Check Live Site
              </p>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
