import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide23_TheoryComplete() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[300px] h-[300px] rounded-full bg-emerald-500/8 blur-[100px]"
      />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl mb-8"
        >
          <span className="text-gradient-emerald text-8xl font-black">✓</span>
        </motion.div>

        <FadeUp delay={0.3}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Theory <span className="text-gradient-emerald">Complete</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xl text-white/35 font-light">
            Now let's see it in action.
          </p>
        </FadeUp>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent"
      />
    </div>
  );
}
