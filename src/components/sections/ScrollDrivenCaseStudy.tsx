// ScrollDrivenCaseStudy.tsx
// Scroll-driven full-screen image sequence case study
// Animation engine: continuous float timeline + requestAnimationFrame
// No external animation libraries — pure RAF + CSS transforms
//
// Scale math (from spec):
//   ZOOM_MAX = 1.6  →  at progress 0.35, current = scale(1.21) ✓
//   current:  1.0 + 0.6 * progress
//   next:     0.001 + 0.999 * progress
//   prev:     hold at ZOOM_MAX, then blow up ~2.4 and fade

import React, { useEffect, useRef, useState } from 'react';

/* ── Constants ────────────────────────────────────────────────── */
const EASE        = 0.09;    // lerp factor per frame toward targetTimeline
const ZOOM_MAX    = 1.6;     // scale at end of current layer's transition
const PREV_HOLD   = 0.28;    // prev holds large for this fraction of next progress
const PREV_BLOW   = 0.5;     // prev blow-up multiplier (scale → ZOOM_MAX * (1 + t*BLOW))
const SCROLL_SPD  = 0.0012;  // timeline delta per normalized scroll pixel
const TOUCH_SPD   = 0.0008;
const MAX_DELTA   = 120;     // clamp raw wheel deltaY
const LUM_EVERY   = 8;       // sample luminance every N frames
const CHAR_MS     = 42;      // typing speed (ms / char) for intro overlay

/* ── Types ────────────────────────────────────────────────────── */
export interface SdcsSection {
  title: string;
  body: React.ReactNode;
}
export interface SdcsMeta {
  label: string;
  value: string;
}

export interface ScrollDrivenCaseStudyProps {
  /** Ordered image/video sources for the background sequence */
  images: string[];
  /** 0–1 progress into the first transition on mount (spec default: 0.35) */
  initialProgress?: number;
  /** Shown in the intro overlay title and nav bar */
  projectTitle: string;
  /** E.g. "2024" — shown faintly in the nav bar */
  year?: string;
  /** Key-value fields typed in the intro overlay */
  metadata?: SdcsMeta[];
  /** Up to 3 expandable frosted-glass cards at the bottom */
  sections?: SdcsSection[];
  /** Called when user presses Close or Escape */
  onClose: () => void;
}

/* ── Expandable bottom card ───────────────────────────────────── */
function ExpandCard({ title, body }: SdcsSection) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`sdcs-card${open ? ' sdcs-card--open' : ''}`}>
      <button
        className="sdcs-card-btn"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className="sdcs-card-label">{title}</span>
        <svg
          className="sdcs-card-chevron"
          width="14" height="14"
          viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="sdcs-card-body" aria-hidden={!open}>
        <div className="sdcs-card-inner">{body}</div>
      </div>
    </div>
  );
}

