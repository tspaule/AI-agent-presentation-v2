import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn, StaggerChildren, StaggerItem } from '../AnimatedText';

export default function Slide09_WantFromTonight() {
  return (
    <SlideShell bg="purple">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
          What You <span className="text-gradient-purple">Want</span> From Tonight
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        <SlideIn from="left" delay={0.2}>
          <div className="glass rounded-2xl p-7 text-center glow-purple h-full">
            <div className="text-xs tracking-[0.25em] uppercase text-purple-400/70 font-semibold mb-4">Session Preference</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-black text-gradient-purple mb-3"
            >
              83%
            </motion.div>
            <p className="text-sm text-white/50">want a balanced mix<br />of theory and practice</p>
          </div>
        </SlideIn>

        <SlideIn from="left" delay={0.4}>
          <div className="glass rounded-2xl p-7 h-full">
            <div className="text-xs tracking-[0.25em] uppercase text-blue-400/70 font-semibold mb-4">Top Requests</div>
            <StaggerChildren stagger={0.1} className="space-y-3">
              {[
                'Genuine AI agents I can use today',
                'Practical setup steps',
                'Secure environment guidance',
                'Best tools for their workflow',
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 mt-2 shrink-0" />
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </SlideIn>

        <SlideIn from="right" delay={0.6}>
          <div className="glass rounded-2xl p-7 border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent h-full">
            <div className="text-xs tracking-[0.25em] uppercase text-emerald-400/70 font-semibold mb-4">Promise Tonight</div>
            <p className="text-sm text-white/60 leading-relaxed">
              This session is built around what you asked for. Theory to understand the building blocks, then real demos you can take away and try tomorrow.
            </p>
          </div>
        </SlideIn>
      </div>
    </SlideShell>
  );
}
