import { motion } from 'framer-motion';
import { FadeUp } from '../AnimatedText';

export default function Slide34_Quote() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Subtle ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[600px] h-[600px] rounded-full bg-blue-500/4 blur-[150px]"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[12rem] font-serif text-white/10 absolute -top-24 left-1/2 -translate-x-1/2 select-none"
        >
          "
        </motion.div>

        <FadeUp delay={0.3}>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white/80 mb-8">
            Today is the <span className="font-semibold text-white">worst</span> AI will ever be.
            <br />
            <span className="text-white/50">It's only going to get better from here.</span>
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.6}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/10" />
            <p className="text-xs tracking-[0.3em] uppercase text-white/25 font-semibold">
              AI From The Inside — February 2026
            </p>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
