const retroGridKeyframes = `
@keyframes retro-grid-scroll {
  0% { transform: perspective(400px) rotateX(var(--grid-angle)) translateY(0); }
  100% { transform: perspective(400px) rotateX(var(--grid-angle)) translateY(var(--cell-size)); }
}
`;

export default function RetroGrid({
  angle = 65,
  cellSize = 60,
  opacity = 0.3,
  color = "rgba(59,130,246,0.3)",
  className = "",
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        "--grid-angle": `${angle}deg`,
        "--cell-size": `${cellSize}px`,
        perspective: "400px",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: retroGridKeyframes }} />
      <div
        className="absolute inset-0"
        style={{
          width: "200%",
          height: "200%",
          left: "-50%",
          top: "0%",
          transformOrigin: "center top",
          animation: "retro-grid-scroll 2s linear infinite",
          backgroundImage: `
            linear-gradient(to right, ${color} 1px, transparent 1px),
            linear-gradient(to bottom, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          opacity,
          willChange: "transform",
        }}
      />
    </div>
  );
}
