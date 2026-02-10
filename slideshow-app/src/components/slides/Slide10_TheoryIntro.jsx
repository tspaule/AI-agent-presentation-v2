import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide10_TheoryIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Animated neural net dots */}
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.sin(i * 1.3) * 40, 0],
            y: [0, Math.cos(i * 0.9) * 30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}

      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[150px]"
      />

      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <p className="text-sm tracking-[0.3em] uppercase text-cyan-400/60 font-semibold mb-6">
            Section 02
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="text-gradient-blue">WTF</span> Are AI Agents?
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xl text-white/35 font-light">
            The building blocks — explained like you're building a human
          </p>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
      />
    </div>
  );
}
