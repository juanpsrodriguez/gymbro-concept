"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business, navigation } from "@/config/business";
import { ArrowIcon } from "./icons";

export function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    const previousRootOverflow = root.style.overflow;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return <>
    <button
      type="button"
      className="menu-toggle"
      onClick={() => setOpen((current) => !current)}
      aria-label={open ? "Fechar menu de navegação" : "Abrir menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>

    {open && <div
      id="mobile-menu"
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="menu-top"><span>GYMBRO CLUB</span></div>
      <nav aria-label="Navegação móvel">
        {navigation.map((item, index) => item.external ? (
          <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} aria-label="Loja de roupas — abrir em nova aba">
            <small>0{index + 1}</small>{item.label}<ArrowIcon />
          </a>
        ) : (
          <Link key={item.href} href={item.href} scroll onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
            <small>0{index + 1}</small>{item.label}<ArrowIcon />
          </Link>
        ))}
      </nav>
      <a className="button button-blue" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{business.cta.contact} <ArrowIcon /></a>
      <p>{business.shortLocation}</p>
    </div>}
  </>;
}
