import SlideShell from '../SlideShell';
import { FadeUp } from '../AnimatedText';

export default function Slide25_TechStack() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          The Tech <span className="text-gradient-blue">Stack</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="text-lg text-white/50 max-w-3xl mb-10 leading-relaxed">
          Claude and Claude Code are now the market leaders for how I work.
        </p>
      </FadeUp>

      <FadeUp delay={0.4}>
        <div className="glass rounded-xl p-5 max-w-3xl border-l-2 border-blue-500/30">
          <p className="text-sm text-white/40 italic">
            I'm not anti-ChatGPT. But Claude has pulled ahead for the kind of work I do.
          </p>
        </div>
      </FadeUp>
    </SlideShell>
  );
}
