const borderBeamKeyframes = `
@keyframes border-beam-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default function BorderBeam({
  duration = 6,
  colorFrom = "#3b82f6",
  colorTo = "#06b6d4",
  size = 200,
  className = "",
  children,
}) {
  return (
    <div className={`relative ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: borderBeamKeyframes }} />

      {/* Outer wrapper with border mask */}
      <div
        className="absolute inset-0 rounded-[inherit] overflow-hidden"
        style={{ padding: "1px" }}
      >
        {/* Spinning conic gradient */}
        <div
          className="absolute"
          style={{
            width: `${size}%`,
            height: `${size}%`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 10%, ${colorTo} 20%, transparent 30%)`,
            animation: `border-beam-spin ${duration}s linear infinite`,
            willChange: "transform",
          }}
        />

        {/* Inner mask to create the border effect */}
        <div
          className="absolute inset-[1px] rounded-[inherit]"
          style={{ background: "inherit", backgroundColor: "var(--border-beam-bg, #0a0a0a)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
