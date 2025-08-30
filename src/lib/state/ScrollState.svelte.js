// FILE: src/lib/state/ScrollState.svelte.js

import { writable, derived, get } from "svelte/store";

// Public stores
export const scrollY = writable(0);
export const scrollDirection = writable("down");
export const isScrolled = writable(false);

isScrolled.subscribe(($isScrolled) => {
  console.log("isScrolled:", $isScrolled); // Debugging
});
scrollY.subscribe(($scrollY) => {
  console.log("scrollY:", $scrollY); // Debugging
});
scrollDirection.subscribe(($scrollDirection) => {
  console.log("scrollDirection:", $scrollDirection); // Debugging
});

// Internal variables
let lastY = 0;
let ticking = false;

// % scrolled
export const scrollProgress = derived(scrollY, ($scrollY) => {
  if (typeof window === "undefined") return 0;
  const docEl = document.scrollingElement || document.documentElement;
  const maxScroll = (docEl?.scrollHeight || 0) - window.innerHeight;
  return maxScroll > 0 ? ($scrollY / maxScroll) * 100 : 0;
});

scrollProgress.subscribe(($scrollProgress) => {
  console.log("scrollProgress:", $scrollProgress); // Debugging
});

function readScrollY() {
  const docEl = document.scrollingElement || document.documentElement;
  return window.scrollY ?? docEl.scrollTop ?? 0;
}

function handleScroll() {
  const y = readScrollY();

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
  if (typeof window === "undefined") return () => {};

  const y = readScrollY();
  scrollY.set(y);
  scrollDirection.set(y > lastY ? "down" : "up");
  isScrolled.set(y > 70);
  lastY = y;

  window.addEventListener("scroll", handleScroll, { passive: true });
  // Keep in sync across late layout changes (fonts/images) and hash jumps
  window.addEventListener("load", handleScroll, { passive: true });
  window.addEventListener("hashchange", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("load", handleScroll);
    window.removeEventListener("hashchange", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}
