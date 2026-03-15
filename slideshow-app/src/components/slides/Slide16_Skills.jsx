import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Sparkles } from 'lucide-react';

const skills = [
  { label: 'Write Email', color: 'border-cyan-500/25 bg-cyan-500/8 text-cyan-300/80' },
  { label: 'Analyse Data', color: 'border-blue-500/25 bg-blue-500/8 text-blue-300/80' },
  { label: 'Generate Code', color: 'border-purple-500/25 bg-purple-500/8 text-purple-300/80' },
  { label: 'Summarise', color: 'border-emerald-500/25 bg-emerald-500/8 text-emerald-300/80' },
  { label: 'Translate', color: 'border-amber-500/25 bg-amber-500/8 text-amber-300/80' },
  { label: 'Research', color: 'border-pink-500/25 bg-pink-500/8 text-pink-300/80' },
  { label: 'Design UI', color: 'border-violet-500/25 bg-violet-500/8 text-violet-300/80' },
  { label: 'File Taxes', color: 'border-teal-500/25 bg-teal-500/8 text-teal-300/80' },
  { label: 'Draft Contract', color: 'border-rose-500/25 bg-rose-500/8 text-rose-300/80' },
  { label: 'Categorise', color: 'border-sky-500/25 bg-sky-500/8 text-sky-300/80' },
  { label: 'Reconcile', color: 'border-lime-500/25 bg-lime-500/8 text-lime-300/80' },
  { label: 'Forecast', color: 'border-orange-500/25 bg-orange-500/8 text-orange-300/80' },
];

export default function Slide16_Skills() {
  return (
    <SlideShell bg="cyan" sectionLabel="THEORY  /  SKILLS">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-10">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-cyan-500/15 leading-none">03</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-12 h-12 text-cyan-400/60" strokeWidth={1.2} />
              </motion.div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-blue">Skills</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                Learned capabilities the agent can invoke.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Skills as chips/badges */}
        <StaggerChildren stagger={0.04} className="flex flex-wrap gap-3 max-w-4xl mb-10">
          {skills.map((skill) => (
            <StaggerItem key={skill.label}>
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium cursor-default transition-shadow hover:shadow-lg ${skill.color}`}
              >
                {skill.label}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Insight */}
        <FadeUp delay={0.8}>
          <div className="glass rounded-xl p-6 border-l-2 border-cyan-500/30 max-w-2xl">
            <p className="text-base text-white/50 leading-relaxed">
              <span className="text-cyan-300/80 font-semibold">Skills are modular expertise.</span>{' '}
              Download pre-built skills, write your own, or let the agent learn them. Each one bundles knowledge, judgment, and process into something reusable.
            </p>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
