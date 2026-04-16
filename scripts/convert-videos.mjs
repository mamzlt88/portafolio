#!/usr/bin/env node
// Convert .mov → .mp4 and re-encode .mp4 without audio using ffmpeg
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import { readdirSync } from "fs";
import { join, extname, basename } from "path";

ffmpeg.setFfmpegPath(ffmpegPath.path);

const videoDir = "src/content/projects/payet-payment-gateway/media/videos";
const files = readdirSync(videoDir);

function convert(input, output) {
  return new Promise((resolve, reject) => {
    console.log(`Converting: ${basename(input)} → ${basename(output)}`);
    ffmpeg(input)
      .noAudio()
      .videoCodec("libx264")
      .outputOptions([
        "-crf", "23",
        "-preset", "medium",
        "-movflags", "+faststart",
        "-pix_fmt", "yuv420p",
      ])
      .output(output)
      .on("end", () => { console.log(`  ✓ ${basename(output)}`); resolve(); })
      .on("error", (err) => { console.error(`  ✗ ${basename(output)}: ${err.message}`); reject(err); })
      .run();
  });
}

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const input = join(videoDir, file);

  if (ext === ".mov") {
    const output = join(videoDir, basename(file, ext) + ".mp4");
    await convert(input, output);
  } else if (ext === ".mp4") {
    const output = join(videoDir, basename(file, ext) + "-web.mp4");
    await convert(input, output);
  }
}

console.log("Done — all videos converted.");
