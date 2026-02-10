import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const capabilities = [
  { icon: '✉', title: 'Gmail', desc: 'Send & read emails', color: 'border-red-500/20 from-red-500/8' },
  { icon: '📅', title: 'Calendar', desc: 'Google Calendar access', color: 'border-blue-500/20 from-blue-500/8' },
  { icon: '🎙', title: 'Voice', desc: 'Transcribe voice notes', color: 'border-purple-500/20 from-purple-500/8' },
  { icon: '🌐', title: 'Web', desc: 'Search & browse', color: 'border-cyan-500/20 from-cyan-500/8' },
  { icon: '💾', title: 'Memory', desc: 'Cross-session recall', color: 'border-pink-500/20 from-pink-500/8' },
  { icon: '⚡', title: 'Skills', desc: 'Modular expertise', color: 'border-amber-500/20 from-amber-500/8' },
];

export default function Slide30_JackalBotArch() {
  return (
    <SlideShell bg="warm">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          JackalBot <span className="text-gradient-warm">Architecture</span>
        </h2>
      </FadeUp>

      <div className="max-w-5xl">
        {/* Central node */}
        <FadeUp delay={0.2}>
          <div className="glass-strong rounded-2xl p-5 mb-6 inline-flex items-center gap-4 border border-amber-500/20">
            <div className="text-xl font-bold text-gradient-warm">JackalBot</div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs text-white/40">Claude LLM  |  OpenClaw Framework</span>
          </div>
        </FadeUp>

        {/* Infrastructure */}
        <FadeUp delay={0.3}>
          <div className="flex gap-4 mb-8">
            <div className="glass rounded-lg px-4 py-2 border border-blue-500/10 text-xs text-white/50">
              <span className="text-blue-400 font-semibold">Digital Ocean</span> — Cloud hosted, not on local machine
            </div>
            <div className="glass rounded-lg px-4 py-2 border border-purple-500/10 text-xs text-white/50">
              <span className="text-purple-400 font-semibold">Discord Interface</span> — Bidirectional comms
            </div>
          </div>
        </FadeUp>

        {/* Capabilities grid */}
        <FadeUp delay={0.3}>
          <div className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold mb-4">Capabilities</div>
        </FadeUp>
        <StaggerChildren stagger={0.08} className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {capabilities.map((cap, i) => (
            <StaggerItem key={i}>
              <div className={`glass rounded-xl p-4 border ${cap.color} bg-gradient-to-b to-transparent text-center hover:scale-105 transition-transform duration-300`}>
                <span className="text-2xl block mb-2">{cap.icon}</span>
                <h3 className="text-xs font-bold text-white/90 mb-0.5">{cap.title}</h3>
                <p className="text-[10px] text-white/30">{cap.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
