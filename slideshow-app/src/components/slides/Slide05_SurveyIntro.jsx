import { motion } from 'framer-motion';
import { FadeUp, BlurIn } from '../AnimatedText';
import Ripple from '../ui/Ripple';

export default function Slide05_SurveyIntro() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Ripple rings */}
      <Ripple count={6} color="rgba(139,92,246,0.12)" duration={10} />

      {/* Central purple glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[150px]"
      />

      {/* Noise + vignette */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <FadeUp delay={0.1}>
          <p className="text-[10px] tracking-[0.4em] uppercase text-purple-400/50 font-semibold mb-8">
            Section 01
          </p>
        </FadeUp>

        <BlurIn delay={0.3}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
            <span className="text-gradient-purple">Let's Find Out</span>
          </h1>
        </BlurIn>

        <FadeUp delay={0.6}>
          <p className="text-xl md:text-2xl text-white/30 font-light tracking-wide">
            Quick show of hands...
          </p>
        </FadeUp>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
      />
    </div>
  );
}
