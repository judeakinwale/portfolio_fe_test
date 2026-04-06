import React from "react";

const username = "Jude Akinwale";
const navItems = [
  { name: "About", href: "#about" },
  // { name: "Blog", href: "#blog" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Tools", href: "#tools" },
  { name: "Contact", href: "#contact" },
];

const TopNav = () => {
  return (
    <nav className="fixed top-0 z-10 w-full flex justify-between items-stretch bg-background border-b-4 border-accent">
      <div className="px-8 py-4 text-2xl uppercase font-archivo leading-none tracking-tight border-r-4 border-accent">
        {username}
      </div>
      <div className="hidden md:flex">
        {navItems.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="px-8 py-4 font-bold uppercase border-l border-accent/40 hover:bg-accent hover:text-background transition-all duration-150 ease-out"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
