<script lang="js">
  // import me from "../assets/me.jpeg";
  import {
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte.js";

  // $effect(() => {
  //   initScrollTracking();
  // });
  isScrolled.subscribe(($isScrolled) => {
    console.log("isScrolled:", $isScrolled); // Debugging
  });
</script>

<div class="flex flex-col items-center justify-center text-center px-2">
  <h1
    class="text-[12vw] 3xs:text-[14vw] 2xs:text-[13.5vw] xs:text-[13vw] xl:text-[10rem] font-semibold hero-title font-mono-3"
  >
    Ellie Holt<span class="tracking-[-1.5rem]">:</span>
  </h1>
  <h2
    class="text-[4vw] 3xs:text-[5vw] 2xs:text-[5vw] xs:text-[5vw] sm:text-[5vw] xl:text-[4rem] font-mono-3 leading-none font-medium"
  >
    <span
      class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pr-[0.2em]"
      >&lcub;</span
    >front-end web developer<span
      class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pl-[0.2em]"
      >&rcub;</span
    >
  </h2>
  <!-- <div class={`${$isScrolled ? "hidden" : ""} image-container`}>
    <div class=" bg-azure-100 w-20 h-20"></div>
  </div> -->
</div>

<style>
  .brackets {
    top: 0.06em;
  }
</style>
