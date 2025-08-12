<script lang="js">
  import { getCanvasBoundingBox } from "pixi.js";

  import me160 from "../assets/me-160.webp";
  import me320 from "../assets/me-320.webp";
  import me640 from "../assets/me-640.webp";
  import me1080 from "../assets/me-1080.webp";
  import {
    isScrolled,
    scrollProgress,
    initScrollTracking,
  } from "../lib/ScrollState.svelte.js";
  import GitHubIcon from "./svg/GitHubIcon.svelte";
  import rough from "roughjs";

  isScrolled.subscribe(($isScrolled) => {
    console.log("isScrolled:", $isScrolled); // Debugging
  });

  let arrowCanvas;
  $effect(() => {
    if (!arrowCanvas) return;

    const { width, height } = arrowCanvas.getBoundingClientRect();

    arrowCanvas.width = width;
    arrowCanvas.height = height;

    const rc = rough.canvas(arrowCanvas);

    // 1) Arrow shaft
    const x1 = width / 2;
    const y1 = height / 8;
    const x2 = width / 2;
    const y2 = height - height / 8;

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

<div class="mx-2.5 xs:mx-5 -mb-15 md:mx-6 lg:mx-6 xl:mx-6">
  <div class="relative top-[1px]">
    <!-- top bar with links?  -->
    <div
      class="relative z-10 flex items-center bg-white justify-around border-azure-ink border-b"
    >
      <p class="font-mono text-xl lg:text-2xl xl:text-3xl">Github</p>
      <GitHubIcon
        classes="min-w-8 xs:w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
        link="https://github.com/ellie-holt"
      />
      <p class="font-mono text-xl lg:text-2xl xl:text-3xl">CV</p>
      <GitHubIcon
        classes="min-w-8 xs:w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
        link="https://github.com/ellie-holt"
      />
    </div>

    <!-- Expandable hero section -->
    <div class="flex relative min-h-[84vh] z-0">
      <div
        class="absolute bottom-0 left-0 right-0 top-auto flex flex-col justify-end items-center leading-none"
      >
        <h1
          class="text-[13vw] lg:text-[12vw] xl:text-[11vw] font-bold row-start-1 col-start-1 col-span-2 leading-none"
        >
          Ellie Holt:
        </h1>
        <h2
          class="font-mono font-medium text-black row-start-2 col-span-2 leading-snug"
        >
          <span
            class="text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw] text-[#f27941] relative top-2 left-5"
            >{`{`}</span
          >
          <span class="text-[5vw] lg:text-[4.5vw] xl:text-[4vw]"
            >front-end web developer</span
          >
          <span
            class="text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw] text-[#f27941] relative top-2 right-5"
            >{`}`}</span
          >
        </h2>
        <div class="flex items-center justify-center row-start-1 col-start-2">
          <a href="#about" aria-label="Scroll down">
            <canvas
              bind:this={arrowCanvas}
              class="w-full h-full hover:translate-y-2 transition-transform duration-300 ease-in-out"
            >
            </canvas>
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="flex grayscale-25 max-h-[540px] element-border overflow-hidden">
      <picture>
        <source srcset={me1080} media="(min-width: 1024px)" />
        <source srcset={me640} media="(min-width: 640px)" />
        <source srcset={me320} media="(min-width: 320px)" />
        <source srcset={me160} media="(min-width: 160px)" />
        <img
          src={me640}
          alt="Ellie Holt"
          class="object-cover object-top-right w-[120%] h-[120%]"
        />
      </picture>
    </div> -->
  </div>
</div>

<style>
  :root {
    --line-color: var(--color-azure-muted);
  }
</style>
