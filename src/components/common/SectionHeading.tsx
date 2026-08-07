import React from "react";
import TitleText from "./TitleText";
import TerminalStartIcon from "./ TerminalStartIcon";

interface SectionHeadingProps {
  heading: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      <TerminalStartIcon />
      <TitleText text={heading} />
    </div>
  );
};

export default SectionHeading;
