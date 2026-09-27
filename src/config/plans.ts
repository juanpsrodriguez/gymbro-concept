type PlanConversationTopic = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
};

/** Consultation copy only. Confirmed offers belong in the server-only research configuration. */
export const plansContent = {
  eyebrow: "Planos / Gymbro Club",
  title: ["SEU TREINO.", "SEU PLANO."],
  introduction:
    "Conte como você quer treinar. A equipe explica os planos e as condições atuais para você escolher com calma.",
  contactCaption: "Valores e condições direto com a equipe.",
  conversationEyebrow: "Antes de começar",
  conversationTitle: "VAMOS COMBINAR OS DETALHES.",
  conversationTopics: [
    {
      id: "rotina",
      title: "Sua rotina",
      description: "Conte os dias e os horários em que pretende treinar.",
    },
    {
      id: "modalidades",
      title: "Seu treino",
      description:
        "Pergunte quais modalidades estão disponíveis e o que cada plano inclui.",
    },
    {
      id: "condicoes",
      title: "As condições",
      description:
        "Confirme os valores atuais, a duração do plano e as formas de pagamento.",
    },
  ] satisfies readonly PlanConversationTopic[],
  exploreLabel: "Antes da conversa, conheça o clube.",
} as const;
