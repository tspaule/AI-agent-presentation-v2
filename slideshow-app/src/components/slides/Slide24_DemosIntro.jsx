import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide24_DemosIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Animated pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[200px] h-[200px] rounded-full border border-amber-500/20"
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[150px]"
      />

      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/60 font-semibold mb-6">
            Section 03
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            Agents Doing <span className="text-gradient-warm">Real Work</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xl text-white/35 font-light">
            Live demos — from code generation to your own personal JARVIS
          </p>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
      />
    </div>
  );
}
