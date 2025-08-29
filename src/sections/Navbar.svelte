<!-- FILE: src/sections/Navbar.svelte -->

<script>
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "$lib/state/ScrollState.svelte";
  import NavLink from "./NavLink.svelte";

  let { navbarIsScrolled = false } = $props();
  $inspect(() => {
    console.log("navbarIsScrolled:", navbarIsScrolled); // Debugging
  });
</script>

<nav
  class={`${navbarIsScrolled ? "" : "shadow-border"} relative z-20 h-banner p-0 px-2.5 xs:px-5 md:px-6 lg:px-6 xl:px-6 2xs:pl-0 navbar`}
>
  <div class="flex justify-center 2xs:justify-end h-full">
    <ul
      class={`${navbarIsScrolled ? "bg-white" : "bg-transparent"} relative flex items-stretch justify-between w-full font-sans text-lg leading-none 2xs:w-7/12 sm:w-6/12 md:w-6/12 lg:w-4/12 sm:text-xl collapse-border`}
    >
      <NavLink text="about" link="#about" colourClass="bg-tang-200" />
      <NavLink text="work" link="#work" colourClass="bg-aqua-200" />
      <NavLink text="contact" link="#contact" colourClass="bg-azure-200" />
    </ul>
  </div>
</nav>

<style>
  .navbar::before {
    content: "";
    border-top: 1px solid var(--color-black);
    position: absolute;
    inset: 0;
  }

  /* .navbar::after {
    content: "";
    border-bottom: 1px solid var(--color-black);
    inset: 0;
    position: absolute;
  } */
</style>
