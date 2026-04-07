import React from "react";
import TitleText from "../common/TitleText";
import TerminalStartIcon from "../common/ TerminalStartIcon";
import { UserProject } from "@/types/user";

interface ProjectsProps {
  workProjects?: UserProject[];
}

interface ProjectCardProps {
  index?: string | number;
  project: UserProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project: proj, index }) => {
  return (
    <div className="flex flex-col p-8 group border-4 border-accent hover:bg-accent hover:text-background cursor-default transition-all duration-300">
      <div className="mb-6 font-archivo text-6xl text-stroke-accent leading-none group-hover:text-stroke-[var(--text-color)] group-hover:text-background group-hover:-translate-y-2 transition-all duration-200">
        {index}
      </div>
      <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">
        {proj.title}
      </h3>
      <p className="flex-grow mb-8 text-lg font-medium opacity-90">
        {proj.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {proj.technologies.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm font-bold tracking-widest border border-accent group-hover:border-background"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ workProjects = [] }) => {
  return (
    <section id="projects" className="py-24 border-b-4 border-accent">
      <div className="max-w-7xl grid gap-8 mx-auto px-8">
        <div className="flex items-center gap-4">
          <TerminalStartIcon />
          <TitleText text="Projects" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workProjects?.map((proj, i) => (
            <ProjectCard key={proj.title + i} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
