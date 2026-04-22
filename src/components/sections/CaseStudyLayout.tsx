// CaseStudyLayout.tsx — shared gallery + collapsible sidebar for case studies
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StyledWord {
  text: string;
  style: "bold" | "italic" | "semibold-italic" | "normal";
}

interface MetadataField {
  label: string;
  value: string;
}

export interface CaseStudySection {
  /** Short pill label, e.g. "INTRO", "CONTEXT" */
  label: string;
  /** Optional heading rendered above the body */
  heading?: string;
  /** Body content — string or JSX */
  content: React.ReactNode;
}

export interface GalleryItem {
  /** Label shown on the placeholder */
  label: string;
  /** Aspect ratio CSS value — defaults to "16/9" */
  aspectRatio?: string;
  /** If provided, renders an image instead of a placeholder */
  imageSrc?: string;
  /** If provided, renders a video instead of an image */
  videoSrc?: string;
}

export interface CaseStudyLayoutProps {
  /** Styled title words for the vertical sidebar label */
  title: StyledWord[];
  /** Metadata key-value pairs (Role, Timeline, Team, etc.) */
  metadata: MetadataField[];
  /** Ordered sections shown in the sidebar */
  sections: CaseStudySection[];
  /** Gallery images / placeholders */
  galleryItems: GalleryItem[];
  /** Color scheme — dark (#0a0a0a) or light (#fafafa) */
  colorScheme?: "dark" | "light";
  /** Fixed background image that fills the viewport behind gallery cards */
  backgroundSrc?: string;
  /** Called when the user closes the case study */
  onClose: () => void;
}

/* ------------------------------------------------------------------ */
/*  Palette                                                            */
/* ------------------------------------------------------------------ */

function usePalette(scheme: "dark" | "light") {
  return scheme === "dark"
    ? {
        bg: "#0a0a0a",
        sidebarBg: "#111111",
        placeholderBg: "#1a1a1a",
        text: "#e5e5e5",
        muted: "#666666",
        border: "#222222",
        accent: "#e1f40b",
      }
    : {
        bg: "#fafafa",
        sidebarBg: "#ffffff",
        placeholderBg: "#e8e8e8",
        text: "#111111",
        muted: "#999999",
        border: "#dddddd",
        accent: "#e1f40b",
      };
}

/* ------------------------------------------------------------------ */
/*  Scroll fade-in hook (IntersectionObserver)                         */
/* ------------------------------------------------------------------ */

function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = container.querySelectorAll<HTMLElement>(".gallery-item");

    if (prefersReduced) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min(idx * 0.15, 0.6)}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/* ------------------------------------------------------------------ */
/*  Vertical title                                                     */
/* ------------------------------------------------------------------ */

const WORD_FONT: Record<StyledWord["style"], string> = {
  bold: "font-['Poltawski_Nowy:Bold',sans-serif] font-bold",
  italic: "font-['Poppins:SemiBold_Italic',sans-serif] italic",
  "semibold-italic":
    "font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic",
  normal: "font-['Poppins:Regular',sans-serif] not-italic",
};

