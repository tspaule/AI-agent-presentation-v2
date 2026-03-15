import { motion } from 'framer-motion';
import { FadeUp, DrawLine } from '../AnimatedText';
import Particles from '../ui/Particles';
import { ArrowRight } from 'lucide-react';

export default function Slide23_TheoryComplete() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* Subtle particles */}
      <Particles
        quantity={20}
        color="#3b82f6"
        size={0.8}
        speed={0.1}
        className="z-[1] opacity-50"
      />

      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]"
      />

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      {/* Vignette */}
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <FadeUp delay={0.2}>
          <p className="text-xs tracking-[0.4em] uppercase text-white/15 font-semibold mb-8">
            Theory complete
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-white/90">
            Now let's see them
            <br />
            <span className="text-gradient-blue">in action.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.8}>
          <DrawLine
            width="120px"
            color="rgba(59,130,246,0.25)"
            delay={0.2}
            className="mx-auto mb-8"
          />
        </FadeUp>

        <FadeUp delay={1.1}>
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 text-blue-400/30"
          >
            <span className="text-sm tracking-widest uppercase">Demos</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </FadeUp>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
      />
    </div>
  );
}
