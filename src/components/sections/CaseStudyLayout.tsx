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
}: SidebarProps) {
  const activeSection = sections[activeSectionIdx];

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

  return (
    <>
      {/* Sidebar panel — right on desktop, bottom sheet on mobile */}
      <div
        role="complementary"
        aria-label="Case study content"
        className={`sidebar-panel absolute z-[70] overflow-y-auto transition-transform duration-[400ms] ${open ? "sidebar-open" : "sidebar-closed"}`}
        style={{
          background: palette.sidebarBg,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "rgba(0,0,0,0.3) 0 -10px 30px" : "none",
        }}
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
              width: min(380px, 100vw); max-height: 100%; height: 100%;
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

        {/* Close button */}
        <button
          onClick={onToggle}
          aria-label="Close sidebar"
          className="absolute top-[16px] right-[16px] md:left-[16px] md:right-auto z-10 flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
          style={{ width: 40, height: 40, color: palette.text }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6L18 18" />
          </svg>
        </button>

        {/* Content area */}
        <div className="pl-[24px] md:pl-[48px] pr-[24px] pt-[24px] pb-[80px]">
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

        {/* Section navigation — bottom arrow */}
        {sections.length > 1 && (
          <div
            className="sticky bottom-0 left-0 right-0 flex items-center justify-between px-[48px] py-[16px]"
            style={{ background: palette.sidebarBg }}
          >
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

            {/* Next arrow */}
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
/*  Gallery                                                            */
/* ------------------------------------------------------------------ */

function Gallery({
  items,
  palette,
}: {
  items: GalleryItem[];
  palette: ReturnType<typeof usePalette>;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Split: hero (first image) is a static bg, rest animate
  const heroItem = items[0];
  const animItems = items.slice(1);

  useEffect(() => {
    const track = trackRef.current;
    const scene = sceneRef.current;
    const scroller = track?.parentElement;
    if (!track || !scene || !scroller || animItems.length === 0) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (cards.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      cards.forEach((el) => { el.style.opacity = "1"; el.style.transform = "scale(1)"; });
      return;
    }

    // Size the scene to match the scroller's visible area
    const viewH = scroller.clientHeight;
    scene.style.height = `${viewH}px`;

    // Set initial state for animated cards
    cards.forEach((card, i) => {
      card.style.transformOrigin = "center center";
      card.style.willChange = "transform, opacity";
      if (i === 0) {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
      } else {
        card.style.transform = "scale(0.5)";
        card.style.opacity = "0";
      }
    });

    // Update scene height on resize
    const onResize = () => { scene.style.height = `${scroller.clientHeight}px`; };
    window.addEventListener("resize", onResize);

    const transitions = cards.length - 1;
    const segmentSize = transitions > 0 ? 1 / transitions : 1;

    const applyTransforms = (progress: number) => {
      cards.forEach((card, i) => {
        if (transitions === 0) {
          card.style.transform = "scale(1)";
          card.style.opacity = "1";
          return;
        }

        const outStart = i * segmentSize;
        const outEnd = (i + 1) * segmentSize;
        const inStart = (i - 1) * segmentSize;
        const inEnd = i * segmentSize;

        let scale = 0;
        let opacity = 0;

        if (i === 0) {
          if (progress <= outStart) { scale = 1; opacity = 1; }
          else if (progress >= outEnd) { scale = 3; opacity = 0; }
          else { const t = (progress - outStart) / segmentSize; scale = 1 + 2 * t; opacity = 1 - t; }
        } else if (i === cards.length - 1) {
          if (progress <= inStart) { scale = 0.5; opacity = 0; }
          else if (progress >= inEnd) { scale = 1; opacity = 1; }
          else { const t = (progress - inStart) / segmentSize; scale = 0.5 + 0.5 * t; opacity = t; }
        } else {
          if (progress <= inStart) { scale = 0.5; opacity = 0; }
          else if (progress < inEnd) { const t = (progress - inStart) / segmentSize; scale = 0.5 + 0.5 * t; opacity = t; }
          else if (progress < outEnd) { const t = (progress - outStart) / segmentSize; scale = 1 + 2 * t; opacity = 1 - t; }
          else { scale = 3; opacity = 0; }
        }

        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });
    };

    const onScroll = () => {
      const scrollTop = scroller.scrollTop;
      const maxScroll = track.scrollHeight - scroller.clientHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
      applyTransforms(progress);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [items, animItems.length]);

  // Track height based on animated items (not hero)
  const trackHeight = Math.max(animItems.length * 150, 100);

  return (
    <div
      ref={trackRef}
      className="w-full"
      style={{ height: `${trackHeight}dvh`, background: palette.bg }}
    >
      {/* Scene: pinned via JS transform */}
      <div
        ref={sceneRef}
        className="w-full overflow-hidden"
        style={{ position: "sticky", top: 0, background: palette.bg }}
      >
        {/* Hero — static background layer (z-0) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
          role="img"
          aria-label={heroItem?.label}
        >
          {heroItem?.imageSrc ? (
            <img
              src={heroItem.imageSrc}
              alt={heroItem.label}
              className="w-full h-full object-contain md:object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ fontSize: 16, color: palette.muted }}>
                {heroItem?.label}
              </span>
            </div>
          )}
        </div>

        {/* Animated cards — stacked on top (z-10) */}
        {animItems.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => { cardRefs.current[idx] = el; }}
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 10,
              background: item.imageSrc ? "transparent" : palette.placeholderBg,
            }}
            role="img"
            aria-label={item.label}
          >
            {item.imageSrc ? (
              <img
                src={item.imageSrc}
                alt={item.label}
                className="w-full h-full object-contain md:object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span style={{ fontSize: 16, color: palette.muted }}>
                  {item.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hide scrollbar + reduced-motion fallback */}
      <style>{`
        .gallery-scroll::-webkit-scrollbar { display: none; }
        .gallery-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .gallery-scroll { overscroll-behavior: none; -webkit-overflow-scrolling: touch; }
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
  onClose,
}: CaseStudyLayoutProps) {
  const palette = usePalette(colorScheme);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row" style={{ background: palette.bg }}>
      {/* Gallery — scrollable, takes remaining space */}
      <div
        className="flex-1 min-w-0 min-h-0 overflow-y-auto relative gallery-scroll"
        style={{ overscrollBehavior: "contain" }}
      >
        {/* Close / back button — inside the scrollable area so it stays on top */}
        <button
          onClick={onClose}
          className="absolute top-[16px] left-[16px] md:top-[24px] md:left-[24px] z-[10] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
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

        <Gallery items={galleryItems} palette={palette} />
      </div>

      {/* Sidebar strip — bottom bar on mobile, right strip on desktop */}
      <div
        className="relative shrink-0"
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
          {/* X close at top */}
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="mt-[20px] flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
            style={{ width: 32, height: 32, color: palette.text }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
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

          {/* Left arrow at bottom */}
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle case study details"
            className="absolute bottom-[20px] flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
            style={{ width: 36, height: 36, color: palette.text, background: "rgba(255,255,255,0.1)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
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
      />
    </div>
  );
}
