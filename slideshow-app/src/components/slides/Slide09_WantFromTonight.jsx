import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem, BlurIn } from '../AnimatedText';
import { Brain, Eye, Compass, ArrowRight } from 'lucide-react';

const options = [
  {
    icon: Brain,
    label: 'Understand what agents are',
    desc: 'The concepts, the building blocks, the mental model',
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    glow: 'from-purple-500/10',
    iconBg: 'bg-purple-500/10',
  },
  {
    icon: Eye,
    label: 'See real examples',
    desc: 'Live demos, not slide-ware',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    glow: 'from-cyan-500/10',
    iconBg: 'bg-cyan-500/10',
  },
  {
    icon: Compass,
    label: 'Know where to start',
    desc: 'Practical next steps you can take Monday',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    glow: 'from-blue-500/10',
    iconBg: 'bg-blue-500/10',
  },
];

export default function Slide09_WantFromTonight() {
  return (
    <SlideShell bg="purple" sectionLabel="SURVEY">
      {/* Subtle ambient glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-purple-500/5 blur-[160px] pointer-events-none"
      />

      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            What do you want to
            <br />
            <span className="text-gradient-purple">take away</span> tonight?
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base text-white/25 font-light mb-14">
            Pick the one that matters most to you.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {options.map((opt) => (
            <StaggerItem key={opt.label}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`glass rounded-2xl p-8 border ${opt.border} relative overflow-hidden group h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${opt.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl ${opt.iconBg} flex items-center justify-center mb-6`}>
                    <opt.icon className={`w-7 h-7 ${opt.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white/90 mb-3">{opt.label}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{opt.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Transition line */}
        <BlurIn delay={0.8}>
          <div className="flex items-center gap-3 mt-16">
            <p className="text-base text-white/20 font-light italic">
              Let's get into it...
            </p>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4 text-white/20" />
            </motion.div>
          </div>
        </BlurIn>
      </div>
    </SlideShell>
  );
}
