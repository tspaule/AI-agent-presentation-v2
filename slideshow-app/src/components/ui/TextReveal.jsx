import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: (stagger) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const charVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 4,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function TextReveal({
  children,
  delay = 0,
  stagger = 0.03,
  className = "",
}) {
  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }

  const chars = children.split("");

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={charVariants}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
