"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { ScheduleDay } from "@/config/business";

type ScheduleTabsProps = {
  days: readonly Omit<ScheduleDay, "sourceNote">[];
  illustrative: boolean;
  noticeId?: string;
};

export function ScheduleTabs({ days, illustrative, noticeId }: ScheduleTabsProps) {
  const [selectedDay, setSelectedDay] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const instanceId = useId();

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % days.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + days.length) % days.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = days.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSelectedDay(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div
        className="schedule-tabs"
        role="tablist"
        aria-label="Dias da semana"
        aria-describedby={noticeId}
      >
        {days.map((day, index) => (
          <button
            key={day.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${instanceId}-tab-${day.id}`}
            aria-selected={index === selectedDay}
            aria-controls={`${instanceId}-panel-${day.id}`}
            aria-label={day.label}
            tabIndex={index === selectedDay ? 0 : -1}
            onClick={() => setSelectedDay(index)}
            onKeyDown={(event) => handleTabKey(event, index)}
          >
            <span className="schedule-tab-short" aria-hidden="true">{day.shortLabel}</span>
            <span className="schedule-tab-full" aria-hidden="true">{day.label.replace("-feira", "")}</span>
            <span className="schedule-tab-marker" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      {days.map((day, index) => (
        <div
          key={day.id}
          className="schedule-panel"
          id={`${instanceId}-panel-${day.id}`}
          role="tabpanel"
          aria-labelledby={`${instanceId}-tab-${day.id}`}
          hidden={index !== selectedDay}
          tabIndex={0}
        >
          <div className="schedule-day-heading">
            <span className="schedule-day-index" aria-hidden="true">0{index + 1}</span>
            <h3>{day.label}</h3>
            <p>{illustrative ? "Programação de referência" : "Programação de aulas"}</p>
          </div>
          <table className="schedule-table">
            <caption className="schedule-sr-only">Aulas de {day.label.toLowerCase()}</caption>
            <thead>
              <tr><th scope="col">Horário</th><th scope="col">Atividade</th></tr>
            </thead>
            <tbody>
              {day.classes.map((activity) => (
                <tr key={`${day.id}-${activity.time}`}>
                  <th scope="row"><time dateTime={activity.time}>{activity.time}</time></th>
                  <td>{activity.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
