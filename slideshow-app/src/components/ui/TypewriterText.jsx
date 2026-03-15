import { useState, useEffect, useRef } from "react";

const cursorKeyframes = `
@keyframes typewriter-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
`;

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  cursor = true,
  className = "",
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    setStarted(false);
    indexRef.current = 0;

    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cursorKeyframes }} />
      <span className={className}>
        {displayed}
        {cursor && (
          <span
            className="inline-block ml-0.5"
            style={{
              width: "2px",
              height: "1em",
              backgroundColor: "currentColor",
              verticalAlign: "text-bottom",
              animation: done ? "typewriter-blink 1s step-end infinite" : "none",
              opacity: started ? 1 : 0,
            }}
          />
        )}
      </span>
    </>
  );
}
