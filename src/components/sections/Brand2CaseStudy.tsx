// Brand2CaseStudy.tsx — markdown-driven case study for Brand number 2
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/brand-2/content.md?raw";

const imageMap: Record<string, string> = {
  // "01-hero.jpg": new URL("../../content/projects/brand-2/images/01-hero.jpg", import.meta.url).href,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function Brand2CaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
