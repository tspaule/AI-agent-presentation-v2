import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const rows = [
  { human: { trait: 'Brain', desc: 'Raw intelligence & reasoning' }, agent: { trait: 'Model', desc: 'LLM (Claude, GPT, etc.)' } },
  { human: { trait: 'Personality', desc: 'Values, style, guardrails' }, agent: { trait: 'Instructions', desc: 'System prompt & rules' } },
  { human: { trait: 'Experience', desc: 'Learned expertise & skills' }, agent: { trait: 'Skills', desc: 'Packaged expertise' } },
  { human: { trait: 'Tools', desc: 'Physical interactions' }, agent: { trait: 'Tool Calling', desc: 'API calls & actions' } },
  { human: { trait: 'Task Instructions', desc: 'Task-specific knowledge' }, agent: { trait: 'Context', desc: 'Dynamic task data' } },
  { human: { trait: 'Long-term Memory', desc: 'Experience over time' }, agent: { trait: 'Memory', desc: 'Cross-session persistence' } },
  { human: { trait: 'Executive Function', desc: 'Planning & sequencing' }, agent: { trait: 'Orchestration', desc: 'Chain of thought' } },
];

export default function Slide13_HumanVsAgent() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
          Building an Agent Is Like <span className="text-gradient-blue">Building a Human</span>
        </h2>
      </FadeUp>

      <div className="max-w-5xl">
        {/* Headers */}
        <div className="grid grid-cols-[1fr_40px_1fr] gap-2 mb-4 px-4">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold">Human</span>
            </div>
          </FadeUp>
          <div />
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold">AI Agent</span>
            </div>
          </FadeUp>
        </div>

        {/* Rows */}
        <StaggerChildren stagger={0.07} className="space-y-2">
          {rows.map((row, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-[1fr_40px_1fr] gap-2 items-center">
                <div className="glass rounded-lg px-4 py-2.5 flex items-center gap-3">
                  <span className="text-sm font-semibold text-white/80 w-32 shrink-0">{row.human.trait}</span>
                  <span className="text-xs text-white/35">{row.human.desc}</span>
                </div>
                <div className="text-center text-white/20 text-xs font-mono">↔</div>
                <div className="glass rounded-lg px-4 py-2.5 flex items-center gap-3 border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 to-transparent">
                  <span className="text-sm font-semibold text-cyan-300/90 w-32 shrink-0">{row.agent.trait}</span>
                  <span className="text-xs text-white/35">{row.agent.desc}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
