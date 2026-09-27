import type { Metadata } from "next";
import { business } from "@/config/business";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/photo";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "./globals.css";
import "./practical.css";
import "./structure.css";

export const metadata: Metadata = {
  title: "Gymbro Club — Musculação e aulas em Serra Grande",
  description: "Conheça o conceito de site para a Gymbro Club, em Serra Grande, Niterói/RJ. Explore o espaço e converse com a equipe sobre modalidades e planos.",
  robots: business.conceptMode ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: { title: "Gymbro Club • Serra Grande, Niterói", description: "O espaço, o treino, a atmosfera. Projeto conceitual independente e não oficial.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html
  lang="pt-BR"
  data-scroll-behavior="smooth"
  suppressHydrationWarning
><body><RouteScrollReset /><Header logo={<Logo />} />{children}<Footer /></body></html>;
}
