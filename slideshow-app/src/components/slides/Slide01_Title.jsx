import { motion } from 'framer-motion';
import { FadeUp, FadeIn } from '../AnimatedText';

export default function Slide01_Title() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        <FadeUp delay={0.1}>
          <p className="text-sm tracking-[0.35em] uppercase text-white/30 font-semibold mb-6">
            AI From The Inside
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tight mb-6">
            <span className="text-gradient-blue">WTF</span> Are
            <br />
            <span className="text-white">AI Agents?</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xl md:text-2xl text-white/40 font-light mt-4 mb-12">
            From Chatbots to Autonomous Workflows
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-base font-semibold text-white/70">Thomas Paule</p>
            <p className="text-sm text-white/35">
              CEO & Founder, Visory  |  Chief Digital & AI Officer, Findex
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-8 bg-white/20" />
              <p className="text-xs tracking-[0.2em] uppercase text-white/25">
                Mander Beer & Learn  |  February 2026
              </p>
              <div className="h-px w-8 bg-white/20" />
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </div>
  );
}
