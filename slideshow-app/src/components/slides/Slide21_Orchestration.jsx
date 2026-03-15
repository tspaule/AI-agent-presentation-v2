import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';
import { GitBranch, ArrowRight } from 'lucide-react';

const loopSteps = [
  { label: 'Plan', angle: -90, color: '#3b82f6' },
  { label: 'Execute', angle: -18, color: '#06b6d4' },
  { label: 'Observe', angle: 54, color: '#8b5cf6' },
  { label: 'Adjust', angle: 126, color: '#ec4899' },
  { label: 'Repeat', angle: 198, color: '#ef4444' },
];

export default function Slide21_Orchestration() {
  return (
    <SlideShell bg="gradient" sectionLabel="THEORY  /  ORCHESTRATION">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-8">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-red-500/15 leading-none">07</span>
              <GitBranch className="w-12 h-12 text-red-400/60" strokeWidth={1.2} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-warm">Orchestration</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                The agent's executive function. Plan, execute, observe, adjust, repeat.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-12 max-w-5xl items-center">
          {/* Circular loop diagram */}
          <FadeIn delay={0.4}>
            <div className="relative w-full aspect-square max-w-[360px] mx-auto">
              {/* Central ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute inset-[15%] rounded-full border border-white/5"
              />

              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[12%] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15), rgba(236,72,153,0.15), rgba(239,68,68,0.15), rgba(59,130,246,0.15))',
                  maskImage: 'radial-gradient(farthest-side, transparent 70%, black 72%, black 100%)',
                  WebkitMaskImage: 'radial-gradient(farthest-side, transparent 70%, black 72%, black 100%)',
                }}
              />

              {/* Direction arrows (circular) */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <motion.div
                  key={deg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg + 36}deg) translateY(-130px) rotate(90deg)`,
                  }}
                >
                  <ArrowRight className="w-3 h-3 text-white/20" />
                </motion.div>
              ))}

              {/* Step nodes around the circle */}
              {loopSteps.map((step, i) => {
                const rad = (step.angle * Math.PI) / 180;
                const radius = 42; // percentage
                const cx = 50 + radius * Math.cos(rad);
                const cy = 50 + radius * Math.sin(rad);

                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 200, damping: 20 }}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${cx}%`,
                      top: `${cy}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center border"
                      style={{ borderColor: `${step.color}33`, boxShadow: `0 0 20px ${step.color}15` }}
                    >
                      <span className="text-xs font-bold text-white/80">{step.label}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-center"
                >
                  <p className="text-xs text-white/20 uppercase tracking-widest">Agent</p>
                  <p className="text-xs text-white/20 uppercase tracking-widest">Loop</p>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right side: explanation */}
          <div className="flex flex-col gap-5">
            <FadeUp delay={0.8}>
              <div className="glass rounded-xl p-6 border-l-2 border-blue-500/30">
                <h4 className="text-sm font-bold text-white/70 mb-2">Not a script</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  A script follows fixed steps regardless of what happens. An orchestrated agent reasons dynamically — if something fails, it adapts.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={1}>
              <div className="glass rounded-xl p-6 border-l-2 border-purple-500/30">
                <h4 className="text-sm font-bold text-white/70 mb-2">The difference</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  Orchestration is what separates a chatbot from an agent. It is the ability to plan, re-plan, and recover autonomously.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