/* ── CSS ──────────────────────────────────────────────────────── */
const CSS = `
  /* Root + theme tokens */
  .sdcs-root {
    --fg: #ffffff;
    --card-bg: rgba(8, 8, 8, 0.60);
    position: fixed; inset: 0;
    overflow: hidden;
    background: #000;
    user-select: none; -webkit-user-select: none;
  }
  .sdcs-root.sdcs-light {
    --fg: #000000;
    --card-bg: rgba(255, 255, 255, 0.55);
  }

  /* ── Background layer container ── */
  .sdcs-bg {
    position: absolute; inset: 0;
    background: #000;
    pointer-events: none;
    overflow: hidden;
  }

  /* ── Nav bar ── */
  .sdcs-nav {
    position: absolute; top: 0; left: 0; right: 0; z-index: 20;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px clamp(16px, 3vw, 32px);
    transform: translate3d(0, -100vh, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    pointer-events: none;
  }
  .sdcs-nav.sdcs-vis {
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
  }

  .sdcs-back-btn {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    cursor: pointer;
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.18s;
  }
  .sdcs-back-btn:hover { background: rgba(255, 255, 255, 0.20); }
  .sdcs-light .sdcs-back-btn {
    background: rgba(0, 0, 0, 0.10);
    border-color: rgba(0, 0, 0, 0.12);
  }

  .sdcs-nav-title {
    position: absolute; left: 50%; transform: translateX(-50%);
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.10em;
    pointer-events: none;
    white-space: nowrap;
  }
  .sdcs-nav-year {
    color: var(--fg); opacity: 0.45;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
  }

  /* ── Intro typed overlay ── */
  .sdcs-intro {
    position: absolute; inset: 0; z-index: 30;
    background: #000;
    display: flex; align-items: flex-end;
    padding: clamp(28px, 5vw, 72px) clamp(24px, 5vw, 72px);
    transform: translateX(0);
    transition: transform 0.42s cubic-bezier(0.4, 0, 0.6, 1);
  }
  .sdcs-intro-content {
    display: flex; flex-direction: column; gap: 10px;
    max-width: min(640px, 90vw);
  }
  .sdcs-intro-title {
    display: block;
    font-family: 'Poltawski Nowy', 'Poppins', serif;
    font-size: clamp(2.4rem, 7vw, 5.5rem);
    font-weight: 700;
    color: #fff; line-height: 1.0;
    letter-spacing: -0.03em;
    margin-bottom: clamp(8px, 2vw, 20px);
  }
  .sdcs-intro-row {
    display: flex; align-items: baseline; gap: 16px;
  }
  .sdcs-intro-key {
    font-family: 'DM Mono', monospace;
    font-size: clamp(10px, 1.1vw, 12px);
    text-transform: uppercase; letter-spacing: 0.10em;
    color: rgba(255, 255, 255, 0.38);
    min-width: 80px; flex-shrink: 0;
  }
  .sdcs-intro-val {
    font-family: 'DM Mono', monospace;
    font-size: clamp(12px, 1.3vw, 14px);
    color: rgba(255, 255, 255, 0.80);
  }

  /* ── Bottom cards row ── */
  .sdcs-cards {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 20;
    display: flex; gap: 8px;
    padding: 12px clamp(12px, 2vw, 20px) clamp(16px, 3vw, 24px);
    transform: translate3d(0, 100vh, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) 0.08s;
    pointer-events: none;
    overflow-x: auto; overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .sdcs-cards::-webkit-scrollbar { display: none; }
  .sdcs-cards.sdcs-vis {
    transform: translate3d(0, 0, 0);
    pointer-events: auto;
  }

  /* ── Card ── */
  .sdcs-card {
    flex: 1;
    min-width: clamp(130px, 26vw, 200px);
    background: var(--card-bg);
    backdrop-filter: blur(20px) saturate(160%);
    -webkit-backdrop-filter: blur(20px) saturate(160%);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    overflow: hidden;
    flex-shrink: 0;
    transition: transform 0.20s ease, box-shadow 0.20s ease;
  }
  .sdcs-light .sdcs-card {
    border-color: rgba(0, 0, 0, 0.08);
  }
  @media (hover: hover) and (pointer: fine) {
    .sdcs-card:not(.sdcs-card--open):hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 36px rgba(0, 0, 0, 0.28);
    }
  }
  .sdcs-card-btn {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    width: 100%;
    padding: 13px 14px;
    background: none; border: none;
    cursor: pointer;
    color: var(--fg);
    font-family: 'DM Mono', monospace;
    font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em;
    text-align: left;
    white-space: nowrap;
  }
  .sdcs-card-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .sdcs-card-chevron {
    flex-shrink: 0;
    color: var(--fg); opacity: 0.55;
    transition: transform 0.25s ease;
  }
  .sdcs-card--open .sdcs-card-chevron { transform: rotate(180deg); }

  .sdcs-card-body {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    transition:
      grid-template-rows 320ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 240ms ease;
  }
  .sdcs-card--open .sdcs-card-body {
    grid-template-rows: 1fr;
    opacity: 1;
  }
  .sdcs-card-inner {
    overflow: hidden;
    padding: 0 14px 14px;
    color: var(--fg); opacity: 0.80;
    font-family: 'Poppins', sans-serif;
    font-size: 12px; line-height: 1.65;
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .sdcs-nav, .sdcs-cards { transform: none !important; transition: none !important; }
    .sdcs-intro { display: none !important; }
    .sdcs-card-body { transition: none !important; }
  }
`;

