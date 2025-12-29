import type React from "react";
import type { SvgIconProps } from "@/app/shared/types/main";

const DockerComposeIcon: React.FC<SvgIconProps> = ({ size = 28, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      className="hover:-translate-y-1"
      {...props}
    >
      <g>
        <g transform="translate(20, 30)">
          <rect x="0" y="30" width="16" height="12" fill="#0DB7ED" rx="1" />
          <rect x="18" y="30" width="16" height="12" fill="#0DB7ED" rx="1" />
          <rect x="36" y="30" width="16" height="12" fill="#0DB7ED" rx="1" />
          <rect x="18" y="16" width="16" height="12" fill="#0DB7ED" rx="1" />
          <rect x="36" y="16" width="16" height="12" fill="#0DB7ED" rx="1" />
          <rect x="36" y="2" width="16" height="12" fill="#0DB7ED" rx="1" />
          <path
            d="M56,36 C56,42 60,48 66,48 C72,48 76,42 76,36 C76,30 72,24 66,24 C60,24 56,30 56,36 Z"
            fill="#0DB7ED"
          />
          <path
            d="M0,48 L82,48 C84,54 78,60 72,60 L10,60 C4,60 -2,54 0,48 Z"
            fill="#0DB7ED"
          />
        </g>

        <g transform="translate(110, 80)">
          <rect x="0" y="30" width="16" height="12" fill="#2496ED" rx="1" />
          <rect x="18" y="30" width="16" height="12" fill="#2496ED" rx="1" />
          <rect x="36" y="30" width="16" height="12" fill="#2496ED" rx="1" />
          <rect x="18" y="16" width="16" height="12" fill="#2496ED" rx="1" />
          <rect x="36" y="16" width="16" height="12" fill="#2496ED" rx="1" />
          <rect x="36" y="2" width="16" height="12" fill="#2496ED" rx="1" />
          <path
            d="M56,36 C56,42 60,48 66,48 C72,48 76,42 76,36 C76,30 72,24 66,24 C60,24 56,30 56,36 Z"
            fill="#2496ED"
          />
          <path
            d="M0,48 L82,48 C84,54 78,60 72,60 L10,60 C4,60 -2,54 0,48 Z"
            fill="#2496ED"
          />
        </g>

        <path
          d="M102,80 L108,86 L102,92 M108,86 L120,86"
          stroke="#4A90E2"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="200" cy="50" r="25" fill="#4A90E2" />
        <text
          x="200"
          y="56"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="14"
          fontWeight="bold"
        >
          DC
        </text>
      </g>
    </svg>
  );
};

export default DockerComposeIcon;
