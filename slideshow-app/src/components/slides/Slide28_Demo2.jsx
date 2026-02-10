import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const steps = [
  { num: '1', title: 'Load Context', desc: 'Select a local folder with all your reference files, data, and brand guidelines. The agent reads everything.', color: 'border-purple-500/20 from-purple-500/8' },
  { num: '2', title: 'Write Prompt', desc: 'Give clear instructions — structure, tone, content requirements. The more specific, the better the output.', color: 'border-blue-500/20 from-blue-500/8' },
  { num: '3', title: 'Watch It Run', desc: 'The agent creates a chain of thought, builds a to-do list, and works through each step autonomously.', color: 'border-cyan-500/20 from-cyan-500/8' },
];

export default function Slide28_Demo2() {
  return (
    <SlideShell bg="purple">
      <FadeUp>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs tracking-[0.2em] uppercase text-purple-400/60 font-semibold px-3 py-1 rounded-full border border-purple-500/20">Demo 2</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Claude <span className="text-gradient-purple">Cowork</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-10">This presentation was built using the technique I'm about to show you.</p>
      </FadeUp>

      <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mb-8">
        {steps.map((step) => (
          <StaggerItem key={step.num}>
            <div className={`glass rounded-xl p-6 border ${step.color} bg-gradient-to-b to-transparent h-full`}>
              <span className="text-3xl font-black text-white/15 mb-3 block">{step.num}</span>
              <h3 className="text-base font-bold text-white/90 mb-2">{step.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeUp delay={0.7}>
        <div className="glass-strong rounded-xl px-6 py-3 inline-flex items-center gap-3 border border-purple-500/20">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-sm font-semibold text-purple-300/80">LIVE DEMO</span>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
