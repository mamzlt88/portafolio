// UnifiedHealthCaseStudy.tsx — markdown-driven case study for the UnifiedHealth Solutions project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/unified-health/content.md?raw";

// To add images: drop files in src/content/projects/unified-health/images/
// and import them here. The filenames must match the `file` values in the frontmatter gallery.
const imageMap: Record<string, string> = {
  // "01-hero.jpg": new URL("../../content/projects/unified-health/images/01-hero.jpg", import.meta.url).href,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function UnifiedHealthCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
