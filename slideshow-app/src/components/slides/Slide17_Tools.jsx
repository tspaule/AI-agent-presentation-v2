import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Hammer, Globe, HardDrive, Database, Search, Terminal } from 'lucide-react';

const tools = [
  { Icon: Globe, label: 'API Calls', desc: 'Connect to any service', color: 'border-amber-500/20 text-amber-400' },
  { Icon: HardDrive, label: 'File System', desc: 'Read and write files', color: 'border-orange-500/20 text-orange-400' },
  { Icon: Database, label: 'Database', desc: 'Query and update data', color: 'border-yellow-500/20 text-yellow-400' },
  { Icon: Search, label: 'Web Search', desc: 'Find information online', color: 'border-amber-400/20 text-amber-300' },
  { Icon: Terminal, label: 'Code Execution', desc: 'Run scripts and programs', color: 'border-orange-400/20 text-orange-300' },
];

export default function Slide17_Tools() {
  return (
    <SlideShell bg="warm" sectionLabel="THEORY  /  TOOLS">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-10">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-amber-500/15 leading-none">04</span>
              <Hammer className="w-12 h-12 text-amber-400/60" strokeWidth={1.2} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-warm">Tools</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                How agents interact with the real world.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Tools as connected nodes */}
        <FadeUp delay={0.3}>
          <div className="relative max-w-4xl">
            {/* Central connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20"
              style={{ transformOrigin: 'left center' }}
            />

            <StaggerChildren stagger={0.1} className="grid grid-cols-5 gap-4 relative">
              {tools.map(({ Icon, label, desc, color }, i) => (
                <StaggerItem key={label}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.05 }}
                    className={`glass rounded-xl p-5 border ${color.split(' ')[0]} bg-gradient-to-b from-amber-500/5 to-transparent text-center flex flex-col items-center gap-3 h-full relative`}
                  >
                    {/* Node dot on the connecting line */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-400/40" />
                    <div className={`w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${color.split(' ')[1]}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold text-white/80">{label}</h3>
                    <p className="text-[11px] text-white/30 leading-snug">{desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>

        {/* Insight */}
        <FadeUp delay={1}>
          <div className="glass rounded-xl p-6 border-l-2 border-amber-500/30 max-w-2xl mt-10">
            <p className="text-base text-white/50 leading-relaxed">
              <span className="text-amber-300/80 font-semibold">Tools are the agent's hands.</span>{' '}
              Without them, the model can only think. With them, it can search, write, call APIs, and change the world around it.
            </p>
          </div>
        </FadeUp>
      </div>
    </SlideShell>
  );
}
