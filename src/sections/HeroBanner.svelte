<!-- FILE: src/sections/HeroBanner.svelte -->

<script lang="js">
  import { fade } from "svelte/transition";
  import RoughArrow from "$lib/ui/Arrow/RoughArrow.svelte";

  /** @type {{ bannerIsVisible: boolean }} */
  let { bannerIsVisible = false } = $props();
  $inspect(() => {
    console.log("showHeroBanner:", bannerIsVisible); // Debugging
  });

  const name = { fullName: "Ellie Holt:", firstName: "Ellie:" };
  let viewportWidth = $state(0);
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<a
  href="#page-top"
  aria-label="Scroll to top of page"
  aria-hidden={!bannerIsVisible}
  tabindex={bannerIsVisible ? undefined : -1}
>
  <div
    class={`${bannerIsVisible ? "visible border-b" : "invisible"} group relative flex justify-start 3xs:justify-center sm:justify-start md:justify-center items-center bg-aqua-wash hover:bg-aqua-100 px-6 3xs:px-4 md:px-6 pt-2 pb-3 sm:pl-6 w-full h-banner transition-colors duration-300 ease-in-out`}
    transition:fade|global
  >
    <p
      class="font-mono font-extrabold 4xs:text-[1.35rem] text-xl 3xs:text-2xl leading-[-0.5em] hero-name"
    >
      <span class="-mr-2 md:mr-0">
        {#if viewportWidth > 480}
          {name.fullName}
        {:else}
          {name.firstName}
        {/if}
      </span>
      <span
        class="font-mono-3 font-medium 4xs:text-[1.35rem] text-xl 3xs:text-2xl leading-none 2xs:full"
      >
        <span
          aria-hidden="true"
          role="presentation"
          class="top-[0.06em] relative font-semibold text-[1.5em] text-tang-500 brackets"
          >&lcub;</span
        >

        <span
          class="-mx-2 3xs:-mx-2.5 2xs:-mx-2 md:mx-0 tracking-tight sm:tracking-normal tagline"
        ></span>
        <span class="sr-only">front-end web developer</span>

        <span
          aria-hidden="true"
          role="presentation"
          class="top-[0.06em] relative font-semibold text-[1.5em] text-tang-500 brackets"
          >&rcub;</span
        >
      </span>
    </p>
    <RoughArrow
      direction="up"
      strokeWidth={3}
      class="top-1 md:top-1.5 right-0 sm:right-1 md:right-2 absolute w-11 3xs:w-12 md:w-13 h-11 3xs:h-12 md:h-13 transition-transform group-hover:-translate-y-1 duration-300 ease-in-out"
    />
  </div>
</a>

<style>
  .brackets {
    top: 0.06em;
  }

  .tagline::after {
    content: "front-end web developer";
  }

  @media (max-width: 610px) {
    .tagline::after {
      content: "web developer";
    }
  }

  /* @media (max-width: 447px) {
    .tagline::after {
      content: "web dev";
    }
  } */
</style>
