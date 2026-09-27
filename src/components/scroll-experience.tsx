"use client";

import { useLayoutEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mediaQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(mediaQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getSystemMotion = () => window.matchMedia(mediaQuery).matches;
const getServerMotion = () => false;

/** Three chapter-level moments. All content is visible before progressive enhancement. */
export function ScrollExperience() {
  const pathname = usePathname();
  const systemReduced = useSyncExternalStore(subscribeMotion, getSystemMotion, getServerMotion);
  const [manuallyReduced, setManuallyReduced] = useState(false);
  const reduced = systemReduced || manuallyReduced;
  useLayoutEffect(() => {
    if (reduced) {
      document.documentElement.dataset.motion = "reduced";
      return () => { delete document.documentElement.dataset.motion; };
    }
    const main = document.querySelector("main");
    if (!main) return;
    const mm = gsap.matchMedia();

    if (pathname === "/estrutura") {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const figures = gsap.utils.toArray<HTMLElement>(".structure-figure", main);
        figures.forEach((figure) => {
          gsap.fromTo(figure,
            { clipPath: "inset(0 0 7% 0)", opacity: 0.55, y: 28 },
            {
              clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0, duration: 0.85,
              ease: "power2.out", clearProps: "clipPath,opacity,transform",
              scrollTrigger: { trigger: figure, start: "top 88%", once: true },
            },
          );
        });
      }, main);
    }

    if (pathname === "/") mm.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from(".hero-line > span", { yPercent: 110, rotation: 2, duration: 0.95, stagger: 0.1, clearProps: "all" }, 0)
        .from(".hero-photo", { clipPath: "inset(0 0 0 100%)", duration: 1.25, clearProps: "clipPath" }, 0.05)
        .from(".hero-intro", { opacity: 0, y: 15, duration: 0.55, clearProps: "all" }, 0.35);
      gsap.to(".hero-photo img", {
        yPercent: 12, scale: 1.08, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.7 },
      });
      gsap.to(".rhythm-band > div", { xPercent: -12, ease: "none", scrollTrigger: { trigger: ".rhythm-band", start: "top bottom", end: "bottom top", scrub: 1 } });

      const atmosphere = gsap.timeline({ scrollTrigger: { trigger: ".atmosphere-section", start: "top 85%", end: "center center", scrub: 0.8 } });
      atmosphere.fromTo(".atmosphere-image", { clipPath: "inset(16% 8% 16% 8%)", scale: 1.08 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, ease: "none" }, 0)
        .fromTo(".atmosphere-light", { opacity: 0 }, { opacity: 0.35, ease: "none" }, 0)
        .fromTo(".atmosphere-content h2", { y: 65 }, { y: 0, ease: "none" }, 0);
      gsap.from(".contact-link h2", { yPercent: 14, ease: "none", scrollTrigger: { trigger: ".contact-section", start: "top bottom", end: "center 65%", scrub: 0.6 } });
    }, main);

    if (pathname === "/") mm.add("(min-width: 900px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)", () => {
      const stage = main.querySelector<HTMLElement>(".space-stage");
      if (!stage) return;
      const panels = gsap.utils.toArray<HTMLElement>(".space-panel", stage);
      const steps = gsap.utils.toArray<HTMLElement>(".space-step", stage);
      stage.classList.add("is-enhanced");
      gsap.set(panels.slice(1), { clipPath: "inset(100% 0 0 0)" });
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage, start: "top 100px", end: () => `+=${window.innerHeight}`,
          pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
          onUpdate: (self) => {
            const active = self.progress < 0.32 ? 0 : self.progress < 0.72 ? 1 : 2;
            steps.forEach((step, index) => step.classList.toggle("is-active", index === active));
          },
        },
      });
      timeline.to(panels[1], { clipPath: "inset(0% 0 0 0)", duration: 0.75, ease: "none" }, 0.35)
        .to(panels[2], { clipPath: "inset(0% 0 0 0)", duration: 0.75, ease: "none" }, 1.35)
        .to({}, { duration: 0.3 });
      return () => {
        stage.classList.remove("is-enhanced");
        steps.forEach((step, index) => step.classList.toggle("is-active", index === 0));
      };
    }, main);

    let disposed = false;
    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh(); });
    return () => { disposed = true; mm.revert(); };
  }, [reduced, pathname]);

  return <button className="motion-toggle" type="button" aria-pressed={reduced} disabled={systemReduced} onClick={() => setManuallyReduced(!manuallyReduced)}>{systemReduced ? "Movimento reduzido pelo dispositivo" : manuallyReduced ? "Ativar animações" : "Reduzir movimento"}<span aria-hidden="true">{reduced ? "○" : "◉"}</span></button>;
}
