import { useState, useEffect, useCallback, useId } from "react";

const beamKeyframes = `
@keyframes beam-dash {
  0% { stroke-dashoffset: 20; }
  100% { stroke-dashoffset: 0; }
}
`;

export default function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  color = "#3b82f6",
  duration = 3,
  curvature = 0,
  className = "",
}) {
  const id = useId();
  const gradientId = `beam-gradient-${id}`;
  const [path, setPath] = useState("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updatePath = useCallback(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
    const toX = toRect.left + toRect.width / 2 - containerRect.left;
    const toY = toRect.top + toRect.height / 2 - containerRect.top;

    setDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });

    if (curvature === 0) {
      setPath(`M ${fromX} ${fromY} L ${toX} ${toY}`);
    } else {
      const midX = (fromX + toX) / 2;
      const midY = (fromY + toY) / 2;

      // Perpendicular offset for curve control point
      const dx = toX - fromX;
      const dy = toY - fromY;
      const len = Math.sqrt(dx * dx + dy * dy);
      const nx = -dy / len;
      const ny = dx / len;

      const cpX = midX + nx * curvature;
      const cpY = midY + ny * curvature;

      setPath(`M ${fromX} ${fromY} Q ${cpX} ${cpY} ${toX} ${toY}`);
    }
  }, [containerRef, fromRef, toRef, curvature]);

  useEffect(() => {
    updatePath();

    const observer = new ResizeObserver(updatePath);
    if (containerRef?.current) observer.observe(containerRef.current);

    window.addEventListener("resize", updatePath);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [updatePath, containerRef]);

  if (!path) return null;

  return (
    <svg
      className={`absolute inset-0 pointer-events-none ${className}`}
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style dangerouslySetInnerHTML={{ __html: beamKeyframes }} />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="30%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background trace line */}
      <path
        d={path}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.1"
        fill="none"
      />

      {/* Animated beam */}
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="10 10"
        style={{
          animation: `beam-dash ${duration}s linear infinite`,
          filter: `drop-shadow(0 0 4px ${color})`,
          willChange: "stroke-dashoffset",
        }}
      />

      {/* Glow overlay */}
      <path
        d={path}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.08"
        strokeDasharray="10 10"
        style={{
          animation: `beam-dash ${duration}s linear infinite`,
        }}
      />
    </svg>
  );
}
