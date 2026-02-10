import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const tasks = [
  { rank: 1, title: 'Email Management', mentions: '4 mentions', accent: 'text-amber-400 border-amber-500/30 bg-amber-500/5' },
  { rank: 2, title: 'Data Reporting & Analysis', mentions: '2 mentions', accent: 'text-blue-400 border-blue-500/30 bg-blue-500/5' },
  { rank: 3, title: 'Context Loading (Copy-Paste into AI)', mentions: '2 mentions', accent: 'text-purple-400 border-purple-500/30 bg-purple-500/5' },
  { rank: 4, title: 'Client Monitoring & Touchpoints', mentions: '1 mention', accent: 'text-white/40 border-white/10 bg-white/[0.02]' },
  { rank: 5, title: 'Proposals & Scoping', mentions: '1 mention', accent: 'text-white/40 border-white/10 bg-white/[0.02]' },
  { rank: 6, title: 'Design Documentation', mentions: '1 mention', accent: 'text-white/40 border-white/10 bg-white/[0.02]' },
];

export default function Slide08_Tasks() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Tasks That Should Be <span className="text-gradient-blue">Easier</span>
        </h2>
        <p className="text-base text-white/35 mb-8">Spoiler: agents can help with all of them.</p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mb-6">
        <StaggerChildren stagger={0.08} className="space-y-3">
          {tasks.slice(0, 3).map((t) => (
            <StaggerItem key={t.rank}>
              <div className={`flex items-center gap-4 rounded-xl border px-5 py-4 ${t.accent}`}>
                <span className="text-2xl font-black opacity-50">{t.rank}</span>
                <div className="flex-1">
                  <span className="text-base font-semibold text-white/90">{t.title}</span>
                  <span className="text-xs text-white/30 ml-3">{t.mentions}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <StaggerChildren stagger={0.08} className="space-y-3">
          {tasks.slice(3).map((t) => (
            <StaggerItem key={t.rank}>
              <div className={`flex items-center gap-4 rounded-xl border px-5 py-4 ${t.accent}`}>
                <span className="text-2xl font-black opacity-50">{t.rank}</span>
                <div className="flex-1">
                  <span className="text-base font-semibold text-white/90">{t.title}</span>
                  <span className="text-xs text-white/30 ml-3">{t.mentions}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <FadeUp delay={0.8}>
        <div className="glass rounded-xl p-5 max-w-5xl border-l-2 border-blue-500/40">
          <p className="text-sm text-white/50 italic leading-relaxed">
            "I've been wanting to learn how to setup an agent so that every Thursday when data is released, I come to work and a report is sitting there for me."
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