/* ── Main component ───────────────────────────────────────────── */
export default function ScrollDrivenCaseStudy({
  images,
  initialProgress = 0.35,
  projectTitle,
  year = '',
  metadata = [],
  sections = [],
  onClose,
}: ScrollDrivenCaseStudyProps) {
  const rootRef  = useRef<HTMLDivElement>(null);
  const bgRef    = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const navRef   = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /* ── Close on Escape ──────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  /* ── Animation engine (self-contained effect closure) ──────── */
  useEffect(() => {
    const bg    = bgRef.current;
    const root  = rootRef.current;
    const intro = introRef.current;
    const nav   = navRef.current;
    const cds   = cardsRef.current;
    if (!bg || !root || images.length === 0) return;

    const N = images.length;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Mutable animation state ─────────────────────────────── */
    let timeline   = initialProgress;
    let target     = initialProgress;
    let rafId      = 0;
    let pending    = false;
    let frameCount = 0;

    // Per-layer cached scale (for prev blow-up start point)
    const prevScale = new Array<number>(N).fill(ZOOM_MAX);

    // Luminance
    let lumCanvas: HTMLCanvasElement | null = null;
    let lumCtx:    CanvasRenderingContext2D | null = null;
    let theme = 'dark';

    // Touch
    let touching    = false;
    let touchLastY  = 0;
    let touchVel    = 0;
    let touchTime   = 0;
    let inertiaId   = 0;

    /* ── Create image layers ─────────────────────────────────── */
    const layers: HTMLElement[] = [];
    images.forEach((src, i) => {
      // Support both <img> for raster and <img> for SVG (src works for both)
      const el = document.createElement('img');
      el.src = src;
      el.alt = '';
      el.decoding = 'async';
      el.setAttribute('aria-hidden', 'true');
      Object.assign(el.style, {
        position:        'absolute',
        inset:           '0',
        width:           '100%',
        height:          '100%',
        objectFit:       i === 0 ? 'cover' : 'contain',
        objectPosition:  'center',
        transformOrigin: 'center center',
        backfaceVisibility: 'hidden',
        willChange:      'transform, opacity',
        transform:       'scale(0.001)',
        opacity:         '0',
        display:         'none',
        pointerEvents:   'none',
      });
      bg.appendChild(el);
      layers.push(el);
    });

    /* ── Render loop ─────────────────────────────────────────── */
    function queueRender() {
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(renderFrame);
      }
    }

    function renderFrame() {
      pending = false;

      // 1. Lerp timeline toward target
      const diff = target - timeline;
      timeline += diff * EASE;

      // 2. Compute current index + progress (with wrap)
      const raw = ((timeline % N) + N) % N;
      const idx     = Math.floor(raw);
      const prog    = raw - idx;
      const prevIdx = (idx - 1 + N) % N;
      const nextIdx = (idx + 1) % N;

      // 3. Active window: only prev / current / next are visible
      const active = new Set([prevIdx, idx, nextIdx]);

      layers.forEach((layer, i) => {
        if (!active.has(i)) {
          if (layer.style.display !== 'none') layer.style.display = 'none';
          return;
        }

        layer.style.display = 'block';

        let scale: number;
        let opacity: number;

        if (i === idx) {
          // Current: 1.0 → ZOOM_MAX
          scale   = 1.0 + (ZOOM_MAX - 1.0) * prog;
          opacity = 1;
          // Cache scale near end of transition for prev blow-up reference
          if (prog > 0.92) prevScale[i] = scale;

        } else if (i === nextIdx) {
          // Incoming: tiny → 1.0
          scale   = 0.001 + 0.999 * prog;
          opacity = prog;

        } else {
          // Previous: hold large, then blow up and fade
          const base = prevScale[i];
          if (prog < PREV_HOLD) {
            // Hold phase — stays at ZOOM_MAX
            scale   = base;
            opacity = 1 - (prog / PREV_HOLD) * 0.35;
          } else {
            // Blow-up phase — grows beyond ZOOM_MAX and fades out
            const t = (prog - PREV_HOLD) / (1 - PREV_HOLD);
            scale   = base * (1 + t * PREV_BLOW);
            opacity = Math.max(0, 1 - t * 1.8);
          }
        }

        layer.style.transform = `scale(${scale.toFixed(4)})`;
        layer.style.opacity   = String(Math.max(0, Math.min(1, opacity)).toFixed(4));
      });

      // 4. Luminance → adaptive theme (every N frames)
      frameCount++;
      if (frameCount % LUM_EVERY === 0) sampleLum(layers[idx] as HTMLImageElement);

      // 5. Keep running while movement remains
      if (Math.abs(diff) > 0.0003) {
        pending = true;
        rafId = requestAnimationFrame(renderFrame);
      }
    }

    /* ── Luminance sampling → light/dark theme ───────────────── */
    function sampleLum(img: HTMLImageElement) {
      if (!img?.complete || !img.naturalWidth) return;
      try {
        if (!lumCanvas) {
          lumCanvas = document.createElement('canvas');
          lumCanvas.width = 16; lumCanvas.height = 16;
          lumCtx = lumCanvas.getContext('2d', { willReadFrequently: true });
        }
        if (!lumCtx) return;
        lumCtx.drawImage(img, 0, 0, 16, 16);
        const px = lumCtx.getImageData(0, 0, 16, 16).data;
        let sum = 0;
        for (let j = 0; j < px.length; j += 4) {
          sum += 0.2126 * px[j] + 0.7152 * px[j + 1] + 0.0722 * px[j + 2];
        }
        const avg = sum / (px.length / 4);
        const next = avg > 148 ? 'light' : 'dark';
        if (next !== theme) {
          theme = next;
          root.style.setProperty('--fg', next === 'light' ? '#000000' : '#ffffff');
          root.classList.toggle('sdcs-light', next === 'light');
        }
      } catch { /* CORS tainted canvas — ignore */ }
    }

    /* ── Input: wheel ────────────────────────────────────────── */
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      let d = e.deltaY;
      if (e.deltaMode === 1) d *= 16;   // line mode
      if (e.deltaMode === 2) d *= 100;  // page mode
      d = Math.max(-MAX_DELTA, Math.min(MAX_DELTA, d));
      target += d * SCROLL_SPD;
      queueRender();
    }

    /* ── Input: touch ────────────────────────────────────────── */
    function onTouchStart(e: TouchEvent) {
      touching   = true;
      touchLastY = e.touches[0].clientY;
      touchVel   = 0;
      touchTime  = performance.now();
      cancelAnimationFrame(inertiaId);
    }
    function onTouchMove(e: TouchEvent) {
      if (!touching) return;
      const y   = e.touches[0].clientY;
      const dy  = touchLastY - y;
      const now = performance.now();
      const dt  = now - touchTime;
      touchVel   = dt > 0 ? dy / dt : 0;
      touchLastY = y;
      touchTime  = now;
      target += dy * TOUCH_SPD;
      queueRender();
      e.preventDefault();
    }
    function onTouchEnd() {
      touching = false;
      // Velocity inertia — decays at 8% per frame
      let vel = touchVel * 16; // normalise to ~60fps
      const decay = () => {
        if (Math.abs(vel) < 0.0002) return;
        target += vel * TOUCH_SPD * 60;
        vel *= 0.92;
        queueRender();
        inertiaId = requestAnimationFrame(decay);
      };
      decay();
    }

    /* ── Typed intro overlay ─────────────────────────────────── */
    function runIntro() {
      if (!intro) return;

      const content = intro.querySelector<HTMLElement>('.sdcs-intro-content');
      if (!content) { intro.style.display = 'none'; return; }
      content.innerHTML = '';

      // Title row
      const titleEl = document.createElement('span');
      titleEl.className = 'sdcs-intro-title';
      content.appendChild(titleEl);

      // Metadata rows
      const metaEls = metadata.map(m => {
        const row = document.createElement('div');
        row.className = 'sdcs-intro-row';
        const key = document.createElement('span');
        key.className = 'sdcs-intro-key';
        const val = document.createElement('span');
        val.className = 'sdcs-intro-val';
        row.appendChild(key);
        row.appendChild(val);
        content.appendChild(row);
        return { key, val, label: m.label, value: m.value };
      });

      // ── Sequential typing ──
      const title = projectTitle;
      let done = false;

      function typeString(
        el: HTMLElement,
        text: string,
        ms: number,
        onDone: () => void,
      ) {
        let i = 0;
        const tick = () => {
          if (done) return;
          el.textContent = text.slice(0, i);
          i++;
          if (i <= text.length) setTimeout(tick, ms);
          else onDone();
        };
        tick();
      }

      function typeAll(idx: number) {
        if (done) return;
        if (idx === 0) {
          typeString(titleEl, title, CHAR_MS, () => setTimeout(() => typeAll(1), 120));
        } else {
          const mi = idx - 1;
          if (mi >= metaEls.length) {
            // All typed → slide out
            setTimeout(slideOut, 800);
            return;
          }
          const { key, val, label, value } = metaEls[mi];
          typeString(key, label, CHAR_MS * 0.7, () => {
            typeString(val, value, CHAR_MS * 0.55, () => {
              setTimeout(() => typeAll(idx + 1), 80);
            });
          });
        }
      }

      function slideOut() {
        done = true;
        if (!intro) return;
        intro.style.transform = 'translateX(100%)';
        intro.style.pointerEvents = 'none';
        setTimeout(() => { if (intro) intro.style.display = 'none'; }, 440);
        // Reveal nav + cards
        setTimeout(() => { nav?.classList.add('sdcs-vis'); }, 60);
        setTimeout(() => { cds?.classList.add('sdcs-vis'); }, 160);
      }

      setTimeout(() => typeAll(0), 180);
    }

    /* ── Boot sequence ───────────────────────────────────────── */
    queueRender();

    if (prefersReduced) {
      if (intro) intro.style.display = 'none';
      nav?.classList.add('sdcs-vis');
      cds?.classList.add('sdcs-vis');
    } else {
      runIntro();
    }

    /* ── Events ──────────────────────────────────────────────── */
    root.addEventListener('wheel', onWheel, { passive: false });
    root.addEventListener('touchstart', onTouchStart, { passive: false });
    root.addEventListener('touchmove',  onTouchMove,  { passive: false });
    root.addEventListener('touchend',   onTouchEnd);

    /* ── Cleanup ─────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(inertiaId);
      root.removeEventListener('wheel', onWheel);
      root.removeEventListener('touchstart', onTouchStart);
      root.removeEventListener('touchmove',  onTouchMove);
      root.removeEventListener('touchend',   onTouchEnd);
      layers.forEach(l => l.remove());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentional: runs once on mount, captures props via closure

  /* ── Render ──────────────────────────────────────────────────── */
  return (
    <div
      ref={rootRef}
      className="sdcs-root"
      style={{ '--fg': '#ffffff' } as React.CSSProperties}
      aria-label={`${projectTitle} — case study`}
    >
      <style>{CSS}</style>

      {/* ── Fixed background image layers (injected by JS) ── */}
      <div ref={bgRef} className="sdcs-bg" aria-hidden="true" />

      {/* ── Top navigation bar ── */}
      <div ref={navRef} className="sdcs-nav" role="navigation">
        <button
          className="sdcs-back-btn"
          onClick={onClose}
          aria-label="Close case study"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Close
        </button>
        <span className="sdcs-nav-title">{projectTitle}</span>
        {year && <span className="sdcs-nav-year">{year}</span>}
      </div>

      {/* ── Typed intro overlay ── */}
      <div ref={introRef} className="sdcs-intro" aria-hidden="true">
        <div className="sdcs-intro-content" />
      </div>

      {/* ── Bottom expandable cards ── */}
      {sections.length > 0 && (
        <div ref={cardsRef} className="sdcs-cards" role="complementary">
          {sections.map((s, i) => (
            <ExpandCard key={i} title={s.title} body={s.body} />
          ))}
        </div>
      )}
    </div>
  );
}
