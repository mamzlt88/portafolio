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
  onClose: () => void;
}

function HtmlContent({ html }: { html: string }) {
  return (
    <div
      className="space-y-4 [&_strong]:font-bold [&_em]:italic [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function MarkdownCaseStudy({
  rawMarkdown,
  resolveImage,
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
        const src = resolveImage?.(g.file);
        return {
          label: src ? g.alt : `[${g.alt}]`,
          imageSrc: src,
        };
      }),
    [data.gallery, resolveImage]
  );

  return (
    <CaseStudyLayout
      title={data.title}
      metadata={data.metadata}
      sections={sections}
      galleryItems={galleryItems}
      colorScheme={data.colorScheme}
      onClose={onClose}
    />
  );
}
