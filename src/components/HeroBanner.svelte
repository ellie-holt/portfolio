<script lang="js">
  import {
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte.js";

  const options = {
    root: null,
    rootMargin: "0px 0px -100% 0px",
    threshold: 0.1,
  };

  // $effect(() => {
  //   initScrollTracking();
  // });
  isScrolled.subscribe(($isScrolled) => {
    console.log("isScrolled:", $isScrolled); // Debugging
  });
</script>

<div
  class={`${$isScrolled ? "visible" : "invisible"} flex flex-row justify-center items-baseline gap-1 px-2 pt-2 pb-4 bg-aquamarine-300 outline-4 outline-aquamarine-300`}
>
  <h1 class="text-2xl font-extrabold hero-title font-mono-3">
    Ellie Holt<span>:</span>
  </h1>
  <h2 class="text-2xl font-mono-3 leading-none font-medium">
    <span
      class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pr-[0.2em]"
      >&lcub;</span
    >front-end web developer<span
      class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pl-[0.2em]"
      >&rcub;</span
    >
  </h2>
</div>

<style>
  .brackets {
    top: 0.06em;
  }
</style>
