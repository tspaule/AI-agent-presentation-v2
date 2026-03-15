import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { FileSearch, MessageSquare, File, Search, MessagesSquare } from 'lucide-react';

const layers = [
  { Icon: MessageSquare, label: 'User message', desc: 'The request or trigger that started this task', color: 'border-blue-500/20 text-blue-400', bg: 'from-blue-500/8' },
  { Icon: File, label: 'File contents', desc: 'Documents, spreadsheets, PDFs loaded for this job', color: 'border-emerald-500/20 text-emerald-400', bg: 'from-emerald-500/8' },
  { Icon: Search, label: 'Search results', desc: 'Retrieved data from databases, web, or internal systems', color: 'border-cyan-500/20 text-cyan-400', bg: 'from-cyan-500/8' },
  { Icon: MessagesSquare, label: 'Conversation history', desc: 'What has been said and done so far in this session', color: 'border-purple-500/20 text-purple-400', bg: 'from-purple-500/8' },
];

export default function Slide19_Context() {
  return (
    <SlideShell bg="blue" sectionLabel="THEORY  /  CONTEXT">
      <div className="relative z-10 w-full">
        <div className="flex items-start gap-8 mb-10">
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <span className="text-8xl font-black text-emerald-500/15 leading-none">05</span>
              <FileSearch className="w-12 h-12 text-emerald-400/60" strokeWidth={1.2} />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
                <span className="text-gradient-emerald">Context</span>
              </h2>
              <p className="text-lg text-white/30 max-w-xl">
                The information available for THIS specific task.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Context layers - stacked cards showing depth */}
        <div className="grid grid-cols-[1fr_1fr] gap-8 max-w-5xl">
          <FadeUp delay={0.3}>
            <div className="relative">
              {/* Stacked card visual */}
              <StaggerChildren stagger={0.12} className="space-y-3">
                {layers.map(({ Icon, label, desc, color, bg }, i) => (
                  <StaggerItem key={label}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className={`glass rounded-xl p-5 border ${color.split(' ')[0]} bg-gradient-to-r ${bg} to-transparent flex items-start gap-4 transition-all`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/[0.03] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className={`w-4.5 h-4.5 ${color.split(' ')[1]}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white/80 mb-1">{label}</h4>
                        <p className="text-xs text-white/35 leading-relaxed">{desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              {/* Vertical connecting line */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/20 via-emerald-500/15 to-purple-500/20 -z-10"
                style={{ transformOrigin: 'top' }}
              />
            </div>
          </FadeUp>

          <div className="flex flex-col justify-center gap-6">
            <FadeUp delay={0.6}>
              <div className="glass rounded-xl p-6 border-l-2 border-emerald-500/30">
                <p className="text-base text-white/50 leading-relaxed">
                  Context is <span className="text-emerald-300/80 font-semibold">everything the agent can see</span> right now. It is temporary, task-specific, and defines the quality of the output.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.8}>
              <div className="glass rounded-xl p-5 border border-amber-500/10">
                <p className="text-xs tracking-[0.15em] uppercase text-amber-400/50 font-semibold mb-2">Sound familiar?</p>
                <p className="text-sm text-white/40 leading-relaxed">
                  "Copying and pasting everything into ChatGPT" — that is manual context loading. Agents automate it.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
