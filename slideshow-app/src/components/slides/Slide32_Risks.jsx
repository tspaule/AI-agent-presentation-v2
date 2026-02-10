import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const risks = [
  { severity: 'HIGH', title: 'Malicious Skills', desc: 'People uploaded malware into online skill databases. If your agent auto-installs skills, you\'re vulnerable.', color: 'border-red-500/30 from-red-500/10', badge: 'bg-red-500/20 text-red-400' },
  { severity: 'HIGH', title: 'Email Access', desc: 'An agent with email permissions can send messages as you. Wrong config = reputation damage.', color: 'border-red-500/30 from-red-500/10', badge: 'bg-red-500/20 text-red-400' },
  { severity: 'MED', title: 'Data Leakage', desc: 'Context loaded into an agent may be sent to third-party APIs. Know where your data goes.', color: 'border-amber-500/20 from-amber-500/8', badge: 'bg-amber-500/20 text-amber-400' },
  { severity: 'MED', title: 'Unchecked Actions', desc: 'Without human-in-the-loop, agents can take irreversible actions. Always scope permissions.', color: 'border-amber-500/20 from-amber-500/8', badge: 'bg-amber-500/20 text-amber-400' },
];

export default function Slide32_Risks() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          The <span className="text-gradient-warm">Risk</span> Side
        </h2>
        <p className="text-base text-white/35 mb-8">More data + more tools = more risk. Security isn't optional.</p>
      </FadeUp>

      <StaggerChildren stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mb-6">
        {risks.map((risk, i) => (
          <StaggerItem key={i}>
            <div className={`glass rounded-xl p-6 border ${risk.color} bg-gradient-to-br to-transparent h-full`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] tracking-[0.2em] uppercase font-bold px-2 py-0.5 rounded ${risk.badge}`}>{risk.severity}</span>
                <h3 className="text-base font-bold text-white/90">{risk.title}</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">{risk.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeUp delay={0.7}>
        <p className="text-sm text-white/30 italic">With great power comes great responsibility.</p>
      </FadeUp>
    </SlideShell>
  );
}
