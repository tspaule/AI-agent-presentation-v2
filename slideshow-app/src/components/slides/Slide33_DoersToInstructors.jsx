import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from '../AnimatedText';

const skills = [
  'Clear instruction and intent, increasingly by voice',
  'Novel applications and creative thinking',
  'Agent orchestration and oversight',
];

export default function Slide33_DoersToInstructors() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
          From Doers to <span className="text-gradient-blue">Instructors</span>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-10">
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-6 h-full">
            <div className="text-xs tracking-[0.25em] uppercase text-cyan-400/60 font-semibold mb-4">AI's Evolution</div>
            <div className="flex items-center gap-4">
              <span className="text-lg text-white/30">Talkers</span>
              <span className="text-blue-400/60 animate-bounce-right">→</span>
              <span className="text-xl font-bold text-gradient-blue">Doers</span>
            </div>
            <p className="text-sm text-white/35 mt-3">AI went from answering questions to executing complex workflows.</p>
          </div>
        </SlideIn>

        <SlideIn from="right" delay={0.4}>
          <div className="glass rounded-2xl p-6 border border-blue-500/15 bg-gradient-to-br from-blue-500/5 to-transparent h-full glow-blue">
            <div className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold mb-4">Human Evolution</div>
            <div className="flex items-center gap-4">
              <span className="text-lg text-white/30">Doers</span>
              <span className="text-blue-400/60 animate-bounce-right">→</span>
              <span className="text-xl font-bold text-gradient-blue">Instructors</span>
            </div>
            <p className="text-sm text-white/35 mt-3">We move from executing tasks to directing AI that executes for us.</p>
          </div>
        </SlideIn>
      </div>

      <FadeUp delay={0.6}>
        <div className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-4">Skills That Matter Now</div>
      </FadeUp>
      <StaggerChildren stagger={0.1} className="space-y-2 max-w-3xl">
        {skills.map((skill, i) => (
          <StaggerItem key={i}>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
              <p className="text-sm text-white/60">{skill}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
