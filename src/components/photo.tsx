import Image from "next/image";
import { media, type MediaId } from "@/config/media";
import { assetSource } from "@/lib/assets";

export function Photo({ id, className = "", priority = false, sizes = "(max-width: 767px) 100vw, 60vw" }: {
  id: MediaId; className?: string; priority?: boolean; sizes?: string;
}) {
  const source = assetSource(id);
  // A distinct hero URL keeps Next's development LCP check from treating this
  // eager image as the repeated lazy studio image farther down the page.
  const src = priority && source?.startsWith("/api/reference/") ? `${source}?placement=hero` : source;
  return src ? (
    <Image src={src} alt={media[id].alt} fill sizes={sizes} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} unoptimized={src.startsWith("/api/reference/")} className={className} />
  ) : (
    <div className={`photo-placeholder ${className}`} role="img" aria-label="Espaço reservado para fotografia autorizada da Gymbro Club">
      <span>GYMBRO<span>CLUB</span></span>
      <small>O espaço em primeiro plano.</small>
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  const src = assetSource("mark");
  return <span className={`brand-lockup ${className}`} aria-label="Gymbro Club">
    {src ? <Image src={src} alt="" width={590} height={340} sizes="52px" className="brand-mark" unoptimized={src.startsWith("/api/reference/")} /> : <span className="brand-symbol" aria-hidden="true">G</span>}
    <span className="brand-words" aria-hidden="true"><b>GYMBRO</b><small>CLUB</small></span>
  </span>;
}
