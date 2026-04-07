import React from "react";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { userInfo } from "@/data/user";


export default function Home() {
  return (
    <div className="">
      <Hero />

      <Skills detailedSkills={userInfo.skills} />

      <About />

      <Experience workExperience={userInfo.workExperience} />

      <Projects workProjects={userInfo.projects} />

      <Contact contactInfo={userInfo.contactInfo} />
    </div>
  );
}
