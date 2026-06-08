/**
 * Progressive scroll-reveal enhancement.
 * Adds a gentle fade/translate-in to key elements as they enter the viewport.
 * Fully optional: if JS is disabled or IntersectionObserver is missing,
 * nothing is hidden and all content remains visible.
 */

const REVEAL_SELECTOR = [
  ".hero-copy",
  ".hero-media",
  ".section-heading",
  ".section-intro",
  ".prose",
  ".card",
  ".opportunities-label",
  ".contact-panel",
  ".diagram-image-wrap",
  ".diagram-copy",
].join(",");

export function setupReveal(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

  const targets = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
  );
  if (targets.length === 0) return;

  // Only opt into the hidden start-state once we know JS is running.
  document.documentElement.classList.add("reveal-ready");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add("is-revealed");
        obs.unobserve(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  for (const el of targets) {
    el.classList.add("reveal-target");
    // Subtle stagger for cards sharing a grid row.
    const parent = el.parentElement;
    if (parent && /\bgrid\b/.test(parent.className)) {
      const index = Array.prototype.indexOf.call(parent.children, el);
      el.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
    }
    observer.observe(el);
  }
}
