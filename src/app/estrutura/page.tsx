import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";
import { media } from "@/config/media";
import { structurePage, type StructureFigure } from "@/config/structure";
import { Photo } from "@/components/photo";
import { ArrowIcon } from "@/components/icons";
import { ContactBanner } from "@/components/contact-banner";
import { referenceAssetsEnabled } from "@/lib/assets";

export const metadata: Metadata = {
  title: `Estrutura • ${business.brandName}`,
  description: "Conheça os ambientes de musculação, cardio e aulas nas referências da Gymbro Club, em Serra Grande, Niterói. Projeto conceitual independente.",
};

function GalleryPhoto({ figure, priority = false, compact = false }: {
  figure: StructureFigure;
  priority?: boolean;
  compact?: boolean;
}) {
  const asset = media[figure.media];
  return (
    <figure className={`structure-figure${compact ? " structure-figure-compact" : ""}`}>
      <div className="structure-image" style={{ aspectRatio: `${asset.width} / ${asset.height}` }}>
        <Photo id={figure.media} className={figure.media === "strength" ? "photo-treatment-refined" : ""} priority={priority} sizes={compact ? "(max-width: 767px) 44vw, 23vw" : "(max-width: 639px) 90vw, 45vw"} />
      </div>
      <figcaption>
        <span>{figure.title}</span>
        <small><span>{figure.detail}</span><em>Google Maps · referência temporária</em></small>
      </figcaption>
    </figure>
  );
}

function TitleLines({ lines }: { lines: readonly string[] }) {
  return lines.map((line) => <span key={line}>{line}</span>);
}

export default function StructurePage() {
  const content = structurePage;
  return (
    <main id="conteudo" className="structure-page">
      <section className="structure-intro shell" aria-labelledby="structure-title">
        <div className="structure-intro-copy">
          <p className="eyebrow"><span className="status-dot" />{content.eyebrow}</p>
          <h1 id="structure-title"><TitleLines lines={content.title} /></h1>
          <p className="structure-lead">{content.introduction}</p>
          <p className="structure-location eyebrow">{business.shortLocation}</p>
          <nav className="structure-jump-links" aria-label={content.navigationLabel}>
            {content.navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>{item.label}<ArrowIcon /></a>
            ))}
          </nav>
        </div>
        <GalleryPhoto figure={content.opening} priority />
      </section>

      <section id="musculacao" className="structure-strength shell" aria-labelledby="strength-title">
        <div className="structure-section-label eyebrow"><span>01</span>{content.strength.eyebrow}</div>
        <div className="structure-strength-grid">
          <GalleryPhoto figure={content.strength.feature} priority />
          <div className="structure-strength-details">
            <div className="structure-section-copy">
              <h2 id="strength-title"><TitleLines lines={content.strength.title} /></h2>
              <p>{content.strength.description}</p>
            </div>
            <div className="structure-detail-pair">
              {content.strength.details.map((figure) => <GalleryPhoto key={figure.media} figure={figure} compact />)}
            </div>
            <p className="structure-small-copy">{content.strength.detail}</p>
          </div>
        </div>
      </section>

      <section id="cardio" className="structure-cardio" aria-labelledby="cardio-title">
        <div className="shell">
          <div className="structure-section-label eyebrow"><span>02</span>{content.cardio.eyebrow}</div>
          <div className="structure-wide-heading structure-section-copy">
            <h2 id="cardio-title"><TitleLines lines={content.cardio.title} /></h2>
            <p>{content.cardio.description}</p>
          </div>
          <div className="structure-cardio-pair">
            {content.cardio.figures.map((figure) => <GalleryPhoto key={figure.media} figure={figure} />)}
          </div>
        </div>
      </section>

      <section id="aulas" className="structure-classes shell" aria-labelledby="classes-title">
        <div className="structure-section-label eyebrow"><span>03</span>{content.classes.eyebrow}</div>
        <div className="structure-classes-grid">
          <div className="structure-section-copy structure-classes-copy">
            <h2 id="classes-title"><TitleLines lines={content.classes.title} /></h2>
            <p>{content.classes.description}</p>
            <Link href="/grade" className="button button-blue">Ver grade completa<ArrowIcon /></Link>
            <p className="structure-availability">{content.classes.availability}</p>
          </div>
          <GalleryPhoto figure={content.classes.figure} />
        </div>
        {referenceAssetsEnabled() && <p className="structure-reference-note">{content.referenceNote}</p>}
      </section>
      <ContactBanner compact />
    </main>
  );
}
