import { useId } from "react";

export default function NoiseTexture({ opacity = 0.03, className = "" }) {
  const id = useId();
  const filterId = `noise-${id}`;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      style={{ opacity }}
    >
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
        />
      </svg>
    </div>
  );
}
