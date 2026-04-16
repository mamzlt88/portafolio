#!/usr/bin/env node
// Batch convert PNG/JPG to WebP at 80% quality using sharp
import { execSync } from "child_process";
import { readdirSync } from "fs";
import { join, extname, basename } from "path";

const imgDir = "src/content/projects/payet-payment-gateway/media/images";
const files = readdirSync(imgDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const input = join(imgDir, file);
  const output = join(imgDir, basename(file, extname(file)) + ".webp");
  console.log(`Converting: ${file} → ${basename(output)}`);
  execSync(`npx sharp-cli -i "${input}" -o "${output}" --format webp --quality 80`, {
    stdio: "inherit",
  });
}

console.log("Done — all images converted to WebP.");
