// SportsMediaCaseStudy.tsx — markdown-driven case study for the Sports Media Platform project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/sports-media-platform/content.md?raw";

import imgSports1 from "../../content/projects/sports-media-platform/images/sports1.webp";
import img8form from "../../content/projects/sports-media-platform/images/8form.webp";
import img2stylescape from "../../content/projects/sports-media-platform/images/2styrlescape.webp";
import imgResearch from "../../content/projects/sports-media-platform/images/Research.webp";
import imgResearch2 from "../../content/projects/sports-media-platform/images/Research 2.webp";
import img3profile from "../../content/projects/sports-media-platform/images/3profile.webp";
import img4roster from "../../content/projects/sports-media-platform/images/4roster.webp";
import img7Frame from "../../content/projects/sports-media-platform/images/7Frame 49258.webp";
import img5Frame from "../../content/projects/sports-media-platform/images/5Frame 49260.webp";
import img6components from "../../content/projects/sports-media-platform/images/6components.svg";
import imgAccordions from "../../content/projects/sports-media-platform/images/Accordions.webp";
import imgAlert from "../../content/projects/sports-media-platform/images/Alert.webp";
import imgChips from "../../content/projects/sports-media-platform/images/Chips.webp";
import imgFull from "../../content/projects/sports-media-platform/images/Full.webp";
import imgText from "../../content/projects/sports-media-platform/images/Text.webp";
import imgPlayer from "../../content/projects/sports-media-platform/images/pexels-pixabay-159710.webp";
import imgField from "../../content/projects/sports-media-platform/images/pexels-pixabay-209722.webp";

import vidReels from "../../content/projects/sports-media-platform/images/Reels.mp4";
import vidScene from "../../content/projects/sports-media-platform/images/Scene.mp4";

const imageMap: Record<string, string> = {
  "sports1.webp": imgSports1,
  "8form.webp": img8form,
  "2styrlescape.webp": img2stylescape,
  "Research.webp": imgResearch,
  "Research 2.webp": imgResearch2,
  "3profile.webp": img3profile,
  "4roster.webp": img4roster,
  "7Frame 49258.webp": img7Frame,
  "5Frame 49260.webp": img5Frame,
  "6components.svg": img6components,
  "Accordions.webp": imgAccordions,
  "Alert.webp": imgAlert,
  "Chips.webp": imgChips,
  "Full.webp": imgFull,
  "Text.webp": imgText,
  "pexels-pixabay-159710.webp": imgPlayer,
  "pexels-pixabay-209722.webp": imgField,
};

const videoMap: Record<string, string> = {
  "Reels.mp4": vidReels,
  "Scene.mp4": vidScene,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

function resolveVideo(filename: string): string | undefined {
  return videoMap[filename];
}

export default function SportsMediaCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      resolveVideo={resolveVideo}
      onClose={onClose}
    />
  );
}
