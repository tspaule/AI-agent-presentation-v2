import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Brain, FileText, Wrench, Hammer, FileSearch, Database, GitBranch } from 'lucide-react';
import BorderBeam from '../ui/BorderBeam';

const blocks = [
  { num: '01', title: 'Model', sub: 'The reasoning engine', Icon: Brain, accent: 'blue', border: '#3b82f6', glow: 'rgba(59,130,246,0.15)', text: 'text-blue-400', bg: 'from-blue-500/10' },
  { num: '02', title: 'Instructions', sub: 'Identity and rules', Icon: FileText, accent: 'purple', border: '#8b5cf6', glow: 'rgba(139,92,246,0.15)', text: 'text-purple-400', bg: 'from-purple-500/10' },
  { num: '03', title: 'Skills', sub: 'Learned capabilities', Icon: Wrench, accent: 'cyan', border: '#06b6d4', glow: 'rgba(6,182,212,0.15)', text: 'text-cyan-400', bg: 'from-cyan-500/10' },
  { num: '04', title: 'Tools', sub: 'Real-world actions', Icon: Hammer, accent: 'amber', border: '#f59e0b', glow: 'rgba(245,158,11,0.15)', text: 'text-amber-400', bg: 'from-amber-500/10' },
  { num: '05', title: 'Context', sub: 'Task-specific info', Icon: FileSearch, accent: 'emerald', border: '#10b981', glow: 'rgba(16,185,129,0.15)', text: 'text-emerald-400', bg: 'from-emerald-500/10' },
  { num: '06', title: 'Memory', sub: 'Persistent knowledge', Icon: Database, accent: 'pink', border: '#ec4899', glow: 'rgba(236,72,153,0.15)', text: 'text-pink-400', bg: 'from-pink-500/10' },
  { num: '07', title: 'Orchestration', sub: 'Plan and adapt', Icon: GitBranch, accent: 'red', border: '#ef4444', glow: 'rgba(239,68,68,0.15)', text: 'text-red-400', bg: 'from-red-500/10' },
];

export default function Slide11_BuildingBlocks() {
  return (
    <SlideShell bg="blue" sectionLabel="THEORY">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-2">
          The Seven <span className="text-gradient-blue">Building Blocks</span>
        </h2>
        <p className="text-base text-white/30 mb-12">
          Every agent — simple or complex — is made of these same components.
        </p>
      </FadeUp>

      <StaggerChildren stagger={0.08} className="grid grid-cols-7 gap-3 w-full max-w-6xl">
        {blocks.map((b) => (
          <StaggerItem key={b.num}>
            <BorderBeam
              duration={8}
              colorFrom={b.border}
              colorTo={b.border}
              size={300}
              className="rounded-xl"
            >
              <div
                className={`rounded-xl bg-gradient-to-b ${b.bg} to-transparent p-5 text-center h-full min-h-[180px] flex flex-col items-center justify-center gap-3 hover:scale-[1.04] transition-transform duration-300`}
                style={{ '--border-beam-bg': '#0a0a0a' }}
              >
                <span className={`text-xs font-mono font-bold ${b.text} opacity-40`}>
                  {b.num}
                </span>
                <b.Icon className={`w-7 h-7 ${b.text} opacity-70`} strokeWidth={1.5} />
                <h3 className="text-sm font-bold text-white/90 leading-tight">{b.title}</h3>
                <p className="text-[10px] text-white/35 leading-snug">{b.sub}</p>
              </div>
            </BorderBeam>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
