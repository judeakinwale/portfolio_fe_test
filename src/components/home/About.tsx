import React from "react";
import SectionHeading from "../common/SectionHeading";

interface AboutProps {
  detailedDescription?: string;
}

const About: React.FC<AboutProps> = ({ detailedDescription }) => {
  const defaultAboutContent = (
    <>
      <p>
        I am a&nbsp;
        <strong className="text-accent font-bold">
          Senior Software Engineer and Technical Lead
        </strong>
        &nbsp; with 7+ years of professional experience building production
        full-stack web applications. My passion lies in developing data-heavy
        real-time platforms, process automation systems as well as responsive
        and aesthetic web applications.
        {/* , including systems for crypto
        trading, prediction markets, and auction bidding. */}
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
          <div className="inline-block p-4 border-4 border-accent rotate-0 shadow-[8px_8px_0_rgba(250,250,250,0.1)] group-hover:bg-accent group-hover:text-foreground hover:shadow-[6px_6px_0_var(--color-foreground)] group-hover:rotate-0 group-hover:scale-105 transition-all duration-200">
            {/* <TerminalStartIcon /> */}
            {/* <TitleText text="About" /> */}
            <SectionHeading heading="About" />
          </div>
        </div>
        <div className="p-8 md:p-12 bg-background border-4 border-accent hover:shadow-[6px_6px_0_var(--color-accent)] transition-all duration-300">
          {detailedDescription ? (
            <div
              className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90"
              dangerouslySetInnerHTML={{ __html: detailedDescription }}
            ></div>
          ) : (
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
              {defaultAboutContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
