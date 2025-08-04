import { projects } from "@/data";
import React from "react";
import ProjectCard from "../ui/ProjectCard";

const RecentProjects = () => {
  return (
    <div className="py-20 max-ms:py-4">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      {/* project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-4 w-full place-items-center mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            link={project.link}
            img={project.img}
            title={project.title}
            descrption={project.des}
            projectIcons={project.iconLists}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
