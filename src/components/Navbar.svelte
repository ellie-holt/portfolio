<script>
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte";
  import GrainSVG from "./GrainSVG.svelte";
  // let gradientClass = $state("from-sky-400 to-blue-600");
</script>

<nav
  class="relative p-0 2xs:pl-0 flex justify-center 2xs:justify-end navbar z-20 h-14"
>
  <ul
    class="flex items-stretch relative justify-between w-full 2xs:w-5/9 sm:w-6/12 md:w-4-12 text-lg sm:text-xl leading-none font-sans-6 border border-black divide-x divide-black"
  >
    <li class="flex-1 flex relative justify-center">
      <a href="#work" class="px-2 py-4 block text-center w-full">work</a>
    </li>
    <!-- <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span> -->
    <li class="flex-1 flex relative justify-center">
      <a href="#about" class="px-2 py-4 block text-center w-full">about</a>
    </li>
    <!-- <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span> -->
    <li class="flex-1 flex relative justify-center">
      <a href="#contact" class="px-2 py-4 block text-center w-full">contact</a>
    </li>
  </ul>
</nav>

<style>
  /* .navbar::before {
    content: "";
    border-top: 1px dashed var(--color-black);
    position: absolute;
    inset: 0;
  }

  .navbar::after {
    content: "";
    border-bottom: 1px dashed var(--color-black);
    filter: url(#noise);
    inset: 0;
    position: absolute;
  } */

  ul::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: white;
  }

  li::before {
    content: "";
    background-color: var(--color-azure-300);
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    transition: all 0.3s ease-in-out;
  }

  li:hover {
    color: white;
  }

  li:hover::before {
    bottom: 0;
    height: 100%;
  }
</style>
