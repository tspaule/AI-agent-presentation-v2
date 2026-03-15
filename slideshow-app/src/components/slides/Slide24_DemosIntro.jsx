import { motion } from 'framer-motion';
import { CharacterReveal, FadeUp, BlurIn } from '../AnimatedText';
import RetroGrid from '../ui/RetroGrid';
import { Play, Zap } from 'lucide-react';

export default function Slide24_DemosIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* RetroGrid with warm amber */}
      <RetroGrid angle={65} cellSize={50} opacity={0.2} color="rgba(245,158,11,0.25)" />

      {/* Large warm ambient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-500/8 blur-[200px]"
      />

      {/* Secondary orange orb */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-500/6 blur-[150px]"
      />

      {/* Noise & vignette */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        {/* Section tag */}
        <FadeUp delay={0.1}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="w-4 h-4 text-amber-400/60" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-amber-400/50 font-semibold">
              Part Two
            </span>
            <Zap className="w-4 h-4 text-amber-400/60" />
          </div>
        </FadeUp>

        {/* Main title */}
        <h1 className="text-8xl md:text-9xl lg:text-[11rem] font-black leading-[0.85] tracking-tighter mb-6">
          <CharacterReveal delay={0.3} stagger={0.03} className="text-gradient-warm">
            Live Demos
          </CharacterReveal>
        </h1>

        <FadeUp delay={0.9}>
          <p className="text-xl md:text-2xl text-white/40 font-light tracking-wide max-w-2xl mx-auto">
            Three agents. Built this month. Running right now.
          </p>
        </FadeUp>

        {/* Pulsing play icon */}
        <BlurIn delay={1.2}>
          <div className="mt-14 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 0 0 rgba(245,158,11,0.4)',
                  '0 0 0 20px rgba(245,158,11,0)',
                  '0 0 0 0 rgba(245,158,11,0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center"
            >
              <Play className="w-6 h-6 text-amber-400 ml-1" />
            </motion.div>
          </div>
        </BlurIn>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
      />
    </div>
  );
}
