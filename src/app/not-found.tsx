import Link from "next/link";

export default function NotFound() {
  return <main className="not-found shell"><p className="eyebrow">GYMBRO CLUB / 404</p><h1>ESSE CAMINHO<br />NÃO LEVA AO TREINO.</h1><p>A página que você procura não está por aqui.</p><Link className="button button-blue" href="/">Voltar ao início <span aria-hidden="true">↗</span></Link></main>;
}
