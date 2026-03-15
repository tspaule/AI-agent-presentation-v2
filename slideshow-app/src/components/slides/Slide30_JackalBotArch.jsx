import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Bot, Mail, Calendar, Mic, Globe, Database, Sparkles, Cloud, MessageSquare } from 'lucide-react';

const capabilities = [
  { icon: Mail, title: 'Gmail', desc: 'Send & read emails', color: 'text-red-400', border: 'border-red-500/20' },
  { icon: Calendar, title: 'Calendar', desc: 'Google Calendar access', color: 'text-blue-400', border: 'border-blue-500/20' },
  { icon: Mic, title: 'Voice', desc: 'Transcribe voice notes', color: 'text-purple-400', border: 'border-purple-500/20' },
  { icon: Globe, title: 'Web', desc: 'Search & browse', color: 'text-cyan-400', border: 'border-cyan-500/20' },
  { icon: Database, title: 'Memory', desc: 'Cross-session recall', color: 'text-pink-400', border: 'border-pink-500/20' },
  { icon: Sparkles, title: 'Skills', desc: 'Modular expertise', color: 'text-amber-400', border: 'border-amber-500/20' },
];

export default function Slide30_JackalBotArch() {
  return (
    <SlideShell bg="warm" sectionLabel="DEMO 3 \u00B7 ARCHITECTURE">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-10">
          JackalBot <span className="text-gradient-warm">Architecture</span>
        </h2>
      </FadeUp>

      <div className="max-w-5xl w-full">
        {/* Central node */}
        <FadeUp delay={0.2}>
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(245,158,11,0)', '0 0 40px 10px rgba(245,158,11,0.08)', '0 0 0 0 rgba(245,158,11,0)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-strong rounded-2xl px-8 py-5 flex items-center gap-5 border border-amber-500/25"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <Bot className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <div className="text-xl font-black text-gradient-warm">JackalBot</div>
                <div className="text-xs text-white/30 mt-0.5">Claude LLM &nbsp;|&nbsp; OpenClaw Framework</div>
              </div>
            </motion.div>
          </div>
        </FadeUp>

        {/* Connection lines from center */}
        <FadeUp delay={0.3}>
          <div className="flex justify-center mb-2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="w-px h-6 bg-gradient-to-b from-amber-500/20 to-white/5"
              style={{ transformOrigin: 'top' }}
            />
          </div>
        </FadeUp>

        {/* Capabilities grid */}
        <FadeUp delay={0.35}>
          <div className="text-[10px] tracking-[0.25em] uppercase text-white/25 font-semibold mb-4 text-center">
            Capabilities
          </div>
        </FadeUp>

        <StaggerChildren stagger={0.08} className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.title}>
              <div className={`glass rounded-xl p-5 border ${cap.border} bg-gradient-to-b from-white/[0.02] to-transparent text-center hover:scale-105 transition-transform duration-300 h-full`}>
                <div className="flex justify-center mb-3">
                  <cap.icon className={`w-5 h-5 ${cap.color}`} />
                </div>
                <h3 className="text-xs font-bold text-white/90 mb-0.5">{cap.title}</h3>
                <p className="text-[10px] text-white/30">{cap.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Infrastructure bar */}
        <FadeUp delay={0.8}>
          <div className="flex gap-4">
            <div className="glass rounded-lg px-5 py-3 border border-blue-500/10 flex items-center gap-3 flex-1">
              <Cloud className="w-4 h-4 text-blue-400/60" />
              <div>
                <span className="text-xs text-blue-400 font-semibold">Digital Ocean</span>
                <span className="text-[10px] text-white/25 ml-2">Cloud hosted, always-on, not on local machine</span>
              </div>
            </div>
            <div className="glass rounded-lg px-5 py-3 border border-purple-500/10 flex items-center gap-3 flex-1">
              <MessageSquare className="w-4 h-4 text-purple-400/60" />
              <div>
                <span className="text-xs text-purple-400 font-semibold">Discord Interface</span>
                <span className="text-[10px] text-white/25 ml-2">Bidirectional communication</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
