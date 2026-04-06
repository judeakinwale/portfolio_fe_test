import React from "react";
import { ChevronRight } from "lucide-react";

const TerminalStartIcon = ({ className = "", size = 32 }) => {
  const colonSize = (size / 1.333)?.toFixed(2);
  const bottomPadding = (size / 8)?.toFixed(2);
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <ChevronRight size={size} strokeWidth={4} className="px-0" />
      <span
        className={`-ml-2 font-archivo font-black`}
        style={{
          paddingBottom: `${bottomPadding}px`,
          fontSize: `${colonSize}px`,
        }}
      >
        :
      </span>
    </span>
  );
};

export default TerminalStartIcon;
