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
  class={`${bannerIsVisible ? "visible" : "invisible"} flex flex-col items-center justify-center px-1 pt-2 pb-3 bg-aquamarine-100`}
  transition:fade|global
>
  <h1
    class="text-xl 3xs:text-2xl font-extrabold hero-title font-mono-3 leading-[-0.5em]"
  >
    Ellie Holt<span class="-mr-1 3xs:-mr-3 sm:mr-0">:</span>

    <span
      class="text-xl 3xs:text-2xl font-mono-3 font-medium leading-none 2xs:full"
    >
      <span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em]"
        >&lcub;</span
      >

      <span
        class="tagline tracking-tight sm:tracking-normal -mx-1 3xs:-mx-2 sm:mx-0"
      ></span>

      <span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em]"
        >&rcub;</span
      >
    </span>
  </h1>
</div>

<style>
  .brackets {
    top: 0.06em;
  }

  .tagline::after {
    content: "front-end web developer";
  }

  @media (max-width: 544px) {
    .tagline::after {
      content: "web developer";
    }
  }
</style>
