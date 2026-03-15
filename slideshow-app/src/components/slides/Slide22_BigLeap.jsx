import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FadeUp, BlurIn } from '../AnimatedText';
import Aurora from '../ui/Aurora';

const chatbotWords = ['respond', 'wait', 'suggest'];
const agentWords = ['execute', 'decide', 'adapt', 'learn'];

function CyclingWord({ words, interval = 2000, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Slide22_BigLeap() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center">
      {/* Aurora background */}
      <Aurora
        colors={['#3b82f6', '#06b6d4', '#1e40af']}
        speed={0.6}
        blur={100}
        className="opacity-60"
      />

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none z-[2]" />
      {/* Vignette */}
      <div className="vignette absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-8">
        <FadeUp delay={0.1}>
          <p className="text-xs tracking-[0.5em] uppercase text-blue-400/30 font-semibold mb-8">
            The conceptual shift
          </p>
        </FadeUp>

        <BlurIn delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-10">
            The Big <span className="text-gradient-blue">Leap</span>
          </h1>
        </BlurIn>

        {/* Two-line morphing comparison */}
        <div className="space-y-6 mb-12">
          <FadeUp delay={0.7}>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl md:text-3xl text-white/25 font-light">Chatbots</span>
              <span className="text-2xl md:text-3xl font-bold text-white/30">
                <CyclingWord words={chatbotWords} interval={2200} className="text-white/25 min-w-[140px]" />
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            />
          </FadeUp>

          <FadeUp delay={1.1}>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl md:text-4xl text-blue-300/80 font-bold">Agents</span>
              <span className="text-3xl md:text-4xl font-black">
                <CyclingWord
                  words={agentWords}
                  interval={1800}
                  className="text-gradient-blue min-w-[140px]"
                />
              </span>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={1.5}>
          <p className="text-xl md:text-2xl text-white/20 font-light">
            Chatbots respond. Agents <span className="text-blue-300/60 font-semibold">act</span>.
          </p>
        </FadeUp>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
      />
    </div>
  );
}
