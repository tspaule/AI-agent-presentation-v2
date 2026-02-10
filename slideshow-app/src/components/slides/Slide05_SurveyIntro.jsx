import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide05_SurveyIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Large accent orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/6 blur-[150px]"
      />

      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <p className="text-sm tracking-[0.3em] uppercase text-purple-400/60 font-semibold mb-6">
            Section 01
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            I Asked, <span className="text-gradient-purple">You Answered</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xl text-white/35 font-light">
            12 responses that shaped tonight's session
          </p>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
      />
    </div>
  );
}
