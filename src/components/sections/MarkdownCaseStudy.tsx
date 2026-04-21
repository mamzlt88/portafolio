// MarkdownCaseStudy.tsx — generic case study driven by parsed markdown data
import React, { useMemo } from "react";
import CaseStudyLayout from "./CaseStudyLayout";
import type { CaseStudySection, GalleryItem } from "./CaseStudyLayout";
import { parseCaseStudy } from "../../lib/parseCaseStudy";
import type { ParsedCaseStudy } from "../../lib/parseCaseStudy";

interface MarkdownCaseStudyProps {
  /** Raw markdown string (imported with ?raw) */
  rawMarkdown: string;
  /** Function that resolves an image filename to a URL.
   *  Receives the `file` value from the gallery frontmatter. */
  resolveImage?: (filename: string) => string | undefined;
  /** Function that resolves a video filename to a URL.
   *  Receives the `file` value from gallery entries with type: "video". */
  resolveVideo?: (filename: string) => string | undefined;
  /** Fixed background image URL for the gallery viewport */
  backgroundSrc?: string;
  onClose: () => void;
}

function HtmlContent({ html }: { html: string }) {
  return (
    <div
      className={[
        "space-y-4",
        "[&_strong]:font-bold [&_em]:italic [&_a]:underline",
        "[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5",
        // Sub-headings: uppercase monospace with bottom border
        "[&_h2]:uppercase [&_h2]:tracking-[0.04em] [&_h2]:text-[0.9rem] [&_h2]:font-bold [&_h2]:pb-[8px] [&_h2]:mb-[12px] [&_h2]:mt-[28px] [&_h2]:border-b [&_h2]:border-current/20",
        "[&_h3]:uppercase [&_h3]:tracking-[0.04em] [&_h3]:text-[0.85rem] [&_h3]:font-bold [&_h3]:pb-[8px] [&_h3]:mb-[12px] [&_h3]:mt-[28px] [&_h3]:border-b [&_h3]:border-current/20",
        // Tables: clean minimal
        "[&_table]:w-full [&_table]:mt-[16px] [&_table]:mb-[16px] [&_table]:text-[0.85rem]",
        "[&_th]:text-left [&_th]:font-bold [&_th]:pb-[8px] [&_th]:pr-[12px] [&_th]:border-b [&_th]:border-current/20",
        "[&_td]:py-[10px] [&_td]:pr-[12px] [&_td]:align-top [&_td]:border-b [&_td]:border-current/10",
        // Blockquotes as pull quotes
        "[&_blockquote]:text-[1.25rem] [&_blockquote]:font-bold [&_blockquote]:leading-[1.35] [&_blockquote]:my-[24px] [&_blockquote]:pl-0 [&_blockquote]:border-none",
      ].join(" ")}
      style={{ fontFamily: "'DM Mono', 'Poppins', sans-serif" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function MarkdownCaseStudy({
  rawMarkdown,
  resolveImage,
  resolveVideo,
  backgroundSrc,
  onClose,
}: MarkdownCaseStudyProps) {
  const data: ParsedCaseStudy = useMemo(
    () => parseCaseStudy(rawMarkdown),
    [rawMarkdown]
  );

  const sections: CaseStudySection[] = useMemo(
    () =>
      data.sections.map((s) => ({
        label: s.label,
        heading: s.heading || undefined,
        content: <HtmlContent html={s.htmlContent} />,
      })),
    [data.sections]
  );

  const galleryItems: GalleryItem[] = useMemo(
    () =>
      data.gallery.map((g) => {
        if (g.type === "video") {
          const src = resolveVideo?.(g.file);
          return {
            label: src ? g.alt : `[${g.alt}]`,
            videoSrc: src,
          };
        }
        const src = resolveImage?.(g.file);
        return {
          label: src ? g.alt : `[${g.alt}]`,
          imageSrc: src,
        };
      }),
    [data.gallery, resolveImage, resolveVideo]
  );

  return (
    <CaseStudyLayout
      title={data.title}
      metadata={data.metadata}
      sections={sections}
      galleryItems={galleryItems}
      colorScheme={data.colorScheme}
      backgroundSrc={backgroundSrc}
      onClose={onClose}
    />
  );
}
