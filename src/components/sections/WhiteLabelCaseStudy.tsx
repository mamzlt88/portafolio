// WhiteLabelCaseStudy.tsx — markdown-driven case study for the White-Label project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/payet-payment-gateway/content.md?raw";

const base = "../../content/projects/payet-payment-gateway/media/images/";
const imageMap: Record<string, string> = {
  "01-hero-payet-across-devices.png": new URL(`${base}01-hero-payet-across-devices.png`, import.meta.url).href,
  "02-user-personas.jpg": new URL(`${base}02-user-personas.jpg`, import.meta.url).href,
  "03-process-overview.jpg": new URL(`${base}03-process-overview.jpg`, import.meta.url).href,
  "04-design-system-framework.png": new URL(`${base}04-design-system-framework.png`, import.meta.url).href,
  "05-color-scheme-foundations.png": new URL(`${base}05-color-scheme-foundations.png`, import.meta.url).href,
  "06-color-scheme-generator.svg": new URL(`${base}06-color-scheme-generator.svg`, import.meta.url).href,
  "07-color-theming-output.svg": new URL(`${base}07-color-theming-output.svg`, import.meta.url).href,
  "08-typography-system.jpg": new URL(`${base}08-typography-system.jpg`, import.meta.url).href,
  "09-grid-system-responsive.png": new URL(`${base}09-grid-system-responsive.png`, import.meta.url).href,
  "10-portal-green-theme.svg": new URL(`${base}10-portal-green-theme.svg`, import.meta.url).href,
  "11-portal-pink-theme.svg": new URL(`${base}11-portal-pink-theme.svg`, import.meta.url).href,
  "12-portal-blue-theme.svg": new URL(`${base}12-portal-blue-theme.svg`, import.meta.url).href,
  "13-dashboard-detail.jpg": new URL(`${base}13-dashboard-detail.jpg`, import.meta.url).href,
  "14-tablet-responsive.jpg": new URL(`${base}14-tablet-responsive.jpg`, import.meta.url).href,
  "15-mobile-responsive.jpg": new URL(`${base}15-mobile-responsive.jpg`, import.meta.url).href,
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
