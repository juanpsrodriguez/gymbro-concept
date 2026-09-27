import "server-only";
import type { ScheduleClass, ScheduleDay, VerificationStatus } from "./business";

/** Working information: never import into a client component. */
export type SourceNote = {
  readonly item: string;
  readonly source: "user-provided" | "visual-reference";
  readonly verificationStatus: VerificationStatus;
  readonly timeSensitive: boolean;
  readonly publicDisplay: boolean;
  readonly note: string;
};

type ResearchConfiguration = {
  readonly addressVerified: boolean;
  readonly addressVerificationStatus: VerificationStatus;
  readonly sourceNotes: readonly SourceNote[];
};

export const research: ResearchConfiguration = {
  addressVerified: true,
  addressVerificationStatus: "user-provided",
  sourceNotes: [
    {
      item: "brand-and-contact",
      source: "user-provided",
      verificationStatus: "user-provided",
      timeSensitive: true,
      publicDisplay: true,
      note: "Brand, Instagram and working WhatsApp supplied explicitly by the user.",
    },
    {
      item: "regional-location",
      source: "user-provided",
      verificationStatus: "user-provided",
      timeSensitive: false,
      publicDisplay: true,
      note: "Serra Grande • Niterói/RJ remains the compact public location label.",
    },
    {
      item: "street-address",
      source: "user-provided",
      verificationStatus: "user-provided",
      timeSensitive: true,
      publicDisplay: true,
      note: "The author explicitly supplied the full address for public display on 26/09/2026; not independently verified by a visit.",
    },
    {
      item: "classes-and-schedule",
      source: "user-provided",
      verificationStatus: "provisional",
      timeSensitive: true,
      publicDisplay: false,
      note: "Explicitly illustrative concept preview only; Wednesday and Friday were described as appearing equivalent to Monday.",
    },
    {
      item: "promotion",
      source: "user-provided",
      verificationStatus: "provisional",
      timeSensitive: true,
      publicDisplay: false,
      note: "User transcription only; the original promotion image was not supplied. Current price, plan and restrictions need in-person confirmation.",
    },
  ],
};

type ScheduleConfiguration = {
  readonly scheduleVerificationStatus: VerificationStatus;
  readonly scheduleVisible: boolean;
  readonly verifiedOn: string | null;
  readonly illustrativeLabel: string;
  readonly illustrativeNote: string;
  readonly consultationNote: string;
};

export const scheduleConfig: ScheduleConfiguration = {
  scheduleVerificationStatus: "provisional",
  scheduleVisible: false,
  verifiedOn: null,
  illustrativeLabel: "Grade ilustrativa",
  illustrativeNote:
    "Horários do material de referência, sujeitos a confirmação. Consulte a programação atual com a equipe.",
  consultationNote:
    "Converse com a equipe para conhecer as aulas disponíveis e os horários atuais.",
};

const mondayClasses: readonly ScheduleClass[] = [
  { time: "07:00", label: "Spinning + Yoga" },
  { time: "08:00", label: "Step" },
  { time: "09:00", label: "Spinning + Ritmos" },
  { time: "10:00", label: "Spinning + Fitdance" },
  { time: "18:00", label: "Spinning + Yoga" },
  { time: "19:00", label: "Lift + GAP" },
];

export const weekSchedule: readonly ScheduleDay[] = [
  {
    id: "monday",
    label: "Segunda-feira",
    shortLabel: "Seg",
    classes: mondayClasses,
    sourceNote: "Exact user transcription, provisional.",
  },
  {
    id: "tuesday",
    label: "Terça-feira",
    shortLabel: "Ter",
    classes: [
      { time: "07:00", label: "Spinning + Yoga" },
      { time: "08:00", label: "Step" },
      { time: "09:00", label: "GAP" },
      { time: "10:00", label: "Spinning" },
      { time: "18:00", label: "Yoga" },
      { time: "19:00", label: "Fitdance" },
    ],
    sourceNote: "Exact user transcription, provisional.",
  },
  {
    id: "wednesday",
    label: "Quarta-feira",
    shortLabel: "Qua",
    classes: mondayClasses,
    sourceNote: "User reports supplied material appears equivalent to Monday; not independently confirmed.",
  },
  {
    id: "thursday",
    label: "Quinta-feira",
    shortLabel: "Qui",
    classes: [
      { time: "07:00", label: "Spinning + Yoga" },
      { time: "08:00", label: "Step" },
      { time: "09:00", label: "Full Body" },
      { time: "10:00", label: "Spinning" },
      { time: "18:00", label: "Yoga" },
      { time: "19:00", label: "Fitdance" },
    ],
    sourceNote: "Exact user transcription, provisional.",
  },
  {
    id: "friday",
    label: "Sexta-feira",
    shortLabel: "Sex",
    classes: mondayClasses,
    sourceNote: "User reports supplied material appears equivalent to Monday; not independently confirmed.",
  },
];

type PromotionConfiguration = {
  readonly value: number;
  readonly currency: "BRL";
  readonly description: string;
  readonly conditions: readonly string[];
  readonly lastChecked: string | null;
  readonly verified: boolean;
  readonly visible: boolean;
  readonly verificationStatus: VerificationStatus;
};

export const promotion: PromotionConfiguration = {
  value: 99,
  currency: "BRL",
  description: "Referência de mensalidade a partir de R$ 99 no plano semestral.",
  conditions: ["Entrada das 11:30 às 16:00.", "Permanência até 17:00."],
  lastChecked: null,
  verified: false,
  visible: false,
  verificationStatus: "provisional",
};
