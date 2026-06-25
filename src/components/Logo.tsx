import * as React from "react";

/** Marca: terminal con prompt ">" y cursor, en gradiente púrpura. */
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diegowritescode"
    >
      <defs>
        <linearGradient id="dwc-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c8a2ff" />
          <stop offset="1" stopColor="#8957e5" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="#161b22" stroke="url(#dwc-grad)" strokeWidth="2" />
      <path
        d="M14 18L20 24L14 30"
        stroke="url(#dwc-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="24" y="28" width="11" height="3" rx="1.5" fill="url(#dwc-grad)" />
    </svg>
  );
}
