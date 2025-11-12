import React from "react";
import { DecryptedText } from "./DecryptedText";

interface RotatingDecryptedTextProps {
  words: string[];
  className?: string;
  displayMs?: number; // time each word stays fully visible
  fadeMs?: number; // fade in/out duration
  startDelayMs?: number;
}

export const RotatingDecryptedText: React.FC<RotatingDecryptedTextProps> = ({
  words,
  className,
  displayMs = 2000,
  fadeMs = 400,
  startDelayMs = 0,
}) => {
  const [index, setIndex] = React.useState(0);
  const [prevIndex, setPrevIndex] = React.useState<number | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [inActive, setInActive] = React.useState(false);
  const [outWord, setOutWord] = React.useState<string | null>(null);
  const [outActive, setOutActive] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), startDelayMs);
    return () => clearTimeout(t);
  }, [startDelayMs]);

  React.useEffect(() => {
    if (!mounted || words.length <= 1) return;
    let timer: number;
    const schedule = () => {
      timer = window.setTimeout(() => {
        setPrevIndex(index);
        // set outgoing word and trigger its fade out
        setOutWord(words[index]);
        setOutActive(true); // start at opacity 1
        // next frame flip to 0 to animate out
        requestAnimationFrame(() => setOutActive(false));
        // advance current index
        setIndex((i) => (i + 1) % words.length);
      }, displayMs);
    };
    schedule();
    return () => clearTimeout(timer);
  }, [mounted, index, words, displayMs]);

  const current = words[index] ?? "";
  const prev = prevIndex != null ? words[prevIndex] : null;

  // Trigger fade-in from below for the incoming word on every index change
  React.useEffect(() => {
    setInActive(false);
    const t = window.setTimeout(() => setInActive(true), 16); // next frame
    return () => clearTimeout(t);
  }, [index]);

  return (
    <span className="relative inline-block" aria-live="polite">
      {/* Incoming/current word: fades in from below */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transition: `opacity ${fadeMs}ms ease, transform ${fadeMs}ms ease`,
          opacity: inActive ? 1 : 0,
          transform: inActive ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <DecryptedText
          key={current}
          text={current}
          className={className}
          duration={0.9}
          iterationsPerChar={6}
        />
      </span>

      {/* Outgoing word, fades up */}
      {outWord && (
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transition: `opacity ${fadeMs}ms ease, transform ${fadeMs}ms ease`,
            opacity: outActive ? 1 : 0,
            transform: outActive ? "translateY(0)" : "translateY(-16px)",
          }}
          aria-hidden
        >
          <span className={className}>{outWord}</span>
        </span>
      )}

      {/* Initial spacer to reserve height */}
      <span className="invisible">
        <span className={className}>{current}</span>
      </span>
    </span>
  );
};

export default RotatingDecryptedText;
