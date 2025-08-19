<script lang="js">
  import rough from "roughjs";
  import { slide, fly, fade } from "svelte/transition";
  // import {
  //   isScrolled,
  //   scrollProgress,
  //   initScrollTracking,
  // } from "../lib/ScrollState.svelte.js";
  /** @type {{ bannerIsVisible: boolean }} */
  let { bannerIsVisible = false } = $props();
  $inspect(() => {
    console.log("showHeroBanner:", bannerIsVisible); // Debugging
  });
  let arrowCanvas;
  $effect(() => {
    if (!arrowCanvas) return;

    arrowCanvas.width = 80;
    arrowCanvas.height = 100;

    const width = arrowCanvas.width;
    const height = arrowCanvas.height;

    const rc = rough.canvas(arrowCanvas);

    // 1) Arrow shaft
    const x1 = width / 2;
    const y1 = height - height / 5;
    const x2 = width / 2;
    const y2 = height / 5;

    rc.line(x1, y1, x2, y2, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Arrowhead length and angle
    const headlen = height / 4;
    const θ = Math.atan2(y2 - y1, x2 - x1);
    const φ = Math.PI / 6; // 30°

    // Left side of arrowhead
    const x3 = x2 - headlen * Math.cos(θ - φ);
    const y3 = y2 - headlen * Math.sin(θ - φ);
    rc.line(x2, y2, x3, y3, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Right side of arrowhead
    const x4 = x2 - headlen * Math.cos(θ + φ);
    const y4 = y2 - headlen * Math.sin(θ + φ);
    rc.line(x2, y2, x4, y4, {
      stroke: "#f27941",
      strokeWidth: 5,
    });
  });
</script>

<a href="#page-top">
  <div
    class={`${bannerIsVisible ? "visible" : "invisible"} group flex items-center justify-between md:justify-center sm:justify-between 3xs:justify-around pt-2 pb-3 sm:pl-6 xs:pl-4 2xs:pl-6 3xs:pl-2 pl-4 sm:pr-2 xs:pr-1 3xs:pr-0 pr-1 h-banner w-full bg-aquamarine-wash`}
    transition:fade|global
  >
    <h1
      class="text-xl 4xs:text-[1.35rem] 3xs:text-2xl font-extrabold hero-title font-mono leading-[-0.5em]"
    >
      Ellie Holt<span class="-mr-2 3xs:-mr-3 xs:-mr-2 sm:mr-0">:</span>

      <span
        class="text-xl font-medium leading-none 4xs:text-[1.35rem] 3xs:text-2xl font-mono-3 2xs:full"
      >
        <span
          class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em]"
          >&lcub;</span
        >

        <span
          class="-mx-2 tracking-tight tagline sm:tracking-normal 3xs:-mx-2.5 2xs:-mx-2 md:mx-0"
        ></span>

        <span
          class="brackets text-tangerine-500 font-semibold relative top-[0.06em] text-[1.5em]"
          >&rcub;</span
        >
      </span>
    </h1>
    <canvas
      bind:this={arrowCanvas}
      class="relative top-0.5 w-11 h-11 3xs:h-13 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out"
    ></canvas>
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

  @media (max-width: 447px) {
    .tagline::after {
      content: "web dev";
    }
  }
</style>
