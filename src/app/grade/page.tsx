import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";
import { ArrowIcon } from "@/components/icons";
import { Schedule } from "@/components/schedule";
import { ContactBanner } from "@/components/contact-banner";

export const metadata: Metadata = {
  title: `Grade de aulas — ${business.brandName}`,
  description:
    "Explore a grade de aulas do conceito Gymbro Club e consulte a equipe sobre a programação atual em Serra Grande, Niterói/RJ.",
};

export default function GradePage() {
  const showIllustrative = business.conceptMode && process.env.LOCAL_SCHEDULE_PREVIEW === "1";

  return (
    <main id="conteudo" className="practical-page grade-page">
      <nav className="practical-breadcrumbs shell" aria-label="Navegação estrutural">
        <Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Grade</span>
      </nav>
      <Schedule showIllustrative={showIllustrative} standalone />
      <div className="practical-crosslinks practical-crosslinks-light shell">
        <p>Conheça o espaço. Planeje seu treino.</p>
        <div>
          <Link href="/estrutura" className="text-link">{business.cta.structure}<ArrowIcon /></Link>
          <Link href="/planos" className="text-link">{business.cta.viewPlans}<ArrowIcon /></Link>
        </div>
      </div>
      <ContactBanner compact />
    </main>
  );
}
