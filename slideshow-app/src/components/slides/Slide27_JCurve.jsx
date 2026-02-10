import { motion } from 'framer-motion';
import { FadeUp, FadeIn } from '../AnimatedText';

export default function Slide27_JCurve() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      <motion.div
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[150px] top-1/4 right-1/4"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 w-full">
        <FadeUp>
          <p className="text-xs tracking-[0.2em] uppercase text-blue-400/50 font-semibold mb-2">The Recursive Leap</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Software is building <span className="text-gradient-blue">software</span>
          </h2>
          <p className="text-base text-white/35 mb-10">Improvements are becoming recursive.</p>
        </FadeUp>

        {/* J-Curve visualization */}
        <FadeUp delay={0.3}>
          <div className="relative h-64 max-w-3xl mb-8">
            {/* Axes */}
            <div className="absolute left-8 top-0 bottom-8 w-px bg-white/10" />
            <div className="absolute left-8 bottom-8 right-0 h-px bg-white/10" />

            {/* Labels */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.2em] uppercase text-white/20 font-semibold">Capability</div>

            {/* Year labels */}
            {['2023', '2024', '2025', '2026', 'AGI?'].map((year, i) => (
              <div key={year} className="absolute bottom-0 text-[10px] text-white/20" style={{ left: `${12 + i * 20}%` }}>
                {year}
              </div>
            ))}

            {/* J-Curve path */}
            <svg className="absolute inset-0 left-8 bottom-8" viewBox="0 0 500 200" preserveAspectRatio="none">
              <motion.path
                d="M 0,180 C 100,170 200,150 300,100 C 350,75 400,30 500,0"
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* You are here marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
              className="absolute"
              style={{ left: '68%', top: '35%' }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30" />
                <div className="absolute top-5 -left-8 text-[10px] text-cyan-400 font-semibold whitespace-nowrap">
                  ▼ You are here
                </div>
              </div>
            </motion.div>
          </div>
        </FadeUp>

        <FadeUp delay={1.2}>
          <p className="text-lg text-white/50 font-medium text-center">
            <span className="text-white/80 font-bold">Software is building software</span> to speed up the change curve.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
