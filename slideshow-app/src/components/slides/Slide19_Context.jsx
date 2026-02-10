import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const contextItems = [
  "Client's chart of accounts",
  '247 bank transactions this month',
  'Cash-basis accounting preference',
  'Fiscal year ends June 30',
];

export default function Slide19_Context() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-emerald-500/30">5</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Context — <span className="text-gradient-emerald">Task-Specific Info</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-4">Dynamic, relevant information for this particular job.</p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass rounded-xl px-5 py-3 inline-flex items-center gap-3 mb-8 border border-amber-500/15">
          <span className="text-sm text-white/60">
            <span className="text-amber-300 font-semibold">Sound familiar?</span> "Copying and pasting everything into GPT" — this is context loading, and agents solve it.
          </span>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <FadeUp delay={0.3}>
          <div className="glass rounded-2xl p-6 border border-emerald-500/15 bg-gradient-to-br from-emerald-500/5 to-transparent">
            <div className="text-xs tracking-[0.2em] uppercase text-emerald-400/60 font-semibold mb-4">Example Context for a Bookkeeping Agent</div>
            <StaggerChildren stagger={0.1} className="space-y-3">
              {contextItems.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="flex items-center h-full">
            <p className="text-xl text-white/45 leading-relaxed font-light">
              The best AI is one that already knows <span className="text-emerald-300/80 font-semibold">your world</span>.
            </p>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
