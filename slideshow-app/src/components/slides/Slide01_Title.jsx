import { motion } from 'framer-motion';
import { FadeUp, BlurIn } from '../AnimatedText';
import Particles from '../ui/Particles';
import Spotlight from '../ui/Spotlight';

export default function Slide01_Title() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
      {/* Particle field */}
      <Particles quantity={60} connected={true} color="#3b82f6" size={1.2} speed={0.2} />

      {/* Cursor spotlight */}
      <Spotlight size={500} color="rgba(59,130,246,0.06)" />

      {/* Subtle radial glow behind title */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[160px]"
      />

      {/* Noise overlay */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        <FadeUp delay={0.1}>
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/25 font-semibold mb-8">
            AI From The Inside
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-4">
            <span className="text-gradient-blue">WTF</span>
            <span className="text-white/90"> Are</span>
            <br />
            <span className="text-white">AI Agents?</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.55}>
          <p className="text-xl md:text-2xl text-white/35 font-light mt-6 mb-16 tracking-wide">
            From Chatbots to Autonomous Workflows
          </p>
        </FadeUp>

        <BlurIn delay={0.8}>
          <div className="flex flex-col items-center gap-3">
            <p className="text-base font-semibold text-white/60 tracking-wide">Thomas Paule</p>
            <p className="text-sm text-white/30">
              CEO &amp; Founder, Visory &nbsp;|&nbsp; Chief Digital &amp; AI Officer, Findex
            </p>
          </div>
        </BlurIn>

        <BlurIn delay={1.0}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/15" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-medium">
              Mander Beer &amp; Learn &nbsp;&bull;&nbsp; February 2026
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/15" />
          </div>
        </BlurIn>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      />
    </div>
  );
}
