import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MorphingText({
  words = ["Hello", "World"],
  interval = 3000,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, filter: "blur(12px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(12px)", y: -10 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
