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
  const idxRef = React.useRef(0);
  const lastSwitchRef = React.useRef<number | null>(null);
  const wordsKey = React.useMemo(() => words.join("|"), [words]);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), startDelayMs);
    return () => clearTimeout(t);
  }, [startDelayMs]);

  // Drive the loop with a stable interval + initial delay. Robust to re-renders and tab visibility changes.
  React.useEffect(() => {
    if (!mounted || words.length <= 1) return;
    let intervalId: number | undefined;
    let initialTimeout: number | undefined;

    const tick = () => {
      const curr = idxRef.current;
      setPrevIndex(curr);
      setOutWord(words[curr]);
      setOutActive(true);
      requestAnimationFrame(() => setOutActive(false));
      setIndex((i) => (i + 1) % words.length);
      lastSwitchRef.current = performance.now();
    };

    // Start after one full display window so the first word shows for the intended time
    initialTimeout = window.setTimeout(() => {
      tick();
      intervalId = window.setInterval(tick, displayMs);
    }, displayMs);

    const onVis = () => {
      if (document.visibilityState === "visible") {
        if (intervalId) window.clearInterval(intervalId);
        if (initialTimeout) window.clearTimeout(initialTimeout);
        // restart schedule fresh
        initialTimeout = window.setTimeout(() => {
          tick();
          intervalId = window.setInterval(tick, displayMs);
        }, displayMs);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (intervalId) window.clearInterval(intervalId);
      if (initialTimeout) window.clearTimeout(initialTimeout);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [mounted, wordsKey, displayMs]);

  const current = words[index] ?? "";
  const prev = prevIndex != null ? words[prevIndex] : null;

  // Trigger fade-in from below for the incoming word on every index change
  React.useEffect(() => {
    setInActive(false);
    const t = window.setTimeout(() => setInActive(true), 16); // next frame
    return () => clearTimeout(t);
  }, [index]);

  // Keep a ref of the current index for the interval callback
  React.useEffect(() => {
    idxRef.current = index;
  }, [index]);

  return (
    <span className="relative inline-block" aria-live="polite">
      {/* Incoming/current word: fades in from below */}
      <span
        key={`${current}-${index}`}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transition: `opacity ${fadeMs}ms ease, transform ${fadeMs}ms ease`,
          opacity: inActive ? 1 : 0,
          transform: inActive ? "translateY(0)" : "translateY(16px)",
        }}
      >
        {/* Remount via wrapper key to trigger 'view' animation */}
        <DecryptedText
          text={current}
          parentClassName={className}
          className=""
          encryptedClassName=""
          animateOn="view"
          speed={35}
          maxIterations={8}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
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
