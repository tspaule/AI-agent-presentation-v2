import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide29_JackalBotIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Glowing orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-amber-500 blur-[150px]"
      />

      <div className="relative z-10 text-center max-w-4xl">
        <FadeUp delay={0.1}>
          <p className="text-xs tracking-[0.3em] uppercase text-amber-400/60 font-semibold mb-6">Demo 3</p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="text-gradient-warm">JackalBot</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-2xl text-white/50 font-light mb-4">
            What if you had your own JARVIS?
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <p className="text-sm text-white/25">
            My personal AI agent — cloud-hosted, always on, built on the OpenClaw framework.
          </p>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
      />
    </div>
  );
}
