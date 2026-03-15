import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from '../AnimatedText';
import { MessageSquare, Sparkles, Eye, ArrowRight } from 'lucide-react';

const skills = [
  {
    icon: MessageSquare,
    title: 'Clear instruction and intent',
    desc: 'The ability to articulate precisely what you need, increasingly by voice.',
    color: 'text-blue-400',
  },
  {
    icon: Sparkles,
    title: 'Novel applications and creative thinking',
    desc: 'Seeing possibilities others miss. Connecting dots across domains.',
    color: 'text-cyan-400',
  },
  {
    icon: Eye,
    title: 'Agent orchestration and oversight',
    desc: 'Managing multiple agents, reviewing outputs, maintaining quality.',
    color: 'text-purple-400',
  },
];

export default function Slide33_DoersToInstructors() {
  return (
    <SlideShell bg="blue" sectionLabel="THE FUTURE">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-10">
          From Doers to <span className="text-gradient-blue">Instructors</span>
        </h2>
      </FadeUp>

      {/* Two-column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-7 h-full">
            <div className="text-[10px] tracking-[0.25em] uppercase text-cyan-400/50 font-bold mb-5">
              AI's Evolution
            </div>
            <div className="flex items-center gap-5">
              <span className="text-xl text-white/25 font-light">Talkers</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5 text-blue-400/50" />
              </motion.div>
              <span className="text-2xl font-black text-gradient-blue">Doers</span>
            </div>
            <p className="text-sm text-white/30 mt-4 leading-relaxed">
              AI went from answering questions to executing complex, multi-step workflows autonomously.
            </p>
          </div>
        </SlideIn>

        <SlideIn from="right" delay={0.4}>
          <div className="glass rounded-2xl p-7 border border-blue-500/20 bg-gradient-to-br from-blue-500/8 to-transparent h-full glow-blue">
            <div className="text-[10px] tracking-[0.25em] uppercase text-blue-400 font-bold mb-5">
              Human Evolution
            </div>
            <div className="flex items-center gap-5">
              <span className="text-xl text-white/25 font-light">Doers</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-5 h-5 text-blue-400/60" />
              </motion.div>
              <span className="text-2xl font-black text-gradient-blue">Instructors</span>
            </div>
            <p className="text-sm text-white/35 mt-4 leading-relaxed">
              We move from executing tasks ourselves to directing AI agents that execute for us.
            </p>
          </div>
        </SlideIn>
      </div>

      {/* Skills That Matter Now */}
      <FadeUp delay={0.6}>
        <div className="text-[10px] tracking-[0.25em] uppercase text-white/25 font-bold mb-5">
          Skills That Matter Now
        </div>
      </FadeUp>

      <StaggerChildren stagger={0.1} className="space-y-3 max-w-4xl">
        {skills.map((skill) => (
          <StaggerItem key={skill.title}>
            <div className="flex items-start gap-4 glass rounded-xl px-5 py-4 border border-white/5">
              <div className="shrink-0 mt-0.5">
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white/80 mb-0.5">{skill.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
