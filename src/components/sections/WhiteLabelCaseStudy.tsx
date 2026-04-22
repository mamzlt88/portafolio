// WhiteLabelCaseStudy.tsx — scroll-driven image sequence case study
import ScrollDrivenCaseStudy from "./ScrollDrivenCaseStudy";

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

const IMAGES = [
  img01,
  img1,
  img2,
  img3,
  img4,
  imgDashboard,
  imgAdmin,
  imgLanding,
  imgStyleguide,
  imgButtons,
  imgComponents,
  imgShapes,
];

const METADATA = [
  { label: "Role",     value: "Lead Product Designer / Consultant" },
  { label: "Timeline", value: "3-Year Partnership" },
  { label: "Team",     value: "PM, Developers, Design, QA" },
];

const SECTIONS = [
  {
    title: "Overview",
    body: "Payet is a white-label payment gateway serving financial, automotive, and healthcare institutions. Each portal had grown independently — inconsistent patterns created friction for users and slowed development across a platform processing billions in transactions.",
  },
  {
    title: "Approach",
    body: "A custom design system unified all portals under shared structure. Working alongside developers across a 3-year partnership, the redesign standardized components, improved accessibility (WCAG AA), and enabled brand customization at scale across 180+ merchants.",
  },
  {
    title: "Outcomes",
    body: "+30% merchant engagement · +4% recurring customer transactions · −40% design-to-development time · Annual payment volume grew from $7.45B (2018) to $15.2B (2020).",
  },
];

export default function WhiteLabelCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <ScrollDrivenCaseStudy
      images={IMAGES}
      projectTitle="White-Label Payment Gateway"
      year="2024"
      metadata={METADATA}
      sections={SECTIONS}
      onClose={onClose}
    />
  );
}
