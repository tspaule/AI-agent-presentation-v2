const shimmerKeyframes = `
@keyframes shimmer-sweep {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
`;

export default function ShimmerText({
  children,
  shimmerColor = "rgba(255,255,255,0.3)",
  duration = 2.5,
  className = "",
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: shimmerKeyframes }} />
      <span
        className={`inline-block ${className}`}
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            currentColor 0%,
            currentColor 35%,
            ${shimmerColor} 50%,
            currentColor 65%,
            currentColor 100%
          )`,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `shimmer-sweep ${duration}s ease-in-out infinite`,
          willChange: "background-position",
        }}
      >
        {children}
      </span>
    </>
  );
}
