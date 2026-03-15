import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import Meteors from '../ui/Meteors';
import { MessageSquare, Beer, HelpCircle } from 'lucide-react';

const rules = [
  {
    icon: MessageSquare,
    title: 'Interrupt me',
    desc: 'Seriously. Ask questions anytime.',
    color: 'text-blue-400',
    border: 'border-blue-500/15',
    glow: 'from-blue-500/8',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Beer,
    title: "It's Beer & Learn",
    desc: "Have fun. This isn't a lecture.",
    color: 'text-amber-400',
    border: 'border-amber-500/15',
    glow: 'from-amber-500/8',
    iconBg: 'bg-amber-500/10',
  },
  {
    icon: HelpCircle,
    title: 'No dumb questions',
    desc: "If you're thinking it, someone else is too.",
    color: 'text-purple-400',
    border: 'border-purple-500/15',
    glow: 'from-purple-500/8',
    iconBg: 'bg-purple-500/10',
  },
];

export default function Slide04_Rules() {
  return (
    <SlideShell bg="default" sectionLabel="GROUND RULES">
      {/* Subtle meteors */}
      <Meteors count={12} className="opacity-40" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <FadeUp>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-4 text-center">
            Before <span className="text-gradient-blue">we start</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-lg text-white/25 font-light mb-16 text-center">
            Three things to keep in mind.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.18} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {rules.map((rule) => (
            <StaggerItem key={rule.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass-card rounded-2xl p-10 border ${rule.border} relative overflow-hidden text-center h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${rule.glow} to-transparent`} />
                <div className="relative flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl ${rule.iconBg} flex items-center justify-center mb-8`}>
                    <rule.icon className={`w-8 h-8 ${rule.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white/90 mb-3">{rule.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{rule.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
