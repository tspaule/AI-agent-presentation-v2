import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem, DrawLine } from '../AnimatedText';
import { Server, Cloud, Code, Globe, Mic, Cpu, MessageSquare } from 'lucide-react';

const layers = [
  {
    label: 'Interfaces',
    color: 'border-amber-500/25 from-amber-500/10',
    tagColor: 'text-amber-400',
    items: [
      { icon: MessageSquare, name: 'Discord' },
      { icon: Globe, name: 'Web' },
      { icon: Mic, name: 'Voice' },
    ],
  },
  {
    label: 'Frameworks',
    color: 'border-orange-500/25 from-orange-500/8',
    tagColor: 'text-orange-400',
    items: [
      { icon: Cpu, name: 'OpenClaw' },
      { icon: Code, name: 'Claude API' },
      { icon: Code, name: 'OpenAI' },
    ],
  },
  {
    label: 'Cloud Infrastructure',
    color: 'border-red-500/20 from-red-500/6',
    tagColor: 'text-red-400',
    items: [
      { icon: Cloud, name: 'Digital Ocean' },
      { icon: Server, name: 'Vercel' },
    ],
  },
];

export default function Slide25_TechStack() {
  return (
    <SlideShell bg="warm" sectionLabel="DEMOS">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          The <span className="text-gradient-warm">Stack</span>
        </h2>
        <p className="text-base text-white/35 mb-12 max-w-2xl">
          Three layers. All connected. All leveraging AI at every level.
        </p>
      </FadeUp>

      <div className="max-w-4xl w-full space-y-4">
        {layers.map((layer, layerIdx) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3 + layerIdx * 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`glass rounded-2xl p-6 border ${layer.color} bg-gradient-to-r to-transparent`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] tracking-[0.25em] uppercase font-bold ${layer.tagColor}`}>
                  {layer.label}
                </span>
                <div className="h-px flex-1 mx-4 bg-white/5" />
                <span className="text-[10px] text-white/15 tracking-widest uppercase">
                  Layer {3 - layerIdx}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {layer.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + layerIdx * 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3 border border-white/5"
                  >
                    <item.icon className={`w-4 h-4 ${layer.tagColor}/70`} />
                    <span className="text-sm text-white/70 font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connector lines between layers */}
            {layerIdx < layers.length - 1 && (
              <div className="flex justify-center py-1">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.6 + layerIdx * 0.2, duration: 0.3 }}
                  className="w-px h-4 bg-gradient-to-b from-white/15 to-white/5"
                  style={{ transformOrigin: 'top' }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <FadeUp delay={1.2}>
        <p className="text-xs text-white/20 mt-8 italic">
          Claude and Claude Code are now the market leaders for how I work.
        </p>
      </FadeUp>
    </SlideShell>
  );
}
