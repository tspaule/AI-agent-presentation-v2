import SlideShell from '../SlideShell';
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from '../AnimatedText';

const rows = [
  { skills: 'HOW to do something', tools: 'WHAT to interact with' },
  { skills: 'Carry judgment & process', tools: 'Single-purpose actions' },
  { skills: 'Know when to escalate', tools: 'No awareness of context' },
  { skills: 'Reusable expertise packages', tools: 'Discrete, standalone verbs' },
  { skills: 'e.g. "Design an email template"', tools: 'e.g. "Send email"', italic: true },
];

export default function Slide18_SkillsVsTools() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
          Skills <span className="text-white/20">vs</span> Tools
        </h2>
      </FadeUp>

      <div className="max-w-4xl">
        {/* Headers */}
        <div className="grid grid-cols-2 gap-6 mb-4 px-4">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold">Skills</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs tracking-[0.25em] uppercase text-amber-400 font-semibold">Tools</span>
            </div>
          </FadeUp>
        </div>

        <StaggerChildren stagger={0.1} className="space-y-3">
          {rows.map((row, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass rounded-lg px-5 py-3 border border-cyan-500/10 bg-gradient-to-r from-cyan-500/5 to-transparent">
                  <span className={`text-sm ${row.italic ? 'italic text-cyan-300/50' : 'text-white/70 font-medium'}`}>{row.skills}</span>
                </div>
                <div className="glass rounded-lg px-5 py-3 border border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-transparent">
                  <span className={`text-sm ${row.italic ? 'italic text-amber-300/50' : 'text-white/70 font-medium'}`}>{row.tools}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
