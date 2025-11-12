import React from "react";

// Simple decrypted text animation inspired by React Bits "Decrypted Text"
// Usage: <DecryptedText text="Artist" className="..." delay={0.1} duration={0.9} />

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/{}[]";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export interface DecryptedTextProps {
  text: string;
  className?: string;
  duration?: number; // total duration in seconds
  delay?: number; // start delay
  iterationsPerChar?: number; // how many random swaps per character
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className,
  duration = 0.9,
  delay = 0,
  iterationsPerChar = 6,
}) => {
  const reduced = usePrefersReducedMotion();
  const [output, setOutput] = React.useState(reduced ? text : "" );

  React.useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let start = 0;

    const totalIters = Math.max(1, iterationsPerChar);
    const totalSteps = text.length * totalIters;
    const totalMs = duration * 1000;

    const tick = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start;
      if (elapsed < delay * 1000) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, (elapsed - delay * 1000) / totalMs);
      const step = Math.floor(p * totalSteps);

      const revealedChars = Math.floor(step / totalIters);
      const scramblingChars = Math.min(text.length - revealedChars, Math.max(0, totalIters - (step % totalIters)));

      let next = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealedChars) {
          next += text[i];
        } else if (scramblingChars > 0 && i < revealedChars + scramblingChars) {
          next += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          next += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setOutput(next);

      if (p < 1) raf = requestAnimationFrame(tick);
      else setOutput(text);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration, delay, iterationsPerChar, reduced]);

  return <span className={className} aria-label={text}>{output}</span>;
};

export default DecryptedText;
