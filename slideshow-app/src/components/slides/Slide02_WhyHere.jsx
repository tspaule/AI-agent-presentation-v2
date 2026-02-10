import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem, SlideIn } from '../AnimatedText';

export default function Slide02_WhyHere() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
          Why Are We <span className="text-gradient-blue">Here?</span>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {/* Old Way */}
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <span className="text-xs tracking-[0.25em] uppercase text-red-400/70 font-semibold">The Old Way</span>
              </div>
              <StaggerChildren stagger={0.1} className="space-y-4">
                {[
                  'You prompt. AI answers.',
                  'You take it somewhere.',
                  'You prompt again.',
                ].map((line, i) => (
                  <StaggerItem key={i}>
                    <p className="text-lg font-semibold text-white/80">{line}</p>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <p className="text-base text-white/40 mt-4 pt-4 border-t border-white/5">
                    You are the glue between every step of the process.
                  </p>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </SlideIn>

        {/* New Way */}
        <SlideIn from="right" delay={0.4}>
          <div className="glass rounded-2xl p-8 relative overflow-hidden glow-blue">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-cyan-500/5" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold">The New Way</span>
              </div>
              <StaggerChildren stagger={0.1} className="space-y-4">
                {[
                  'You set the goal; give the context.',
                  'The agent plans, acts, iterates, and delivers.',
                  'The system runs end-to-end.',
                ].map((line, i) => (
                  <StaggerItem key={i}>
                    <p className="text-lg font-semibold text-white/90">{line}</p>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <p className="text-base text-blue-300/60 mt-4 pt-4 border-t border-blue-400/10 font-medium">
                    You direct. It executes.
                  </p>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </SlideIn>
      </div>
    </SlideShell>
  );
}
