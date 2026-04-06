import React from "react";

interface TitleTextProps {
  text?: React.ReactNode;
}

const TitleText: React.FC<TitleTextProps> = ({ text }) => {
  return (
    <h1 className="inline-block text-[clamp(3rem,6vw,5rem)] uppercase font-archivo text-stroke-white leading-[0.9]">
      {text}
    </h1>
  );
};

export default TitleText;
