import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Sparkles, Hammer, ArrowRight } from 'lucide-react';

const comparisons = [
  { skill: 'What to do', tool: 'How to do it' },
  { skill: 'Carry judgment and process', tool: 'Single-purpose actions' },
  { skill: 'Know when to escalate', tool: 'No awareness of context' },
  { skill: 'Reusable expertise packages', tool: 'Discrete, standalone verbs' },
];

const examples = [
  { skill: '"Reconcile bank statement"', tool: '"Read CSV" + "Query DB" + "Write report"' },
  { skill: '"Onboard new client"', tool: '"Send email" + "Create folder" + "Update CRM"' },
];

export default function Slide18_SkillsVsTools() {
  return (
    <SlideShell bg="gradient" sectionLabel="THEORY">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          Skills <span className="text-white/20">vs</span> Tools
        </h2>
        <p className="text-xl text-white/25 mb-12">
          <span className="text-cyan-300/60 font-semibold">Skills = Knowledge.</span>{' '}
          <span className="text-amber-300/60 font-semibold">Tools = Hands.</span>
        </p>
      </FadeUp>

      <div className="max-w-5xl w-full">
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_40px_1fr] gap-4 mb-4 px-2">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400/60" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.25em] uppercase text-cyan-400/60 font-semibold">Skills</span>
            </div>
          </FadeUp>
          <div />
          <FadeUp delay={0.15}>
            <div className="flex items-center gap-2">
              <Hammer className="w-4 h-4 text-amber-400/60" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.25em] uppercase text-amber-400/60 font-semibold">Tools</span>
            </div>
          </FadeUp>
        </div>

        {/* Comparison rows */}
        <StaggerChildren stagger={0.08} className="space-y-3 mb-8">
          {comparisons.map((row, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-[1fr_40px_1fr] gap-4 items-center">
                <div className="glass rounded-lg px-5 py-3.5 border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 to-transparent">
                  <span className="text-sm text-white/70 font-medium">{row.skill}</span>
                </div>
                <div className="flex justify-center">
                  <div className="w-5 h-px bg-white/10" />
                </div>
                <div className="glass rounded-lg px-5 py-3.5 border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent">
                  <span className="text-sm text-white/70 font-medium">{row.tool}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Examples: skills invoke tools */}
        <FadeUp delay={0.7}>
          <div className="border-t border-white/5 pt-6">
            <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-semibold mb-4">Skills invoke tools</p>
            <div className="space-y-3">
              {examples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div className="glass rounded-lg px-4 py-2 border border-cyan-500/15 shrink-0">
                    <span className="text-sm text-cyan-300/60 font-mono">{ex.skill}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/15 shrink-0" />
                  <div className="glass rounded-lg px-4 py-2 border border-amber-500/15">
                    <span className="text-xs text-amber-300/50 font-mono">{ex.tool}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
