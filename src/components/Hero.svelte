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

  // $effect(() => {
  //   initScrollTracking();
  // });
  isScrolled.subscribe(($isScrolled) => {
    console.log("isScrolled:", $isScrolled); // Debugging
  });
</script>

<div class="px-2.5 xs:px-5 -mb-15 md:px-8 lg:px-32 xl:px-48">
  <div
    class="background-gradient relative top-[1px] grid hero-grid grid-cols-12 grid-rows-12 gap-[4px] overflow-hidden border-4 border-b-0 border-aquamarine-muted-opaque"
  >
    <div
      class="grid col-start-9 col-end-13 row-start-1 row-end-5 grid-cols-subgrid grid-rows-auto sm:col-start-10 sm:row-end-4 2xl:row-end-3"
    >
      <!-- github link -->
      <div
        class="relative z-10 flex items-center justify-end col-start-1 pr-2 bg-white -col-end-1 gap-x-2 lg:gap-x-4 element-border"
      >
        <p class="font-mono text-xl lg:text-2xl xl:text-3xl">Github</p>
        <GitHubIcon
          classes="min-w-8 xs:w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
          link="https://github.com/ellie-holt"
        />
      </div>

      <!-- cv link -->
      <div
        class="flex items-center justify-end col-start-2 pr-2 bg-white -col-end-1 gap-x-2 lg:gap-x-4 element-border"
      >
        <p class="font-mono text-xl lg:text-2xl xl:text-3xl">CV</p>
        <GitHubIcon
          classes="min-w-8 xs:w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
          link="https://github.com/ellie-holt"
        />
      </div>
    </div>

    <!-- hero title -->
    <div
      class="w-full col-start-2 row-start-3 mx-5 col-span-full row-end-8 contents"
    >
      <h1 class="w-full p-0 mb-0 leading-none contents">
        <svg
          viewBox="0 0 1000 250"
          class="relative z-10 w-full h-full col-start-3 col-end-8 row-start-2 row-end-5 leading-none text-black bg-white fill-current element-border"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- <clipPath id="clip-text">
            <rect id="clip-rect-ellie" x="0" y="0" width="0" height="200" />
          </clipPath> -->
          </defs>

          <text
            x="0%"
            y="50%"
            text-anchor="start"
            dominant-baseline="central"
            font-size="320"
            font-family="'IBM Plex Mono', monospace"
            font-weight="500"
            clip-path="url(#clip-text)"
            preserveAspectRatio="none"
          >
            Ellie
          </text>

          <script>
            const textElement = document.querySelector("text");
            const clipRect = document.getElementById("clip-rect-ellie");
            const fullWidth = textElement.getBBox().width;
            let currentChar = 0;
            function typeText() {
              if (currentChar < textElement.textContent.length) {
                const charBox = textElement.getExtentOfChar(currentChar);
                clipRect.setAttribute("width", charBox.x + charBox.width);
                currentChar++;
                setTimeout(typeText, 100); // Adjust typing speed here
              }
            }
            typeText();
          </script>
        </svg>
        <svg
          viewBox="0 0 1000 250"
          class="relative z-10 w-full h-full col-start-5 col-end-10 row-start-5 leading-none text-black bg-white fill-current element-border row-end-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <!-- <clipPath id="clip-text">
            <rect id="clip-rect-holt" x="0" y="0" width="0" height="200" />
          </clipPath> -->
          </defs>

          <text
            x="5%"
            y="50%"
            dominant-baseline="central"
            text-anchor="start"
            font-size="320"
            font-family="'IBM Plex Mono', monospace"
            font-weight="500"
            clip-path="url(#clip-text)"
            preserveAspectRatio="none"
          >
            Holt:
          </text>

          <script>
            const textElement = document.querySelector("text");
            const clipRect = document.getElementById("clip-rect-holt");
            const fullWidth = textElement.getBBox().width;
            let currentChar = 0;
            function typeText() {
              if (currentChar < textElement.textContent.length) {
                const charBox = textElement.getExtentOfChar(currentChar);
                clipRect.setAttribute("width", charBox.x + charBox.width);
                currentChar++;
                setTimeout(typeText, 100); // Adjust typing speed here
              }
            }
            typeText();
          </script>
        </svg>
      </h1>
      <!-- hero image -->
    </div>

    <!-- hero subtitle -->
    <div
      class="col-start-5 col-end-12 row-start-8 row-end-10 text-[7vw] xs:text-[6vw] sm:text-[9vw] xl:text-[4rem] font-mono contents"
    >
      <!-- all font sizes * 1.5 for the first line due to svg sizing -->
      <h2 class="font-mono font-medium leading-none contents">
        <svg
          viewBox="0 0 1100 100"
          class="relative z-10 w-full h-full col-start-6 col-end-10 leading-none text-black bg-white fill-current element-border row-start-8 row-end-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="0%"
            y="50%"
            dominant-baseline="central"
            text-anchor="start"
            font-size="157.5"
            font-family="'IBM Plex Mono', monospace"
            font-weight="500"
            preserveAspectRatio="xMinYMid slice"
          >
            <tspan font-size="285" fill="#f27941" dy="-0.05em" dx="0.05em"
              >{`{`}</tspan
            ><tspan dy="0.15em" dx="0.15em"> {`front-end`}</tspan>
          </text>
        </svg>
        <svg
          viewBox="0 0 1100 100"
          class="relative z-10 w-full h-full col-start-6 col-end-12 leading-none text-black bg-white fill-current element-border row-start-10 row-end-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="93%"
            y="50%"
            dominant-baseline="central"
            text-anchor="end"
            font-size="105"
            font-family="'IBM Plex Mono', monospace"
            font-weight="500"
            preserveAspectRatio="xMinYMid slice"
          >
            <tspan dx="0.5em">{`web developer`}</tspan><tspan
              font-size="190"
              dx="0.15em"
              dy="-0.08em"
              fill="#f27941">{`}`}</tspan
            >
          </text>
        </svg>
      </h2>
    </div>
    <!-- image -->
    <div
      class="flex col-end-6 row-start-4 row-end-13 md:row-end-11 col-start-2 grayscale-25 max-h-[540px] element-border overflow-hidden"
    >
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
    </div>

    <!-- scroll down arrow -->
    <div
      class="col-start-10 col-end-12 bg-white row-start-8 row-end-10 justify-self-center self-end element-border overflow-hidden"
    >
      <a href="#about" class=""
        ><div
          class="relative text-[10vw] xl:text-[12vw] leading-none cursor-pointer hover:translate-y-2 transition-transform duration-300 ease-in-out z-10"
        >
          ⇩
        </div></a
      >
    </div>
  </div>
</div>

<style>
  .hero-grid {
    background-image: linear-gradient(
        var(--color-aquamarine-muted) 1px,
        transparent 1px,
        transparent calc(100% - 1px),
        var(--color-aquamarine-muted) calc(100% - 1px)
      ),
      linear-gradient(
        90deg,
        var(--color-aquamarine-muted) 1px,
        transparent 1px,
        transparent calc(100% - 1px),
        var(--color-aquamarine-muted) calc(100% - 1px)
      );
    background-size: 8.333333333333334% 8.333333333333334%;
  }
  /* .heading-noise {
    filter: url(#heading-noise);
  } */

  .element-border {
    outline: 4px solid var(--color-aquamarine-muted-opaque);
  }
</style>
