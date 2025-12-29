import type React from "react";
import type { SvgIconProps } from "@/app/shared/types/main";

const PandasIcon: React.FC<SvgIconProps> = ({ size = 28, ...props }) => {
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
        <circle cx="128" cy="128" r="120" fill="#150458" />

        <circle cx="128" cy="135" r="45" fill="#FFFFFF" />

        <ellipse cx="118" cy="125" rx="12" ry="15" fill="#000000" />
        <ellipse cx="138" cy="125" rx="12" ry="15" fill="#000000" />
        <circle cx="120" cy="122" r="3" fill="#FFFFFF" />
        <circle cx="140" cy="122" r="3" fill="#FFFFFF" />

        <ellipse cx="128" cy="140" rx="4" ry="3" fill="#000000" />

        <path
          d="M128 145 Q123 150 118 148 Q128 155 138 148 Q133 150 128 145"
          fill="#000000"
        />

        <circle cx="100" cy="100" r="18" fill="#000000" />
        <circle cx="156" cy="100" r="18" fill="#000000" />
        <circle cx="102" cy="102" r="8" fill="#FFB6C1" />
        <circle cx="154" cy="102" r="8" fill="#FFB6C1" />

        <g transform="translate(80, 185)">
          <rect x="0" y="0" width="96" height="8" fill="#4CAF50" rx="2" />
          <rect x="0" y="12" width="72" height="8" fill="#2196F3" rx="2" />
          <rect x="0" y="24" width="84" height="8" fill="#FF9800" rx="2" />
          <rect x="0" y="36" width="60" height="8" fill="#9C27B0" rx="2" />
        </g>

        <text
          x="128"
          y="75"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="18"
          fontWeight="bold"
        >
          pd
        </text>
      </g>
    </svg>
  );
};

export default PandasIcon;
