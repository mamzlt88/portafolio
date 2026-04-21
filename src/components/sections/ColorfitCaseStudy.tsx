// ColorfitCaseStudy.tsx — markdown-driven case study for the Colorfit brand rebrand
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/colorfit-brand/content.md?raw";

export default function ColorfitCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      onClose={onClose}
    />
  );
}
