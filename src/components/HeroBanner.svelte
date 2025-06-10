<script lang="js">
  import { slide, fly, fade } from "svelte/transition";
  // import {
  //   isScrolled,
  //   scrollProgress,
  //   initScrollTracking,
  // } from "../lib/ScrollState.svelte.js";
  /** @type {{ bannerIsVisible: boolean }} */
  let { bannerIsVisible = false } = $props();
  $inspect(() => {
    console.log("showHeroBanner:", bannerIsVisible); // Debugging
  });

  // isScrolled.subscribe(($isScrolled) => {
  //   console.log("isScrolled:", $isScrolled); // Debugging
  // });
</script>

<div
  class={`${bannerIsVisible ? "visible" : "invisible"} flex flex-col items-center justify-center px-2 bg-aquamarine-100/70`}
  transition:fade|global
>
  <h1 class="text-2xl font-extrabold hero-title font-mono-3 leading-[-0.5em]">
    Ellie Holt<span>:</span>

    <span class="text-2xl font-mono-3 font-medium leading-none">
      <span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pr-[0.2em]"
        >&lcub;</span
      >front-end web developer<span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pl-[0.2em]"
        >&rcub;</span
      >
    </span>
  </h1>
</div>

<style>
  .brackets {
    top: 0.06em;
  }
</style>
