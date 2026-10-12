import { useEffect } from "react";

/**
 * Scroll-reveal: adds .reveal-visible to every .reveal element as it enters
 * the viewport. Respects prefers-reduced-motion (reveals immediately).
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      els.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}
