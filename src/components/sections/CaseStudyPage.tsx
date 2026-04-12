// CaseStudyPage.tsx — Trading Automation case study using CaseStudyLayout
import CaseStudyLayout from "./CaseStudyLayout";
import type { GalleryItem } from "./CaseStudyLayout";

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

const GALLERY_ITEMS: GalleryItem[] = [
  { label: "Hero — Payet across devices", imageSrc: img01 },
  { label: "User Personas", imageSrc: img02 },
  { label: "Process Overview", imageSrc: img03 },
  { label: "Design System Framework", imageSrc: img04 },
  { label: "Color Scheme Foundations", imageSrc: img05 },
  { label: "Color Scheme Generator", imageSrc: img06 },
  { label: "Color Theming Output", imageSrc: img07 },
  { label: "Typography System", imageSrc: img08 },
  { label: "Grid System Responsive", imageSrc: img09 },
  { label: "Portal Green Theme", imageSrc: img10 },
  { label: "Portal Pink Theme", imageSrc: img11 },
  { label: "Portal Blue Theme", imageSrc: img12 },
  { label: "Dashboard Detail", imageSrc: img13 },
  { label: "Tablet Responsive", imageSrc: img14 },
  { label: "Mobile Responsive", imageSrc: img15 },
];

export default function CaseStudyPage({ onClose }: { onClose: () => void }) {
  return (
    <CaseStudyLayout
      title={[
        { text: "Trading", style: "bold" },
        { text: "Automation", style: "italic" },
        { text: "Interface", style: "normal" },
        { text: "Redesign", style: "semibold-italic" },
      ]}
      metadata={[
        { label: "Role", value: "Lead Product Designer" },
        { label: "Timeline", value: "6 months" },
        { label: "Team", value: "3 designers, 8 engineers" },
        { label: "Platform", value: "Web (SaaS)" },
      ]}
      sections={[
        {
          label: "Intro",
          content: "A complete redesign of the Payet trading automation platform, focusing on usability, design system scalability, and responsive multi-device support.",
        },
        {
          label: "Process",
          heading: "Design Process",
          content: "Research-driven approach including user personas, journey mapping, and iterative prototyping with stakeholder feedback loops.",
        },
        {
          label: "System",
          heading: "Design System",
          content: "Built a comprehensive design system with dynamic color theming, typography scale, responsive grid system, and reusable component library.",
        },
      ]}
      galleryItems={GALLERY_ITEMS}
      colorScheme="dark"
      onClose={onClose}
    />
  );
}
