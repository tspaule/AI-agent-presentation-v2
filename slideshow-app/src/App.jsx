import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Slide01_Title from './components/slides/Slide01_Title';
import Slide02_WhyHere from './components/slides/Slide02_WhyHere';
import Slide03_Agenda from './components/slides/Slide03_Agenda';
import Slide04_Rules from './components/slides/Slide04_Rules';
import Slide05_SurveyIntro from './components/slides/Slide05_SurveyIntro';
import Slide06_Experience from './components/slides/Slide06_Experience';
import Slide07_Concerns from './components/slides/Slide07_Concerns';
import Slide08_Tasks from './components/slides/Slide08_Tasks';
import Slide09_WantFromTonight from './components/slides/Slide09_WantFromTonight';
import Slide10_TheoryIntro from './components/slides/Slide10_TheoryIntro';
import Slide11_BuildingBlocks from './components/slides/Slide11_BuildingBlocks';
import Slide12_HumanOnly from './components/slides/Slide12_HumanOnly';
import Slide13_HumanVsAgent from './components/slides/Slide13_HumanVsAgent';
import Slide14_Model from './components/slides/Slide14_Model';
import Slide15_Instructions from './components/slides/Slide15_Instructions';
import Slide16_Skills from './components/slides/Slide16_Skills';
import Slide17_Tools from './components/slides/Slide17_Tools';
import Slide18_SkillsVsTools from './components/slides/Slide18_SkillsVsTools';
import Slide19_Context from './components/slides/Slide19_Context';
import Slide20_Memory from './components/slides/Slide20_Memory';
import Slide21_Orchestration from './components/slides/Slide21_Orchestration';
import Slide22_BigLeap from './components/slides/Slide22_BigLeap';
import Slide23_TheoryComplete from './components/slides/Slide23_TheoryComplete';
import Slide24_DemosIntro from './components/slides/Slide24_DemosIntro';
import Slide25_TechStack from './components/slides/Slide25_TechStack';
import Slide26_Demo1 from './components/slides/Slide26_Demo1';
import Slide27_JCurve from './components/slides/Slide27_JCurve';
import Slide28_Demo2 from './components/slides/Slide28_Demo2';
import Slide29_JackalBotIntro from './components/slides/Slide29_JackalBotIntro';
import Slide30_JackalBotArch from './components/slides/Slide30_JackalBotArch';
import Slide31_JackalBotDemo from './components/slides/Slide31_JackalBotDemo';
import Slide32_Risks from './components/slides/Slide32_Risks';
import Slide33_DoersToInstructors from './components/slides/Slide33_DoersToInstructors';
import Slide34_Quote from './components/slides/Slide34_Quote';
import Slide35_ThankYou from './components/slides/Slide35_ThankYou';

const slides = [
  Slide01_Title,
  Slide02_WhyHere,
  Slide03_Agenda,
  Slide04_Rules,
  Slide05_SurveyIntro,
  Slide06_Experience,
  Slide07_Concerns,
  Slide08_Tasks,
  Slide09_WantFromTonight,
  Slide10_TheoryIntro,
  Slide11_BuildingBlocks,
  Slide12_HumanOnly,
  Slide13_HumanVsAgent,
  Slide14_Model,
  Slide15_Instructions,
  Slide16_Skills,
  Slide17_Tools,
  Slide18_SkillsVsTools,
  Slide19_Context,
  Slide20_Memory,
  Slide21_Orchestration,
  Slide22_BigLeap,
  Slide23_TheoryComplete,
  Slide24_DemosIntro,
  Slide25_TechStack,
  Slide26_Demo1,
  Slide27_JCurve,
  Slide28_Demo2,
  Slide29_JackalBotIntro,
  Slide30_JackalBotArch,
  Slide31_JackalBotDemo,
  Slide32_Risks,
  Slide33_DoersToInstructors,
  Slide34_Quote,
  Slide35_ThankYou,
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function SlideNavigator({ isOpen, current, total, onGoTo, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-xl flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
        <h3 className="text-sm font-semibold text-white/60">Slide Navigator</h3>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white/80 text-sm transition-colors"
        >
          Press ESC to close
        </button>
      </div>
      <div
        className="flex-1 overflow-y-auto p-8 grid grid-cols-5 gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => { onGoTo(i); onClose(); }}
            className={`aspect-video rounded-lg border transition-all duration-200 flex items-center justify-center text-sm font-mono hover:scale-105 ${
              i === current
                ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
                : 'border-white/5 bg-white/[0.02] text-white/30 hover:border-white/15 hover:text-white/50'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const hideTimerRef = useRef(null);

  const total = slides.length;

  const goTo = useCallback((index) => {
    if (index >= 0 && index < total && index !== current) {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    }
  }, [current, total]);

  const next = useCallback(() => {
    if (current < total - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    }
  }, [current, total]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    }
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (navOpen && e.key === 'Escape') {
        setNavOpen(false);
        return;
      }
      if (navOpen) return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          break;
        case 'End':
          e.preventDefault();
          goTo(total - 1);
          break;
        case 'g':
          e.preventDefault();
          setNavOpen(true);
          break;
        case 'f':
          e.preventDefault();
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, total, navOpen]);

  // Auto-hide UI
  useEffect(() => {
    const handleMouseMove = () => {
      setShowUI(true);
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setShowUI(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    hideTimerRef.current = setTimeout(() => setShowUI(false), 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  const CurrentSlide = slides[current];
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-screen h-screen overflow-hidden bg-dark-950 relative select-none">
      {/* Slide content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              next();
            } else if (swipe > swipeConfidenceThreshold) {
              prev();
            }
          }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Click zones for navigation */}
      <div
        className="absolute left-0 top-0 w-1/5 h-full z-20 cursor-w-resize"
        onClick={prev}
      />
      <div
        className="absolute right-0 top-0 w-1/5 h-full z-20 cursor-e-resize"
        onClick={next}
      />

      {/* Progress bar */}
      <motion.div
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 z-30"
      >
        <div className="h-[3px] bg-white/[0.03]">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>

      {/* Slide counter & controls */}
      <motion.div
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 right-6 z-30 flex items-center gap-4"
      >
        <button
          onClick={() => setNavOpen(true)}
          className="text-[11px] text-white/20 hover:text-white/50 transition-colors font-mono"
          title="Press G for slide navigator"
        >
          <span className="slide-number">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-white/10"> / </span>
          <span className="slide-number">{String(total).padStart(2, '0')}</span>
        </button>
      </motion.div>

      {/* Keyboard hints */}
      <motion.div
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 left-6 z-30 flex items-center gap-3"
      >
        <span className="text-[10px] text-white/10">
          ← → navigate &nbsp; G grid &nbsp; F fullscreen
        </span>
      </motion.div>

      {/* Slide Navigator Overlay */}
      <AnimatePresence>
        {navOpen && (
          <SlideNavigator
            isOpen={navOpen}
            current={current}
            total={total}
            onGoTo={goTo}
            onClose={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
