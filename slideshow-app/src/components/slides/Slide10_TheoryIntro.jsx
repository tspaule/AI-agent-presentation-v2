import { motion } from 'framer-motion';
import { CharacterReveal, FadeUp, DrawLine } from '../AnimatedText';
import RetroGrid from '../ui/RetroGrid';
import Particles from '../ui/Particles';

export default function Slide10_TheoryIntro() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* RetroGrid background with blue tint */}
      <RetroGrid
        angle={65}
        cellSize={50}
        opacity={0.2}
        color="rgba(59,130,246,0.2)"
      />

      {/* Sparse blue particles overlay */}
      <Particles
        quantity={25}
        color="#3b82f6"
        size={1}
        speed={0.12}
        className="z-[1]"
      />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[150px]"
        />
      </div>

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      {/* Vignette */}
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <p className="text-xs tracking-[0.5em] uppercase text-blue-400/30 font-semibold mb-10">
            Part II
          </p>
        </FadeUp>

        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tight mb-10">
          <CharacterReveal delay={0.3} stagger={0.04} className="text-gradient-blue">
            The Theory
          </CharacterReveal>
        </h1>

        <FadeUp delay={1.4}>
          <DrawLine
            width="160px"
            color="rgba(59,130,246,0.3)"
            delay={0.2}
            className="mx-auto mb-8"
          />
        </FadeUp>

        <FadeUp delay={1.7}>
          <p className="text-xl md:text-2xl text-white/30 font-light tracking-wide">
            Seven building blocks. One framework.
          </p>
        </FadeUp>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />
    </div>
  );
}
