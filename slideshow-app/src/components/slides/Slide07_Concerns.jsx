import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Shield, Timer, AlertTriangle, Lock } from 'lucide-react';

const concerns = [
  {
    icon: Shield,
    label: 'Job displacement',
    color: 'text-red-400/70',
    border: 'border-red-500/15',
    bg: 'from-red-500/8',
    iconBg: 'bg-red-500/10',
  },
  {
    icon: Timer,
    label: "It's moving too fast",
    color: 'text-amber-400/70',
    border: 'border-amber-500/15',
    bg: 'from-amber-500/8',
    iconBg: 'bg-amber-500/10',
  },
  {
    icon: AlertTriangle,
    label: 'Quality / Hallucinations',
    color: 'text-orange-400/70',
    border: 'border-orange-500/15',
    bg: 'from-orange-500/8',
    iconBg: 'bg-orange-500/10',
  },
  {
    icon: Lock,
    label: 'Security & Privacy',
    color: 'text-purple-400/70',
    border: 'border-purple-500/15',
    bg: 'from-purple-500/8',
    iconBg: 'bg-purple-500/10',
  },
];

export default function Slide07_Concerns() {
  return (
    <SlideShell bg="purple" sectionLabel="SURVEY">
      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            What <span className="text-gradient-purple">concerns you</span>
            <br />
            most about AI?
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base text-white/25 font-light mb-14">
            Pick the one that keeps you up at night.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {concerns.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass rounded-2xl p-8 border ${item.border} relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-semibold text-white/80">{item.label}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
