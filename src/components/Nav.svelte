<script>
  import {
    scrollY,
    scrollDirection,
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte";

  let gradientClass = $state("from-sky-400 to-blue-600");

  $effect(() => {
    initScrollTracking();
  });

  $effect(() => {
    if ($scrollProgress < 20) {
      gradientClass = "bg-[#fed7aa] bg-radial-[circle_at_40%_20%,_#fcd34d_30%]"; // soft peach + sunrise glow
    } else if ($scrollProgress < 40) {
      gradientClass = "bg-[#fdba74] bg-radial-[circle_at_30%_30%,_#fbbf24_35%]"; // richer dawn orange
    } else if ($scrollProgress < 60) {
      gradientClass = "bg-[#fef08a] bg-radial-[circle_at_50%_50%,_#fde68a_30%]"; // soft morning yellow
    } else if ($scrollProgress < 80) {
      gradientClass =
        "bg-[#bae6fd] bg-radial-[circle_at_50%_60%,_#93c5fd_30%,]"; // pale sky blue
    } else {
      gradientClass =
        "bg-[#60a5fa] bg-radial-[circle_at_50%_20%,_#3b82f6_30%,]"; // full morning/daylight blue
    }
  });
</script>

<div class="h-full w-full navbar-wrapper ${gradientClass}">
  <nav
    class="sticky top-0 left-0 right-0 py-6 pr-6 border-4 flex justify-end border-black navbar"
  >
    <ul class="flex items-center justify-between w-5/12">
      <li><a href="#work" class="link">work</a></li>
      <li><a href="#about" class="link">about</a></li>
      <li><a href="#contact" class="link">contact</a></li>
    </ul>
  </nav>
</div>

<style>
  a {
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 1rem;
  }
  .navbar {
    background: transparent;
    z-index: 10;
    pointer-events: auto;
  }
  .navbar-wrapper {
    position: sticky;
    z-index: 10;
  }
</style>
