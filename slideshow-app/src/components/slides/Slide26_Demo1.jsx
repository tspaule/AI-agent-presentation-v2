import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const steps = [
  { num: '1', title: 'Write the Intent', desc: 'Create a prototype spec and requirements in GitHub', color: 'border-blue-500/20 from-blue-500/8' },
  { num: '2', title: 'Point the Agent', desc: 'Tell Claude Code to build from the spec', color: 'border-purple-500/20 from-purple-500/8' },
  { num: '3', title: 'Watch It Work', desc: 'Chain of thought, to-do list, tool calling in real time', color: 'border-cyan-500/20 from-cyan-500/8' },
  { num: '4', title: 'Wake Up to Results', desc: '26,000 lines of code written overnight', color: 'border-amber-500/20 from-amber-500/8' },
];

export default function Slide26_Demo1() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs tracking-[0.2em] uppercase text-blue-400/60 font-semibold px-3 py-1 rounded-full border border-blue-500/20">Demo 1</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Claude <span className="text-gradient-blue">Code</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-8">Chain of thought, to-dos, and skills in action.</p>
      </FadeUp>

      <StaggerChildren stagger={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mb-8">
        {steps.map((step) => (
          <StaggerItem key={step.num}>
            <div className={`glass rounded-xl p-5 border ${step.color} bg-gradient-to-b to-transparent h-full`}>
              <span className="text-2xl font-black text-white/15 mb-2 block">{step.num}</span>
              <h3 className="text-sm font-bold text-white/90 mb-2">{step.title}</h3>
              <p className="text-xs text-white/35">{step.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeUp delay={0.7}>
        <div className="flex items-center gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
            className="shrink-0"
          >
            <div className="text-5xl font-black text-gradient-blue">26,000</div>
            <div className="text-xs text-white/30 mt-1">lines of code written overnight</div>
          </motion.div>
          <div className="glass rounded-xl p-4 flex-1 border-l-2 border-blue-500/30">
            <p className="text-sm text-white/45 italic">
              "I didn't write the code. I wrote the intent. The agent figured out the rest."
            </p>
          </div>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
