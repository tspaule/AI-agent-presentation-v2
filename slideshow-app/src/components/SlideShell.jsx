import { motion } from 'framer-motion';

const backgrounds = {
  default: 'bg-black',
  gradient: 'bg-gradient-to-br from-black via-dark-900 to-black',
  blue: 'bg-gradient-to-br from-black via-blue-950/20 to-black',
  purple: 'bg-gradient-to-br from-black via-purple-950/20 to-black',
  warm: 'bg-gradient-to-br from-black via-amber-950/15 to-black',
  cyan: 'bg-gradient-to-br from-black via-cyan-950/20 to-black',
  matrix: 'bg-gradient-to-br from-black via-emerald-950/15 to-black',
};

export default function SlideShell({
  children,
  bg = 'default',
  showNoise = true,
  showVignette = true,
  sectionLabel = '',
  className = '',
}) {
  return (
    <div
      className={`relative w-full h-full ${backgrounds[bg] || backgrounds.default} overflow-hidden ${className}`}
    >
      {/* Noise texture overlay */}
      {showNoise && (
        <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      )}

      {/* Vignette */}
      {showVignette && (
        <div className="vignette absolute inset-0 pointer-events-none z-[2]" />
      )}

      {/* Section label top-left */}
      {sectionLabel && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute top-6 left-10 z-10"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-semibold">
            {sectionLabel}
          </span>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-start px-10 lg:px-16 py-8 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
