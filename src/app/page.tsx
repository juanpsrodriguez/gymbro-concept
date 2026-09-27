import Link from "next/link";
import type { CSSProperties } from "react";
import { business } from "@/config/business";
import { media } from "@/config/media";
import { referenceAssetsEnabled } from "@/lib/assets";
import { Photo } from "@/components/photo";
import { ArrowIcon, PinIcon } from "@/components/icons";
import { ContactBanner } from "@/components/contact-banner";

const spaces = [
  { id: "strength", number: "01", title: "A base é o treino.", category: "MUSCULAÇÃO", detail: "Máquinas, pesos livres e espaço para a sua rotina." },
  { id: "cardio", number: "02", title: "Encontre seu ritmo.", category: "CARDIO", detail: "Esteiras e equipamentos em meio à luz do salão." },
  { id: "studio", number: "03", title: "O movimento se encontra.", category: "SALA DE AULAS", detail: "Piso emborrachado, espelhos e espaço para se movimentar." },
] as const;

export default function Home() {
  const references = referenceAssetsEnabled();

  return <>
    <main id="conteudo">
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-photo"><Photo id="studioHero" className="photo-treatment-blur-hero" priority sizes="(max-width: 767px) 100vw, 65vw" /><div className="hero-photo-shade" /></div>
        <div className="shell hero-content">
          <div className="hero-topline"><span className="eyebrow"><span className="status-dot" /> {business.shortLocation}</span><span className="eyebrow hero-top-note">MUSCULAÇÃO & AULAS</span></div>
          <h1 id="hero-title"><span className="hero-line"><span>SEU TREINO.</span></span><span className="hero-line hero-outline"><span>OUTRA</span></span><span className="hero-line"><span>ATMOSFERA.</span></span></h1>
          <div className="hero-bottom">
            <div className="hero-intro"><p>A estrutura, a luz, o movimento.<br />Conheça o espaço da Gymbro Club.</p><div className="hero-actions"><Link href="/estrutura" className="button button-blue">{business.cta.structure} <ArrowIcon /></Link><Link href="/planos" className="text-link">{business.cta.viewPlans} <ArrowIcon /></Link></div></div>
            <a href="#estrutura" className="hero-scroll" aria-label="Role para conhecer o espaço"><span>ENTRE NO<br />RITMO DO ESPAÇO</span><span className="round-arrow"><ArrowIcon /></span></a>
          </div>
        </div>
        <div className="hero-caption shell"><span>GYMBRO CLUB — NITERÓI, RJ</span><span>{references ? "ESTUDO VISUAL / IMAGEM DE REFERÊNCIA" : "O ESPAÇO EM PRIMEIRO PLANO"}</span></div>
      </section>

      <div className="rhythm-band" aria-hidden="true"><div>FORÇA <span>×</span> RITMO <span>×</span> MOVIMENTO <span>×</span> GYMBRO CLUB <span>×</span> FORÇA <span>×</span> RITMO <span>×</span> MOVIMENTO</div></div>

      <section className="space-section shell" id="estrutura" aria-labelledby="space-title">
        <div className="section-topline"><p className="eyebrow"><span className="section-index">01 /</span> O ESPAÇO</p><span className="eyebrow">CADA DETALHE FAZ PARTE.</span></div>
        <div className="space-heading"><h2 id="space-title">POR DENTRO<br />DA GYMBRO<span className="blue-period">.</span></h2><p>Ferro, luz e movimento.<br />Um olhar sobre os ambientes<br />que dão forma ao clube.</p></div>
        <div className="space-stage">
          <div className="space-copy">
            <p className="eyebrow space-small-label">EXPLORE A ESTRUTURA</p>
            <div className="space-index">{spaces.map((space, index) => <div className={`space-step ${index === 0 ? "is-active" : ""}`} key={space.id} data-step={index}><span>{space.number}</span><div><h3>{space.category}</h3><p>{space.detail}</p></div><ArrowIcon /></div>)}</div>
            <p className="space-footnote">O espaço merece um olhar mais de perto.<br /><Link className="text-link" href="/estrutura">{business.cta.structure} <ArrowIcon /></Link></p>
          </div>
          <div className="space-panels">{spaces.map((space, index) => <figure className="space-panel" data-panel={index} key={space.id}>
            <div className={`space-frame space-frame-${space.id}`} style={{ "--photo-ratio": `${media[space.id].width} / ${media[space.id].height}` } as CSSProperties}><Photo id={space.id} className={space.id === "strength" ? "photo-treatment-refined" : ""} sizes="(max-width: 599px) 90vw, (max-width: 899px) 30vw, 40vw" /><span className="photo-index" aria-hidden="true">{space.number}</span></div>
            <figcaption><span>{space.title}</span><span>{references ? "REGISTRO DE REFERÊNCIA" : space.category}</span></figcaption>
          </figure>)}</div>
        </div>
        {references && <p className="reference-note">Referências temporárias do Google Maps e do material fornecido para estudo do espaço. Substituição por fotografia autorizada pendente.</p>}
      </section>

      <section className="modalities-section" id="modalidades" aria-labelledby="modalities-title">
        <div className="shell">
          <div className="section-topline"><p className="eyebrow"><span className="section-index">02 /</span> MODALIDADES</p><span className="eyebrow">QUAL É O SEU MOVIMENTO?</span></div>
          <div className="modalities-intro"><h2 id="modalities-title">CADA TREINO,<br />UM RITMO.</h2><p>Na sala de musculação ou nas aulas.<br />Converse com a equipe e encontre<br />o que cabe na sua rotina.</p></div>
          <div className="modality-list">
            {business.modalityGroups.map((group, index) => <Link className="modality-row" key={group.id} href={group.target === "contact" ? "/estrutura" : "/grade"}><span className="modality-number">0{index + 1}</span><h3>{group.title}</h3><p>{group.description}</p><span className="modality-action">{group.target === "contact" ? "Conhecer" : "Consultar aulas"} <ArrowIcon /></span></Link>)}
          </div>
          <p className="modalities-note">Modalidades citadas no material de referência. Consulte a equipe sobre a oferta atual.</p>
        </div>
      </section>

      <section className="schedule-preview" aria-labelledby="schedule-preview-title"><div className="shell schedule-preview-inner">
        <div><p className="eyebrow"><span className="section-index">03 /</span> GRADE DE AULAS</p><h2 id="schedule-preview-title">SEU RITMO.<br />SUA SEMANA.</h2></div>
        <div><p>Encontre um espaço para o movimento.<br />Explore a grade e confirme com a equipe<br />as aulas e os horários atuais.</p><Link href="/grade" className="button button-blue">{business.cta.fullSchedule} <ArrowIcon /></Link></div>
      </div></section>

      <section className="plans-section shell" id="planos" aria-labelledby="plans-title">
        <div><p className="eyebrow"><span className="section-index">04 /</span> PLANOS</p><h2 id="plans-title">O PRÓXIMO PASSO<br />É UMA CONVERSA.</h2></div>
        <div className="plans-details"><p>Conte como você quer treinar.<br />A equipe explica os planos,<br />os horários e as condições atuais.</p><Link className="button button-light" href="/planos">{business.cta.viewPlans} <ArrowIcon /></Link><span className="eyebrow">DIRETO COM A GYMBRO.</span></div>
      </section>

      <section className="atmosphere-section" aria-labelledby="atmosphere-title">
        <div className="atmosphere-image"><Photo id="studioHero" className="photo-treatment-blur-section" sizes="100vw" /><div className="atmosphere-shade" /></div>
        <div className="atmosphere-light" aria-hidden="true" />
        <div className="shell atmosphere-content"><p className="eyebrow"><span className="status-dot" /> A LUZ MUDA. O ESPAÇO GANHA OUTRO RITMO.</p><h2 id="atmosphere-title">SINTA A<br /><span>ATMOSFERA.</span></h2><div className="atmosphere-bottom"><p>Teto aparente. Espelhos. Luz azul.<br />A identidade do clube está no próprio espaço.</p><a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-link">Veja a Gymbro no Instagram <ArrowIcon /></a></div></div>
        <div className="atmosphere-coordinate" aria-hidden="true">GYMBRO / SERRA GRANDE</div>
      </section>

      <section className="location-section shell" id="localizacao" aria-labelledby="location-title">
        <div className="section-topline"><p className="eyebrow"><span className="section-index">05 /</span> ENCONTRE A GYMBRO</p><PinIcon /></div>
        <div className="location-grid"><div><h2 id="location-title">É AQUI.<br />SERRA GRANDE.</h2><p className="location-city">NITERÓI / RIO DE JANEIRO</p></div><div className="location-details"><p className="location-address">{business.fullAddress}</p><div className="location-links"><a className="text-link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <ArrowIcon /></a><a className="text-link subdued-link" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowIcon /></a></div><p className="location-help">Horário de funcionamento: consulte a equipe.</p></div></div>
        <div className="location-map-shell">
          <Photo id="locationMap" sizes="(max-width: 767px) 100vw, 1280px" />
          <div className="location-map-shade" aria-hidden="true" />
          <div className="location-map-caption"><span>MAPA DA REGIÃO</span><strong>GYMBRO CLUB · SERRA GRANDE</strong></div>
        </div>
      </section>

      <ContactBanner compact />
    </main>
  </>;
}
