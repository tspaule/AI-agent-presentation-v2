import { motion } from 'framer-motion';
import SlideShell from '../SlideShell';
import { FadeUp, FadeIn } from '../AnimatedText';

export default function Slide16_Skills() {
  return (
    <SlideShell bg="blue">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-cyan-500/30">3</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills — <span className="text-gradient-blue">Learned Capabilities</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-4">Packaged expertise — not just access, but judgment and process.</p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass rounded-xl px-5 py-3 inline-flex items-center gap-3 mb-8">
          <span className="text-sm text-white/60">Skills are to agents what <span className="text-cyan-300 font-semibold">apps are to phones</span>.</span>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        <FadeUp delay={0.3}>
          <p className="text-base text-white/45 leading-relaxed">
            Download pre-built skills from online databases, or write your own. Each skill bundles knowledge, judgment, and process into a reusable package.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="glass rounded-2xl p-6 border border-cyan-500/15 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <div className="text-xs tracking-[0.2em] uppercase text-cyan-400/60 font-semibold mb-3">Example Skill</div>
            <h4 className="text-base font-bold text-white/90 mb-2">Front-end design skills</h4>
            <p className="text-sm text-white/40 leading-relaxed">
              Create distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code that avoids generic AI aesthetics.
            </p>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.7}>
        <p className="text-sm text-white/25 mt-8 italic">
          Like uploading kung fu to Neo's brain — instant capability
        </p>
      </FadeUp>
    </SlideShell>
  );
}
