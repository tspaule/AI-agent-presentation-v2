import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const stats = [
  { pct: '42%', label: 'Daily Users', desc: 'AI is integral to their workflow', color: 'text-blue-400', ring: 'border-blue-500', fill: 42 },
  { pct: '58%', label: 'Occasional Users', desc: 'Use AI a few times a week/month', color: 'text-purple-400', ring: 'border-purple-500', fill: 58 },
  { pct: '0%', label: 'Beginners', desc: 'Everyone has some experience', color: 'text-white/30', ring: 'border-white/20', fill: 0 },
];

function CircleStat({ pct, label, desc, color, fill, delay }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (fill / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 90 90">
          <circle cx="45" cy="45" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
          <motion.circle
            cx="45" cy="45" r="40" fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={color}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className={`text-3xl font-black ${color}`}
          >
            {pct}
          </motion.span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white/90 mb-1">{label}</h3>
      <p className="text-sm text-white/35">{desc}</p>
    </motion.div>
  );
}

export default function Slide06_Experience() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
          Your <span className="text-gradient-blue">Experience Level</span>
        </h2>
        <p className="text-lg text-white/35 mb-12">No beginners in the room — you're all already in the game.</p>
      </FadeUp>

      <div className="grid grid-cols-3 gap-12 max-w-3xl">
        {stats.map((s, i) => (
          <CircleStat key={i} {...s} delay={0.3 + i * 0.2} />
        ))}
      </div>
    </SlideShell>
  );
}
