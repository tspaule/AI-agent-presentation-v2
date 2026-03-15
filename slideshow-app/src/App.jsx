import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
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

// ---------------------------------------------------------------------------
// Slide registry
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Section definitions
// ---------------------------------------------------------------------------
const sections = [
  { name: 'INTRO', range: [0, 3], color: '#3b82f6' },
  { name: 'SURVEY', range: [4, 8], color: '#8b5cf6' },
  { name: 'THEORY', range: [9, 22], color: '#06b6d4' },
  { name: 'DEMOS', range: [23, 30], color: '#f59e0b' },
  { name: 'CLOSING', range: [31, 34], color: '#ef4444' },
];

function getSectionIndex(slideIndex) {
  return sections.findIndex(
    (s) => slideIndex >= s.range[0] && slideIndex <= s.range[1],
  );
}

// ---------------------------------------------------------------------------
// Cinematic transition variants
// ---------------------------------------------------------------------------
const cinematicEase = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 0.96,
    filter: 'blur(10px)',
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    filter: 'blur(10px)',
  },
};

const slideTransition = {
  duration: 0.5,
  ease: cinematicEase,
};

// ---------------------------------------------------------------------------
// Drag helpers
// ---------------------------------------------------------------------------
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// ---------------------------------------------------------------------------
// Segmented Progress Indicator
// ---------------------------------------------------------------------------
function ProgressIndicator({ current, total, visible }) {
  const sectionIdx = getSectionIndex(current);

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
    >
      {/* Dots with connecting line */}
      <div className="relative flex items-center gap-0">
        {sections.map((section, i) => {
          const isActive = i === sectionIdx;
          const isPast = i < sectionIdx;
          return (
            <div key={section.name} className="flex items-center">
              {/* Connecting line (before dot, skip for first) */}
              {i > 0 && (
                <div
                  className="h-[1px] transition-all duration-500"
                  style={{
                    width: 28,
                    backgroundColor: isPast || isActive
                      ? `${section.color}66`
                      : 'rgba(255,255,255,0.08)',
                  }}
                />
              )}
              {/* Dot */}
              <motion.div
                animate={{
                  width: isActive ? 10 : 6,
                  height: isActive ? 10 : 6,
                  backgroundColor: isActive
                    ? section.color
                    : isPast
                      ? `${section.color}99`
                      : 'rgba(255,255,255,0.15)',
                  boxShadow: isActive
                    ? `0 0 10px ${section.color}80`
                    : '0 0 0px transparent',
                }}
                transition={{ duration: 0.4, ease: cinematicEase }}
                className="rounded-full flex-shrink-0"
                title={section.name}
              />
            </div>
          );
        })}
      </div>

      {/* Slide counter */}
      <span
        className="font-mono text-[11px] tracking-widest"
        style={{
          color: sections[sectionIdx]?.color ?? 'rgba(255,255,255,0.25)',
          opacity: 0.7,
        }}
      >
        {String(current + 1).padStart(2, '0')}
        <span style={{ opacity: 0.35 }}> / </span>
        {String(total).padStart(2, '0')}
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Premium Slide Navigator (press G)
// ---------------------------------------------------------------------------
function SlideNavigator({ current, onGoTo, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex flex-col"
      style={{ backgroundColor: 'rgba(5,5,10,0.92)' }}
      onClick={onClose}
    >
      {/* Blur layer */}
      <div className="absolute inset-0 backdrop-blur-2xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: cinematicEase }}
        className="relative flex flex-col h-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <h3 className="text-sm font-semibold text-white/60 tracking-wide">
            Slide Navigator
          </h3>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/70 text-xs transition-colors font-mono"
          >
            ESC to close
          </button>
        </div>

        {/* Grid grouped by section */}
        <div
          className="flex-1 overflow-y-auto px-8 py-6 space-y-8"
          onClick={(e) => e.stopPropagation()}
        >
          {sections.map((section) => {
            const slideIndices = [];
            for (let i = section.range[0]; i <= section.range[1]; i++) {
              slideIndices.push(i);
            }
            return (
              <div key={section.name}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: section.color }}
                  />
                  <span
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: `${section.color}cc` }}
                  >
                    {section.name}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: `${section.color}15` }} />
                </div>

                {/* Slide thumbnails */}
                <div className="grid grid-cols-5 lg:grid-cols-7 gap-3">
                  {slideIndices.map((i) => {
                    const isCurrent = i === current;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          onGoTo(i);
                          onClose();
                        }}
                        className="group relative aspect-video rounded-lg overflow-hidden transition-all duration-200 hover:scale-105"
                        style={{
                          borderLeft: `3px solid ${section.color}`,
                          backgroundColor: isCurrent
                            ? `${section.color}15`
                            : 'rgba(255,255,255,0.02)',
                          border: isCurrent
                            ? `1px solid ${section.color}50`
                            : '1px solid rgba(255,255,255,0.05)',
                          borderLeftWidth: 3,
                          borderLeftColor: section.color,
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="font-mono text-sm transition-colors duration-200"
                            style={{
                              color: isCurrent
                                ? section.color
                                : 'rgba(255,255,255,0.3)',
                            }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{
                            background: `radial-gradient(circle at center, ${section.color}10 0%, transparent 70%)`,
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
export default function App() {
  const [current, setCurrent] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [showUI, setShowUI] = useState(true);
  const hideTimerRef = useRef(null);

  const total = slides.length;

  // Navigation helpers
  const goTo = useCallback(
    (index) => {
      if (index >= 0 && index < total && index !== current) {
        setCurrent(index);
      }
    },
    [current, total],
  );

  const next = useCallback(() => {
    if (current < total - 1) setCurrent((c) => c + 1);
  }, [current, total]);

  const prev = useCallback(() => {
    if (current > 0) setCurrent((c) => c - 1);
  }, [current]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (navOpen) setNavOpen(false);
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

  // Auto-hide UI after 3s of no mouse movement
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

  return (
    <div className="w-screen h-screen overflow-hidden bg-dark-950 relative select-none">
      {/* ---- Cinematic slide content ---- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) next();
            else if (swipe > swipeConfidenceThreshold) prev();
          }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* ---- Click zones ---- */}
      <div
        className="absolute left-0 top-0 w-1/5 h-full z-20 cursor-w-resize"
        onClick={prev}
      />
      <div
        className="absolute right-0 top-0 w-1/5 h-full z-20 cursor-e-resize"
        onClick={next}
      />

      {/* ---- Segmented progress indicator ---- */}
      <ProgressIndicator current={current} total={total} visible={showUI} />

      {/* ---- Keyboard hints ---- */}
      <motion.div
        animate={{ opacity: showUI ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 left-6 z-30 flex items-center gap-3"
      >
        <span className="text-[10px] text-white/10">
          {'← → navigate'}
          &nbsp;&nbsp;
          {'G grid'}
          &nbsp;&nbsp;
          {'F fullscreen'}
        </span>
      </motion.div>

      {/* ---- Slide Navigator Overlay ---- */}
      <AnimatePresence>
        {navOpen && (
          <SlideNavigator
            current={current}
            onGoTo={goTo}
            onClose={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
