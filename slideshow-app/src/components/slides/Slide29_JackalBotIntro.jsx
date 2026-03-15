import { motion } from 'framer-motion';
import { FadeUp, BlurIn, CharacterReveal } from '../AnimatedText';
import { Bot } from 'lucide-react';

export default function Slide29_JackalBotIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Large glowing warm orb - center */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500 blur-[180px]"
      />

      {/* Secondary warm ring */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-amber-500/15"
      />

      {/* Noise & vignette */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <FadeUp delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500/20" />
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400/50 font-semibold">
              Demo 3
            </span>
            <div className="h-px w-8 bg-amber-500/20" />
          </div>
        </FadeUp>

        {/* Bot icon */}
        <BlurIn delay={0.3}>
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center"
            >
              <Bot className="w-8 h-8 text-amber-400" />
            </motion.div>
          </div>
        </BlurIn>

        {/* Title */}
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-6">
          <CharacterReveal delay={0.5} stagger={0.04} className="text-gradient-warm">
            JackalBot
          </CharacterReveal>
        </h1>

        <FadeUp delay={1.0}>
          <p className="text-2xl md:text-3xl text-white/50 font-light mb-4">
            What if you had your own JARVIS?
          </p>
        </FadeUp>

        <FadeUp delay={1.2}>
          <p className="text-sm text-white/25 max-w-lg mx-auto">
            My personal AI agent — cloud-hosted, always on, built on the OpenClaw framework.
          </p>
        </FadeUp>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
      />
    </div>
  );
}
