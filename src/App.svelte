<script lang="js">
  import Hero from "./components/Hero.svelte";
  import HeroBanner from "./components/HeroBanner.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Work from "./components/Work.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import GrainyGradient from "./components/GrainyGradient.svelte";
  import GrainCanvas from "./components/GrainCanvas.svelte";
  import GrainWebGl from "./components/GrainWebGL.svelte";
  import { onMount } from "svelte";
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "./lib/ScrollState.svelte.js";
  import { fade } from "svelte/transition";

  // let heroHeight = $state(0);
  // let navHeight = $state(0);

  let heroTrigger = $state(null);
  let showHeroBanner = $state(false);

  $effect(() => {
    if (!heroTrigger) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        showHeroBanner =
          entry.isIntersecting && entry.boundingClientRect.top === 0;
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px",
        threshold: 1.0,
      }
    );
    observer.observe(heroTrigger);
    return () => observer.disconnect();
  });

  onMount(() => {
    const cleanup = initScrollTracking();
    return cleanup;
  });
</script>

<div class="relative inset-0 min-h-screen w-full min-w-screen -z-10">
  <div class="background-gradient"></div>
  <GrainWebGl />
  <!-- <GrainyGradient classes="absolute inset-0 w-max min-w-screen min-h-full" /> -->

  <!-- HEADER: BIG HERO-->
  <header class="relative z-10">
    <section id="hero" class="hero top-0 w-full pb-4 border-black pt-8">
      <Hero />
    </section>
  </header>

  <!-- sticky hero banner and navbar -->
  <section
    class="sticky left-0 right-0 top-0 z-20 grid grid-cols-1 grid-rows-[auto_1fr]"
  >
    <div
      bind:this={heroTrigger}
      class="hero-trigger absolute top-0 left-0 h-0 pointer-events-none z-20"
    ></div>

    <HeroBanner bannerIsVisible={showHeroBanner} />

    <Navbar />
  </section>

  <!-- MAIN CONTENT -->
  <div class={`content relative z-10 `}>
    <main class="relative flex flex-col justify-center">
      <Work />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</div>

<svg class="absolute inset-0" aria-hidden="true" focusable="false">
  <filter id="heading-noise">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.7"
      numOctaves="2"
      stitchTiles="stitch"
      result="turbulence"
    />

    <feComposite
      operator="in"
      in="turbulence"
      in2="SourceAlpha"
      result="composite"
    />

    <feColorMatrix in="composite" type="luminanceToAlpha" />
    <feBlend in="SourceGraphic" in2="composite" mode="screen" />
  </filter>
</svg>

<style>
  /* :global(:root) {
    background-color: var(--color-aquamarine-100);
  } */

  .navbar {
    pointer-events: auto;
    overflow: hidden;
    /* background-attachment: fixed; */
    background-size: 100% 100%;
  }

  .background-gradient {
    position: absolute;
    inset: 0;
    z-index: -2;
    background: linear-gradient(
      in oklch to top,
      var(--color-azure-300),
      var(--color-tangerine-200)
    );
    background-size: cover;
    pointer-events: none;
  }
</style>
