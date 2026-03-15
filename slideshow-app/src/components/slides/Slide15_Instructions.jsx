import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';
import { FileText } from 'lucide-react';

const codeLines = [
  { text: 'role:', value: '"Senior Financial Controller"', color: 'text-purple-300/70' },
  { text: 'tone:', value: '"precise, conservative"', color: 'text-purple-300/60' },
  { text: 'rules:', value: '', color: 'text-white/40' },
  { text: '  - ', value: '"Flag discrepancies over $500"', color: 'text-emerald-300/60' },
  { text: '  - ', value: '"Never auto-approve > $10,000"', color: 'text-emerald-300/60' },
  { text: '  - ', value: '"Explain reasoning for every decision"', color: 'text-emerald-300/60' },
  { text: 'guardrails:', value: '', color: 'text-white/40' },
  { text: '  - ', value: '"Escalate uncertain classifications"', color: 'text-amber-300/60' },
  { text: '  - ', value: '"Never fabricate transaction data"', color: 'text-red-300/60' },
];

export default function Slide15_Instructions() {
  return (
    <SlideShell bg="purple" sectionLabel="THEORY  /  INSTRUCTIONS">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-10">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-purple-500/15 leading-none">02</span>
              <FileText className="w-12 h-12 text-purple-400/60" strokeWidth={1.2} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-purple">Instructions</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                Identity, rules, personality — the agent's DNA.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-8 max-w-5xl">
          {/* Code block */}
          <FadeUp delay={0.3}>
            <div className="rounded-2xl bg-[#0d0d0d] border border-white/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                <span className="ml-2 text-xs text-white/15 font-mono">system_prompt.yml</span>
              </div>
              <div className="p-5 font-mono text-sm leading-loose">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                    className="flex"
                  >
                    <span className="text-white/25">{line.text}</span>
                    <span className={line.color}>{line.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Insight */}
          <FadeUp delay={0.8}>
            <div className="flex flex-col justify-center h-full gap-6">
              <div className="glass rounded-xl p-5 border-l-2 border-purple-500/40">
                <p className="text-base text-white/50 leading-relaxed">
                  Instructions define <span className="text-purple-300/80 font-semibold">who the agent is</span>, not just what it does. They set the standards, the tone, and the boundaries.
                </p>
              </div>
              <div className="glass rounded-xl p-5 border-l-2 border-purple-500/20">
                <p className="text-sm text-white/35 leading-relaxed">
                  Think of it as hiring someone and giving them their job description, compliance handbook, and cultural values — all at once.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </SlideShell>
  );
}
