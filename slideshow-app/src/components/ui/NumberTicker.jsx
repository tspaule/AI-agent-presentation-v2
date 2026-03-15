import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
  motion,
} from "framer-motion";

export default function NumberTicker({
  value,
  duration = 2,
  delay = 0,
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest)
  );

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      motionValue.set(value);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay, motionValue]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className}`}>
      {displayValue}
      {suffix && <span>{suffix}</span>}
    </motion.span>
  );
}
