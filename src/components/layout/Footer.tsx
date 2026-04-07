import React from "react";

const Footer = () => {
  return (
    <footer className="py-1 bg-background border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-foreground/80 text-sm">
          &copy; {new Date().getFullYear()} Jude Akinwale.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
