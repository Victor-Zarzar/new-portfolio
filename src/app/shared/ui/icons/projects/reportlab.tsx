import type React from "react";
import type { SvgIconProps } from "@/app/shared/types/main";

const ReportLabIcon: React.FC<SvgIconProps> = ({ size = 28, ...props }) => {
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
        <rect
          x="48"
          y="32"
          width="160"
          height="192"
          fill="#FFFFFF"
          stroke="#E0E0E0"
          strokeWidth="2"
          rx="8"
        />

        <rect x="64" y="48" width="128" height="4" fill="#1976D2" rx="2" />
        <rect x="64" y="58" width="96" height="3" fill="#666666" rx="1" />
        <rect x="64" y="66" width="112" height="3" fill="#666666" rx="1" />

        <g transform="translate(70, 85)">
          <rect
            x="0"
            y="0"
            width="116"
            height="70"
            fill="#F5F5F5"
            stroke="#E0E0E0"
            strokeWidth="1"
            rx="4"
          />

          <rect x="10" y="50" width="12" height="15" fill="#4CAF50" />
          <rect x="28" y="35" width="12" height="30" fill="#2196F3" />
          <rect x="46" y="45" width="12" height="20" fill="#FF9800" />
          <rect x="64" y="25" width="12" height="40" fill="#9C27B0" />
          <rect x="82" y="40" width="12" height="25" fill="#F44336" />

          <line
            x1="8"
            y1="65"
            x2="104"
            y2="65"
            stroke="#CCCCCC"
            strokeWidth="1"
          />
          <line
            x1="8"
            y1="50"
            x2="104"
            y2="50"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          />
          <line
            x1="8"
            y1="35"
            x2="104"
            y2="35"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          />
          <line
            x1="8"
            y1="20"
            x2="104"
            y2="20"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          />
        </g>

        <rect x="64" y="170" width="120" height="3" fill="#666666" rx="1" />
        <rect x="64" y="178" width="100" height="3" fill="#666666" rx="1" />
        <rect x="64" y="186" width="110" height="3" fill="#666666" rx="1" />
        <rect x="64" y="194" width="85" height="3" fill="#666666" rx="1" />
        <rect x="64" y="202" width="95" height="3" fill="#666666" rx="1" />

        <circle cx="188" cy="52" r="16" fill="#D32F2F" />
        <text
          x="188"
          y="58"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="bold"
        >
          PDF
        </text>

        <g transform="translate(40, 40)" opacity="0.3">
          <path
            d="M20 10 L20 30 L15 50 L35 50 L30 30 L30 10 Z"
            fill="#FF5722"
            stroke="#D84315"
            strokeWidth="2"
          />
          <circle cx="25" cy="40" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="22" cy="35" r="2" fill="#FFFFFF" opacity="0.5" />
          <circle cx="28" cy="43" r="2" fill="#FFFFFF" opacity="0.5" />
        </g>
      </g>
    </svg>
  );
};

export default ReportLabIcon;
