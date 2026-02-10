import SlideShell from '../SlideShell';
import { FadeUp, SlideIn } from '../AnimatedText';

const without = [
  'Every session starts from zero',
  'You re-explain preferences each time',
  'Same mistakes repeated',
  'No learning or improvement',
];

const withMemory = [
  'Builds familiarity over time',
  'Learns your preferences',
  'Avoids repeating mistakes',
  'Proactively flags patterns',
];

export default function Slide20_Memory() {
  return (
    <SlideShell bg="purple">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-pink-500/30">6</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Memory — <span className="text-gradient-purple">Persistence</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-8">What the agent retains and applies across sessions.</p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-8">
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-6 border border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent h-full">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-red-400/60 font-semibold">Without Memory</span>
            </div>
            <ul className="space-y-3">
              {without.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/40">
                  <span className="text-red-400/40">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </SlideIn>

        <SlideIn from="right" delay={0.4}>
          <div className="glass rounded-2xl p-6 border border-emerald-500/15 bg-gradient-to-br from-emerald-500/5 to-transparent glow-cyan h-full">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs tracking-[0.25em] uppercase text-emerald-400 font-semibold">With Memory</span>
            </div>
            <ul className="space-y-3">
              {withMemory.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-emerald-400">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </SlideIn>
      </div>

      <FadeUp delay={0.7}>
        <div className="glass rounded-xl p-5 max-w-5xl border-l-2 border-pink-500/40">
          <div className="text-xs tracking-[0.2em] uppercase text-pink-400/50 font-semibold mb-2">Example</div>
          <p className="text-sm text-white/50 italic leading-relaxed">
            The agent remembers that a client always miscodes contractor payments to 'office supplies' — so it proactively flags and reclassifies without being told.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
