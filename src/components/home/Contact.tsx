import React, { useMemo } from "react";
import TerminalStartIcon from "../common/ TerminalStartIcon";
import TitleText from "../common/TitleText";
import Button from "../common/Button";
import { UserContact } from "@/types/user";

interface ContactProps {
  contactInfo?: UserContact;
}
const Contact: React.FC<ContactProps> = ({ contactInfo = {} }) => {
  const email = contactInfo?.Email;
  const contactLinks = useMemo(
    () =>
      Object.entries(contactInfo)
        .filter(
          ([key, value]) =>
            !key?.toLowerCase()?.includes("email") && !!value && value !== "#"
        )
        ?.map(([key, value]) => {
          return {
            label: key,
            href: value,
          };
        }),
    [contactInfo]
  );

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl grid gap-8 mx-auto px-8">
        <div className="flex items-center gap-4">
          <TerminalStartIcon />
          <TitleText text="Contact Me" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-background border-4 border-accent">
          <div className="p-8 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-accent">
            <h3 className="text-[clamp(3rem,6vw,4rem)] font-archivo uppercase mb-8 leading-none">
              Ready to Deploy.
            </h3>
            <p className="text-xl mb-12 text-foreground/80">
              Whether you’re dealing with high-frequency trades or complex
              enterprise architecture, I can help build systems that scale.
            </p>
            <Button
              href={email ? `mailto:${email}` : "#"}
              variant="primary"
              className={!email ? "cursor-not-allowed opacity-50" : ""}
            >
              Send Email
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow flex flex-col font-archivo text-3xl md:text-4xl lg:text-5xl">
              {contactLinks?.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center px-8 border-b border-accent/40 transition-all duration-200 hover:text-accent hover:bg-accent/10 hover:pl-12"
                >
                  {label.toUpperCase()} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
