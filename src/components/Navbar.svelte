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
  class="relative z-20 flex justify-center p-0 px-5 2xs:pl-0 2xs:justify-end navbar h-14"
>
  <ul
    class="relative flex items-stretch justify-between w-full font-sans text-lg leading-none border border-black rounded-xl divide-x divide-black 2xs:w-5/9 sm:w-6/12 md:w-4-12 sm:text-xl"
  >
    <li class="relative flex justify-center flex-1">
      <a href="#work" class="block w-full px-2 py-4 text-center">work</a>
    </li>
    <!-- <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span> -->
    <li class="relative flex justify-center flex-1">
      <a href="#about" class="block w-full px-2 py-4 text-center">about</a>
    </li>
    <!-- <span class="text-[3em] relative top-[0.06em] text-tangerine-500">•</span> -->
    <li class="relative flex justify-center flex-1">
      <a href="#contact" class="block w-full px-2 py-4 text-center">contact</a>
    </li>
  </ul>
</nav>

<style>
  .navbar::before {
    content: "";
    border-top: 1px solid #666;
    position: absolute;
    inset: 0;
  }

  .navbar::after {
    content: "";
    border-bottom: 1px solid #666;
    inset: 0;
    position: absolute;
  }

  ul::before {
    content: "";
    position: absolute;
    border-radius: 0.75rem;
    inset: 0;
    z-index: -1;
    background-color: var(--color-aquamarine-100);
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

  /* a {
    --size: 10px;
    --thickness: 2px;
    --gap: 5px;

    padding: calc(var(--gap) + var(--thickness));
    outline: var(--thickness) solid var(--color-aquamarine-600);
    outline-offset: calc(-1 * var(--thickness));
    mask:
      conic-gradient(at var(--size) var(--size), #0000 75%, #000 0) 0 0 /
        calc(100% - var(--size)) calc(100% - var(--size)),
      conic-gradient(#000 0 0) content-box;
    transition: 0.4s;
  }

  a:hover {
    outline-offset: calc(-1 * var(--gap));
  } */
</style>
