import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem, SlideIn } from '../AnimatedText';

const models = [
  { tier: 'HIGH', name: 'Claude Opus', desc: 'Heavy lifting', detail: 'Complex financial analysis, multi-step reasoning', color: 'from-purple-500/15 to-purple-600/5', border: 'border-purple-500/20', text: 'text-purple-400', barW: 'w-full' },
  { tier: 'MID', name: 'Claude Sonnet', desc: 'Everyday workhorse', detail: 'Code generation, reports, general business tasks', color: 'from-blue-500/15 to-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400', barW: 'w-2/3' },
  { tier: 'LIGHT', name: 'Claude Haiku', desc: 'Fast & cheap', detail: 'Simple categorization, quick classification', color: 'from-cyan-500/15 to-cyan-600/5', border: 'border-cyan-500/20', text: 'text-cyan-400', barW: 'w-1/3' },
];

export default function Slide14_Model() {
  return (
    <SlideShell bg="purple">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-blue-500/30">1</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Model — <span className="text-gradient-purple">The Brain</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-4">The underlying AI that reasons, generates, and makes decisions.</p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass rounded-xl px-5 py-3 inline-flex items-center gap-3 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase text-amber-400/70 font-semibold">Key Insight</span>
          <span className="text-sm text-white/60">There is a different model that excels at every task. Match the brain to the job.</span>
        </div>
      </FadeUp>

      <StaggerChildren stagger={0.15} className="space-y-4 max-w-4xl">
        {models.map((m, i) => (
          <StaggerItem key={i}>
            <div className={`glass rounded-xl p-6 border ${m.border} bg-gradient-to-r ${m.color} to-transparent`}>
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <span className={`text-[10px] tracking-[0.25em] uppercase ${m.text} font-bold`}>{m.tier}</span>
                  <h3 className="text-xl font-bold text-white/90 mt-1">{m.name}</h3>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white/70 mb-1">{m.desc}</p>
                  <p className="text-xs text-white/35">{m.detail}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
