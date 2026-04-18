import React from "react";
import TerminalStartIcon from "@/components/common/ TerminalStartIcon";
import Button from "@/components/common/Button";

const Hero = () => {
  const firstName = "Jude";
  const lastName = "Akinwale";
  const initial = "O.";

  const tagLine = "Software Engineer / Tech Lead";
  const yearsOfExperience = "05+";

  const description = `
  I build high performance real-time systems for the web. 
  Perfecting process automation and enterprise applications.
  `;

  return (
    <section id="hero" className="min-h-fit flex items-end py-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mx-auto px-8">
        <div className="flex flex-col gap-4 animate-fade-up">
          {/* terminal blinker */}
          <div className="flex items-center gap-4 py-4">
            <TerminalStartIcon className="h-8 text-accent" />
            <div className="flex items-center gap-4">
              <span className="w-12 h-4 bg-primary rounded-sm"></span>
              <span className="text-xl font-black">/</span>
              <span className="w-16 h-4 bg-tertiary rounded-sm"></span>
              <span className="w-16 h-1 self-end bg-accent rounded-full animate-blink"></span>
            </div>
          </div>

          <h1 className="font-archivo text-[clamp(4rem,10vw,8rem)] uppercase leading-[0.85] tracking-tighter">
            {lastName}
            <br />
            <span className="text-foreground">{firstName}</span>
            &nbsp; {initial}
          </h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] text-accent font-bold uppercase tracking-tight">
              {tagLine}
            </h2>
            <p className="max-w-2xl pl-8 text-foreground/90 text-lg border-l-4 border-accent">
              {description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="#work" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center lg:justify-end pt-8 lg:pl-8 border-t-4 lg:border-l-4 border-accent animate-fade-up delay-200">
          <div className="bg-background p-8 text-center border-4 border-accent transition-all hover:scale-105 duration-200 ease-out">
            <h3 className="mb-4 text-6xl lg:text-7xl xl:text-8xl font-archivo text-accent leading-none">
              {yearsOfExperience}
            </h3>
            <p className="text-sm text-foreground/80 uppercase font-bold tracking-widest">
              Years of Production
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