function VerticalTitle({ words }: { words: StyledWord[] }) {
  return (
    <div
      className="absolute left-[14px] top-1/2 -translate-y-1/2 origin-center"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg) translateX(50%)" }}
    >
      <div className="flex gap-[6px] items-baseline text-nowrap whitespace-pre leading-[1.12]">
        {words.map((w, i) => (
          <span
            key={i}
            className={`${WORD_FONT[w.style]} tracking-[-0.04em] text-[14px] uppercase`}
            style={{ letterSpacing: "0.15em" }}
          >
            {w.text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sidebar                                                            */
/* ------------------------------------------------------------------ */

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  title: StyledWord[];
  metadata: MetadataField[];
  sections: CaseStudySection[];
  activeSectionIdx: number;
  onSectionChange: (idx: number) => void;
  palette: ReturnType<typeof usePalette>;
  onToggleTheme: () => void;
  scheme: "dark" | "light";
}

function Sidebar({
  open,
  onToggle,
  title,
  metadata,
  sections,
  activeSectionIdx,
  onSectionChange,
  palette,
  onToggleTheme,
  scheme,
}: SidebarProps) {
  const activeSection = sections[activeSectionIdx];
  const panelRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onToggle();
    },
    [open, onToggle]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Swipe-down-to-close (mobile bottom sheet)
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
    dragDelta.current = 0;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (dragStartY.current === null) return;
    const dy = e.touches[0].clientY - dragStartY.current;
    dragDelta.current = dy;
    if (dy > 0) setDragOffset(dy);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (dragDelta.current >= 80) {
      onToggle();
    }
    dragStartY.current = null;
    dragDelta.current = 0;
    setDragOffset(0);
  }, [onToggle]);

  return (
    <>
      {/* Sidebar panel — right on desktop, bottom sheet on mobile */}
      <div
        ref={panelRef}
        role="complementary"
        aria-label="Case study content"
        className={`sidebar-panel absolute z-[70] flex flex-col ${dragOffset > 0 ? '' : 'transition-transform duration-[400ms]'} ${open ? "sidebar-open" : "sidebar-closed"}`}
        style={{
          background: palette.sidebarBg,
          transitionTimingFunction: dragOffset > 0 ? undefined : "cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "rgba(0,0,0,0.3) 0 -10px 30px" : "none",
          ...(dragOffset > 0 ? { transform: `translateY(${dragOffset}px)` } : {}),
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <style>{`
          .sidebar-panel {
            bottom: 0; left: 0; right: 0;
            width: 100%; max-height: 70vh;
            border-radius: 16px 16px 0 0;
          }
          .sidebar-panel.sidebar-closed { transform: translateY(100%); }
          .sidebar-panel.sidebar-open { transform: translateY(0); }
          @media (min-width: 768px) {
            .sidebar-panel {
              top: 0; bottom: auto; left: auto; right: 0;
              width: 30vw; max-height: 100%; height: 100%;
              border-radius: 0;
            }
            .sidebar-panel.sidebar-closed { transform: translateX(100%); }
            .sidebar-panel.sidebar-open { transform: translateX(0); }
          }
        `}</style>
        {/* Drag handle — mobile only */}
        <div className="flex justify-center pt-[10px] pb-[6px] md:hidden">
          <div style={{ width: 40, height: 4, borderRadius: 2, background: palette.border }} />
        </div>

        {/* Vertical title along left edge — desktop only */}
        <div className="hidden md:block">
          <VerticalTitle words={title} />
        </div>

        {/* Close button — X on mobile, arrow on desktop */}
        <button
          onClick={onToggle}
          aria-label="Close sidebar"
          className="absolute top-[16px] right-[16px] md:left-[16px] md:right-auto z-10 flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
          style={{ width: 40, height: 40, color: palette.text }}
        >
          {/* X icon — mobile only */}
          <svg className="md:hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
          {/* Arrow icon — desktop only */}
          <svg className="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dark / light toggle — visible only when open */}
        <button
          onClick={onToggleTheme}
          aria-label={`Switch to ${scheme === "dark" ? "light" : "dark"} mode`}
          className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity rounded-full"
          style={{
            width: 36,
            height: 36,
            color: palette.text,
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            transition: "opacity 200ms",
            position: "absolute",
            top: 20,
            right: 56,
          }}
        >
          {scheme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Content area */}
        <div className="pl-[24px] md:pl-[48px] pr-[24px] pt-[20px] pb-[24px] flex-1 overflow-y-auto" style={{ paddingTop: 20 }}>
          {/* Section pill */}
          {activeSection && (
            <span
              className="inline-block px-[12px] py-[4px] rounded-[4px] text-[12px] uppercase tracking-[0.1em] mb-[32px]"
              style={{
                background: palette.accent,
                color: "#000",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {activeSection.label}
            </span>
          )}

          {/* Metadata block */}
          {activeSectionIdx === 0 && metadata.length > 0 && (
            <div className="mb-[40px]">
              {metadata.map((field, idx) => (
                <div
                  key={field.label}
                  className="flex justify-between py-[12px]"
                  style={{
                    borderBottom:
                      idx < metadata.length - 1
                        ? `1px solid ${palette.border}`
                        : "none",
                  }}
                >
                  <span
                    className="uppercase tracking-[0.1em] shrink-0"
                    style={{
                      fontSize: 13,
                      color: palette.muted,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {field.label}
                  </span>
                  <span
                    className="text-right"
                    style={{ fontSize: 15, color: palette.text, maxWidth: "55%" }}
                  >
                    {field.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Section heading */}
          {activeSection?.heading && (
            <h2
              className="font-bold mb-[16px]"
              style={{ fontSize: 20, color: palette.text }}
            >
              {activeSection.heading}
            </h2>
          )}

          {/* Section body */}
          <div
            className="leading-[1.6]"
            style={{ fontSize: 15, color: palette.text }}
          >
            {activeSection?.content}
          </div>
        </div>

        {/* Section navigation — back / dots / forward */}
        {sections.length > 1 && (
          <div
            className="shrink-0 flex items-center justify-between px-[24px] md:px-[48px] py-[16px]"
            style={{ background: palette.sidebarBg }}
          >
            {/* Back arrow */}
            <button
              onClick={() =>
                onSectionChange((activeSectionIdx - 1 + sections.length) % sections.length)
              }
              className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: palette.text }}
              aria-label="Previous section"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Section dots */}
            <div className="flex gap-[6px]">
              {sections.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => onSectionChange(idx)}
                  className="rounded-full cursor-pointer transition-all duration-200"
                  style={{
                    width: idx === activeSectionIdx ? 20 : 8,
                    height: 8,
                    background:
                      idx === activeSectionIdx ? palette.accent : palette.border,
                  }}
                  aria-label={`Go to section ${idx + 1}`}
                />
              ))}
            </div>

            {/* Forward arrow */}
            <button
              onClick={() =>
                onSectionChange((activeSectionIdx + 1) % sections.length)
              }
              className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: palette.text }}
              aria-label="Next section"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Gallery — scroll-driven zoom/pan image sequence                    */
/* ------------------------------------------------------------------ */

const EASE_FACTOR = 0.08;
const ZOOM_MAX = 2.5;
const SCROLL_SENSITIVITY = 0.0012;
const MAX_DELTA = 120;
const INITIAL_PROGRESS = 0.35;
const INERTIA_DECAY = 0.92;
const INERTIA_MIN = 0.0005;

function Gallery({
  items,
  palette,
  backgroundSrc,
}: {
  items: GalleryItem[];
  palette: ReturnType<typeof usePalette>;
  backgroundSrc?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef(0);
  const timeline = useRef(INITIAL_PROGRESS);
  const targetTimeline = useRef(INITIAL_PROGRESS);
  const touchStartY = useRef<number | null>(null);
  const lastTouchY = useRef(0);
  const velocity = useRef(0);
  const inertiaRaf = useRef(0);
  const N = items.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || N === 0) return;

    const layers = layerRefs.current.filter(Boolean) as HTMLElement[];
    if (layers.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initial state
    layers.forEach((el, i) => {
      el.style.willChange = "transform, opacity";
      el.style.transformOrigin = "center center";
      el.style.backfaceVisibility = "hidden";
      if (i === 0) {
        el.style.opacity = "1";
        el.style.transform = `scale(${1 + INITIAL_PROGRESS * (ZOOM_MAX - 1)})`;
        el.style.display = "";
      } else if (i === 1) {
        el.style.opacity = `${INITIAL_PROGRESS}`;
        el.style.transform = `scale(${Math.max(0.001, INITIAL_PROGRESS)})`;
        el.style.display = "";
      } else {
        el.style.display = "none";
        el.style.opacity = "0";
        el.style.transform = "scale(0.001)";
      }
    });

    if (prefersReduced) {
      layers.forEach((el) => {
        el.style.transform = "scale(1)";
        el.style.opacity = "1";
        el.style.display = "";
      });
      return;
    }

    const render = () => {
      const diff = targetTimeline.current - timeline.current;
      if (Math.abs(diff) > 0.0001) {
        timeline.current += diff * EASE_FACTOR;
      } else {
        timeline.current = targetTimeline.current;
      }

      const t = timeline.current;
      const currentIdx = Math.floor(t) % N;
      const progress = t - Math.floor(t);
      const prevIdx = (currentIdx - 1 + N) % N;
      const nextIdx = (currentIdx + 1) % N;

      layers.forEach((el, i) => {
        if (i === currentIdx) {
          // Current: scale 1→ZOOM_MAX, full opacity
          const s = 1 + progress * (ZOOM_MAX - 1);
          el.style.transform = `scale(${s})`;
          el.style.opacity = "1";
          el.style.display = "";
          el.style.zIndex = "2";
        } else if (i === nextIdx) {
          // Next: scale tiny→1, fade in
          const s = Math.max(0.001, progress);
          el.style.transform = `scale(${s})`;
          el.style.opacity = `${Math.min(1, progress * 1.5)}`;
          el.style.display = "";
          el.style.zIndex = "3";
        } else if (i === prevIdx) {
          // Previous: hold at ZOOM_MAX, fade out
          const holdProgress = Math.min(1, progress * 3);
          const s = ZOOM_MAX + holdProgress * 0.3;
          el.style.transform = `scale(${s})`;
          el.style.opacity = `${Math.max(0, 1 - holdProgress)}`;
          el.style.display = holdProgress >= 1 ? "none" : "";
          el.style.zIndex = "1";
        } else {
          el.style.display = "none";
          el.style.opacity = "0";
          el.style.zIndex = "0";
        }
      });

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    // Wheel input
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 40;
      if (e.deltaMode === 2) dy *= 800;
      dy = Math.max(-MAX_DELTA, Math.min(MAX_DELTA, dy));
      targetTimeline.current = Math.max(0, targetTimeline.current + dy * SCROLL_SENSITIVITY);
    };

    // Touch input
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      lastTouchY.current = e.touches[0].clientY;
      velocity.current = 0;
      cancelAnimationFrame(inertiaRaf.current);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      e.preventDefault();
      const y = e.touches[0].clientY;
      const dy = lastTouchY.current - y;
      lastTouchY.current = y;
      velocity.current = dy * SCROLL_SENSITIVITY;
      targetTimeline.current = Math.max(0, targetTimeline.current + dy * SCROLL_SENSITIVITY);
    };

    const onTouchEnd = () => {
      touchStartY.current = null;
      // Inertia
      const doInertia = () => {
        if (Math.abs(velocity.current) < INERTIA_MIN) return;
        velocity.current *= INERTIA_DECAY;
        targetTimeline.current = Math.max(0, targetTimeline.current + velocity.current);
        inertiaRaf.current = requestAnimationFrame(doInertia);
      };
      inertiaRaf.current = requestAnimationFrame(doInertia);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      cancelAnimationFrame(inertiaRaf.current);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [items, N]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      style={{ background: "#000", overflow: "hidden", touchAction: "none" }}
    >
      {/* Layers — only 2-3 visible at a time, rest display:none */}
      {items.map((item, idx) => (
        <div
          key={idx}
          ref={(el) => { layerRefs.current[idx] = el; }}
          className="absolute inset-0 w-full h-full"
          style={{ transformOrigin: "center center" }}
          role="img"
          aria-label={item.label}
        >
          {item.videoSrc ? (
            <video
              src={item.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className={`w-full h-full ${idx === 0 ? "object-cover" : "object-contain"}`}
            />
          ) : item.imageSrc ? (
            <img
              src={item.imageSrc}
              alt={item.label}
              loading={idx < 3 ? "eager" : "lazy"}
              className={`w-full h-full ${idx === 0 ? "object-cover" : "object-contain"}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: palette.placeholderBg }}>
              <span style={{ fontSize: 16, color: palette.muted }}>
                {item.label}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Hide scrollbar + reduced-motion fallback */}
      <style>{`
        .gallery-scroll::-webkit-scrollbar { display: none; }
        .gallery-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .gallery-scroll { overscroll-behavior: none; }
        @media (prefers-reduced-motion: reduce) {
          [role="img"] { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main layout                                                        */
/* ------------------------------------------------------------------ */

export default function CaseStudyLayout({
  title,
  metadata,
  sections,
  galleryItems,
  colorScheme = "dark",
  backgroundSrc,
  onClose,
}: CaseStudyLayoutProps) {
  const [scheme, setScheme] = useState<"dark" | "light">(colorScheme);
  const palette = usePalette(scheme);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row" style={{ background: palette.bg }}>
      {/* Gallery — fills remaining space, scroll handled internally */}
      <div
        className="flex-1 min-w-0 min-h-0 relative gallery-scroll"
        style={{ overflow: "hidden" }}
      >
        {/* Close / back button — inside the scrollable area so it stays on top */}
        <button
          onClick={onClose}
          className="absolute top-[16px] left-[16px] md:top-[24px] md:left-[24px] z-[20] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          style={{ background: palette.sidebarBg, color: palette.text }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span
            className="uppercase tracking-tight text-[13px]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Close
          </span>
        </button>

        <Gallery items={galleryItems} palette={palette} backgroundSrc={backgroundSrc} />
      </div>

      {/* Sidebar strip — bottom bar on mobile, right strip on desktop */}
      <div
        className="relative shrink-0 z-10"
        style={{ background: palette.sidebarBg }}
      >
        <style>{`
          .strip-outer { height: 56px; width: 100%; }
          @media (min-width: 768px) { .strip-outer { height: 100%; width: 56px; min-width: 56px; } }
        `}</style>

        {/* ── Mobile bottom bar ── */}
        <div className="strip-outer flex md:hidden items-center justify-between px-[16px]">
          {/* Horizontal title */}
          <div className="flex gap-[4px] items-baseline overflow-hidden">
            {title.map((w, i) => (
              <span
                key={i}
                className={`${WORD_FONT[w.style]} text-[13px] leading-none whitespace-nowrap`}
                style={{ color: palette.text }}
              >
                {w.text}
              </span>
            ))}
          </div>

          {/* Up arrow in circle */}
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle case study details"
            className="shrink-0 ml-[12px] flex items-center justify-center cursor-pointer rounded-full border hover:opacity-70 transition-opacity"
            style={{ width: 36, height: 36, color: palette.text, borderColor: palette.border }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* ── Desktop right strip ── */}
        <div className="strip-outer hidden md:flex flex-col items-center">
          {/* Arrow toggle at top */}
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle case study details"
            className="mt-[20px] flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
            style={{ width: 36, height: 36, color: palette.text, background: "rgba(255,255,255,0.1)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Vertical title */}
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              writingMode: "vertical-rl",
              transform: "translate(-50%, -50%) rotate(180deg)",
            }}
          >
            <div className="flex gap-[6px] items-baseline text-nowrap whitespace-pre leading-[1.12]">
              {title.map((w, i) => (
                <span
                  key={i}
                  className={`${WORD_FONT[w.style]} tracking-[0.15em] text-[13px] uppercase`}
                  style={{ color: palette.text }}
                >
                  {w.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Clickable area — entire strip toggles the drawer */}
        <button
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label="Toggle case study details"
          className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Full sidebar panel — absolute over everything */}
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
        title={title}
        metadata={metadata}
        sections={sections}
        activeSectionIdx={activeSectionIdx}
        onSectionChange={setActiveSectionIdx}
        palette={palette}
        onToggleTheme={() => setScheme((s) => (s === "dark" ? "light" : "dark"))}
        scheme={scheme}
      />
    </div>
  );
}
