"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
  const navRef = React.useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState<boolean>(false);

  const toggleNav = () => {
    if (!showNav) {
      setShowNav(true);
      document.addEventListener("click", handleOutsideClick);
      return;
    }
    setShowNav(false);
    document.removeEventListener("click", handleOutsideClick);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (navRef.current && !navRef.current.contains(target)) {
      setShowNav(false);
    }
    document.removeEventListener("click", handleOutsideClick);
  };

  const renderedNavItems = navItems.map(({ name, href }) => (
    <a
      key={name}
      href={href}
      className="px-8 py-4 font-bold uppercase border-l border-accent/40 hover:bg-accent hover:text-background transition-all duration-150 ease-out"
    >
      {name}
    </a>
  ));

  return (
    <nav className="fixed top-0 z-10 w-full flex justify-between items-stretch bg-background border-b-4 border-accent">
      <a
        className="px-8 py-4 text-2xl uppercase font-archivo leading-none tracking-tight border-r-4 border-accent"
        href="#hero"
      >
        {username}
      </a>
      <div className="hidden md:flex">{renderedNavItems}</div>
      <div ref={navRef} className="relative group flex transition-all">
        <div className="m-2 p-2 font-bold tr" onClick={toggleNav}>
          {showNav ? <X /> : <Menu />}
        </div>
        <div
          className={cn(
            showNav
              ? "absolute top-12 right-4 flex flex-col gap-1 bg-background border-2 border-accent"
              : "hidden",
          )}
          onClick={toggleNav}
        >
          {renderedNavItems}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
