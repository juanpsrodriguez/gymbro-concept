import { business } from "@/config/business";
import { ArrowIcon, WhatsAppIcon } from "./icons";

export function ContactBanner({ compact = false }: { compact?: boolean }) {
  return <section className={`contact-section${compact ? " contact-compact" : ""}`} aria-labelledby="contact-title"><div className="shell">
    <div className="contact-top"><p className="eyebrow">GYMBRO CLUB / VAMOS CONVERSAR?</p><WhatsAppIcon /></div>
    <a className="contact-link" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
      <h2 id="contact-title">BORA<br />TREINAR?</h2><span className="contact-arrow"><ArrowIcon /></span>
      <span className="contact-label">FALAR COM A EQUIPE NO WHATSAPP <ArrowIcon /></span>
    </a>
  </div></section>;
}
