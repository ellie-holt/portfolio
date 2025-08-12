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
  import noise from "./assets/noise.svg";
  import BackgroundLayer from "./components/BackgroundLayer.svelte";
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
  <BackgroundLayer />
  <div
    class="fixed inset-0 grid-overlay pointer-events-none opacity-20 z-0"
  ></div>

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

<style>
  :root {
    --gradient: radial-gradient(
        at 26% 90%,
        hsla(18, 100%, 76%, 0.64) 0px,
        transparent 50%
      ),
      radial-gradient(at 73% 92%, hsla(221, 86%, 88%, 1) 0px, transparent 50%),
      radial-gradient(at 73% 42%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
      radial-gradient(at 92% 7%, hsla(160, 88%, 86%, 1) 0px, transparent 50%),
      radial-gradient(at 43% 2%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
      radial-gradient(at 84% 67%, hsla(18, 100%, 87%, 1) 0px, transparent 50%),
      radial-gradient(at 13% 62%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
      radial-gradient(
        at 15% 29%,
        hsla(221, 92%, 80%, 0.69) 0px,
        transparent 50%
      ),
      radial-gradient(at 9% 15%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
      radial-gradient(
        at 61% 53%,
        hsla(159, 86%, 74%, 0.78) 0px,
        transparent 50%
      );
  }

  .grid-overlay {
    background-image: linear-gradient(
        rgba(167, 192, 205, 0.6) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(167, 192, 205, 0.6) 1px, transparent 1px);
    background-size: 10px 10px;
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
    border-left: 1px solid var(--color-azure-ink);
    border-right: 1px solid var(--color-azure-ink);
  }

  .wrapper::after {
    z-index: 0;
    top: 10px;
    left: 0;
    right: 0;
    bottom: 10px;
    border-top: 1px solid var(--color-azure-ink);
    border-bottom: 1px solid var(--color-azure-ink);
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
      left: 24px;
      right: 24px;
    }
  }

  /* @media screen and (min-width: 1024px) {
    .wrapper::before {
      left: 128px;
      right: 128px;
    }
  } */

  /* @media screen and (min-width: 1280px) {
    .wrapper::before {
      left: 192px;
      right: 192px;
    }
  } */
</style>
