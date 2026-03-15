import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Brain } from 'lucide-react';
import Particles from '../ui/Particles';

const points = [
  { title: 'The reasoning engine', desc: 'Takes in information, reasons about it, and decides what to do next.' },
  { title: 'GPT-4, Claude, Gemini, Llama', desc: 'Different brains for different jobs. Match capability to the task.' },
  { title: 'Chooses what to do next', desc: 'Not following a script — actively deciding the best action at each step.' },
  { title: 'Not just chat — decision-making', desc: 'The shift from answering questions to taking autonomous action.' },
];

export default function Slide14_Model() {
  return (
    <SlideShell bg="blue" sectionLabel="THEORY  /  MODEL">
      {/* Subtle particles */}
      <Particles quantity={15} color="#3b82f6" size={0.8} speed={0.1} className="z-0 opacity-40" />

      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-12">
          {/* Big number + icon */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-blue-500/15 leading-none">01</span>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Brain className="w-12 h-12 text-blue-400/60" strokeWidth={1.2} />
              </motion.div>
            </div>
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                The <span className="text-gradient-blue">Model</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                The underlying AI that powers every decision an agent makes.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Key points as glass cards */}
        <StaggerChildren stagger={0.1} className="grid grid-cols-2 gap-4 max-w-4xl">
          {points.map((pt, i) => (
            <StaggerItem key={i}>
              <div className="glass rounded-xl p-6 border border-blue-500/10 bg-gradient-to-br from-blue-500/5 to-transparent hover:border-blue-500/20 transition-colors h-full">
                <h3 className="text-base font-bold text-white/80 mb-2">{pt.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{pt.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
