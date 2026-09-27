export type MediaId =
  | "studio"
  | "studioHero"
  | "strength"
  | "cardio"
  | "machines"
  | "weights"
  | "cables"
  | "spinning"
  | "floor"
  | "logo"
  | "mark"
  | "locationMap";

type MediaAsset = {
  localFile: string;
  authorizedSrc: string | null;
  alt: string;
  width: number;
  height: number;
  containsPeople: boolean;
  status: "replacement-required";
};

/**
 * Temporary prototype assets.
 * These files are used only for the concept presentation.
 * Replace them with authorized/professional photography if the project advances.
 */
export const media: Record<MediaId, MediaAsset> = {
  studio: {
    localFile: "studio.webp",
    authorizedSrc: "/prototype-assets/studio.webp",
    alt: "Sala de aulas nas referências da Gymbro: espelho, piso de borracha e teto com iluminação azul.",
    width: 442,
    height: 445,
    containsPeople: false,
    status: "replacement-required",
  },

  studioHero: {
    localFile: "studio-hero-ai.webp",
    authorizedSrc: "/prototype-assets/studio-hero-ai.webp",
    alt: "Sala de aulas nas referências da Gymbro: espelho, piso de borracha e teto com iluminação azul.",
    width: 1254,
    height: 1254,
    containsPeople: false,
    status: "replacement-required",
  },

  strength: {
    localFile: "strength.webp",
    authorizedSrc: "/prototype-assets/strength.webp",
    alt: "Registro de referência do salão de musculação, com máquinas e vigas iluminadas em azul e vermelho.",
    width: 688,
    height: 800,
    containsPeople: true,
    status: "replacement-required",
  },

  cardio: {
    localFile: "cardio.webp",
    authorizedSrc: "/prototype-assets/cardio.webp",
    alt: "Registro de referência das esteiras junto às janelas e à iluminação vermelha do teto.",
    width: 688,
    height: 800,
    containsPeople: true,
    status: "replacement-required",
  },

  machines: {
    localFile: "machines.webp",
    authorizedSrc: "/prototype-assets/machines.webp",
    alt: "Registro de referência das máquinas, espelhos e luminárias lineares do salão de treino.",
    width: 688,
    height: 810,
    containsPeople: true,
    status: "replacement-required",
  },

  weights: {
    localFile: "weights.webp",
    authorizedSrc: "/prototype-assets/weights.webp",
    alt: "Registro de referência do salão: pesos, bancos e máquinas sob vigas aparentes, com pessoas ao fundo.",
    width: 688,
    height: 790,
    containsPeople: true,
    status: "replacement-required",
  },

  cables: {
    localFile: "cables.webp",
    authorizedSrc: "/prototype-assets/cables.webp",
    alt: "Registro de referência das máquinas com cabos, bancos e espelhos na área de musculação.",
    width: 688,
    height: 800,
    containsPeople: true,
    status: "replacement-required",
  },

  spinning: {
    localFile: "spinning.webp",
    authorizedSrc: "/prototype-assets/spinning.webp",
    alt: "Registro de referência da sala de spinning: bicicletas diante de espelhos e luz colorida no teto, com uma aula em andamento.",
    width: 688,
    height: 800,
    containsPeople: true,
    status: "replacement-required",
  },

  floor: {
    localFile: "floor.webp",
    authorizedSrc: "/prototype-assets/floor.webp",
    alt: "Registro de referência do salão com esteiras à esquerda, máquinas à direita e luz azul e vermelha nas vigas.",
    width: 688,
    height: 770,
    containsPeople: true,
    status: "replacement-required",
  },

  logo: {
    localFile: "logo.webp",
    authorizedSrc: "/prototype-assets/logo.webp",
    alt: "Gymbro Club",
    width: 930,
    height: 744,
    containsPeople: false,
    status: "replacement-required",
  },

  mark: {
    localFile: "mark.webp",
    authorizedSrc: "/prototype-assets/mark.webp",
    alt: "Símbolo G da referência de marca Gymbro Club",
    width: 590,
    height: 340,
    containsPeople: false,
    status: "replacement-required",
  },

  locationMap: {
    localFile: "location-map.webp",
    authorizedSrc: "/prototype-assets/location-map.webp",
    alt: "Mapa visual de Serra Grande com o ponto da Gymbro Club próximo à RJ-108.",
    width: 2171,
    height: 724,
    containsPeople: false,
    status: "replacement-required",
  },
};