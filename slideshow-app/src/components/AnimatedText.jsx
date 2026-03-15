import { motion, useMotionValue, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const EASE = [0.16, 1, 0.3, 1];

export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, delay = 0, from = 'left', className = '' }) {
  const x = from === 'left' ? -60 : 60;
  return (
    <motion.div
      initial={{ opacity: 0, x, filter: 'blur(6px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, stagger = 0.06, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 0.8,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ value, suffix = '', delay = 0.3, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });
  const display = useTransform(springVal, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionVal.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionVal]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      <motion.span
        initial={{ opacity: 0, filter: 'blur(4px)' }}
        animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.5, delay, ease: EASE }}
      >
        <motion.span>{display}</motion.span>
        {suffix}
      </motion.span>
    </span>
  );
}

export function BlurIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(20px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CharacterReveal({ children, delay = 0, stagger = 0.02, className = '' }) {
  const text = typeof children === 'string' ? children : String(children);
  const characters = text.split('');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
      aria-label={text}
    >
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.4, ease: EASE },
            },
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function WordReveal({ children, delay = 0, stagger = 0.08, className = '' }) {
  const text = typeof children === 'string' ? children : String(children);
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.5, ease: EASE },
            },
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function DrawLine({ width = '100%', color = 'rgba(59,130,246,0.3)', delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      style={{
        width,
        height: '1px',
        background: color,
        transformOrigin: 'left center',
      }}
      className={className}
    />
  );
}
