import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import path from "node:path";

const source = path.join(process.cwd(), "gymbro_reference_pack");
const output = path.join(process.cwd(), ".local", "assets");
await access(source).catch(() => { throw new Error("Restore the original local gymbro_reference_pack first. See ASSET_INVENTORY.md."); });
await mkdir(output, { recursive: true });

// Local layout study only. No generated content, retouching, recoloring or watermark removal.
// Studio: trim screenshot chrome, no brand/watermark is present in this region.
await sharp(path.join(source, "03_group-class-studio-blue-light.png"))
  .extract({ left: 8, top: 3, width: 442, height: 445 }).webp({ quality: 88 }).toFile(path.join(output, "studio.webp"));
// Deterministic high-resolution hero derivative: same pixels/composition,
// Lanczos upscale plus restrained sharpening. No synthesis or generative fill.
await sharp(path.join(source, "03_group-class-studio-blue-light.png"))
  .extract({ left: 8, top: 3, width: 442, height: 445 })
  .resize(1326, 1335, { kernel: "lanczos3" }).sharpen({ sigma: 0.7 })
  .webp({ quality: 92 }).toFile(path.join(output, "studio-hero.webp"));
// User-authorized AI restoration for the full-bleed hero/atmosphere only.
// Keep the original and deterministic derivative above for comparison/reversion.
await sharp(path.join(source, "03_group-class-studio-hero-ai.png"))
  .webp({ quality: 92 }).toFile(path.join(output, "studio-hero-ai.webp"));
// Preserve the complete Gymbro mark exactly. No tracing or SVG reconstruction.
// Source Google Maps UI is outside this logo rectangle; lineage retained in inventory.
await sharp(path.join(source, "09_gymbro-logo.png"))
  .extract({ left: 183, top: 116, width: 930, height: 744 }).webp({ lossless: true }).toFile(path.join(output, "logo.webp"));
// Exact raster symbol crop used by the conceptual header lockup. It excludes
// screenshot overlays without tracing or altering the supplied mark.
await sharp(path.join(source, "09_gymbro-logo.png"))
  .extract({ left: 333, top: 116, width: 590, height: 340 })
  .webp({ lossless: true }).toFile(path.join(output, "mark.webp"));
// User-supplied regional map, cleaned with a tightly constrained generative
// edit: preserve the Gymbro pin and road layout while removing unrelated POIs.
// Original and edited sources remain together in the ignored reference pack.
await sharp(path.join(source, "15_location-map-clean-ai.png"))
  .sharpen({ sigma: 0.35 }).webp({ quality: 90 })
  .toFile(path.join(output, "location-map.webp"));
// Remove outer screenshot sidebars and the bottom navigation-control strip.
// The photographic scene and people remain untouched; source provenance is
// disclosed beside every rendered frame and documented in ASSET_INVENTORY.md.
// Source photographs share a 688px-wide frame; offsets were inspected individually.
// Keep these exact crops documented in ASSET_INVENTORY.md when changing a source.
for (const [file, name, left, photoHeight] of [
  ["07_weight-floor-wide-view.png", "weights", 46, 790],
  ["08_weight-floor-machines.png", "cables", 16, 800],
  ["10_weight-floor-linear-lights.png", "machines", 34, 810],
  ["11_spinning-room-rgb-lighting.png", "spinning", 26, 800],
  ["12_strength-area-blue-red-lighting.png", "strength", 11, 800],
  ["13_treadmills-cardio-area.png", "cardio", 31, 800],
  ["14_cardio-and-machine-floor.png", "floor", 27, 770],
]) {
  const input = path.join(source, file);
  await sharp(input).extract({ left, top: 0, width: 688, height: photoHeight })
    .sharpen({ sigma: 0.45 }).webp({ quality: 90 }).toFile(path.join(output, `${name}.webp`));
}
console.log("Prepared 13 temporary local references in .local/assets. Not authorized for commercial publication.");
