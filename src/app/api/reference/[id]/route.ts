import { readFile } from "node:fs/promises";
import path from "node:path";
import { media, type MediaId } from "@/config/media";
import { referenceAssetsEnabled } from "@/lib/assets";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!referenceAssetsEnabled() || !Object.hasOwn(media, id)) {
    return new Response("Imagem indisponível.", { status: 404 });
  }
  try {
    const bytes = await readFile(path.join(process.cwd(), ".local", "assets", media[id as MediaId].localFile));
    return new Response(bytes, {
      headers: { "Content-Type": "image/webp", "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow" },
    });
  } catch {
    return new Response("Imagem indisponível.", { status: 404 });
  }
}
