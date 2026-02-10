import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const rules = [
  { emoji: '✋', title: 'Raise Your Hand', desc: 'Questions are encouraged — just raise your hand so we don\'t have a free-for-all', color: 'from-blue-500/10 to-blue-600/5' },
  { emoji: '🍺', title: 'Beers Are Encouraged', desc: 'Just don\'t heckle. Remember, you asked for this', color: 'from-amber-500/10 to-amber-600/5' },
  { emoji: '🤔', title: 'No Dumb Questions', desc: 'Seriously. If you\'re thinking it, someone else is too. Ask away.', color: 'from-purple-500/10 to-purple-600/5' },
  { emoji: '💻', title: 'Follow Along', desc: 'Feel free to open your laptop and try things in real time.', color: 'from-cyan-500/10 to-cyan-600/5' },
  { emoji: '⏰', title: '60 Minutes', desc: 'We\'ll keep it tight. Demos may run longer if they\'re good and the group is vibing it.', color: 'from-emerald-500/10 to-emerald-600/5' },
];

export default function Slide04_Rules() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
          Rules of <span className="text-gradient-blue">Engagement</span>
        </h2>
        <p className="text-lg text-white/35 mb-8">Let's keep it fun, but let's keep it productive.</p>
      </FadeUp>

      <StaggerChildren stagger={0.08} className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl">
        {rules.map((rule, i) => (
          <StaggerItem key={i}>
            <div className={`glass rounded-xl p-5 text-center bg-gradient-to-b ${rule.color} hover:scale-105 transition-transform duration-300 h-full flex flex-col`}>
              <span className="text-3xl mb-3 block">{rule.emoji}</span>
              <h3 className="text-sm font-bold text-white/90 mb-2">{rule.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed flex-1">{rule.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </SlideShell>
  );
}
