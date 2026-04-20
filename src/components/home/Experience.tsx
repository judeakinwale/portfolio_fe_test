import React from "react";
import TitleText from "../common/TitleText";
import TerminalStartIcon from "../common/ TerminalStartIcon";
import { UserExperience } from "@/types/user";

interface ExperienceProps {
  workExperience?: UserExperience[];
}

type ExperienceCardProps = {
  experience: UserExperience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience: exp }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] bg-background group border-4 border-accent hover:shadow-[6px_6px_0_var(--color-accent)] transition-all duration-300">
      <div className="flex items-center justify-center p-8 bg-secondary-alt font-archivo text-xl text-accent uppercase text-center border-b-4 md:border-b-0 md:border-r-4 border-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
        {exp.startDate} &nbsp; // &nbsp; {exp.endDate}
      </div>
      <div className="p-8 md:p-10">
        <div className="mb-2 text-3xl font-bold font-archivo text-accent uppercase">
          {exp.role}
        </div>
        <div className="mb-6 text-xl font-bold uppercase tracking-wide">
          {exp.company} &nbsp; // &nbsp; {exp.location}
        </div>
        <ul className="list-square px-2 space-y-3 text-lg text-foreground/80">
          {exp.responsibilities?.map((resp, i) => {
            return (
              <div key={resp + i} className="flex items-start gap-4">
                <span className="w-3 h-3 max-w-3 max-h-3 min-w-3 min-h-3 mt-2 bg-foreground/60 rounded-full"></span>
                <li className="transition-all duration-150 hover:-translate-y-0.5 hover:text-foreground">
                  {resp}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ workExperience = [] }) => {
  return (
    <section id="experience" className="py-24 border-b-4 border-accent">
      <div className="max-w-7xl grid gap-8 mx-auto px-8">
        <div className="flex items-center flex-wrap gap-4">
          <TerminalStartIcon />
          <TitleText text="Experience" />
        </div>
        <div className="flex flex-col gap-8">
          {workExperience?.map((exp, i) => (
            <ExperienceCard key={exp.company + i} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
