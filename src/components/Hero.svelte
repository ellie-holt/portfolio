<script lang="js">
  // import me from "../assets/me.jpeg";
  import {
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte.js";
  import GitHubIcon from "./svg/GitHubIcon.svelte";

  // $effect(() => {
  //   initScrollTracking();
  // });
  isScrolled.subscribe(($isScrolled) => {
    console.log("isScrolled:", $isScrolled); // Debugging
  });
</script>

<div class="flex flex-col items-center px-5">
  <div class="flex justify-between w-full">
    <div class="m-4">
      <GitHubIcon size={60} link="https://github.com/ellie-holt" />
    </div>
    <div
      class="flex max-w-120 max-h-120 w-[40vw] h-[40vw] border border-black rounded-full"
    ></div>
  </div>
  <div class="w-full mx-5">
    <h1 class="block w-full p-0 mb-0 leading-none">
      <svg
        viewBox="0 0 1010 200"
        preserveAspectRatio="none"
        class="w-full h-auto fill-current leading-none text-black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Ellie Holt</title>
        <line
          x1="0"
          y1="24"
          x2="1010"
          y2="24"
          stroke="black"
          stroke-width="1"
          stroke-dasharray="8 4"
        />

        <text
          x="51%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          font-size="160"
          font-family="'IBM Plex Mono', monospace"
          font-weight="500"
        >
          Ellie Holt:
        </text>
        <line
          x1="0"
          y1="140"
          x2="1010"
          y2="140"
          stroke="black"
          stroke-width="1"
          stroke-dasharray="8 4"
        />
      </svg>
    </h1>
  </div>
  <div class="flex justify-around w-full">
    <a href="#work"
      ><div
        class="relative text-[20vw] leading-none top-8 cursor-pointer hover:translate-y-2 transition-transform duration-300 ease-in-out"
      >
        ↓
      </div></a
    >
    <h2
      class="relative top-2 2xs:top-0 text-[7vw] xs:text-[6vw] xl:text-[4rem] self-end text-right font-mono leading-none font-medium"
    >
      <span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pr-[0.2em]"
        >&lcub;</span
      ><span class="pr-12">front-end web</span><br /><span>developer</span><span
        class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em] pl-[0.2em]"
        >&rcub;</span
      >
    </h2>
  </div>
  <!-- <div class={`${$isScrolled ? "hidden" : ""} image-container`}>
    <div class="w-20 h-20  bg-azure-100"></div>
  </div> -->
</div>

<style>
  .brackets {
    top: 0.06em;
  }

  /* .heading-noise {
    filter: url(#heading-noise);
  } */
</style>
