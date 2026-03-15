import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function Slide27_JCurve() {
  return (
    <SlideShell bg="gradient" sectionLabel="DEMOS">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          The <span className="text-gradient-warm">J-Curve</span> of AI Adoption
        </h2>
        <p className="text-base text-white/35 mb-10">Every new tool has a dip before the payoff.</p>
      </FadeUp>

      {/* J-Curve visualization */}
      <FadeIn delay={0.3}>
        <div className="relative max-w-4xl w-full h-72 mb-8">
          {/* Axes */}
          <div className="absolute left-12 top-0 bottom-10 w-px bg-white/10" />
          <div className="absolute left-12 bottom-10 right-0 h-px bg-white/10" />

          {/* Y-axis label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[9px] tracking-[0.25em] uppercase text-white/20 font-semibold whitespace-nowrap">
            Productivity
          </div>

          {/* X-axis label */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.25em] uppercase text-white/20 font-semibold">
            Time
          </div>

          {/* Baseline dashed */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute left-12 right-0 h-px border-t border-dashed border-white/8"
            style={{ top: '35%', transformOrigin: 'left' }}
          />
          <div className="absolute right-2 text-[9px] text-white/15" style={{ top: '33%' }}>
            baseline
          </div>

          {/* J-Curve SVG */}
          <svg
            className="absolute left-12 top-0 right-0 bottom-10"
            viewBox="0 0 600 220"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Glow underneath */}
            <motion.path
              d="M 0,70 C 40,72 80,90 140,150 C 180,185 200,195 230,195 C 260,195 300,180 360,120 C 420,60 480,20 560,5"
              fill="none"
              stroke="url(#jGlow)"
              strokeWidth="30"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.6, ease: 'easeOut' }}
              style={{ filter: 'blur(20px)' }}
            />

            {/* Main curve */}
            <motion.path
              d="M 0,70 C 40,72 80,90 140,150 C 180,185 200,195 230,195 C 260,195 300,180 360,120 C 420,60 480,20 560,5"
              fill="none"
              stroke="url(#jGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.6, ease: 'easeOut' }}
            />

            <defs>
              <linearGradient id="jGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#ef4444" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="jGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
                <stop offset="40%" stopColor="#ef4444" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Annotations */}
          {/* Dip label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="absolute flex items-start gap-2"
            style={{ left: '30%', top: '72%' }}
          >
            <TrendingDown className="w-3.5 h-3.5 text-red-400/70 mt-0.5" />
            <div>
              <p className="text-[11px] font-bold text-red-400/80">The Trough</p>
              <p className="text-[9px] text-white/25 max-w-[120px] leading-snug">
                Learning, prompting, fixing. Slower at first.
              </p>
            </div>
          </motion.div>

          {/* Rise label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="absolute flex items-start gap-2"
            style={{ right: '8%', top: '8%' }}
          >
            <TrendingUp className="w-3.5 h-3.5 text-amber-400 mt-0.5" />
            <div>
              <p className="text-[11px] font-bold text-amber-400">Exponential</p>
              <p className="text-[9px] text-white/25 max-w-[120px] leading-snug">
                10x productivity. Compounding returns.
              </p>
            </div>
          </motion.div>

          {/* "You are here" marker at the trough */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, type: 'spring', stiffness: 200, damping: 15 }}
            className="absolute"
            style={{ left: '42%', top: '78%' }}
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-3 h-3 rounded-full bg-amber-400/40"
              />
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/30" />
              <div className="absolute top-5 -left-6 text-[10px] text-amber-400 font-bold whitespace-nowrap">
                You are here
              </div>
            </div>
          </motion.div>
        </div>
      </FadeIn>

      {/* Key message */}
      <FadeUp delay={2.5}>
        <div className="glass rounded-xl p-5 max-w-2xl border-l-2 border-amber-500/40">
          <p className="text-base text-white/60 font-medium">
            You have to <span className="text-amber-400 font-bold">push through the dip</span>.
            The productivity gains on the other side are real, but they require persistence.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
