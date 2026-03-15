import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, SlideIn } from '../AnimatedText';
import { Database, Clock, Archive } from 'lucide-react';
import Ripple from '../ui/Ripple';

export default function Slide20_Memory() {
  return (
    <SlideShell bg="purple" sectionLabel="THEORY  /  MEMORY">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-10">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-pink-500/15 leading-none">06</span>
              <Database className="w-12 h-12 text-pink-400/60" strokeWidth={1.2} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-purple">Memory</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                Context is temporary. Memory persists.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Two glass cards: short-term vs long-term */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mb-10">
          <SlideIn from="left" delay={0.3}>
            <div className="glass rounded-2xl p-7 border border-blue-500/15 bg-gradient-to-br from-blue-500/5 to-transparent h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-blue-300/80">Short-term</h3>
                  <span className="text-xs text-blue-400/30">Within a session</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Current conversation thread',
                  'Working state and variables',
                  'Recent decisions made',
                  'Cleared when session ends',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/45"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-400/40 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SlideIn>

          <SlideIn from="right" delay={0.5}>
            <div className="glass rounded-2xl p-7 border border-purple-500/20 bg-gradient-to-br from-purple-500/8 to-pink-500/5 glow-purple h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                  <Archive className="w-5 h-5 text-purple-400/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-purple-300/80">Long-term</h3>
                  <span className="text-xs text-purple-400/30">Across sessions</span>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'User preferences and patterns',
                  'Past decisions and outcomes',
                  'Learned corrections',
                  'Persists indefinitely',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>

        {/* Bottom insight */}
        <FadeUp delay={1}>
          <div className="glass rounded-xl p-5 max-w-4xl border-l-2 border-pink-500/30">
            <p className="text-sm text-white/40 leading-relaxed">
              <span className="text-pink-300/70 font-semibold">Example:</span>{' '}
              The agent remembers that a client always miscodes contractor payments to "office supplies" — so it proactively flags and reclassifies without being told.
            </p>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
