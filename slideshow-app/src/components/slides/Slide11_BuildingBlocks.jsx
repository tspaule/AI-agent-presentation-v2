import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const blocks = [
  { num: '1', title: 'Model', sub: 'The Brain', color: 'from-blue-500/15 to-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400' },
  { num: '2', title: 'Instructions', sub: 'Identity & Rules', color: 'from-purple-500/15 to-purple-600/5', border: 'border-purple-500/20', text: 'text-purple-400' },
  { num: '3', title: 'Skills', sub: 'Learned Capabilities', color: 'from-cyan-500/15 to-cyan-600/5', border: 'border-cyan-500/20', text: 'text-cyan-400' },
  { num: '4', title: 'Tools', sub: 'Actions', color: 'from-amber-500/15 to-amber-600/5', border: 'border-amber-500/20', text: 'text-amber-400' },
  { num: '5', title: 'Context', sub: 'Task-Specific Info', color: 'from-emerald-500/15 to-emerald-600/5', border: 'border-emerald-500/20', text: 'text-emerald-400' },
  { num: '6', title: 'Memory', sub: 'Persistence', color: 'from-pink-500/15 to-pink-600/5', border: 'border-pink-500/20', text: 'text-pink-400' },
  { num: '7', title: 'Orchestration', sub: 'Planning', color: 'from-red-500/15 to-red-600/5', border: 'border-red-500/20', text: 'text-red-400' },
];

export default function Slide11_BuildingBlocks() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          The Seven <span className="text-gradient-blue">Building Blocks</span>
        </h2>
        <p className="text-base text-white/35 mb-10">Every agent — simple or complex — is made of these same components.</p>
      </FadeUp>

      <StaggerChildren stagger={0.08} className="grid grid-cols-7 gap-3 max-w-6xl">
        {blocks.map((b) => (
          <StaggerItem key={b.num}>
            <div className={`rounded-xl border ${b.border} bg-gradient-to-b ${b.color} p-5 text-center hover:scale-105 transition-transform duration-300 h-full`}>
              <div className={`text-3xl font-black ${b.text} opacity-40 mb-3`}>{b.num}</div>
              <h3 className="text-base font-bold text-white/90 mb-1">{b.title}</h3>
              <p className="text-xs text-white/40">{b.sub}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
