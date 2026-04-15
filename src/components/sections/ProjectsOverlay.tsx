// ProjectsOverlay.tsx — full-screen projects view with scattered titles and centered model
import React from "react";
import { motion } from "motion/react";

interface ProjectsOverlayProps {
  onClose: () => void;
  onProjectClick?: (projectId: string) => void;
}

type WordStyle = 'bold' | 'italic' | 'semibold-italic' | 'normal';

interface StyledWord {
  text: string;
  style: WordStyle;
}

interface ProjectEntry {
  id: string;
  lines: StyledWord[][];
  x: string;
  y: string;
}

const EXPERIENCE_ENTRIES: ProjectEntry[] = [
  {
    id: 'trading-automation',
    lines: [
      [{ text: 'Trading', style: 'bold' }, { text: 'Automation', style: 'italic' }],
      [{ text: 'Interface', style: 'normal' }, { text: 'Redesign', style: 'semibold-italic' }],
    ],
    x: 'calc(14% + 100px)',
    y: '12%',
  },
  {
    id: 'white-label',
    lines: [
      [{ text: 'White', style: 'bold' }, { text: 'Label', style: 'italic' }],
      [{ text: 'Payment', style: 'normal' }, { text: 'Gateway', style: 'semibold-italic' }],
    ],
    x: '60%',
    y: '12%',
  },
  {
    id: 'sports-media',
    lines: [
      [{ text: 'Sports', style: 'bold' }, { text: 'Media', style: 'italic' }],
      [{ text: 'Digital', style: 'normal' }, { text: 'Ecosystem', style: 'semibold-italic' }],
    ],
    x: 'calc(14% + 100px)',
    y: '55%',
  },
  {
    id: 'unified-health',
    lines: [
      [{ text: 'Process', style: 'bold' }, { text: 'Redesign', style: 'italic' }],
      [{ text: '&', style: 'normal' }, { text: 'Unification', style: 'semibold-italic' }],
    ],
    x: '60%',
    y: '55%',
  },
];

type FilterTab = 'experience';

const TAB_CONFIG: Record<FilterTab, { bg: string; entries: ProjectEntry[] }> = {
  experience: { bg: '#e1f40b', entries: EXPERIENCE_ENTRIES },
};

const WORD_FONT_MAP: Record<WordStyle, string> = {
  bold: "font-['Poltawski_Nowy:Bold',sans-serif] font-bold",
  italic: "font-['Poppins:SemiBold_Italic',sans-serif] italic",
  'semibold-italic': "font-['Poltawski_Nowy:SemiBold_Italic',sans-serif] font-semibold italic",
  normal: "font-['Poppins:Regular',sans-serif] not-italic",
};

function ProjectTitle({ entry, index, onClick }: { entry: ProjectEntry; index: number; onClick: () => void }) {
  return (
    <motion.button
      className="absolute cursor-pointer group text-left"
      style={{ left: entry.x, top: entry.y }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.15, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="flex flex-col gap-[2px]">
        {entry.lines.map((line, lineIdx) => (
          <div key={lineIdx} className="flex gap-[6px] md:gap-[8px] items-baseline text-black text-nowrap whitespace-pre leading-[1.12]">
            {line.map((word, wordIdx) => (
              <span
                key={wordIdx}
                className={`${WORD_FONT_MAP[word.style]} tracking-[-0.04em] group-hover:opacity-70 transition-opacity`}
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
              >
                {word.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.button>
  );
}

export default function ProjectsOverlay({ onClose, onProjectClick }: ProjectsOverlayProps) {
  const [activeTab, setActiveTab] = React.useState<FilterTab>('experience');
  const { bg, entries } = TAB_CONFIG[activeTab];

  return (
    <motion.div
      className="relative size-full overflow-hidden"
      animate={{ backgroundColor: bg }}
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
          onClick={() => setActiveTab('experience')}
          className={`px-[16px] py-[8px] rounded-full text-[13px] font-['DM_Mono',monospace] uppercase tracking-wide transition-colors cursor-pointer ${
            activeTab === 'experience'
              ? 'bg-black text-white'
              : 'bg-transparent text-black border border-black hover:bg-black/5'
          }`}
        >
          Experience
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

      {/* Scattered project titles — model is rendered by Landing and elevated above this overlay */}
      {entries.map((entry, idx) => (
        <ProjectTitle
          key={`${activeTab}-${entry.id}-${idx}`}
          entry={entry}
          index={idx}
          onClick={() => onProjectClick?.(entry.id)}
        />
      ))}
    </motion.div>
  );
}
