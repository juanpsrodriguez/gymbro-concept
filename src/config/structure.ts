import type { MediaId } from "@/config/media";

export type StructureFigure = {
  readonly media: MediaId;
  readonly title: string;
  readonly detail: string;
};

type StructureContent = {
  readonly eyebrow: string;
  readonly title: readonly string[];
  readonly introduction: string;
  readonly navigationLabel: string;
  readonly navigation: readonly { id: string; label: string }[];
  readonly opening: StructureFigure;
  readonly strength: {
    readonly eyebrow: string;
    readonly title: readonly string[];
    readonly description: string;
    readonly detail: string;
    readonly feature: StructureFigure;
    readonly details: readonly StructureFigure[];
  };
  readonly cardio: {
    readonly eyebrow: string;
    readonly title: readonly string[];
    readonly description: string;
    readonly figures: readonly StructureFigure[];
  };
  readonly classes: {
    readonly eyebrow: string;
    readonly title: readonly string[];
    readonly description: string;
    readonly availability: string;
    readonly figure: StructureFigure;
  };
  readonly referenceNote: string;
};

/** Observational copy only: the references do not establish today's inventory. */
export const structurePage: StructureContent = {
  eyebrow: "Por dentro da Gymbro",
  title: ["O TREINO.", "TEM ESPAÇO."],
  introduction: "Máquinas, pesos, espelhos e luz. Um olhar mais próximo dos ambientes que dão forma à Gymbro Club.",
  navigationLabel: "Ambientes da estrutura",
  navigation: [
    { id: "musculacao", label: "Musculação" },
    { id: "cardio", label: "Cardio" },
    { id: "aulas", label: "Aulas" },
  ],
  opening: { media: "machines", title: "O salão, de perto.", detail: "Máquinas · espelhos · luz linear" },
  strength: {
    eyebrow: "Musculação",
    title: ["FERRO, PESO", "E PRESENÇA."],
    description: "Máquinas e pesos livres dividem o salão. A estrutura aparente, o piso escuro e os espelhos fazem parte da identidade do espaço.",
    detail: "Outros ângulos do salão: bancos, halteres e estações com cabos.",
    feature: { media: "strength", title: "Luz sobre a estrutura.", detail: "Salão de musculação" },
    details: [
      { media: "weights", title: "Pesos e bancos.", detail: "Visão do salão" },
      { media: "cables", title: "Máquinas e cabos.", detail: "Detalhes do treino" },
    ],
  },
  cardio: {
    eyebrow: "Cardio",
    title: ["OUTRO RITMO.", "O MESMO LUGAR."],
    description: "Esteiras junto às janelas, máquinas ao longo do salão. A iluminação percorre o teto e conecta os ambientes.",
    figures: [
      { media: "cardio", title: "Cardio junto à luz natural.", detail: "Área de esteiras" },
      { media: "floor", title: "Um olhar pelo salão.", detail: "Cardio e máquinas" },
    ],
  },
  classes: {
    eyebrow: "Ambientes de aulas",
    title: ["O ESPAÇO", "TAMBÉM MUDA", "DE RITMO."],
    description: "Bicicletas, espelhos e luz no teto. A sala de spinning aparece nas referências com uma atmosfera própria.",
    availability: "Consulte a equipe sobre as modalidades e os horários disponíveis atualmente.",
    figure: { media: "spinning", title: "A atmosfera do spinning.", detail: "Registro da sala de aulas" },
  },
  referenceNote: "Imagens temporárias de referência, usadas apenas nesta prévia local do conceito. Equipamentos e modalidades atuais devem ser confirmados com a equipe.",
};
