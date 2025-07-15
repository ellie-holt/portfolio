<script>
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte";
  import GrainSVG from "./GrainSVG.svelte";
  import NavLink from "./NavLink.svelte";
  // let gradientClass = $state("from-sky-400 to-blue-600");
</script>

<nav
  class="relative z-20 flex justify-center h-10 p-0 px-5 md:px-8 lg:px-32 xl:px-48 2xs:pl-0 2xs:justify-end navbar 3xs:h-12 md:h-14"
>
  <ul
    class="relative flex items-stretch justify-between w-full font-sans text-lg leading-none 2xs:w-7/12 sm:w-6/12 md:w-5/12 lg:w-4/12 sm:text-xl"
  >
    <NavLink text="about" link="#about" />
    <NavLink text="work" link="#work" />
    <NavLink text="contact" link="#contact" />
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

  /* ul::before {
    content: "";
    position: absolute;
    border-radius: 0.75rem;
    inset: 0;
    z-index: -1;
    background-color: var(--color-aquamarine-100);
  } */

  /* li {
    background-color: hsla(18, 100%, 97%, 1);
    background-image: radial-gradient(
        at 28% 25%,
        hsla(221, 86%, 88%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 95% 98%, hsla(18, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 51% 37%, hsla(159, 87%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 43% 84%, hsla(160, 88%, 86%, 1) 0px, transparent 50%),
      radial-gradient(at 82% 28%, hsla(221, 93%, 80%, 1) 0px, transparent 50%),
      radial-gradient(at 19% 59%, hsla(18, 100%, 87%, 1) 0px, transparent 50%);
  } */

  /* li::before {
    content: "";
    background-color: var(--color-aquamarine-200);

    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    height: 15px;
    transition: all 0.3s ease-in-out;
  } */

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
