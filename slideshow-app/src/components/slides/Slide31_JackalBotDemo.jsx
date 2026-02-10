import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const steps = [
  { num: '1', title: 'Send Voice Note', desc: 'Record a voice message in Discord', icon: '🎤' },
  { num: '2', title: 'Agent Transcribes', desc: 'JackalBot converts speech to text', icon: '📝' },
  { num: '3', title: 'Agent Processes', desc: 'Extracts tasks, recipients, content', icon: '⚙' },
  { num: '4', title: 'Email Sent', desc: 'Everyone in the room gets the email', icon: '✉' },
];

export default function Slide31_JackalBotDemo() {
  return (
    <SlideShell bg="warm">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          JackalBot: <span className="text-gradient-warm">Live Demo</span>
        </h2>
        <p className="text-base text-white/35 mb-8">Voice note to email — in real time, right now.</p>
      </FadeUp>

      <div className="flex items-center gap-3 max-w-5xl mb-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="flex items-center gap-3 flex-1"
          >
            <div className="glass rounded-xl p-5 border border-amber-500/15 bg-gradient-to-b from-amber-500/5 to-transparent flex-1 text-center">
              <span className="text-2xl block mb-2">{step.icon}</span>
              <span className="text-xs font-bold text-white/80 block mb-1">{step.title}</span>
              <span className="text-[10px] text-white/30">{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-white/15 text-lg shrink-0 animate-bounce-right"
              >→</motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <FadeUp delay={0.8}>
        <div className="glass rounded-xl p-4 max-w-5xl border-l-2 border-amber-500/30 mb-6">
          <p className="text-sm text-white/45 italic">
            "That just happened in real-time. No copy-paste. No switching apps. No human glue."
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={1}>
        <div className="glass-strong rounded-xl px-6 py-3 inline-flex items-center gap-3 border border-amber-500/20">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-sm font-semibold text-amber-300/80">LIVE DEMO IN DISCORD</span>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
