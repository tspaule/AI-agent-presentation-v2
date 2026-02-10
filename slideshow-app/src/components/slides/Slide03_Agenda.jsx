import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const items = [
  { num: '01', title: 'Your Feedback', desc: 'What you told us in the survey — and how it shaped tonight', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'from-blue-500/5' },
  { num: '02', title: 'The Theory', desc: 'WTF are AI Agents? The seven building blocks explained', color: 'text-purple-400', border: 'border-purple-500/20', bg: 'from-purple-500/5' },
  { num: '03', title: 'The Practice', desc: 'Live demos — Claude Code, Claude Cowork, and JackalBot in action', color: 'text-cyan-400', border: 'border-cyan-500/20', bg: 'from-cyan-500/5' },
  { num: '04', title: 'Questions & Discussion', desc: 'Open floor — nothing is off limits', color: 'text-amber-400', border: 'border-amber-500/20', bg: 'from-amber-500/5' },
];

export default function Slide03_Agenda() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
          Tonight's <span className="text-gradient-purple">Agenda</span>
        </h2>
      </FadeUp>

      <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
        {items.map((item) => (
          <StaggerItem key={item.num}>
            <div className={`glass rounded-xl p-6 border ${item.border} relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative flex gap-5">
                <span className={`text-3xl font-black ${item.color} opacity-40`}>{item.num}</span>
                <div>
                  <h3 className="text-xl font-bold text-white/90 mb-1">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
