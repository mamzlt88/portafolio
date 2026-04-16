// WhiteLabelCaseStudy.tsx — markdown-driven case study for the White-Label project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/payet-payment-gateway/content.md?raw";

const imgBase = "../../content/projects/payet-payment-gateway/media/images/";
const imageMap: Record<string, string> = {
  "01-hero-payet-across-devices.webp": new URL(`${imgBase}01-hero-payet-across-devices.webp`, import.meta.url).href,
  "1.webp": new URL(`${imgBase}1.webp`, import.meta.url).href,
  "2.webp": new URL(`${imgBase}2.webp`, import.meta.url).href,
  "3.webp": new URL(`${imgBase}3.webp`, import.meta.url).href,
  "4.webp": new URL(`${imgBase}4.webp`, import.meta.url).href,
  "Dashboard.webp": new URL(`${imgBase}Dashboard.webp`, import.meta.url).href,
  "Admin.webp": new URL(`${imgBase}Admin.webp`, import.meta.url).href,
  "Landing components.webp": new URL(`${imgBase}Landing components.webp`, import.meta.url).href,
  "Styleguide.webp": new URL(`${imgBase}Styleguide.webp`, import.meta.url).href,
  "buttons.webp": new URL(`${imgBase}buttons.webp`, import.meta.url).href,
  "components.webp": new URL(`${imgBase}components.webp`, import.meta.url).href,
  "shapes.webp": new URL(`${imgBase}shapes.webp`, import.meta.url).href,
  "MErchant01.webp": new URL(`${imgBase}MErchant01.webp`, import.meta.url).href,
  "MErchant02.webp": new URL(`${imgBase}MErchant02.webp`, import.meta.url).href,
  "MErchant03.webp": new URL(`${imgBase}MErchant03.webp`, import.meta.url).href,
  "MErchant04.webp": new URL(`${imgBase}MErchant04.webp`, import.meta.url).href,
  "MErchant05.webp": new URL(`${imgBase}MErchant05.webp`, import.meta.url).href,
  "MErchant06.webp": new URL(`${imgBase}MErchant06.webp`, import.meta.url).href,
  "cust01.webp": new URL(`${imgBase}cust01.webp`, import.meta.url).href,
  "cust02.webp": new URL(`${imgBase}cust02.webp`, import.meta.url).href,
  "cust03.webp": new URL(`${imgBase}cust03.webp`, import.meta.url).href,
  "cust04.webp": new URL(`${imgBase}cust04.webp`, import.meta.url).href,
  "Screenshot 2026-04-15 at 1.14.15 PM.webp": new URL(`${imgBase}Screenshot 2026-04-15 at 1.14.15 PM.webp`, import.meta.url).href,
};

const vidBase = "../../content/projects/payet-payment-gateway/media/videos/";
const videoMap: Record<string, string> = {
  "Audit-web.mp4": new URL(`${vidBase}Audit-web.mp4`, import.meta.url).href,
  "Color scheme.mp4": new URL(`${vidBase}Color scheme.mp4`, import.meta.url).href,
  "UI color.mp4": new URL(`${vidBase}UI color.mp4`, import.meta.url).href,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

function resolveVideo(filename: string): string | undefined {
  return videoMap[filename];
}

export default function WhiteLabelCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      resolveVideo={resolveVideo}
      onClose={onClose}
    />
  );
}
