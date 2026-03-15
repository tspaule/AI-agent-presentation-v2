import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { MessageSquare, Code, Layout, Globe, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Prompt',
    desc: 'Write a detailed spec with intent and requirements',
    color: 'text-amber-400',
    border: 'border-amber-500/20 from-amber-500/8',
  },
  {
    icon: Code,
    title: 'Claude Code',
    desc: 'Agent builds React components, styles, animations',
    color: 'text-orange-400',
    border: 'border-orange-500/20 from-orange-500/8',
  },
  {
    icon: Layout,
    title: 'React App',
    desc: '35 slides, custom UI library, framer-motion throughout',
    color: 'text-red-400',
    border: 'border-red-500/20 from-red-500/8',
  },
  {
    icon: Globe,
    title: 'Deployed',
    desc: 'Live on Vercel, presenting to you right now',
    color: 'text-rose-400',
    border: 'border-rose-500/20 from-rose-500/8',
  },
];

export default function Slide26_Demo1() {
  return (
    <SlideShell bg="warm" sectionLabel="DEMO 1">
      <FadeUp>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-xs tracking-[0.2em] uppercase text-amber-400/60 font-semibold px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5">
            Demo 1
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          This <span className="text-gradient-warm">Presentation</span>
        </h2>
        <p className="text-lg text-white/40 font-light mb-10">
          Built entirely by AI agents. Every slide you've seen tonight.
        </p>
      </FadeUp>

      {/* Step flow */}
      <div className="flex items-stretch gap-2 max-w-5xl w-full mb-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 flex-1"
          >
            <div className={`glass rounded-xl p-5 border ${step.border} bg-gradient-to-b to-transparent flex-1 h-full`}>
              <step.icon className={`w-6 h-6 ${step.color} mb-3`} />
              <h3 className="text-sm font-bold text-white/90 mb-1">{step.title}</h3>
              <p className="text-[11px] text-white/35 leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
              >
                <ArrowRight className="w-4 h-4 text-white/15 shrink-0" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats + live badge */}
      <div className="flex items-center gap-6 max-w-5xl">
        <FadeUp delay={0.9}>
          <div className="flex items-center gap-8">
            <div>
              <div className="text-4xl font-black text-gradient-warm">26,000</div>
              <div className="text-[10px] text-white/25 mt-1 uppercase tracking-wider">Lines of code</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-4xl font-black text-gradient-warm">1</div>
              <div className="text-[10px] text-white/25 mt-1 uppercase tracking-wider">Night to build</div>
            </div>
          </div>
        </FadeUp>

        <div className="flex-1" />

        <FadeUp delay={1.1}>
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
