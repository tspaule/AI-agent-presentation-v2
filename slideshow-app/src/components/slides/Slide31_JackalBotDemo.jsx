import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp } from '../AnimatedText';
import { Mic, FileText, Cpu, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: 'Send Voice Note',
    desc: 'Record in Discord',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: FileText,
    title: 'Agent Transcribes',
    desc: 'Speech to text',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: Cpu,
    title: 'Agent Processes',
    desc: 'Extracts tasks, recipients',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Send,
    title: 'Email Sent',
    desc: 'Everyone gets it',
    color: 'text-amber-300',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
];

export default function Slide31_JackalBotDemo() {
  return (
    <SlideShell bg="warm" sectionLabel="DEMO 3 \u00B7 LIVE">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          JackalBot: <span className="text-gradient-warm">Live Demo</span>
        </h2>
        <p className="text-base text-white/35 mb-12">
          Voice note to email — in real time, right now.
        </p>
      </FadeUp>

      {/* 4-step horizontal flow */}
      <div className="flex items-center gap-3 max-w-5xl w-full mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 flex-1"
          >
            <div className={`glass rounded-2xl p-6 border ${step.border} bg-gradient-to-b from-white/[0.02] to-transparent flex-1 text-center h-full`}>
              {/* Step number */}
              <div className="text-[10px] text-white/15 font-bold mb-3 tracking-widest">
                0{i + 1}
              </div>
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white/90 mb-1">{step.title}</h3>
              <p className="text-[11px] text-white/30">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.18 }}
              >
                <ArrowRight className="w-4 h-4 text-white/12 shrink-0" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <FadeUp delay={1.1}>
        <div className="glass rounded-xl p-5 max-w-4xl border-l-2 border-amber-500/30 mb-6">
          <p className="text-sm text-white/45 italic leading-relaxed">
            "That just happened in real-time. No copy-paste. No switching apps. No human in the middle."
          </p>
        </div>
      </FadeUp>

      {/* LIVE DEMO badge */}
      <FadeUp delay={1.3}>
        <div className="glass-strong rounded-xl px-6 py-3 inline-flex items-center gap-3 border border-amber-500/20">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2.5 h-2.5 rounded-full bg-amber-400"
          />
          <span className="text-sm font-bold text-amber-300/80 tracking-wide">
            LIVE DEMO IN DISCORD
          </span>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
