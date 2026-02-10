import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';

const steps = [
  'Gather documents',
  'Set up chart of accounts',
  'Connect bank feeds',
  'Run categorization',
  'Flag exceptions',
];

export default function Slide21_Orchestration() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-red-500/30">7</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Orchestration — <span className="text-gradient-warm">Planning & Sequencing</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-8">How the agent decides what to do, in what order.</p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="text-xs tracking-[0.2em] uppercase text-amber-400/50 font-semibold mb-4">Example: New Client Onboarding</div>
      </FadeUp>

      <div className="flex items-center gap-2 max-w-5xl mb-10 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="glass rounded-xl px-5 py-3 border border-amber-500/15 bg-gradient-to-b from-amber-500/5 to-transparent">
              <span className="text-sm font-semibold text-white/80">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-white/20 text-lg animate-bounce-right"
              >→</motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <FadeUp delay={1}>
        <div className="glass rounded-xl p-5 max-w-5xl">
          <div className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-2">The Key Difference</div>
          <p className="text-sm text-white/50 leading-relaxed">
            A script follows fixed steps regardless of what happens. An <span className="text-white/80 font-semibold">orchestrated agent reasons dynamically</span> — if the bank feed fails, it adapts. If documents are missing, it asks. It plans, re-plans, and recovers.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
