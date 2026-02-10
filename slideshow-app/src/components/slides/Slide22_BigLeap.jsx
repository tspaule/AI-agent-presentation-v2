import { motion } from 'framer-motion';
import { FadeUp, SlideIn } from '../AnimatedText';

export default function Slide22_BigLeap() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
        <FadeUp>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-center">
            The Big <span className="text-gradient-blue">Leap</span>
          </h2>
          <p className="text-base text-white/30 text-center mb-12">From Chatbots to Agents</p>
        </FadeUp>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <SlideIn from="left" delay={0.3}>
            <div className="glass rounded-2xl p-8 border border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent text-center">
              <div className="text-xs tracking-[0.25em] uppercase text-red-400/50 font-semibold mb-6">Chatbot Era</div>
              <div className="space-y-2 mb-6">
                {['Question → Answer', 'Question → Answer', 'Question → Answer'].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="text-sm text-white/40 font-mono"
                  >{line}</motion.p>
                ))}
              </div>
              <p className="text-sm text-red-300/50 font-medium">You are the glue.</p>
            </div>
          </SlideIn>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-4xl text-blue-400/60 animate-bounce-right"
          >
            →
          </motion.div>

          <SlideIn from="right" delay={0.5}>
            <div className="glass rounded-2xl p-8 border border-blue-500/20 bg-gradient-to-br from-blue-500/8 to-cyan-500/5 text-center glow-blue">
              <div className="text-xs tracking-[0.25em] uppercase text-blue-400 font-semibold mb-6">Agent Era</div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-blue-200/70 font-mono mb-6"
              >
                Goal → Plan → Act → Iterate → Deliver
              </motion.p>
              <div className="space-y-1">
                <p className="text-xs text-white/40">Multi-step workflows.</p>
                <p className="text-xs text-white/40">No human in the loop.</p>
                <p className="text-xs text-blue-300/60 font-medium">End-to-end execution.</p>
              </div>
            </div>
          </SlideIn>
        </div>

        <FadeUp delay={0.9}>
          <p className="text-center text-sm text-white/25 mt-8 italic">
            You used to jockey the system. Now the system runs itself.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
