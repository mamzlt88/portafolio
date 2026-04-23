// ProjectsOverlay.tsx — full-screen projects view with scattered titles and centered model
import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectsOverlayProps {
  onClose: () => void;
  onProjectClick?: (projectId: string) => void;
}

type WordStyle = 'bold' | 'italic' | 'semibold-italic' | 'normal';
type Category = 'experience' | 'branding';

interface StyledWord {
  text: string;
  style: WordStyle;
}

interface ProjectEntry {
  id: string;
  category: Category;
  lines: StyledWord[][];
  x: string;
  y: string;
  completed?: boolean;
}

const ALL_ENTRIES: ProjectEntry[] = [
  {
    id: 'trading-automation',
    category: 'experience',
    lines: [
      [{ text: 'Trading', style: 'bold' }, { text: 'Automation', style: 'italic' }],
      [{ text: 'Interface', style: 'normal' }, { text: 'Redesign', style: 'semibold-italic' }],
    ],
    x: 'calc(14% + 100px)',
    y: '10%',
    completed: false,
  },
  {
    id: 'white-label',
    category: 'experience',
    lines: [
      [{ text: 'White', style: 'bold' }, { text: 'Label', style: 'italic' }],
      [{ text: 'Payment', style: 'normal' }, { text: 'Gateway', style: 'semibold-italic' }],
    ],
    x: '58%',
    y: '10%',
    completed: true,
  },
  {
    id: 'colorfit',
    category: 'branding',
    lines: [
      [{ text: 'Colorfit', style: 'bold' }, { text: 'Brand', style: 'italic' }],
      [{ text: 'Rebrand', style: 'normal' }, { text: 'for Market Entry', style: 'semibold-italic' }],
    ],
    x: 'calc(14% + 100px)',
    y: '38%',
    completed: true,
  },
  {
    id: 'sports-media',
    category: 'experience',
    lines: [
      [{ text: 'Sports', style: 'bold' }, { text: 'Media', style: 'italic' }],
      [{ text: 'Digital', style: 'normal' }, { text: 'Ecosystem', style: 'semibold-italic' }],
    ],
    x: '58%',
    y: '38%',
    completed: true,
  },
  {
    id: 'unified-health',
    category: 'experience',
    lines: [
      [{ text: 'Process', style: 'bold' }, { text: 'Redesign', style: 'italic' }],
      [{ text: '&', style: 'normal' }, { text: 'Unification', style: 'semibold-italic' }],
    ],
    x: 'calc(14% + 100px)',
    y: '66%',
    completed: false,
  },
];

const BG_ALL = 'linear-gradient(135deg, #e1f40b 0%, #c8a8f9 50%, #a456f3 100%)';
const BG_EXPERIENCE = '#e1f40b';
const BG_BRANDING = '#a456f3';

const CATEGORY_BADGE: Record<Category, { label: string; bg: string; text: string }> = {
  experience: { label: 'Product', bg: 'bg-black/80', text: 'text-white' },
  branding: { label: 'Brand', bg: 'bg-[#a456f3]', text: 'text-white' },
};

const WORD_FONT_MAP: Record<WordStyle, string> = {
  bold: "font-['Poltawski_Nowy:Bold',sans-serif] font-bold",
  italic: "font-['Poppins:SemiBold_Italic',sans-serif] italic",
  'semibold-italic': "font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic",
  normal: "font-['Poppins:Regular',sans-serif] not-italic",
};

function CategoryBadge({ category }: { category: Category }) {
  const { label, bg, text } = CATEGORY_BADGE[category];
  return (
    <span className={`mb-[6px] inline-block px-3 py-[3px] rounded-full ${bg} ${text} text-[10px] font-['DM_Mono',monospace] uppercase tracking-wide`}>
      {label}
    </span>
  );
}

