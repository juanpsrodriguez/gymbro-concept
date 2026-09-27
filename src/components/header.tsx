"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, navigation } from "@/config/business";
import { ArrowIcon } from "./icons";
import { MobileNavigation } from "./mobile-navigation";

export function Header({ logo }: { logo: ReactNode }) {
  const pathname = usePathname();

  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand-link" href="/" aria-label="Gymbro Club — início">{logo}</Link>
        <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => item.external ? <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" aria-label="Loja de roupas — abrir em nova aba">{item.label}</a> : <Link key={item.href} href={item.href} scroll aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
        <a className="header-contact" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a equipe no WhatsApp"><span className="header-contact-label">{business.cta.contact}</span> <ArrowIcon /></a>
      </div>
    </header>
    <MobileNavigation key={pathname} pathname={pathname} />
  </>;
}
