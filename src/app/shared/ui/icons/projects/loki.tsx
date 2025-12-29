import type React from "react";
import type { SvgIconProps } from "@/app/shared/types/main";

const LokiIcon: React.FC<SvgIconProps> = ({ size = 28, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <rect
        x="6"
        y="8"
        width="14"
        height="16"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="9"
        y1="12"
        x2="17"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="16"
        x2="17"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="20"
        x2="15"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M22 9c2 0 4 1.5 4 4s-1.5 4-3 4  -3 1.5 -3 4 1.5 4 3 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default LokiIcon;
