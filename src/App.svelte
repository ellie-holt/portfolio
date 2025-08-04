<script lang="js">
  import Hero from "./components/Hero.svelte";
  import HeroBanner from "./components/HeroBanner.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Work from "./components/Work.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import GrainSVG from "./components/GrainSVG.svelte";
  import GrainCanvas from "./components/GrainCanvas.svelte";
  import BackgroundGrain from "./components/BackgroundGrain.svelte";
  import GrainBackground from "./components/GrainBackground.svelte";
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

<div
  class="relative inset-0 z-0 w-full min-h-screen pointer-events-auto wrapper"
>
  <!-- <GrainBackground opacity={0.2} speed={100} resolution={0.7} /> -->

  <div class="grainy-gradient -z-10"></div>
  <!-- <BackgroundGrain mode="auto" /> -->

  <!-- HEADER: BIG HERO-->
  <header class="relative z-10">
    <section id="hero" class="top-0 w-full pt-2.5 xs:pt-5 border-black hero">
      <Hero />
    </section>
  </header>

  <!-- sticky hero banner and navbar -->
  <section
    class="sticky left-0 right-0 top-0 z-20 grid grid-cols-1 grid-rows-[auto_1fr]"
  >
    <div
      bind:this={heroTrigger}
      class="absolute top-0 left-0 z-0 h-0 pointer-events-none hero-trigger"
    ></div>

    <HeroBanner bannerIsVisible={showHeroBanner} />

    <Navbar />
  </section>

  <!-- MAIN CONTENT -->
  <div class={`content relative z-10`}>
    <main class="relative flex flex-col justify-center">
      <About />
      <Work />
      <Contact />
    </main>
    <Footer />
  </div>
</div>

<svg class="absolute inset-0 hidden svg" aria-hidden="true" focusable="false">
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

<svg
  class="absolute inset-0 hidden svg"
  aria-hidden="true"
  focusable="false"
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg"
>
  <filter id="noise">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="3"
      result="turbulence"
    />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="6.3"
      xChannelSelector="R"
      yChannelSelector="G"
    />
  </filter>
</svg>

<style>
  .background-gradient {
    position: absolute;
    inset: 0;
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
    background-size: cover;
  }

  .grainy-gradient {
    inset: 0;
    position: absolute;
    filter: contrast(120%) brightness(160%);
    background-color: hsla(18, 100%, 97%, 1);

    background: radial-gradient(
        circle at -35% -40%,
        hsl(160, 89%, 65%),
        rgba(0, 255, 0, 0) 70%
      ),
      radial-gradient(
        circle at 123% -40%,
        hsl(18, 100%, 55%),
        rgba(255, 255, 0, 0) 50%
      ),
      radial-gradient(
        circle at 33% 138%,
        hsl(221, 87%, 60%),
        rgba(255, 255, 255, 0) 60%
      ),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  .wrapper::before,
  .wrapper::after {
    content: "";
    position: absolute;
    pointer-events: none;
  }

  .wrapper::before {
    z-index: 20;
    top: 0;
    left: 10px;
    right: 10px;
    bottom: 0;
    border-left: 2px solid var(--color-aquamarine-muted);
    border-right: 2px solid var(--color-aquamarine-muted);
  }

  .wrapper::after {
    z-index: 0;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 10px;
    border-top: 2px solid var(--color-aquamarine-muted);
    border-bottom: 2px solid var(--color-aquamarine-muted);
  }

  @media screen and (min-width: 576px) {
    .wrapper::before {
      left: 20px;
      right: 20px;
    }
    .wrapper::after {
      top: 20px;
      bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper::before {
      left: 32px;
      right: 32px;
    }
  }

  @media screen and (min-width: 1024px) {
    .wrapper::before {
      left: 128px;
      right: 128px;
    }
  }

  @media screen and (min-width: 1280px) {
    .wrapper::before {
      left: 192px;
      right: 192px;
    }
  }
</style>
