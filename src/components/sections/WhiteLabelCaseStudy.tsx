// WhiteLabelCaseStudy.tsx — markdown-driven case study for the White-Label project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/vastege-white-label-gateway/content.md?raw";

// To add images: drop files in src/content/projects/vastege-white-label-gateway/images/
// and import them here. The filenames must match the `file` values in the frontmatter gallery.
const imageMap: Record<string, string> = {
  // Example:
  // "01-hero.jpg": new URL("../../content/projects/vastege-white-label-gateway/images/01-hero.jpg", import.meta.url).href,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function WhiteLabelCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
