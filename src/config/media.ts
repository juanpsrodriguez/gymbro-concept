export type MediaId = "studio" | "studioHero" | "strength" | "cardio" | "machines" | "weights" | "cables" | "spinning" | "floor" | "logo" | "mark" | "locationMap";

type MediaAsset = {
  localFile: string;
  authorizedSrc: string | null;
  alt: string;
  width: number;
  height: number;
  containsPeople: boolean;
  status: "replacement-required";
};

/** Only set authorizedSrc after obtaining an approved original. See ASSET_INVENTORY.md. */
export const media: Record<MediaId, MediaAsset> = {
  studio: {
    localFile: "studio.webp", authorizedSrc: null,
    alt: "Sala de aulas nas referências da Gymbro: espelho, piso de borracha e teto com iluminação azul.",
    width: 442, height: 445, containsPeople: false, status: "replacement-required",
  },
  studioHero: {
    localFile: "studio-hero-ai.webp", authorizedSrc: null,
    alt: "Sala de aulas nas referências da Gymbro: espelho, piso de borracha e teto com iluminação azul.",
    width: 1254, height: 1254, containsPeople: false, status: "replacement-required",
  },
  strength: {
    localFile: "strength.webp", authorizedSrc: null,
    alt: "Registro de referência do salão de musculação, com máquinas e vigas iluminadas em azul e vermelho.",
    width: 688, height: 800, containsPeople: true, status: "replacement-required",
  },
  cardio: {
    localFile: "cardio.webp", authorizedSrc: null,
    alt: "Registro de referência das esteiras junto às janelas e à iluminação vermelha do teto.",
    width: 688, height: 800, containsPeople: true, status: "replacement-required",
  },
  machines: {
    localFile: "machines.webp", authorizedSrc: null,
    alt: "Registro de referência das máquinas, espelhos e luminárias lineares do salão de treino.",
    width: 688, height: 810, containsPeople: true, status: "replacement-required",
  },
  weights: {
    localFile: "weights.webp", authorizedSrc: null,
    alt: "Registro de referência do salão: pesos, bancos e máquinas sob vigas aparentes, com pessoas ao fundo.",
    width: 688, height: 790, containsPeople: true, status: "replacement-required",
  },
  cables: {
    localFile: "cables.webp", authorizedSrc: null,
    alt: "Registro de referência das máquinas com cabos, bancos e espelhos na área de musculação.",
    width: 688, height: 800, containsPeople: true, status: "replacement-required",
  },
  spinning: {
    localFile: "spinning.webp", authorizedSrc: null,
    alt: "Registro de referência da sala de spinning: bicicletas diante de espelhos e luz colorida no teto, com uma aula em andamento.",
    width: 688, height: 800, containsPeople: true, status: "replacement-required",
  },
  floor: {
    localFile: "floor.webp", authorizedSrc: null,
    alt: "Registro de referência do salão com esteiras à esquerda, máquinas à direita e luz azul e vermelha nas vigas.",
    width: 688, height: 770, containsPeople: true, status: "replacement-required",
  },
  logo: {
    localFile: "logo.webp", authorizedSrc: null,
    alt: "Gymbro Club", width: 930, height: 744,
    containsPeople: false, status: "replacement-required",
  },
  mark: {
    localFile: "mark.webp", authorizedSrc: null,
    alt: "Símbolo G da referência de marca Gymbro Club", width: 590, height: 340,
    containsPeople: false, status: "replacement-required",
  },
  locationMap: {
    localFile: "location-map.webp", authorizedSrc: null,
    alt: "Mapa visual de Serra Grande com o ponto da Gymbro Club próximo à RJ-108.",
    width: 2171, height: 724,
    containsPeople: false, status: "replacement-required",
  },
};
