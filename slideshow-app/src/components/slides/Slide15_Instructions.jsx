import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';

const codeLines = [
  '"You are a senior financial controller.',
  'Be precise and conservative.',
  'Always flag discrepancies over $500.',
  'Never auto-approve payments above $10,000.',
  'Explain your reasoning for every decision."',
];

export default function Slide15_Instructions() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-purple-500/30">2</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Instructions — <span className="text-gradient-purple">Identity & Rules</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-10">The persistent definition of who the agent is — its personality, standards, and guardrails.</p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <FadeUp delay={0.3}>
          <div className="rounded-2xl bg-dark-800/80 border border-white/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              <span className="ml-2 text-xs text-white/20 font-mono">system_prompt.md</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  className="text-emerald-300/70 mb-1"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="flex items-center h-full">
            <p className="text-lg text-white/45 leading-relaxed">
              Think of instructions as the agent's <span className="text-white/80 font-semibold">training and professional standards</span> — not just what it can do, but <span className="text-purple-300/80 font-semibold">how it should behave</span>.
            </p>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
