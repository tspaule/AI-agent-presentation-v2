import { useMemo } from "react";

const meteorKeyframes = `
@keyframes meteor-fall {
  0% {
    transform: translateY(0) translateX(0) rotate(215deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateY(600px) translateX(-300px) rotate(215deg);
    opacity: 0;
  }
}
`;

export default function Meteors({ count = 20, className = "" }) {
  const meteors = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const width = Math.random() * 1 + 1;
      const height = Math.random() * 70 + 80;
      const top = Math.random() * 50 - 20;
      const left = Math.random() * 100 + 10;
      const delay = Math.random() * 8;
      const duration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.4 + 0.2;

      return {
        id: i,
        style: {
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${width}px`,
          height: `${height}px`,
          background: `linear-gradient(to bottom, rgba(255,255,255,${opacity}), rgba(59,130,246,${opacity * 0.6}), transparent)`,
          borderRadius: "100px",
          animation: `meteor-fall ${duration}s linear ${delay}s infinite`,
          opacity: 0,
          willChange: "transform, opacity",
          boxShadow: `0 0 ${width * 2}px rgba(59,130,246,0.3)`,
        },
      };
    });
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: meteorKeyframes }} />
      {meteors.map((meteor) => (
        <span key={meteor.id} style={meteor.style} />
      ))}
    </div>
  );
}
