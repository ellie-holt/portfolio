<!-- FILE: src/App.svelte -->

<script lang="js">
  import Hero from "./sections/Hero.svelte";
  import HeroBanner from "./sections/HeroBanner.svelte";
  import Navbar from "./sections/Navbar.svelte";
  import Work from "./sections/Work.svelte";
  import About from "./sections/About.svelte";
  import Contact from "./sections/Contact.svelte";
  import Footer from "./sections/Footer.svelte";

  import { onMount } from "svelte";
  import { initScrollTracking } from "$lib/state/ScrollState.svelte.js";

  let bannerTrigger = $state(null);
  let showHeroBanner = $state(false);
  let changeNavbarStyles = $state(false);
  let hideArrow = $state(false);

  $effect(() => {
    if (!bannerTrigger) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        showHeroBanner = entry.isIntersecting;
        changeNavbarStyles =
          entry.isIntersecting && entry.boundingClientRect.top === 0;
        hideArrow = entry.isIntersecting;
      },
      {
        root: null,
        rootMargin: "0px 0px -100% 0px",
        threshold: 1.0,
      }
    );
    observer.observe(bannerTrigger);
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
  <!-- For page top link-->
  <div id="page-top" class="absolute top-0 left-0 w-full h-0"></div>

  <!-- Mesh gradient background -->
  <div class="fixed mesh-gradient inset-0 pointer-events-none z-0"></div>

  <!-- HEADER: BIG HERO-->
  <header class="relative z-30">
    <section id="hero" class="top-0 w-full pt-2.5 xs:pt-5 border-black hero">
      <Hero arrowIsHidden={hideArrow} />
    </section>
  </header>

  <!-- sticky hero banner and navbar -->
  <section
    class={`sticky left-0 right-0 top-0 ${showHeroBanner ? "z-40" : "z-20"} grid grid-cols-1 grid-rows-[auto_1fr] `}
  >
    <div
      bind:this={bannerTrigger}
      class="absolute top-0 left-0 z-0 h-0 pointer-events-none hero-trigger"
    ></div>

    <HeroBanner bannerIsVisible={showHeroBanner} />

    <Navbar navbarIsScrolled={changeNavbarStyles} />
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
    bottom: 40px;
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
      bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper::before {
      left: 24px;
      right: 24px;
    }
  }

  .mesh-gradient {
    background-color: hsla(165, 0%, 100%, 1);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 962 962' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      radial-gradient(
        circle at 0% 0%,
        hsla(222.04724409448818, 65%, 62%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 20% 0%,
        hsla(221.86046511627907, 100%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 40% 0%,
        hsla(159.8230088495575, 86%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 60% 0%,
        hsla(160, 88%, 86%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 0%,
        hsla(18.688524590163933, 100%, 76%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 100% 0%,
        hsla(19.509202453987726, 100%, 68%, 0.35) 3%,
        transparent 40%
      );
    background-blend-mode: overlay, normal, normal, normal, normal, normal,
      normal;
  }
</style>
