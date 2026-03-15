import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';
import { User, Mail, FileText, BarChart3, PenTool, Send, ArrowRight } from 'lucide-react';

const taskNodes = [
  { Icon: Mail, label: 'Read emails', delay: 0.6 },
  { Icon: FileText, label: 'Draft reports', delay: 0.75 },
  { Icon: BarChart3, label: 'Analyse data', delay: 0.9 },
  { Icon: PenTool, label: 'Write copy', delay: 1.05 },
  { Icon: Send, label: 'Send updates', delay: 1.2 },
];

export default function Slide12_HumanOnly() {
  return (
    <SlideShell bg="gradient" sectionLabel="THEORY">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-2">
          Today: <span className="text-gradient-white">You Do Everything</span>
        </h2>
        <p className="text-base text-white/30 mb-16">
          Every task flows through a single bottleneck — you.
        </p>
      </FadeUp>

      {/* Flow diagram */}
      <div className="flex items-center justify-center w-full max-w-5xl">
        {/* Input */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center gap-2 mr-6">
            <div className="w-12 h-12 rounded-lg glass flex items-center justify-center border border-white/10">
              <Mail className="w-5 h-5 text-white/40" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] text-white/25 uppercase tracking-wider">Input</span>
          </div>
        </FadeIn>

        {/* Arrow */}
        <FadeIn delay={0.4}>
          <ArrowRight className="w-5 h-5 text-white/15 mr-4 shrink-0" />
        </FadeIn>

        {/* Central human node */}
        <FadeIn delay={0.5}>
          <div className="relative flex flex-col items-center mx-6">
            {/* Radiating pulse rings */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              className="absolute w-24 h-24 rounded-full border border-blue-400/20"
            />
            <motion.div
              animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
              className="absolute w-24 h-24 rounded-full border border-blue-400/10"
            />
            <div className="w-24 h-24 rounded-full glass-strong border border-blue-500/30 flex items-center justify-center glow-blue relative z-10">
              <User className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
            </div>
            <span className="text-xs text-blue-400/60 font-semibold mt-3 uppercase tracking-widest">You</span>
          </div>
        </FadeIn>

        {/* Arrow */}
        <FadeIn delay={0.55}>
          <ArrowRight className="w-5 h-5 text-white/15 ml-4 mr-6 shrink-0" />
        </FadeIn>

        {/* Task fan-out */}
        <div className="flex flex-col gap-2">
          {taskNodes.map(({ Icon, label, delay }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-gradient-to-r from-white/10 to-white/5" />
              <div className="glass rounded-lg px-4 py-2 flex items-center gap-3 border border-white/5 hover:border-white/10 transition-colors">
                <Icon className="w-4 h-4 text-white/30" strokeWidth={1.5} />
                <span className="text-sm text-white/50">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom insight */}
      <FadeUp delay={1.5}>
        <div className="mt-14 glass rounded-xl px-6 py-4 border-l-2 border-blue-500/30 max-w-2xl">
          <p className="text-sm text-white/40">
            <span className="text-white/70 font-semibold">The bottleneck is always you.</span>{' '}
            Your attention, your hours, your capacity. Every task competes for the same resource.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
