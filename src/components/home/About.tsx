import React from "react";
import TerminalStartIcon from "../common/ TerminalStartIcon";
import TitleText from "../common/TitleText";

const About = () => {
  const detailedDescription = (
    <>
      <p>
        I am a&nbsp;
        <strong className="text-accent font-bold">
          Software Engineer and Technical Lead
        </strong>
        &nbsp; with 5+ years of professional experience building
        production-grade full-stack web applications. My passion lies in
        developing data-heavy real-time platforms, including systems for crypto
        trading, prediction markets, and auction bidding.
      </p>
      <p>
        I excel at technical leadership, mentoring teams, and applying critical
        thinking to architecture design and development. My goal is to always
        deliver scalable and secure applications.
      </p>
    </>
  );

  return (
    <section id="about" className="py-24 border-b-4 border-accent">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        <div className="relative h-fit group">
          <div className="inline-block p-4 border-4 border-accent -rotate-3 shadow-[8px_8px_0_rgba(250,250,250,0.1)] group-hover:bg-accent group-hover:text-foreground group-hover:rotate-0 group-hover:scale-105 transition-all duration-200">
            <TerminalStartIcon />
            <TitleText text="About" />
          </div>
        </div>
        <div className="p-8 md:p-12 bg-background border-4 border-accent hover:shadow-[6px_6px_0_var(--color-accent)] transition-all duration-300">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            {detailedDescription}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
