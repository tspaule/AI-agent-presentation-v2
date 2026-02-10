import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const concerns = [
  { pct: 58, label: 'Data Privacy & Security', color: 'bg-red-500', glow: 'shadow-red-500/20' },
  { pct: 50, label: 'Accuracy & Hallucinations', color: 'bg-amber-500', glow: 'shadow-amber-500/20' },
  { pct: 50, label: 'Not Knowing Where to Start', color: 'bg-purple-500', glow: 'shadow-purple-500/20' },
  { pct: 33, label: 'Cost & Subscriptions', color: 'bg-blue-500', glow: 'shadow-blue-500/20' },
];

export default function Slide07_Concerns() {
  return (
    <SlideShell bg="warm">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
          Your Top <span className="text-gradient-warm">Concerns</span>
        </h2>
        <p className="text-lg text-white/35 mb-10">These are the things keeping you up at night.</p>
      </FadeUp>

      <StaggerChildren stagger={0.15} className="space-y-5 max-w-4xl">
        {concerns.map((c, i) => (
          <StaggerItem key={i}>
            <div className="flex items-center gap-6">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="text-3xl font-black text-white/90 w-16 text-right tabular-nums"
              >
                {c.pct}%
              </motion.span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-white/80">{c.label}</span>
                </div>
                <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full ${c.color} shadow-lg ${c.glow}`}
                  />
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
