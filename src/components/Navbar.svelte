<script>
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte";
  import GrainyGradient from "./GrainyGradient.svelte";
  // let gradientClass = $state("from-sky-400 to-blue-600");
</script>

<nav
  class="py-0 px-4 2xs:pl-0 2xs:pr-6 border-b-2 border-t-2 flex justify-center 2xs:justify-end border-black border-dashed navbar bg-transparent"
>
  <ul
    class="flex items-center justify-between w-full 2xs:w-6/9 xs:w-5/9 max-w-96 text-xl xs:text-2xl leading-none font-sans-6"
  >
    <li><a href="#work" class="link">work</a></li>
    <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span>
    <li><a href="#about" class="link">about</a></li>
    <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span>
    <li><a href="#contact" class="link">contact</a></li>
  </ul>
</nav>
