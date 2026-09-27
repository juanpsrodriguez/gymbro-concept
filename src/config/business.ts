/**
 * All business information has one editable source here.
 * Provisional information must never be promoted to verified without evidence.
 * This module is safe for client imports. Private research lives in research.ts.
 */

export type VerificationStatus =
  | "user-provided"
  | "provisional"
  | "pending-in-person"
  | "verified";

export type Modality = {
  readonly id: string;
  readonly label: string;
  readonly verificationStatus: VerificationStatus;
};

export type ModalityGroup = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly target: "contact" | "schedule";
};

type BusinessConfiguration = {
  readonly brandName: string;
  readonly conceptMode: boolean;
  readonly instagramHandle: string;
  readonly instagramUrl: string;
  readonly storeUrl: string;
  readonly whatsappDisplay: string;
  readonly whatsappNumber: string;
  readonly whatsappMessage: string;
  readonly whatsappUrl: string;
  readonly suppliedWhatsappUrl: string;
  readonly shortLocation: string;
  readonly fullAddress: string;
  readonly mapsUrl: string;
  readonly attribution: string;
  readonly cta: {
    readonly structure: string;
    readonly modalities: string;
    readonly plans: string;
    readonly conditions: string;
    readonly contact: string;
    readonly schedule: string;
    readonly fullSchedule: string;
    readonly viewPlans: string;
    readonly instagram: string;
    readonly maps: string;
  };
  readonly modalities: readonly Modality[];
  readonly modalityGroups: readonly ModalityGroup[];
};

const whatsappNumber = "5521996917085";
const whatsappMessage =
  "Olá! Vim pelo site e gostaria de saber mais sobre a Gymbro Club.";

export const business: BusinessConfiguration = {
  brandName: "Gymbro Club",
  conceptMode: true,
  instagramHandle: "@gymbrocluboficial",
  instagramUrl: "https://www.instagram.com/gymbrocluboficial/",
  storeUrl: "https://www.usegymbro.com.br/",
  whatsappDisplay: "+55 21 99691-7085",
  whatsappNumber,
  whatsappMessage,
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  suppliedWhatsappUrl:
    "https://api.whatsapp.com/send/?phone=5521996917085&text&type=phone_number&app_absent=0&utm_source=ig",
  shortLocation: "Serra Grande • Niterói/RJ",
  fullAddress: "R. Francisco Nascimento, 26 - Serra Grande, Niterói - RJ, 24342-702",
  mapsUrl: "https://www.google.com/maps/place/Gymbro+Club/@-22.9328948,-43.0216893,17z/data=!4m6!3m5!1s0x99853a11501195:0x8cae5bd1cad4075!8m2!3d-22.9335908!4d-43.0208688!16s%2Fg%2F11kq5pnq38?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D",
  attribution:
    "Projeto conceitual não oficial • desenvolvido por Juan Rodriguez",
  cta: {
    structure: "Conhecer a estrutura",
    modalities: "Ver modalidades",
    plans: "Consultar planos",
    conditions: "Consultar condições",
    contact: "Falar com a equipe",
    schedule: "Consultar horários",
    fullSchedule: "Ver grade completa",
    viewPlans: "Ver planos",
    instagram: "Acompanhar no Instagram",
    maps: "Ver no Google Maps",
  },
  modalities: [
    { id: "musculacao", label: "Musculação", verificationStatus: "user-provided" },
    { id: "spinning", label: "Spinning", verificationStatus: "provisional" },
    { id: "yoga", label: "Yoga", verificationStatus: "provisional" },
    { id: "step", label: "Step", verificationStatus: "provisional" },
    { id: "ritmos", label: "Ritmos", verificationStatus: "provisional" },
    { id: "fitdance", label: "Fitdance", verificationStatus: "provisional" },
    { id: "gap", label: "GAP", verificationStatus: "provisional" },
    { id: "lift-gap", label: "Lift + GAP", verificationStatus: "provisional" },
    { id: "full-body", label: "Full Body", verificationStatus: "provisional" },
  ],
  modalityGroups: [
    { id: "musculacao", title: "MUSCULAÇÃO", description: "Máquinas & pesos livres", target: "contact" },
    { id: "spinning", title: "SPINNING", description: "Pedal & movimento", target: "schedule" },
    { id: "aulas-coletivas", title: "AULAS COLETIVAS", description: "Yoga, Step, Ritmos & outras aulas", target: "schedule" },
  ],
};

export const navigation = [
  { href: "/", label: "Início", external: false },
  { href: "/estrutura", label: "Estrutura", external: false },
  { href: "/grade", label: "Grade", external: false },
  { href: "/planos", label: "Planos", external: false },
  { href: "/#localizacao", label: "Localização", external: false },
  { href: business.storeUrl, label: "Loja ↗", external: true },
] as const;

export type ScheduleClass = {
  readonly time: `${number}:${number}`;
  readonly label: string;
};

export type ScheduleDay = {
  readonly id: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
  readonly label: string;
  readonly shortLabel: string;
  readonly classes: readonly ScheduleClass[];
  readonly sourceNote: string;
};
