import { writable, derived, get } from "svelte/store";

export const scrollY = writable(0);

export const scrollDirection = writable("down");

let lastY = 0;
let ticking = false;

export const isScrolled = writable(false);

isScrolled.subscribe(($isScrolled) => {
  console.log("isScrolled:", $isScrolled); // Debugging
});

export const scrollProgress = derived(scrollY, ($scrollY) => {
  if (typeof window === "undefined") return 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return maxScroll > 0 ? ($scrollY / maxScroll) * 100 : 0;
});

function handleScroll() {
  const y = window.scrollY;

  if (!ticking) {
    requestAnimationFrame(() => {
      scrollY.set(y);
      scrollDirection.set(y > lastY ? "down" : "up");

      // Smoothed threshold for isScrolled
      const current = get(isScrolled);
      if (!current && y > 70) {
        isScrolled.set(true);
      } else if (current && y < 30) {
        isScrolled.set(false);
      }

      lastY = y;
      ticking = false;
    });

    ticking = true;
  }
}

export function initScrollTracking() {
  if (typeof window === "undefined") return;

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
