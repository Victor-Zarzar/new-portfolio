import type React from "react";
import type { SvgIconProps } from "@/app/shared/types/main";

const KotlinIcon: React.FC<SvgIconProps> = ({ size = 28, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className="hover:-translate-y-1"
      {...props}
    >
      <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60" />
        <path
          fill="url(#skillIconsKotlinDark0)"
          d="M218 218H38V38h180l-90 90l90 90Z"
        />
        <defs>
          <linearGradient
            id="skillIconsKotlinDark0"
            x1="218"
            x2="38"
            y1="38"
            y2="218"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".003" stopColor="#E44857" />
            <stop offset=".469" stopColor="#C711E1" />
            <stop offset="1" stopColor="#7F52FF" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};

export default KotlinIcon;
