import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Users, Sparkles, Zap, Code } from 'lucide-react';

const levels = [
  {
    icon: Users,
    label: 'Never',
    opacity: 'bg-purple-500/5',
    border: 'border-purple-500/10',
    iconColor: 'text-purple-300/50',
    textColor: 'text-white/50',
  },
  {
    icon: Sparkles,
    label: 'Played around',
    opacity: 'bg-purple-500/10',
    border: 'border-purple-500/15',
    iconColor: 'text-purple-300/60',
    textColor: 'text-white/60',
  },
  {
    icon: Zap,
    label: 'Regular user',
    opacity: 'bg-purple-500/15',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-300/80',
    textColor: 'text-white/80',
  },
  {
    icon: Code,
    label: 'Building with it',
    opacity: 'bg-purple-500/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-200',
    textColor: 'text-white/90',
  },
];

export default function Slide06_Experience() {
  return (
    <SlideShell bg="purple" sectionLabel="SURVEY">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-500/8 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            Who here has used
            <br />
            <span className="text-gradient-purple">AI in their work?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base text-white/25 font-light mb-14">
            Raise your hand for the one that fits best.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl">
          {levels.map((level) => (
            <StaggerItem key={level.label}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-2xl p-8 border ${level.border} ${level.opacity} backdrop-blur-sm text-center flex flex-col items-center gap-5`}
              >
                <level.icon className={`w-10 h-10 ${level.iconColor}`} strokeWidth={1.5} />
                <span className={`text-lg font-semibold ${level.textColor}`}>{level.label}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
