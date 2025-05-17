<script lang="js">
  import Hero from "./components/Hero.svelte";
  import Work from "./components/Work.svelte";
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "./lib/ScrollState.svelte.js";
  import ScrollGradient from "./lib/ScrollGradient.svelte";

  let gradientClass = $state("from-sky-400 to-blue-600");
  let navGradientClass = $state("bg-[#fed7aa]");

  $effect(() => {
    initScrollTracking();
  });

  $effect(() => {
    if ($scrollProgress < 10) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#879ed1,#a29ed5,#be9dd3,#d69dcd)]";
    } else if ($scrollProgress < 20) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#a29ed5,#be9dd3,#d69dcd,#eb9ec2)]";
    } else if ($scrollProgress < 30) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#be9dd3,#d69dcd,#eb9ec2,#f4a2bc)]";
    } else if ($scrollProgress < 40) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#d69dcd,#eb9ec2,#f4a2bc,#faa7b5)]";
    } else if ($scrollProgress < 50) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#eb9ec2,#f4a2bc,#faa7b5,#ffadb0)]";
    } else if ($scrollProgress < 60) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#f4a2bc,#faa7b5,#ffadb0,#ffb4b2)]";
    } else if ($scrollProgress < 70) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#faa7b5,#ffadb0,#ffb4b2,#ffbcb4)]";
    } else if ($scrollProgress < 80) {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#ffadb0,#ffb4b2,#ffbcb4,#ffc3b8)]";
    } else {
      gradientClass =
        "bg-[linear-gradient(to_bottom,#ffb4b2,#ffbcb4,#ffc3b8,#ffcabc)]";
    }
  });
</script>

<div
  class={`fixed inset-0 -z-10 transition-all duration-1000 ease-linear ${gradientClass}`}
></div>

<!-- <ScrollGradient /> -->

<section class="hero {isScrolled ? 'scrolled' : ''}">
  <Hero />
</section>

<!-- sticky navbar -->
<nav
  class={`sticky top-0 left-0 right-0 py-4 pr-6 border-b-4 flex transition-all duration-1000 ease-linear justify-end border-black navbar ${gradientClass}`}
>
  <ul class="flex items-center justify-between w-4/9">
    <li><a href="#work" class="link">work</a></li>
    <li><a href="#about" class="link">about</a></li>
    <li><a href="#contact" class="link">contact</a></li>
  </ul>
</nav>

<div class="content">
  <main class="relative flex flex-col items-center justify-center">
    <Work />
    <About />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<style>
  .content {
    position: relative;
    z-index: 1;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .hero {
    animation: scale-down-top 0.5s ease-in-out paused;
    animation-fill-mode: both;
    transition: animation-delay 0.1s ease;
  }

  @keyframes scale-down-top {
    0% {
      transform: scale(1);
      transform-origin: 50% 0%;
    }
    100% {
      transform: scale(0.2);
      transform-origin: 50% 0%;
    }
  }

  .navbar {
    z-index: 2;
    pointer-events: auto;
    overflow: hidden;
    background-attachment: fixed;
    background-size: 100% 100%;
  }
</style>
