import { motion } from 'framer-motion';

const FOOTER_TEXT = 'AI from the Inside  |  Mander Beer & Learn  |  February 2026';

export default function SlideShell({ children, showFooter = true, bg = 'default' }) {
  const backgrounds = {
    default: 'bg-dark-950',
    gradient: 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950',
    blue: 'bg-gradient-to-br from-dark-950 via-blue-950/30 to-dark-950',
    purple: 'bg-gradient-to-br from-dark-950 via-purple-950/30 to-dark-950',
    warm: 'bg-gradient-to-br from-dark-950 via-amber-950/20 to-dark-950',
  };

  return (
    <div className={`relative w-full h-full ${backgrounds[bg] || backgrounds.default} overflow-hidden`}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {showFooter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-10 pt-6 pb-2"
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-medium">
              {FOOTER_TEXT}
            </p>
          </motion.div>
        )}
        <div className="flex-1 px-10 pb-8 flex flex-col justify-center overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
