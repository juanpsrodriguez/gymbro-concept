import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import { media, type MediaId } from "@/config/media";
import { business } from "@/config/business";

export function referenceAssetsEnabled() {
  return business.conceptMode && process.env.LOCAL_REFERENCE_ASSETS === "1";
}

export function assetSource(id: MediaId) {
  const asset = media[id];
  if (asset.authorizedSrc) return asset.authorizedSrc;
  if (referenceAssetsEnabled() && existsSync(path.join(process.cwd(), ".local", "assets", asset.localFile))) {
    return `/api/reference/${id}`;
  }
  return null;
}
