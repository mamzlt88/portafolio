// ColorfitCaseStudy.tsx — markdown-driven case study for the Colorfit brand rebrand
import MarkdownCaseStudy from "./MarkdownCaseStudy";
import rawContent from "../../content/projects/colorfit-brand/content.md?raw";

import imgImage from "../../content/projects/colorfit-brand/media/images/image.webp";
import imgImage2 from "../../content/projects/colorfit-brand/media/images/image 2.webp";
import imgLogo1 from "../../content/projects/colorfit-brand/media/images/logo 1.webp";
import imgLogo2 from "../../content/projects/colorfit-brand/media/images/logo2.webp";
import imgLogo3 from "../../content/projects/colorfit-brand/media/images/logo3.webp";
import imgLogoColor from "../../content/projects/colorfit-brand/media/images/logo color.webp";
import imgColor from "../../content/projects/colorfit-brand/media/images/color.webp";
import imgTypography from "../../content/projects/colorfit-brand/media/images/typogrpahy.webp";
import imgBrandBook from "../../content/projects/colorfit-brand/media/images/BRand book.webp";
import imgImageBrand from "../../content/projects/colorfit-brand/media/images/Image brand.webp";
import imgBuckets from "../../content/projects/colorfit-brand/media/images/buckets.webp";
import imgBucket2 from "../../content/projects/colorfit-brand/media/images/bucket2.webp";
import imgPOP from "../../content/projects/colorfit-brand/media/images/POP brand.webp";

const imageMap: Record<string, string> = {
  "image.webp": imgImage,
  "image 2.webp": imgImage2,
  "logo 1.webp": imgLogo1,
  "logo2.webp": imgLogo2,
  "logo3.webp": imgLogo3,
  "logo color.webp": imgLogoColor,
  "color.webp": imgColor,
  "typogrpahy.webp": imgTypography,
  "BRand book.webp": imgBrandBook,
  "Image brand.webp": imgImageBrand,
  "buckets.webp": imgBuckets,
  "bucket2.webp": imgBucket2,
  "POP brand.webp": imgPOP,
};

function resolveImage(filename: string): string | undefined {
  return imageMap[filename];
}

export default function ColorfitCaseStudy({ onClose }: { onClose: () => void }) {
  return (
    <MarkdownCaseStudy
      rawMarkdown={rawContent}
      resolveImage={resolveImage}
      onClose={onClose}
    />
  );
}