function ProjectTitle({ entry, index, onClick }: { entry: ProjectEntry; index: number; onClick: () => void }) {
  const isComplete = entry.completed !== false;
  return (
    <motion.button
      layout
      className={`absolute group text-left ${isComplete ? 'cursor-pointer' : 'cursor-default pointer-events-none'}`}
      style={{ left: entry.x, top: entry.y }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isComplete ? 1 : 0.5, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      onClick={isComplete ? onClick : undefined}
    >
      <CategoryBadge category={entry.category} />
      <div className="flex flex-col gap-[2px]">
        {entry.lines.map((line, lineIdx) => (
          <div key={lineIdx} className="flex gap-[6px] md:gap-[8px] items-baseline text-black text-nowrap whitespace-pre leading-[1.12]">
            {line.map((word, wordIdx) => (
              <span
                key={wordIdx}
                className={`${WORD_FONT_MAP[word.style]} tracking-[-0.04em] ${isComplete ? 'group-hover:opacity-70' : ''} transition-opacity`}
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
      {!isComplete && (
        <span className="mt-2 inline-block px-3 py-1 rounded-full bg-black/80 text-white text-[11px] font-['DM_Mono',monospace] uppercase tracking-wide">
          In Construction
        </span>
      )}
    </motion.button>
  );
}

export default function ProjectsOverlay({ onClose, onProjectClick }: ProjectsOverlayProps) {
  const [activeFilter, setActiveFilter] = React.useState<Category | null>(null);

  const filteredEntries = activeFilter
    ? ALL_ENTRIES.filter((e) => e.category === activeFilter)
    : ALL_ENTRIES;

  const bgStyle = activeFilter === 'experience'
    ? BG_EXPERIENCE
    : activeFilter === 'branding'
      ? BG_BRANDING
      : BG_ALL;

  const isGradient = activeFilter === null;

  function toggleFilter(cat: Category) {
    setActiveFilter((prev) => (prev === cat ? null : cat));
  }

  return (
    <motion.div
      className="relative size-full overflow-hidden"
      animate={isGradient ? undefined : { backgroundColor: bgStyle }}
      style={isGradient ? { background: bgStyle } : undefined}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      data-name="ProjectsOverlay"
    >
      {/* Category filter pills */}
      <motion.div
        className="absolute top-[24px] md:top-[32px] left-[24px] md:left-[32px] flex gap-[8px] z-30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <button
          onClick={() => toggleFilter('experience')}
          className={`px-[16px] py-[8px] rounded-full text-[13px] font-['DM_Mono',monospace] uppercase tracking-wide transition-colors cursor-pointer ${
            activeFilter === 'experience'
              ? 'bg-black text-white'
              : 'bg-transparent text-black border border-black hover:bg-black/5'
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => toggleFilter('branding')}
          className={`px-[16px] py-[8px] rounded-full text-[13px] font-['DM_Mono',monospace] uppercase tracking-wide transition-colors cursor-pointer ${
            activeFilter === 'branding'
              ? 'bg-black text-white'
              : 'bg-transparent text-black border border-black hover:bg-black/5'
          }`}
        >
          Branding
        </button>
      </motion.div>

      {/* Close (X) control */}
      <motion.button
        className="absolute top-[24px] md:top-[32px] right-[24px] md:right-[32px] z-30 bg-black text-white rounded-full size-[48px] md:size-[56px] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        aria-label="Close projects"
      >
        <svg className="size-[24px] md:size-[28px]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </motion.button>

      {/* Mobile: stacked project list */}
      <div className="md:hidden absolute inset-0 flex flex-col justify-center gap-8 px-8 pt-[80px] pb-[60px] overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {filteredEntries.map((entry, idx) => {
            const isComplete = entry.completed !== false;
            return (
            <motion.button
              key={`mobile-${entry.id}`}
              layout
              className={`group text-left ${isComplete ? 'cursor-pointer' : 'cursor-default opacity-50'}`}
              onClick={isComplete ? () => onProjectClick?.(entry.id) : undefined}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: isComplete ? 1 : 0.5, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeOut" }}
            >
              <CategoryBadge category={entry.category} />
              <div className="flex flex-col gap-[2px]">
                {entry.lines.map((line, lineIdx) => (
                  <div key={lineIdx} className="flex flex-wrap gap-[6px] items-baseline text-black leading-[1.12]">
                    {line.map((word, wordIdx) => (
                      <span
                        key={wordIdx}
                        className={`${WORD_FONT_MAP[word.style]} tracking-[-0.04em] ${isComplete ? 'group-hover:opacity-70' : ''} transition-opacity`}
                        style={{ fontSize: 'clamp(1.75rem, 7vw, 2.5rem)' }}
                      >
                        {word.text}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              {isComplete ? (
                <div className="mt-2 flex items-center gap-2 text-black/50">
                  <span className="font-['DM_Mono',monospace] text-xs uppercase tracking-wide">View case study</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <span className="mt-2 inline-block px-3 py-1 rounded-full bg-black/80 text-white text-[11px] font-['DM_Mono',monospace] uppercase tracking-wide">
                  In Construction
                </span>
              )}
            </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Desktop: scattered absolute titles — model is rendered by Landing and elevated above this overlay */}
      <div className="hidden md:block">
        <AnimatePresence mode="popLayout">
          {filteredEntries.map((entry, idx) => (
            <ProjectTitle
              key={entry.id}
              entry={entry}
              index={idx}
              onClick={() => onProjectClick?.(entry.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
