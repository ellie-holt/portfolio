<script lang="js">
  import { deprecation, getCanvasBoundingBox } from "pixi.js";

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
  let { arrowIsHidden = false } = $props();

  let arrowCanvas;

  let arrowCanvasWidth = 150;
  let arrowCanvasHeight = 150;

  $effect(() => {
    if (!arrowCanvas) return;

    const dpr = window.devicePixelRatio || 1;
    arrowCanvas.width = Math.floor(arrowCanvasWidth * dpr);
    arrowCanvas.height = Math.floor(arrowCanvasHeight * dpr);

    const width = arrowCanvasWidth * dpr;
    const height = arrowCanvasHeight * dpr;

    const rc = rough.canvas(arrowCanvas);

    // Arrow shaft
    const x1 = width / 2;
    const y1 = height / 5;
    const x2 = width / 2;
    const y2 = height - height / 5;

    rc.line(x1, y1, x2, y2, {
      stroke: "#f27941",
      strokeWidth: 5 * dpr,
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
      strokeWidth: 5 * dpr,
    });

    // Right side of arrowhead
    const x4 = x2 - headlen * Math.cos(θ + φ);
    const y4 = y2 - headlen * Math.sin(θ + φ);
    rc.line(x2, y2, x4, y4, {
      stroke: "#f27941",
      strokeWidth: 5 * dpr,
    });
  });
</script>

<div class="mx-2.5 xs:mx-5 -mb-15 md:mx-6 lg:mx-6 xl:mx-6">
  <div class="relative top-[1px] px-[1px]">
    <!-- top bar with links?  -->
    <div
      class="relative z-10 h-banner flex items-center bg-white justify-around shadow-border text-md 3xs:text-lg xs:text-xl"
    >
      <a
        href="mailto:eleanorholt97@gmail.com"
        target="_blank"
        class="relative inline-flex items-center font-mono email-link group"
      >
        <span
          class="brackets relative pr-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:translate-x-1 group-hover:scale-90 leading-none"
          >&lcub;</span
        >
        <span
          class="underline transition-all duration-300 ease-in group-hover:decoration-transparent"
          ><span class="break-all">eleanorholt97</span>@gmail.com</span
        >
        <span
          class="brackets relative pl-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:-translate-x-1 group-hover:scale-90 leading-none"
          >&rcub;</span
        >
      </a>
      <div class="flex items-center gap-4 justify-evenly">
        <p class="font-mono text-xl lg:text-2xl xl:text-3xl hidden 2xs:inline">
          Github
        </p>
        <GitHubIcon
          classes="min-w-6 xs:w-full max-w-9 3xs:max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
          link="https://github.com/ellie-holt"
          fill="var(--color-tangerine-500)"
        />
      </div>
    </div>

    <!-- Expandable hero section -->
    <div
      class="flex flex-col relative min-h-[calc(78vh_-_20px)] 3xs:min-h-[80vh] z-0"
    >
      <!-- <div class="flex items-center gap-4 p-6 justify-evenly">
        <p class="font-mono text-xl lg:text-2xl xl:text-3xl hidden 2xs:inline">
          Github
        </p>
        <GitHubIcon
          classes="min-w-6 xs:w-full max-w-9 3xs:max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
          link="https://github.com/ellie-holt"
          fill="var(--color-tangerine-500)"
        />
      </div> -->
      <div
        class="absolute bottom-0 left-0 right-0 top-auto flex flex-col justify-end items-center leading-none"
      >
        <a href="index.html">
          <h1
            class="text-[26vw] text-center 3xs:text-left 3xs:text-[13vw] lg:text-[12vw] xl:text-[11vw] font-bold row-start-1 col-start-1 col-span-2 leading-none"
          >
            Ellie Holt:
          </h1>
        </a>
        <h2
          class="font-mono font-medium text-black row-start-2 col-span-2 leading-snug whitespace-nowrap"
        >
          <span
            class="text-[11vw] 4xs:text-[11.5vw] 3xs:text-[12vw] 2xs:text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw] text-[#f27941] relative top-0.5 3xs:top-1 2xs:top-1.5 xs:top-2 lg:top-2.5 xl:top-3 left-5"
            >{`{`}</span
          >
          <span
            class="text-[7.7vw] 4xs:text-[8vw] 3xs:text-[8.5vw] 2xs:text-[5vw] lg:text-[4.5vw] xl:text-[4vw]"
            ><span class="2xs:inline hidden">front-end</span>
            web developer</span
          >

          <span
            class="text-[11vw] 4xs:text-[11.5vw] 3xs:text-[12vw] 2xs:text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw] text-[#f27941] relative top-0.5 3xs:top-1 2xs:top-1.5 xs:top-2 lg:top-2.5 xl:top-3 right-5"
            >{`}`}</span
          >
        </h2>
        <div
          class={`${arrowIsHidden ? "invisible" : "visible"} relative z-30 group pointer-events-auto 2xs:bottom-0 bottom-2`}
        >
          <a href="#about" aria-label="Scroll down">
            <canvas
              bind:this={arrowCanvas}
              class="2xs:w-[150px] 2xs:h-[150px] w-[100px] h-[100px] group-hover:translate-y-2 transition-transform duration-300 ease-in-out [image-rendering:smooth]"
            >
            </canvas></a
          >
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
