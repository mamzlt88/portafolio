// WhiteLabelCaseStudy.tsx — markdown-driven case study for the White-Label project
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/payet-payment-gateway/content.md?raw";

import img01 from "../../content/projects/payet-payment-gateway/media/images/01-hero-payet-across-devices.webp";
import img1 from "../../content/projects/payet-payment-gateway/media/images/1.webp";
import img2 from "../../content/projects/payet-payment-gateway/media/images/2.webp";
import img3 from "../../content/projects/payet-payment-gateway/media/images/3.webp";
import img4 from "../../content/projects/payet-payment-gateway/media/images/4.webp";
import imgDashboard from "../../content/projects/payet-payment-gateway/media/images/Dashboard.webp";
import imgAdmin from "../../content/projects/payet-payment-gateway/media/images/Admin.webp";
import imgLanding from "../../content/projects/payet-payment-gateway/media/images/Landing components.webp";
import imgStyleguide from "../../content/projects/payet-payment-gateway/media/images/Styleguide.webp";
import imgButtons from "../../content/projects/payet-payment-gateway/media/images/buttons.webp";
import imgComponents from "../../content/projects/payet-payment-gateway/media/images/components.webp";
import imgShapes from "../../content/projects/payet-payment-gateway/media/images/shapes.webp";
import imgMerchant01 from "../../content/projects/payet-payment-gateway/media/images/MErchant01.webp";
import imgMerchant02 from "../../content/projects/payet-payment-gateway/media/images/MErchant02.webp";
import imgMerchant03 from "../../content/projects/payet-payment-gateway/media/images/MErchant03.webp";
import imgMerchant04 from "../../content/projects/payet-payment-gateway/media/images/MErchant04.webp";
import imgMerchant05 from "../../content/projects/payet-payment-gateway/media/images/MErchant05.webp";
import imgMerchant06 from "../../content/projects/payet-payment-gateway/media/images/MErchant06.webp";
import imgCust01 from "../../content/projects/payet-payment-gateway/media/images/cust01.webp";
import imgCust02 from "../../content/projects/payet-payment-gateway/media/images/cust02.webp";
import imgCust03 from "../../content/projects/payet-payment-gateway/media/images/cust03.webp";
import imgCust04 from "../../content/projects/payet-payment-gateway/media/images/cust04.webp";
import imgScreenshot from "../../content/projects/payet-payment-gateway/media/images/screenshot-preview.webp";
import imgPlacement from "../../content/projects/payet-payment-gateway/media/images/Payet-placement.webp";
import imgPlacement2 from "../../content/projects/payet-payment-gateway/media/images/Pacement 2.webp";

import vidAudit from "../../content/projects/payet-payment-gateway/media/videos/Audit-web.mp4";
import vidColor from "../../content/projects/payet-payment-gateway/media/videos/Color scheme.mp4";
import vidUI from "../../content/projects/payet-payment-gateway/media/videos/UI color.mp4";

const imageMap: Record<string, string> = {
  "01-hero-payet-across-devices.webp": img01,
  "Payet-placement.webp": imgPlacement,
  "Pacement 2.webp": imgPlacement2,
  "1.webp": img1,
  "2.webp": img2,
  "3.webp": img3,
  "4.webp": img4,
  "Dashboard.webp": imgDashboard,
  "Admin.webp": imgAdmin,
  "Landing components.webp": imgLanding,
  "Styleguide.webp": imgStyleguide,
  "buttons.webp": imgButtons,
  "components.webp": imgComponents,
  "shapes.webp": imgShapes,
  "MErchant01.webp": imgMerchant01,
  "MErchant02.webp": imgMerchant02,
  "MErchant03.webp": imgMerchant03,
  "MErchant04.webp": imgMerchant04,
  "MErchant05.webp": imgMerchant05,
  "MErchant06.webp": imgMerchant06,
  "cust01.webp": imgCust01,
  "cust02.webp": imgCust02,
  "cust03.webp": imgCust03,
  "cust04.webp": imgCust04,
  "screenshot-preview.webp": imgScreenshot,
};

const videoMap: Record<string, string> = {
  "Audit-web.mp4": vidAudit,
  "Color scheme.mp4": vidColor,
  "UI color.mp4": vidUI,
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
