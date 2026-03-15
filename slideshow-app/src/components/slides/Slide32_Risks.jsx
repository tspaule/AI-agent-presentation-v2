import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';
import { Shield, Mail, AlertTriangle, Lock } from 'lucide-react';

const risks = [
  {
    severity: 'HIGH',
    icon: Shield,
    title: 'Malicious Skills',
    desc: 'People uploaded malware into online skill databases. If your agent auto-installs skills, you are vulnerable.',
    color: 'border-red-500/30',
    iconColor: 'text-red-400',
    badgeBg: 'bg-red-500/20 text-red-400',
    glow: 'from-red-500/8',
  },
  {
    severity: 'HIGH',
    icon: Mail,
    title: 'Email Access',
    desc: 'An agent with email permissions can send messages as you. Wrong config means reputation damage.',
    color: 'border-red-500/30',
    iconColor: 'text-red-400',
    badgeBg: 'bg-red-500/20 text-red-400',
    glow: 'from-red-500/8',
  },
  {
    severity: 'MED',
    icon: AlertTriangle,
    title: 'Data Leakage',
    desc: 'Context loaded into an agent may be sent to third-party APIs. Know where your data goes.',
    color: 'border-amber-500/25',
    iconColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-400',
    glow: 'from-amber-500/6',
  },
  {
    severity: 'MED',
    icon: Lock,
    title: 'Unchecked Actions',
    desc: 'Without human-in-the-loop, agents can take irreversible actions. Always scope permissions tightly.',
    color: 'border-amber-500/25',
    iconColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-400',
    glow: 'from-amber-500/6',
  },
];

export default function Slide32_Risks() {
  return (
    <SlideShell bg="gradient" sectionLabel="RISKS">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-3">
          The Risk <span className="text-gradient-warm">Side</span>
        </h2>
        <p className="text-lg text-white/35 font-light mb-10">
          More capability = more responsibility.
        </p>
      </FadeUp>

      <StaggerChildren stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-8">
        {risks.map((risk) => (
          <StaggerItem key={risk.title}>
            <div className={`glass rounded-2xl p-6 border ${risk.color} bg-gradient-to-br ${risk.glow} to-transparent h-full`}>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <risk.icon className={`w-5 h-5 ${risk.iconColor}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] tracking-[0.2em] uppercase font-black px-2 py-0.5 rounded ${risk.badgeBg}`}>
                      {risk.severity}
                    </span>
                    <h3 className="text-base font-bold text-white/90">{risk.title}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeUp delay={0.8}>
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400/50" />
          <p className="text-sm text-white/30">
            With great power comes great responsibility. Audit your agent's permissions regularly.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
