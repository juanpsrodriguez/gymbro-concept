import "server-only";

import { useId } from "react";
import { business } from "@/config/business";
import { scheduleConfig, weekSchedule } from "@/config/research";
import { ScheduleTabs } from "./schedule-tabs";
import "./schedule.css";

type ScheduleProps = {
  showIllustrative: boolean;
  standalone?: boolean;
};

function ScheduleContact() {
  return (
    <a className="schedule-contact" href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
      {business.cta.schedule}<span aria-hidden="true">↗</span>
      <span className="schedule-sr-only"> pelo WhatsApp (abre em nova aba)</span>
    </a>
  );
}

export function Schedule({ showIllustrative, standalone = false }: ScheduleProps) {
  const instanceId = useId();
  const Heading = standalone ? "h1" : "h2";
  const illustrative = scheduleConfig.scheduleVerificationStatus !== "verified";
  const canDisplay =
    (scheduleConfig.scheduleVisible && !illustrative) ||
    (showIllustrative && business.conceptMode);

  return (
    <section id="horarios" className={`schedule-section${standalone ? " schedule-standalone" : ""}`} aria-labelledby={`${instanceId}-title`}>
      <div className="shell">
        <div className="schedule-heading">
          <div>
            <p className="schedule-eyebrow">Aulas / semana</p>
            <Heading id={`${instanceId}-title`} className="schedule-title">
              SEU DIA.<br /><span>SEU RITMO.</span>
            </Heading>
          </div>
          <div className="schedule-intro">
            <span className="schedule-asterisk" aria-hidden="true">✳</span>
            <p>Encontre espaço<br />para se movimentar.</p>
            <span className="schedule-intro-caption">Na sua semana. Do seu jeito.</span>
          </div>
        </div>

        {standalone && <h2 className="schedule-sr-only">Programação de aulas</h2>}
        {canDisplay ? (
          <div className="schedule-content">
            {illustrative && (
              <div className="schedule-notice" id={`${instanceId}-notice`}>
                <span className="schedule-notice-label">
                  <span aria-hidden="true" />
                  {scheduleConfig.illustrativeLabel}
                </span>
                <p>{scheduleConfig.illustrativeNote}</p>
              </div>
            )}
            <ScheduleTabs
              days={weekSchedule.map((day) => ({
                id: day.id,
                label: day.label,
                shortLabel: day.shortLabel,
                classes: day.classes,
              }))}
              illustrative={illustrative}
              noticeId={illustrative ? `${instanceId}-notice` : undefined}
            />
            <div className="schedule-bottom">
              <p>Uma conversa com a equipe e você organiza a semana.</p>
              <ScheduleContact />
            </div>
          </div>
        ) : (
          <div className="schedule-consultation">
            <h3>Sua próxima aula<br />começa aqui.</h3>
            <div>
              <p>{scheduleConfig.consultationNote}</p>
              <ScheduleContact />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
