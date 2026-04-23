// SportsMediaCaseStudy.tsx — markdown-driven case study for the Sports Media Platform project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/sports-media-platform/content.md?raw";

import img01HeroSignup from "../../content/projects/sports-media-platform/images/01-hero-signup.webp";
import img02PlatformOverview from "../../content/projects/sports-media-platform/images/02-platform-overview.webp";
import img03Stylescape from "../../content/projects/sports-media-platform/images/03-stylescape.webp";
import img04ResearchBoard from "../../content/projects/sports-media-platform/images/04-research-board.webp";
import img05UserFlows from "../../content/projects/sports-media-platform/images/05-user-flows.webp";
import img06PlayerProfile from "../../content/projects/sports-media-platform/images/06-player-profile.webp";
import img07TeamRoster from "../../content/projects/sports-media-platform/images/07-team-roster.webp";
import img08ContentCards from "../../content/projects/sports-media-platform/images/08-content-cards.webp";
import img09UIKitCore from "../../content/projects/sports-media-platform/images/09-ui-kit-core.webp";
import img10DesignSystemOverview from "../../content/projects/sports-media-platform/images/10-design-system-overview.svg";
import img11AccordionComponents from "../../content/projects/sports-media-platform/images/11-accordion-components.webp";
import img12AlertComponents from "../../content/projects/sports-media-platform/images/12-alert-components.webp";
import img13ChipComponents from "../../content/projects/sports-media-platform/images/13-chip-components.webp";
import img14ButtonFilledStates from "../../content/projects/sports-media-platform/images/14-button-filled-states.webp";
import img15ButtonTextStates from "../../content/projects/sports-media-platform/images/15-button-text-states.webp";
import img16PlayerCutout from "../../content/projects/sports-media-platform/images/16-player-cutout.webp";
import img17CoachCutout from "../../content/projects/sports-media-platform/images/17-coach-cutout.webp";
import img18BrandHero from "../../content/projects/sports-media-platform/images/18-brand-hero.svg";

import vid21DesignSystemComponents from "../../content/projects/sports-media-platform/images/21-design-system-components.mov";
import vid22DesignSystemFoundation from "../../content/projects/sports-media-platform/images/22-design-system-foundation.mov";
import vid23DesignSystemExtended from "../../content/projects/sports-media-platform/images/23-design-system-extended.mov";
import vid19ReelsDemo from "../../content/projects/sports-media-platform/images/19-reels-demo.mp4";
import vid20SceneWalkthrough from "../../content/projects/sports-media-platform/images/20-scene-walkthrough.mp4";

const imageMap: Record<string, string> = {
  "01-hero-signup.webp": img01HeroSignup,
  "02-platform-overview.webp": img02PlatformOverview,
  "03-stylescape.webp": img03Stylescape,
  "04-research-board.webp": img04ResearchBoard,
  "05-user-flows.webp": img05UserFlows,
  "06-player-profile.webp": img06PlayerProfile,
  "07-team-roster.webp": img07TeamRoster,
  "08-content-cards.webp": img08ContentCards,
  "09-ui-kit-core.webp": img09UIKitCore,
  "10-design-system-overview.svg": img10DesignSystemOverview,
  "11-accordion-components.webp": img11AccordionComponents,
  "12-alert-components.webp": img12AlertComponents,
  "13-chip-components.webp": img13ChipComponents,
  "14-button-filled-states.webp": img14ButtonFilledStates,
  "15-button-text-states.webp": img15ButtonTextStates,
  "16-player-cutout.webp": img16PlayerCutout,
  "17-coach-cutout.webp": img17CoachCutout,
  "18-brand-hero.svg": img18BrandHero,
};

const videoMap: Record<string, string> = {
  "21-design-system-components.mov": vid21DesignSystemComponents,
  "22-design-system-foundation.mov": vid22DesignSystemFoundation,
  "23-design-system-extended.mov": vid23DesignSystemExtended,
  "19-reels-demo.mp4": vid19ReelsDemo,
  "20-scene-walkthrough.mp4": vid20SceneWalkthrough,
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
