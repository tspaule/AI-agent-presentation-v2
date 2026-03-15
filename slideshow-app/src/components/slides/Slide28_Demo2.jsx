import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp } from '../AnimatedText';
import { Mic, FileText, Cpu, Calendar, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Voice Note',
    desc: 'Speak naturally into Discord',
    color: 'text-amber-400',
    border: 'border-amber-500/20 from-amber-500/8',
  },
  {
    icon: FileText,
    title: 'Transcription',
    desc: 'Speech to structured text',
    color: 'text-orange-400',
    border: 'border-orange-500/20 from-orange-500/8',
  },
  {
    icon: Cpu,
    title: 'Task Extraction',
    desc: 'Agent identifies actions and recipients',
    color: 'text-red-400',
    border: 'border-red-500/20 from-red-500/8',
  },
  {
    icon: Calendar,
    title: 'Calendar Event',
    desc: 'Meeting created with attendees',
    color: 'text-rose-400',
    border: 'border-rose-500/20 from-rose-500/8',
  },
  {
    icon: Send,
    title: 'Email Sent',
    desc: 'Summary delivered to all parties',
    color: 'text-amber-300',
    border: 'border-amber-400/20 from-amber-400/8',
  },
];

export default function Slide28_Demo2() {
  return (
    <SlideShell bg="warm" sectionLabel="DEMO 2">
      <FadeUp>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs tracking-[0.2em] uppercase text-orange-400/60 font-semibold px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5">
            Demo 2
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          Agent-Built <span className="text-gradient-warm">Automation</span>
        </h2>
        <p className="text-lg text-white/40 font-light mb-10">
          Watch the agent chain actions together.
        </p>
      </FadeUp>

      {/* 5-step connected flow */}
      <div className="flex items-stretch gap-1.5 max-w-5xl w-full mb-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1.5 flex-1"
          >
            <div className={`glass rounded-xl p-4 border ${step.border} bg-gradient-to-b to-transparent flex-1 h-full text-center`}>
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
              </div>
              <h3 className="text-xs font-bold text-white/90 mb-1">{step.title}</h3>
              <p className="text-[10px] text-white/30 leading-snug">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.12 }}
              >
                <ArrowRight className="w-3.5 h-3.5 text-white/12 shrink-0" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quote + live badge */}
      <div className="flex items-end justify-between max-w-5xl w-full">
        <FadeUp delay={1.0}>
          <div className="glass rounded-xl p-5 border-l-2 border-amber-500/30 max-w-xl">
            <p className="text-sm text-white/45 italic leading-relaxed">
              "Voice note to transcription to task extraction to calendar event and email.
              One input, five outputs, zero copy-paste."
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={1.2}>
          <div className="glass-strong rounded-xl px-5 py-3 inline-flex items-center gap-3 border border-amber-500/20">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-amber-400"
            />
            <span className="text-sm font-semibold text-amber-300/80">LIVE DEMO</span>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
