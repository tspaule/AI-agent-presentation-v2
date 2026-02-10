import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const humanTraits = [
  { trait: 'Brain', desc: 'Raw intelligence & reasoning', icon: '🧠' },
  { trait: 'Personality', desc: 'Values, style, guardrails', icon: '🎭' },
  { trait: 'Experience', desc: 'Learned expertise & skills', icon: '📚' },
  { trait: 'Tools', desc: 'Physical interactions', icon: '🔧' },
  { trait: 'Task Instructions', desc: 'Task-specific knowledge', icon: '📋' },
  { trait: 'Long-term Memory', desc: 'Experience over time', icon: '💾' },
  { trait: 'Executive Function', desc: 'Planning & sequencing', icon: '🎯' },
];

export default function Slide12_HumanOnly() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Building an Agent Is Like <span className="text-gradient-blue">Building a Human</span>
        </h2>
      </FadeUp>

      <div className="max-w-3xl mt-6">
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-sm tracking-[0.25em] uppercase text-blue-400 font-semibold">Human</span>
          </div>
        </FadeUp>

        <StaggerChildren stagger={0.08} className="space-y-3">
          {humanTraits.map((item, i) => (
            <StaggerItem key={i}>
              <div className="glass rounded-lg px-5 py-3 flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <span className="text-xl">{item.icon}</span>
                <span className="text-base font-semibold text-white/90 w-44">{item.trait}</span>
                <span className="text-sm text-white/40">{item.desc}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
