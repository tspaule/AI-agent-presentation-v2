import { useId } from "react";

export default function DotPattern({
  spacing = 20,
  radius = 1,
  color = "rgba(255,255,255,0.15)",
  className = "",
}) {
  const id = useId();
  const patternId = `dot-pattern-${id}`;

  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={radius}
              fill={color}
            />
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
}
