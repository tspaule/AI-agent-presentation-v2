import { useMemo } from "react";

const rippleKeyframes = `
@keyframes ripple-expand {
  0% {
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
`;

export default function Ripple({
  count = 3,
  color = "rgba(59,130,246,0.15)",
  duration = 3,
  className = "",
}) {
  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: (i / count) * duration,
      size: 600 + i * 150,
    }));
  }, [count, duration]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: rippleKeyframes }} />
      {rings.map((ring) => (
        <div
          key={ring.id}
          className="absolute rounded-full"
          style={{
            top: "50%",
            left: "50%",
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            border: `1px solid ${color}`,
            animation: `ripple-expand ${duration}s ease-out ${ring.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
