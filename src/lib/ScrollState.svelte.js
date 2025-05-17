import { writable, derived } from "svelte/store";

export const scrollY = writable(0);

export const scrollDirection = writable("down");

let lastY = 0;

export const isScrolled = derived(scrollY, ($scrollY) => $scrollY > 10);

export const scrollProgress = derived(scrollY, ($scrollY) => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return maxScroll > 0 ? ($scrollY / maxScroll) * 100 : 0;
});

export function initScrollTracking() {
  if (typeof window === "undefined") return;

  const handleScroll = () => {
    const y = window.scrollY;
    scrollY.set(y);
    scrollDirection.set(y > lastY ? "down" : "up");
    lastY = y;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}
