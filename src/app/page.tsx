import React from "react";
import { UserInfo } from "@/types/user";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";

const detailedSkills = [
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "React SPFx", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },

  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "SQLite", category: "Databases" },

  { name: "Docker", category: "Infrastructure" },
  { name: "Azure", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "CI/CD", category: "Infrastructure" },

  { name: "WebSockets", category: "Real-time & Web3" },
  { name: "Turnkey SDK", category: "Real-time & Web3" },
  { name: "Polymarket SDKs", category: "Real-time & Web3" },
  { name: "Polymarket CLOB API", category: "Real-time & Web3" },
  { name: "Solana", category: "Real-time & Web3" },

  { name: "SharePoint", category: "Enterprise" },

  { name: "Git", category: "Tools" },
  { name: "OpenCV", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" },
];

const userInfo: UserInfo = {
  name: "Jude Akinwale",
  title: "Software Engineer / Tech Lead",
  email: "testuser@gmail.com",
  description:
    "High-performance real-time systems. Crypto trading platforms. Enterprise applications. I build robust backends and dynamic frontends that don't compromise on speed or bold aesthetics.",
  detailedDescription: "",
  yearsOfExperience: "05",
  experienceDescription: "05+ years of production experience",
  skills: detailedSkills,
};

// {
//   cat: "Languages",
//   items: "TypeScript, JavaScript, Python, SQL",
// },
// {
//   cat: "Frontend",
//   items: "React, Next.js, Tailwind, HTML/CSS",
// },
// {
//   cat: "Backend",
//   items: "Node.js, Express.js, FastAPI, Django",
// },
// {
//   cat: "Databases",
//   items: "PostgreSQL, MongoDB, MySQL, Redis",
// },
// { cat: "Infrastructure", items: "Docker, AWS, Azure, CI/CD" },
// {
//   cat: "Web3 & Real-time",
//   items: "WebSockets, Solana, CLOB API",
// },
// { cat: "Enterprise", items: "SharePoint, React SPFx, OpenCV" },
// { cat: "Tools", items: "Git, GitHub Actions, Vercel" },

export default function Home() {
  return (
    <div className="">
      <Hero />

      <Skills detailedSkills={userInfo.skills} />

      <About />

      <Experience />

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 border-b-4 border-brand">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-16 text-stroke-white leading-[0.9] uppercase">
            WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
              <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">
                01
              </div>
              <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">
                PRYSM.TRADE
              </h3>
              <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                A high-performance trading platform providing real-time
                technical analysis and seamless transaction capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                {["NEXT.JS", "TYPESCRIPT", "WEBSOCKETS"].map((skill) => (
                  <span
                    key={skill}
                    className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
              <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">
                02
              </div>
              <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">
                ELECTRONIC TESTING
              </h3>
              <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                Scalable, secure examination platform capable of handling
                thousands of concurrent users with real-time grading and
                reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                {["REACT", "DJANGO", "POSTGRESQL"].map((skill) => (
                  <span
                    key={skill}
                    className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-4 border-brand p-8 flex flex-col group transition-colors duration-200 hover:bg-brand hover:text-root-bg cursor-default">
              <div className="font-archivo text-6xl text-stroke-brand group-hover:text-stroke-[var(--text-color)] group-hover:text-root-bg mb-6 leading-none transition-all duration-200 group-hover:-translate-y-2">
                03
              </div>
              <h3 className="text-3xl font-archivo uppercase mb-4 tracking-tight">
                ATTENDANCE MGT
              </h3>
              <p className="flex-grow mb-8 text-lg font-medium opacity-90">
                Enterprise solution leveraging Facial Recognition (OpenCV) to
                digitally track and record daily attendance efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PYTHON (FASTAPI)", "OPENCV", "REACT SPFX"].map((skill) => (
                  <span
                    key={skill}
                    className="border border-brand group-hover:border-root-bg px-3 py-1 text-sm font-bold tracking-widest"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-archivo mb-16 text-center text-stroke-white leading-[0.9] uppercase xl:mb-24">
            TRANSMIT SIGNAL
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-brand bg-root-bg">
            <div className="p-8 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-brand">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-archivo uppercase mb-8 leading-tight">
                OPEN FOR DEPLOYMENT.
              </h3>
              <p className="text-xl mb-12 text-root-text/80">
                Whether you’re dealing with high-frequency trades or complex
                enterprise architecture, I can help build systems that scale
                indefinitely.
              </p>
              <a
                href="mailto:judeakinwale@gmail.com"
                className="block w-full text-center border-4 border-brand bg-root-bg text-root-text font-archivo text-2xl py-6 tracking-widest uppercase transition-all duration-150 ease-out shadow-[8px_8px_0_theme(colors.brand)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none hover:bg-brand hover:text-root-bg"
              >
                Initialize Email
              </a>
            </div>
            <div className="flex flex-col">
              <div className="p-8 pb-4">
                <h4 className="text-brand font-archivo text-2xl uppercase">
                  CONNECT
                </h4>
              </div>
              <div className="flex-grow flex flex-col font-archivo text-3xl md:text-4xl lg:text-5xl">
                <a
                  href="https://github.com/judeakinwale"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center px-8 border-b border-brand/40 transition-all duration-200 hover:text-brand hover:bg-brand/10 hover:pl-12"
                >
                  GITHUB ↗
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center px-8 border-b border-brand/40 opacity-50 cursor-not-allowed"
                >
                  LINKEDIN ↗
                </a>
                <a
                  href="tel:+2349064430102"
                  className="flex-1 flex items-center px-8 transition-all duration-200 hover:text-brand hover:bg-brand/10 hover:pl-12"
                >
                  CALL ME ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
