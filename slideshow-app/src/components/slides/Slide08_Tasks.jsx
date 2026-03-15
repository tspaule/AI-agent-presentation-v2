import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Mail, Search, PenTool, Database, Terminal, Headphones } from 'lucide-react';

const tasks = [
  { icon: Mail, label: 'Email & calendar', color: 'text-blue-400/70', border: 'border-blue-500/12', iconBg: 'bg-blue-500/8' },
  { icon: Search, label: 'Research & analysis', color: 'text-cyan-400/70', border: 'border-cyan-500/12', iconBg: 'bg-cyan-500/8' },
  { icon: PenTool, label: 'Writing & content', color: 'text-purple-400/70', border: 'border-purple-500/12', iconBg: 'bg-purple-500/8' },
  { icon: Database, label: 'Data entry', color: 'text-emerald-400/70', border: 'border-emerald-500/12', iconBg: 'bg-emerald-500/8' },
  { icon: Terminal, label: 'Code & automation', color: 'text-amber-400/70', border: 'border-amber-500/12', iconBg: 'bg-amber-500/8' },
  { icon: Headphones, label: 'Customer support', color: 'text-pink-400/70', border: 'border-pink-500/12', iconBg: 'bg-pink-500/8' },
];

export default function Slide08_Tasks() {
  return (
    <SlideShell bg="purple" sectionLabel="SURVEY">
      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
            What would you love an
            <br />
            <span className="text-gradient-purple">AI agent</span> to handle?
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-base text-white/25 font-light mb-14">
            If you could hand off one thing tomorrow, what would it be?
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
          {tasks.map((task) => (
            <StaggerItem key={task.label}>
              <motion.div
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`rounded-xl p-6 border ${task.border} bg-white/[0.02] backdrop-blur-sm flex items-center gap-4 group hover:bg-white/[0.04] transition-colors duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg ${task.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <task.icon className={`w-5 h-5 ${task.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
                  {task.label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
