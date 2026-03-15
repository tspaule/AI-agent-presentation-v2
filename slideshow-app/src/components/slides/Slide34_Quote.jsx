import { motion } from 'framer-motion';
import { FadeUp, BlurIn } from '../AnimatedText';

export default function Slide34_Quote() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle blue ambient orb */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500 blur-[200px]"
      />

      {/* Noise & vignette */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Giant decorative quotation mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 0.04, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] select-none pointer-events-none z-[1]"
      >
        <span className="text-[28rem] font-serif text-white leading-none block">"</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <FadeUp delay={0.4}>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] mb-12">
            <span className="text-white/80">Today is the </span>
            <span className="text-white font-bold">worst</span>
            <span className="text-white/80"> AI will ever be.</span>
            <br />
            <span className="text-white/50">It's only going to get better from here.</span>
          </blockquote>
        </FadeUp>

        <BlurIn delay={0.9}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/20 font-semibold">
              AI From The Inside — February 2026
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </BlurIn>
      </div>
    </div>
  );
}
