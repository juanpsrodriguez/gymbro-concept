import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";
import { plansContent } from "@/config/plans";
import { promotion } from "@/config/research";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { ContactBanner } from "@/components/contact-banner";

export const metadata: Metadata = {
  title: `Planos e condições — ${business.brandName}`,
  description:
    "Converse com a equipe da Gymbro Club sobre planos, valores atuais, modalidades e condições para treinar em Serra Grande, Niterói/RJ.",
};

export default function PlanosPage() {
  const showPromotion = promotion.verified && promotion.visible;

  return (
    <main id="conteudo" className="practical-page plans-page">
      <nav className="practical-breadcrumbs shell" aria-label="Navegação estrutural">
        <Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Planos</span>
      </nav>

      <section className="plans-route-intro shell" aria-labelledby="plans-title">
        <div>
          <p className="eyebrow">{plansContent.eyebrow}</p>
          <h1 id="plans-title">{plansContent.title[0]}<br /><span>{plansContent.title[1]}</span></h1>
        </div>
        <div className="plans-route-contact">
          <span className="plans-route-symbol" aria-hidden="true">↗</span>
          <p>{plansContent.introduction}</p>
          <a className="button button-blue" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
            {business.cta.plans}<WhatsAppIcon />
            <span className="practical-sr-only"> pelo WhatsApp (abre em nova aba)</span>
          </a>
          <span className="plans-route-caption">{plansContent.contactCaption}</span>
        </div>
      </section>

      {showPromotion && (
        <section className="verified-promotion shell" aria-labelledby="promotion-title">
          <div className="verified-promotion-inner">
            <div>
              <p className="eyebrow">Condições confirmadas</p>
              <h2 id="promotion-title">{promotion.description}</h2>
              <p className="verified-promotion-value">{new Intl.NumberFormat("pt-BR", { style: "currency", currency: promotion.currency }).format(promotion.value)}</p>
            </div>
            <div>
              <ul>{promotion.conditions.map((condition) => <li key={condition}>{condition}</li>)}</ul>
              <a className="text-link" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {business.cta.conditions}<ArrowIcon />
                <span className="practical-sr-only"> pelo WhatsApp (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="plans-conversation shell" aria-labelledby="conversation-title">
        <div className="plans-conversation-heading">
          <p className="eyebrow">{plansContent.conversationEyebrow}</p>
          <h2 id="conversation-title">{plansContent.conversationTitle}</h2>
        </div>
        <ol className="plans-conversation-list">
          {plansContent.conversationTopics.map((topic, index) => (
            <li key={topic.id}>
              <span className="plans-topic-index" aria-hidden="true">0{index + 1}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="practical-crosslinks shell">
        <p>{plansContent.exploreLabel}</p>
        <div>
          <Link href="/estrutura" className="text-link">{business.cta.structure}<ArrowIcon /></Link>
          <Link href="/grade" className="text-link">{business.cta.fullSchedule}<ArrowIcon /></Link>
        </div>
      </div>
      <ContactBanner compact />
    </main>
  );
}
