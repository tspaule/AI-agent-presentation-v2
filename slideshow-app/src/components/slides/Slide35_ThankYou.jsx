import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide35_ThankYou() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Multi-color ambient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/6 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-purple-500/6 blur-[120px]"
      />

      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="text-gradient-blue">Thank You</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-xl text-white/40 font-light mb-10">
            Questions & Discussion
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold text-white/70">Thomas Paule</p>
            <p className="text-sm text-white/35">
              thomas.paule@visory.com.au  |  linkedin.com/in/thomaspaule
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-xs tracking-[0.15em] text-white/25">
                AI from the Inside  |  Substack
              </p>
              <div className="h-px w-8 bg-white/20" />
            </div>
          </div>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </div>
  );
}
