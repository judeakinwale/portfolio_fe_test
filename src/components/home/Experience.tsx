import React from "react";
import TitleText from "../common/TitleText";
import TerminalStartIcon from "../common/ TerminalStartIcon";

const Experience = () => {
  const userExperience = [
    {
      isCurrent: true,
      company: "Homepage",
      location: "Dublin (Remote)",
      role: "Senior Software Engineer",
      startDate: "Sep 2025",
      endDate: "Present",
      responsibilities: [
        "Develop and maintain crypto trading and prediction market platforms ensuring high availability and low latency.",
        "Architect secure backends using Next.js, Express.js, TypeScript, PostgreSQL and MongoDB.",
        "Integrate complex Web3 SDKs including Turnkey and Polymarket as well as the Polymarket CLOB APIs.",
      ],
    },
    {
      isCurrent: true,
      company: "Lotus Beta Analytics",
      location: "Lagos (Hybrid)",
      role: "Full-Stack Developer / Technical Lead",
      startDate: "May 2021",
      endDate: "Sep 2025",
      responsibilities: [
        "Spearheaded the development of robust full-stack enterprise applications and automated workflows using React, Node, and Python.",
        "Mentored junior developers, introduced Agile practices, and significantly improved code quality across the team.",
        "Implemented tailored enterprise solutions utilizing SharePoint and React SPFx.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 border-b-4 border-accent">
      <div className="max-w-7xl grid gap-8 mx-auto px-8">
        <div className="flex items-center gap-4">
          <TerminalStartIcon />
          <TitleText text="Experience" />
        </div>
        <div className="flex flex-col gap-8">
          {userExperience?.map((exp, i) => {
            return (
              <div
                key={exp.company + i}
                className="grid grid-cols-1 md:grid-cols-[250px_1fr] bg-background group border-4 border-accent hover:shadow-[6px_6px_0_var(--color-accent)] transition-all duration-300"
              >
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
                        <div key={resp} className="flex items-start gap-4">
                          <span className="w-3 h-3 max-w-3 max-h-3 min-w-3 min-h-3 mt-2 bg-foreground/80 rounded-full"></span>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
