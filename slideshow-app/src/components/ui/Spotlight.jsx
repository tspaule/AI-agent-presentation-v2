import { useRef, useEffect, useCallback, useState } from "react";

export default function Spotlight({
  size = 400,
  color = "rgba(59,130,246,0.08)",
  className = "",
}) {
  const containerRef = useRef(null);
  const positionRef = useRef({ x: -size, y: -size });
  const targetRef = useRef({ x: -size, y: -size });
  const animFrameRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const lerp = useCallback((a, b, t) => a + (b - a) * t, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spotlightEl = el.querySelector("[data-spotlight]");

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      targetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const animate = () => {
      positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.15);
      positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.15);

      if (spotlightEl) {
        spotlightEl.style.background = `radial-gradient(${size}px circle at ${positionRef.current.x}px ${positionRef.current.y}px, ${color}, transparent 70%)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [size, color, lerp, visible]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        data-spotlight
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
