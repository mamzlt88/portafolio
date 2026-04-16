// parseCaseStudy.ts — parses a case study markdown string (with YAML frontmatter)
// into structured data that CaseStudyLayout can consume.
import yaml from "js-yaml";
import { marked } from "marked";

export interface ParsedCaseStudy {
  slug: string;
  title: { text: string; style: "bold" | "italic" | "semibold-italic" | "normal" }[];
  category: "experience" | "branding";
  colorScheme: "dark" | "light";
  metadata: { label: string; value: string }[];
  gallery: { file: string; alt: string; type?: "image" | "video" }[];
  sections: { label: string; heading: string; htmlContent: string }[];
}

/** Browser-safe frontmatter extraction (no Node.js Buffer needed) */
function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = (yaml.load(match[1]) as Record<string, any>) ?? {};
  return { data, content: match[2] };
}

/**
 * Parse raw markdown (with YAML frontmatter) into a ParsedCaseStudy.
 *
 * Sections are delimited by `# Heading` in the markdown body.
 * The first section is treated as "Intro" regardless of its heading.
 */
export function parseCaseStudy(raw: string): ParsedCaseStudy {
  const { data, content } = parseFrontmatter(raw);

  // Split body into sections by top-level headings (# ...)
  const sectionRegex = /^# (.+)$/gm;
  const sectionParts: { heading: string; body: string }[] = [];

  let lastIndex = 0;
  let lastHeading = "";
  let match: RegExpExecArray | null;

  while ((match = sectionRegex.exec(content)) !== null) {
    if (lastHeading) {
      sectionParts.push({
        heading: lastHeading,
        body: content.slice(lastIndex, match.index).trim(),
      });
    }
    lastHeading = match[1].trim();
    lastIndex = match.index + match[0].length;
  }

  // Push the last section
  if (lastHeading) {
    sectionParts.push({
      heading: lastHeading,
      body: content.slice(lastIndex).trim(),
    });
  }

  // Convert each section body from markdown to HTML
  const sections = sectionParts.map((part, idx) => {
    const label =
      idx === 0
        ? "Intro"
        : part.heading
            .replace(/[&]/g, "")
            .split(/\s+/)
            .slice(0, 1)
            .join("")
            .replace(/[^a-zA-Z0-9]/g, "");

    return {
      label,
      heading: idx === 0 ? "" : part.heading,
      htmlContent: marked.parse(part.body, { async: false }) as string,
    };
  });

  return {
    slug: data.slug ?? "untitled",
    title: data.title ?? [{ text: "Untitled", style: "bold" }],
    category: data.category ?? "experience",
    colorScheme: data.colorScheme ?? "dark",
    metadata: data.metadata ?? [],
    gallery: (data.gallery ?? []).map((g: any) => ({
      file: g.file,
      alt: g.alt,
      type: g.type ?? "image",
    })),
    sections,
  };
}
