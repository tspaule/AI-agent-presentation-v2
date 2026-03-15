import { motion } from 'framer-motion';
import { FadeUp, BlurIn, CharacterReveal } from '../AnimatedText';
import Particles from '../ui/Particles';
import { ExternalLink } from 'lucide-react';

export default function Slide35_ThankYou() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Particles background - sparse, slow */}
      <Particles quantity={30} color="#3b82f6" size={1} speed={0.15} connected={false} />

      {/* Blue ambient orb - floating */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-[40%] w-[500px] h-[500px] rounded-full bg-blue-500/6 blur-[150px]"
      />

      {/* Purple ambient orb - floating */}
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-[35%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[140px]"
      />

      {/* Noise & vignette */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Main title */}
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-6">
          <CharacterReveal delay={0.2} stagger={0.03} className="text-gradient-blue">
            Thank You
          </CharacterReveal>
        </h1>

        <FadeUp delay={0.8}>
          <p className="text-xl md:text-2xl text-white/40 font-light mb-14 tracking-wide">
            Questions & Discussion
          </p>
        </FadeUp>

        {/* Contact info */}
        <BlurIn delay={1.0}>
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-semibold text-white/70 tracking-wide">Thomas Paule</p>
            <p className="text-sm text-white/35">
              thomas.paule@visory.com.au &nbsp;|&nbsp; linkedin.com/in/thomaspaule
            </p>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/15" />
              <div className="flex items-center gap-2">
                <ExternalLink className="w-3 h-3 text-white/20" />
                <p className="text-xs tracking-[0.15em] text-white/25 font-medium">
                  AI from the Inside &nbsp;|&nbsp; Substack
                </p>
              </div>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/15" />
            </div>
          </div>
        </BlurIn>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </div>
  );
}
