import Link from "next/link";
import { business, navigation } from "@/config/business";
import { Logo } from "./photo";
import { ArrowIcon } from "./icons";
import { ScrollExperience } from "./scroll-experience";

export function Footer() {
  return <footer className="site-footer shell">
    <div className="footer-top"><Link href="/" aria-label="Gymbro Club — início"><Logo /></Link><p>{business.shortLocation}<br /><a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">{business.whatsappDisplay}</a></p><a className="text-link" href={business.instagramUrl} target="_blank" rel="noopener noreferrer">{business.instagramHandle} <ArrowIcon /></a><a href="#conteudo" className="back-top" aria-label="Voltar ao topo da página"><ArrowIcon /></a></div>
    <nav className="footer-nav" aria-label="Navegação do rodapé">{navigation.map(item => item.external ? <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label="Loja de roupas — abrir em nova aba">{item.label}</a> : <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <div className="footer-bottom"><p>{business.conceptMode ? business.attribution : business.brandName}</p><ScrollExperience /></div>
  </footer>;
}
