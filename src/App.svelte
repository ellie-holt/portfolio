<script lang="js">
  import Hero from "./sections/Hero.svelte";
  import HeroBanner from "./sections/HeroBanner.svelte";
  import Navbar from "./sections/Navbar.svelte";
  import Work from "./sections/Work.svelte";
  import About from "./sections/About.svelte";
  import Contact from "./sections/Contact.svelte";
  import Footer from "./sections/Footer.svelte";
  import BackgroundLayer from "$lib/ui/Background/BackgroundLayer.svelte";
  import { onMount } from "svelte";
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "$lib/state/ScrollState.svelte.js";
  import { fade } from "svelte/transition";

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
  <div id="page-top" class="absolute top-0 left-0 w-full h-0"></div>

  <!-- MESH BG -->
  <div class="fixed mesh-gradient inset-0 pointer-events-none z-0"></div>

  <!-- <BackgroundLayer /> -->
  <!-- <div
    class="fixed inset-0 grid-overlay pointer-events-none opacity-20 z-0"
  ></div> -->

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

  @keyframes hero-gradient-animation {
    0% {
      --c-0: hsla(150.8823529411765, 52%, 83%, 1);
      --y-0: 80%;
      --x-0: 85%;
      --s-start-0: 9%;
      --s-end-0: 55%;
      --s-start-1: 5%;
      --s-end-1: 72%;
      --c-1: hsla(219.99999999999997, 100%, 82%, 1);
      --y-1: 24%;
      --x-1: 60%;
      --c-2: hsla(297.7941176470588, 100%, 65%, 0.49);
      --s-start-2: 5%;
      --s-end-2: 52%;
      --y-2: 82%;
      --x-2: 13%;
      --s-start-3: 13%;
      --s-end-3: 68%;
      --y-3: 7%;
      --x-3: 24%;
      --c-3: hsla(182, 72%, 68%, 1);
    }

    100% {
      --c-0: hsla(150.8823529411765, 52%, 83%, 1);
      --y-0: 94%;
      --x-0: 31%;
      --s-start-0: 9%;
      --s-end-0: 55%;
      --s-start-1: 5%;
      --s-end-1: 72%;
      --c-1: hsla(220, 82%, 95%, 1);
      --y-1: 25%;
      --x-1: 2%;
      --c-2: hsla(297.7941176470588, 100%, 65%, 0.49);
      --s-start-2: 5%;
      --s-end-2: 52%;
      --y-2: 20%;
      --x-2: 98%;
      --s-start-3: 13%;
      --s-end-3: 68%;
      --y-3: 92%;
      --x-3: 95%;
      --c-3: hsla(182, 72%, 68%, 1);
    }
  }

  @property --c-0 {
    syntax: "<color>";
    inherits: false;
    initial-value: hsla(150.8823529411765, 52%, 83%, 1);
  }

  @property --y-0 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 80%;
  }

  @property --x-0 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 85%;
  }

  @property --s-start-0 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 9%;
  }

  @property --s-end-0 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 55%;
  }

  @property --s-start-1 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 5%;
  }

  @property --s-end-1 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 72%;
  }

  @property --c-1 {
    syntax: "<color>";
    inherits: false;
    initial-value: hsla(219.99999999999997, 100%, 82%, 1);
  }

  @property --y-1 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 24%;
  }

  @property --x-1 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 60%;
  }

  @property --c-2 {
    syntax: "<color>";
    inherits: false;
    initial-value: hsla(297.7941176470588, 100%, 65%, 0.49);
  }

  @property --s-start-2 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 5%;
  }

  @property --s-end-2 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 52%;
  }

  @property --y-2 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 82%;
  }

  @property --x-2 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 13%;
  }

  @property --s-start-3 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 13%;
  }

  @property --s-end-3 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 68%;
  }

  @property --y-3 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 7%;
  }

  @property --x-3 {
    syntax: "<percentage>";
    inherits: false;
    initial-value: 24%;
  }

  @property --c-3 {
    syntax: "<color>";
    inherits: false;
    initial-value: hsla(182, 72%, 68%, 1);
  }

  .animated-gradient {
    --c-0: hsla(150.8823529411765, 52%, 83%, 1);
    --y-0: 80%;
    --x-0: 85%;
    --c-1: hsla(219.99999999999997, 100%, 82%, 1);
    --y-1: 24%;
    --x-1: 60%;
    --c-2: hsla(297.7941176470588, 100%, 65%, 0.49);
    --y-2: 82%;
    --x-2: 13%;
    --y-3: 7%;
    --x-3: 24%;
    --c-3: hsla(182, 72%, 68%, 1);
    background-color: hsla(358.0000000000001, 0%, 100%, 1);
    background-image: radial-gradient(
        circle at var(--x-0) var(--y-0),
        var(--c-0) var(--s-start-0),
        transparent var(--s-end-0)
      ),
      radial-gradient(
        circle at var(--x-1) var(--y-1),
        var(--c-1) var(--s-start-1),
        transparent var(--s-end-1)
      ),
      radial-gradient(
        circle at var(--x-2) var(--y-2),
        var(--c-2) var(--s-start-2),
        transparent var(--s-end-2)
      ),
      radial-gradient(
        circle at var(--x-3) var(--y-3),
        var(--c-3) var(--s-start-3),
        transparent var(--s-end-3)
      );
    animation: hero-gradient-animation 10s linear infinite alternate;
    background-blend-mode: normal, normal, normal, normal;
  }

  .mesh-gradient {
    background-color: hsla(165, 0%, 100%, 1);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 962 962' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      radial-gradient(
        circle at 0% 0%,
        hsla(256, 82%, 77%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 20% 0%,
        hsla(197, 77%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 40% 0%,
        hsla(147, 77%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 60% 0%,
        hsla(88, 77%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 0%,
        hsla(23, 77%, 74%, 0.35) 3.1210986267166043%,
        transparent 40%
      ),
      radial-gradient(
        circle at 100% 0%,
        hsla(234.26470588235304, 100%, 50%, 0.35) 3%,
        transparent 40%
      );
    background-blend-mode: overlay, normal, normal, normal, normal, normal,
      normal;
  }

  .mesh-gradient-2 {
    background-color: hsla(250.1470588235294, 44%, 63%, 1);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1227 1227' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"),
      radial-gradient(
        circle at 98% 97%,
        hsla(59, 85%, 86%, 1) 15%,
        transparent 50.28756377877879%
      ),
      radial-gradient(
        circle at 43% 92%,
        hsla(238, 38%, 78%, 1) 30.780839988590987%,
        transparent 69%
      ),
      radial-gradient(
        circle at 95% 18%,
        hsla(1.0000000000000089, 81%, 89%, 1) 20%,
        transparent 80%
      ),
      radial-gradient(
        circle at 72% 71%,
        hsla(197, 79%, 67%, 1) 11%,
        transparent 69%
      );
    background-blend-mode: overlay, normal, normal, normal, normal;
  }
</style>
