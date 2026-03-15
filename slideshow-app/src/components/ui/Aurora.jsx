import { useMemo } from "react";

const auroraKeyframes = `
@keyframes aurora-shift-1 {
  0%, 100% { transform: translateX(-20%) translateY(-10%) rotate(0deg) scale(1); }
  25% { transform: translateX(10%) translateY(-20%) rotate(5deg) scale(1.1); }
  50% { transform: translateX(20%) translateY(5%) rotate(-3deg) scale(0.95); }
  75% { transform: translateX(-10%) translateY(10%) rotate(8deg) scale(1.05); }
}
@keyframes aurora-shift-2 {
  0%, 100% { transform: translateX(15%) translateY(10%) rotate(0deg) scale(1.05); }
  25% { transform: translateX(-15%) translateY(-5%) rotate(-6deg) scale(0.9); }
  50% { transform: translateX(-25%) translateY(-15%) rotate(4deg) scale(1.1); }
  75% { transform: translateX(10%) translateY(5%) rotate(-2deg) scale(1); }
}
@keyframes aurora-shift-3 {
  0%, 100% { transform: translateX(5%) translateY(-15%) rotate(3deg) scale(0.95); }
  25% { transform: translateX(20%) translateY(10%) rotate(-5deg) scale(1.05); }
  50% { transform: translateX(-10%) translateY(15%) rotate(7deg) scale(1); }
  75% { transform: translateX(-20%) translateY(-5%) rotate(-4deg) scale(1.1); }
}
@keyframes aurora-shift-4 {
  0%, 100% { transform: translateX(-10%) translateY(5%) rotate(-2deg) scale(1.1); }
  25% { transform: translateX(5%) translateY(15%) rotate(4deg) scale(0.95); }
  50% { transform: translateX(15%) translateY(-10%) rotate(-6deg) scale(1.05); }
  75% { transform: translateX(-5%) translateY(-20%) rotate(3deg) scale(1); }
}
`;

export default function Aurora({
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
  speed = 1,
  blur = 80,
  className = "",
}) {
  const layers = useMemo(() => {
    const baseDurations = [8, 12, 16, 20];
    const animations = [
      "aurora-shift-1",
      "aurora-shift-2",
      "aurora-shift-3",
      "aurora-shift-4",
    ];

    // Build 4 layers from the provided colors
    return Array.from({ length: 4 }, (_, i) => {
      const c1 = colors[i % colors.length];
      const c2 = colors[(i + 1) % colors.length];
      const duration = baseDurations[i] / speed;

      return {
        gradient: `radial-gradient(ellipse 80% 50% at ${30 + i * 15}% ${40 + i * 10}%, ${c1}66 0%, ${c2}33 50%, transparent 80%)`,
        animation: `${animations[i]} ${duration}s ease-in-out infinite`,
        opacity: 0.6 - i * 0.08,
      };
    });
  }, [colors, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: auroraKeyframes }} />
      {layers.map((layer, i) => (
        <div
          key={i}
          className="absolute -inset-[50%]"
          style={{
            background: layer.gradient,
            animation: layer.animation,
            opacity: layer.opacity,
            filter: `blur(${blur}px)`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
