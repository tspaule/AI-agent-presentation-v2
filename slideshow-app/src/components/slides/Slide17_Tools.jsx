import SlideShell from '../SlideShell';
import { FadeUp, StaggerChildren, StaggerItem } from '../AnimatedText';

const tools = [
  { icon: '🔍', title: 'Search Web', provider: 'Google Chrome / Mozilla / etc', color: 'border-blue-500/20 from-blue-500/8' },
  { icon: '🗄', title: 'Query Database', provider: 'Github / Vercel', color: 'border-purple-500/20 from-purple-500/8' },
  { icon: '✉', title: 'Send Email', provider: 'Gmail / Outlook', color: 'border-cyan-500/20 from-cyan-500/8' },
  { icon: '🏦', title: 'Read Bank Feed', provider: 'Xero, MYOB, Quickbooks', color: 'border-emerald-500/20 from-emerald-500/8' },
  { icon: '📄', title: 'Create Document', provider: 'Microsoft Word / Google Docs', color: 'border-amber-500/20 from-amber-500/8' },
  { icon: '📝', title: 'Write Messages', provider: 'WhatsApp / Discord / Text', color: 'border-pink-500/20 from-pink-500/8' },
];

export default function Slide17_Tools() {
  return (
    <SlideShell bg="gradient">
      <FadeUp>
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-5xl font-black text-amber-500/30">4</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tools — <span className="text-gradient-warm">Actions</span>
          </h2>
        </div>
        <p className="text-base text-white/35 mb-10">Read and write API calls for the agent to operate</p>
      </FadeUp>

      <StaggerChildren stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mb-8">
        {tools.map((tool, i) => (
          <StaggerItem key={i}>
            <div className={`glass rounded-xl p-5 border ${tool.color} bg-gradient-to-b to-transparent text-center hover:scale-105 transition-transform duration-300`}>
              <span className="text-3xl block mb-3">{tool.icon}</span>
              <h3 className="text-sm font-bold text-white/90 mb-1">{tool.title}</h3>
              <p className="text-[11px] text-white/30">{tool.provider}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeUp delay={0.7}>
        <p className="text-sm text-white/40 max-w-3xl">
          <span className="text-white/70 font-semibold">Tools</span> are what the agent can interact with. <span className="text-white/70 font-semibold">Skills</span> determine how and when it uses them.
        </p>
      </FadeUp>
    </SlideShell>
  );
}
