import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import DotPattern from '../ui/DotPattern';

const items = [
  {
    num: '01',
    title: 'Quick Survey',
    desc: 'Where is everyone at?',
    gradient: 'text-gradient-purple',
    lineColor: 'rgba(139,92,246,0.25)',
  },
  {
    num: '02',
    title: 'The Theory',
    desc: 'Seven building blocks of every agent',
    gradient: 'text-gradient-blue',
    lineColor: 'rgba(59,130,246,0.25)',
  },
  {
    num: '03',
    title: 'Live Demos',
    desc: 'Three real agents in action',
    gradient: 'text-gradient-warm',
    lineColor: 'rgba(245,158,11,0.25)',
  },
  {
    num: '04',
    title: 'The Future',
    desc: 'From doers to instructors',
    gradient: 'text-gradient-emerald',
    lineColor: 'rgba(16,185,129,0.25)',
  },
];

export default function Slide03_Agenda() {
  return (
    <SlideShell bg="default" sectionLabel="TONIGHT">
      {/* Dot pattern background */}
      <DotPattern spacing={35} radius={0.8} color="rgba(255,255,255,0.04)" />

      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-16">
            The <span className="text-gradient-purple">Roadmap</span>
          </h2>
        </FadeUp>

        <StaggerChildren stagger={0.12} className="flex flex-col gap-0 max-w-3xl">
          {items.map((item, i) => (
            <StaggerItem key={item.num}>
              <div className="flex items-start gap-8 group">
                {/* Number column with connecting line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className={`text-5xl font-black ${item.gradient} opacity-70 leading-none`}>
                    {item.num}
                  </span>
                  {i < items.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="w-[1px] h-10 mt-3"
                      style={{ background: item.lineColor, transformOrigin: 'top center' }}
                    />
                  )}
                </div>

                {/* Text content */}
                <div className="pt-1 pb-6">
                  <h3 className="text-2xl font-bold text-white/90 mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/35 font-light">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
