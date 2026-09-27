"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/** Next may preserve scroll between layouts. Route entries should start predictably. */
export function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const frames: number[] = [];
    const timers: number[] = [];
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const reset = () => {
      const hash = window.location.hash.slice(1);
      const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;
      if (target) target.scrollIntoView({ block: "start" });
      else window.scrollTo(0, 0);
    };

    reset();
    frames.push(window.requestAnimationFrame(() => {
      reset();
      frames.push(window.requestAnimationFrame(reset));
    }));
    // Next's App Router may settle its own scroll after the first painted frame.
    // Reassert the explicit route policy after that work without animating it.
    timers.push(window.setTimeout(reset, 80));
    timers.push(window.setTimeout(() => {
      reset();
      root.style.scrollBehavior = previousBehavior;
    }, 220));

    return () => {
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      timers.forEach((timer) => window.clearTimeout(timer));
      root.style.scrollBehavior = previousBehavior;
    };
  }, [pathname]);

  return null;
}
