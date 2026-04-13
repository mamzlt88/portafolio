// TradingCaseStudy.tsx — markdown-driven case study for the Trading Automation project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/vastege-trading-platform/content.md?raw";

import img01 from "../../content/projects/payet-trading-interface/media/images/01-hero-payet-across-devices.png";
import img02 from "../../content/projects/payet-trading-interface/media/images/02-user-personas.jpg";
import img03 from "../../content/projects/payet-trading-interface/media/images/03-process-overview.jpg";
import img04 from "../../content/projects/payet-trading-interface/media/images/04-design-system-framework.png";
import img05 from "../../content/projects/payet-trading-interface/media/images/05-color-scheme-foundations.png";
import img06 from "../../content/projects/payet-trading-interface/media/images/06-color-scheme-generator.svg";
import img07 from "../../content/projects/payet-trading-interface/media/images/07-color-theming-output.svg";
import img08 from "../../content/projects/payet-trading-interface/media/images/08-typography-system.jpg";
import img09 from "../../content/projects/payet-trading-interface/media/images/09-grid-system-responsive.png";
import img10 from "../../content/projects/payet-trading-interface/media/images/10-portal-green-theme.svg";
import img11 from "../../content/projects/payet-trading-interface/media/images/11-portal-pink-theme.svg";
import img12 from "../../content/projects/payet-trading-interface/media/images/12-portal-blue-theme.svg";
import img13 from "../../content/projects/payet-trading-interface/media/images/13-dashboard-detail.jpg";
import img14 from "../../content/projects/payet-trading-interface/media/images/14-tablet-responsive.jpg";
import img15 from "../../content/projects/payet-trading-interface/media/images/15-mobile-responsive.jpg";

const imageMap: Record<string, string> = {
  "01-hero-payet-across-devices.png": img01,
  "02-user-personas.jpg": img02,
  "03-process-overview.jpg": img03,
  "04-design-system-framework.png": img04,
  "05-color-scheme-foundations.png": img05,
  "06-color-scheme-generator.svg": img06,
  "07-color-theming-output.svg": img07,
  "08-typography-system.jpg": img08,
  "09-grid-system-responsive.png": img09,
  "10-portal-green-theme.svg": img10,
  "11-portal-pink-theme.svg": img11,
  "12-portal-blue-theme.svg": img12,
  "13-dashboard-detail.jpg": img13,
  "14-tablet-responsive.jpg": img14,
  "15-mobile-responsive.jpg": img15,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function TradingCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
