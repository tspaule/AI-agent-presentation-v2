import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn } from '../AnimatedText';
import { User, Bot, ArrowDown, ArrowRight, Clock, Zap } from 'lucide-react';

const manualSteps = [
  'Read email request',
  'Open spreadsheet',
  'Pull data manually',
  'Write analysis',
  'Send reply',
];

const agentSteps = [
  { label: 'Receive trigger', parallel: false },
  { label: 'Pull data + Search context', parallel: true },
  { label: 'Analyse + Draft response', parallel: true },
  { label: 'Review + Send', parallel: false },
];

export default function Slide13_HumanVsAgent() {
  return (
    <SlideShell bg="blue" sectionLabel="THEORY">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-12">
          Without <span className="text-white/30">vs</span> With{' '}
          <span className="text-gradient-blue">Agents</span>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left: Without Agents */}
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-8 border border-white/5 h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <User className="w-5 h-5 text-white/40" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white/50">Without Agents</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3 h-3 text-white/20" />
                  <span className="text-xs text-white/25">Sequential, manual</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {manualSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-6 h-6 rounded-md bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                      <span className="text-[10px] text-white/20 font-mono">{i + 1}</span>
                    </div>
                    <span className="text-sm text-white/35">{step}</span>
                  </div>
                  {i < manualSteps.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3 h-3 text-white/10" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* Right: With Agents */}
        <SlideIn from="right" delay={0.4}>
          <div className="glass rounded-2xl p-8 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 glow-blue h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-blue-300/80">With Agents</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Zap className="w-3 h-3 text-blue-400/50" />
                  <span className="text-xs text-blue-400/40">Parallel, automated</span>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {agentSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 py-2">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${step.parallel ? 'bg-blue-500/15 border border-blue-500/25' : 'bg-blue-500/8 border border-blue-500/15'}`}>
                      <span className="text-[10px] text-blue-400/60 font-mono">{i + 1}</span>
                    </div>
                    <span className="text-sm text-white/70">{step.label}</span>
                    {step.parallel && (
                      <span className="text-[9px] uppercase tracking-wider text-cyan-400/40 font-semibold ml-auto">parallel</span>
                    )}
                  </div>
                  {i < agentSteps.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3 h-3 text-blue-400/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-6 pt-4 border-t border-blue-500/10"
            >
              <p className="text-xs text-blue-300/40 text-center">
                4 steps instead of 5. Parallel execution. No waiting.
              </p>
            </motion.div>
          </div>
        </SlideIn>
      </div>
    </SlideShell>
  );
}
