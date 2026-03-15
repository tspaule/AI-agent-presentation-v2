import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import Aurora from '../ui/Aurora';
import { Briefcase, Lightbulb, Users } from 'lucide-react';

const cards = [
  {
    icon: Briefcase,
    title: 'Building AI products',
    desc: 'CEO of Visory, an AI-powered fintech',
    color: 'text-amber-400',
    glow: 'from-amber-500/10',
    border: 'border-amber-500/15',
  },
  {
    icon: Lightbulb,
    title: 'Living in the trenches',
    desc: 'Not theory. What actually works.',
    color: 'text-orange-400',
    glow: 'from-orange-500/10',
    border: 'border-orange-500/15',
  },
  {
    icon: Users,
    title: 'Sharing what I\'ve learned',
    desc: 'So you can skip my mistakes',
    color: 'text-yellow-400',
    glow: 'from-yellow-500/10',
    border: 'border-yellow-500/15',
  },
];

export default function Slide02_WhyHere() {
  return (
    <SlideShell bg="warm" sectionLabel="INTRODUCTION">
      {/* Aurora background */}
      <Aurora
        colors={['#f59e0b', '#ea580c', '#d97706']}
        speed={0.6}
        blur={120}
        className="opacity-30"
      />

      <div className="relative z-10 w-full">
        <FadeUp>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            Why am I
            <br />
            <span className="text-gradient-warm">standing here?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg text-white/30 font-light mb-14 max-w-xl">
            Three reasons I thought this might be worth your evening.
          </p>
        </FadeUp>

        <StaggerChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <div className={`glass rounded-2xl p-8 border ${card.border} relative overflow-hidden group hover:scale-[1.03] transition-transform duration-300 h-full`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <card.icon className={`w-8 h-8 ${card.color} mb-6 opacity-80`} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white/90 mb-3">{card.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SlideShell>
  );
}
