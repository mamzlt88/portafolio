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
      {/* Toggle button — always visible */}
      <button
        onClick={onToggle}
        aria-label="Toggle case study sidebar"
        aria-expanded={open}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[70] flex items-center justify-center cursor-pointer transition-transform duration-300 md:block hidden"
        style={{
          width: 44,
          height: 44,
          background: palette.sidebarBg,
          borderRadius: "8px 0 0 8px",
          transform: open
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(0)",
        }}
      >
        <span className="text-[18px]" style={{ color: palette.text }}>
          {open ? "→" : "←"}
        </span>
      </button>

      {/* Mobile toggle — bottom-right */}
      <button
        onClick={onToggle}
        aria-label="Toggle case study sidebar"
        aria-expanded={open}
        className="fixed right-[16px] bottom-[16px] z-[70] flex items-center justify-center cursor-pointer md:hidden"
        style={{
          width: 44,
          height: 44,
          background: palette.sidebarBg,
          borderRadius: 8,
        }}
      >
        <span className="text-[18px]" style={{ color: palette.text }}>
          {open ? "→" : "←"}
        </span>
      </button>

      {/* Sidebar panel */}
      <div
        role="complementary"
        aria-label="Case study content"
        className="fixed top-0 right-0 h-full z-[65] overflow-y-auto transition-transform duration-[400ms]"
        style={{
          width: "min(380px, 100vw)",
          background: palette.sidebarBg,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "rgba(0,0,0,0.3) -10px 0 30px" : "none",
        }}
      >
        {/* Vertical title along left edge */}
        <VerticalTitle words={title} />

        {/* Close button */}
        <button
          onClick={onToggle}
          aria-label="Close sidebar"
          className="absolute top-[16px] left-[16px] z-10 flex items-center justify-center cursor-pointer rounded-full hover:opacity-70 transition-opacity"
          style={{ width: 40, height: 40, color: palette.text }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6L18 18" />
          </svg>
        </button>

        {/* Content area — offset from the vertical title */}
        <div className="pl-[48px] pr-[24px] pt-[24px] pb-[80px]">
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      cardRefs.current.forEach((el) => {
        if (el) { el.style.opacity = "1"; el.style.transform = "scale(1)"; }
      });
      return;
    }

    let lenisInstance: any = null;
    let raf = 0;
    let cancelled = false;

    (async () => {
      const [gsapMod, scrollTriggerMod, lenisMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (cancelled) return;

      const gsap: any = gsapMod.default || gsapMod;
      const ScrollTrigger: any = scrollTriggerMod.ScrollTrigger || scrollTriggerMod.default;
      const Lenis = lenisMod.default;

      gsap.registerPlugin(ScrollTrigger);

      // Lenis smooth scroll
      const content = wrapper.querySelector(".gallery-inner") as HTMLElement;
      lenisInstance = new Lenis({
        wrapper,
        content,
        smoothWheel: true,
        lerp: 0.08,
      });

      // Scroller proxy for Lenis ↔ ScrollTrigger
      ScrollTrigger.scrollerProxy(wrapper, {
        scrollTop(value?: number) {
          if (typeof value === "number") lenisInstance.scrollTo(value, { immediate: true });
          return lenisInstance.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: wrapper.clientWidth, height: wrapper.clientHeight };
        },
      });

      lenisInstance.on("scroll", () => ScrollTrigger.update());

      const tick = (time: number) => { lenisInstance.raf(time); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);

      // Wait for layout
      requestAnimationFrame(() => {
        if (cancelled) return;

        cardRefs.current.forEach((card, i) => {
          const section = sectionRefs.current[i];
          if (!card || !section) return;

          // Initial state: scaled down + transparent
          gsap.set(card, { scale: 0.65, opacity: 0, transformOrigin: "center center" });

          // Pin the card while the tall section scrolls past,
          // scrub scale 0.65→1 and opacity 0→1
          gsap.to(card, {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              scroller: wrapper,
              start: "top top",
              end: "bottom top",
              pin: card,
              pinSpacing: false,
              scrub: 1.5,
            },
          });
        });

        ScrollTrigger.refresh();
      });
    })();

    return () => {
      cancelled = true;
      import("gsap/ScrollTrigger").then((mod) => {
        const ST: any = mod.ScrollTrigger || mod.default;
        ST.getAll().forEach((t: any) => t.kill());
      }).catch(() => {});
      if (lenisInstance) lenisInstance.destroy();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full overflow-y-auto"
      style={{ background: palette.bg, overscrollBehavior: "contain" }}
    >
      <div className="gallery-inner">
        {items.map((item, idx) => (
          // Each section is 200vh tall — the extra height is scroll distance for the pin
          <div
            key={idx}
            ref={(el) => { sectionRefs.current[idx] = el; }}
            className="relative"
            style={{ height: "200vh" }}
          >
            {/* The card itself fills the viewport */}
            <div
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="w-full h-screen overflow-hidden will-change-transform"
              style={{
                background: item.imageSrc ? "transparent" : palette.placeholderBg,
                opacity: 0,
                transform: "scale(0.65)",
                transformOrigin: "center center",
              }}
              role="img"
              aria-label={item.label}
            >
              {item.imageSrc ? (
                <img
                  src={item.imageSrc}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span style={{ fontSize: 16, color: palette.muted }}>
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reduced-motion fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .gallery-inner > div > div { opacity: 1 !important; transform: none !important; }
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
    <div className="relative w-full h-full overflow-hidden" style={{ background: palette.bg }}>
      {/* Close / back button */}
      <button
        onClick={onClose}
        className="fixed top-[16px] left-[16px] md:top-[24px] md:left-[24px] z-[75] flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
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

      {/* Gallery */}
      <Gallery items={galleryItems} palette={palette} />

      {/* Sidebar */}
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
