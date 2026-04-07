import { UserSkills } from "@/types/user";
import React, { useMemo } from "react";
import TerminalStartIcon from "../common/ TerminalStartIcon";
import TitleText from "../common/TitleText";

interface SkillProps {
  detailedSkills: UserSkills[];
}

const Skills: React.FC<SkillProps> = ({ detailedSkills = [] }) => {
  const marqueeSkills = useMemo(() => {
    const skillNames = detailedSkills.map((skill) => skill.name);
    skillNames.concat(skillNames);
    return skillNames;
  }, [detailedSkills]);

  const groupedSkills = useMemo(
    () => Object.groupBy(detailedSkills, (skill) => skill.category),
    [detailedSkills]
  );

  return (
    <section
      id="skills"
      className="border-b-4 border-brand animate-fade-up delay-300"
    >
      {/* marquee */}
      <div className="relative">
        <div className="overflow-hidden border-y-4 border-accent bg-background-alt text-root-bg py-4 flex flex-nowrap">
          <div className="animate-marquee z-10 flex items-center gap-8 font-archivo text-3xl lg:text-4xl uppercase tracking-tight">
            {marqueeSkills?.map((skill, i) => (
              <span
                key={`2-${i}`}
                className="hover:text-foreground transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* bottom track */}
        <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden">
          <div className="animate-marquee h-full flex items-center gap-8 border pointer-events-none">
            {marqueeSkills?.concat(marqueeSkills)?.map((_, i) => {
              const isThird = i && i % 3 === 0;
              return (
                <span
                  key={`stripe-${i}`}
                  className={`${
                    isThird ? "w-16 bg-accent/30 scale-120 -skew-12" : "w-48"
                  } h-full`}
                ></span>
              );
            })}
          </div>
        </div>
      </div>

      {/* static skills grid */}
      <div className="max-w-7xl grid gap-8 mx-auto px-8 py-24">
        <div className="flex items-center gap-4">
          <TerminalStartIcon />
          <TitleText text="Core Skills" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(groupedSkills).map(([category, skills], idx) => (
            <div
              key={idx}
              className="p-4 bg-root-bg border-4 border-accent hover:bg-accent hover:text-background hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-foreground)] group transition-all duration-200"
            >
              <div className="mb-2 pb-2 font-archivo text-lg uppercase border-b-2 border-accent/50 group-hover:border-background/50">
                {category}
              </div>
              <div className="text-sm font-medium opacity-90">
                {skills?.map((skill) => skill.name)?.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
