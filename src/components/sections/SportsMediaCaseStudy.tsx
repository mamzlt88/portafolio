// SportsMediaCaseStudy.tsx — markdown-driven case study for the Sports Media Platform project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/sports-media-platform/content.md?raw";

// To add images: drop files in src/content/projects/sports-media-platform/images/
// and import them here. The filenames must match the `file` values in the frontmatter gallery.
const imageMap: Record<string, string> = {
  // "01-hero.jpg": new URL("../../content/projects/sports-media-platform/images/01-hero.jpg", import.meta.url).href,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function SportsMediaCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
