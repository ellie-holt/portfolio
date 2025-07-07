<script lang="js">
  import { getCanvasBoundingBox } from "pixi.js";

  // import me from "../assets/me.jpeg";
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

<div class="grid grid-cols-12 px-5 -mb-12 grid-rows-12">
  <div
    class="col-start-9 col-end-13 row-start-1 row-end-5 pt-2 flex flex-col gap-y-2 lg:gap-y-4"
  >
    <!-- github icon -->
    <div class="flex items-center justify-end pr-2 gap-x-2 lg:gap-x-4">
      <p class="font-mono text-xl lg:text-2xl xl:text-3xl">Github</p>
      <GitHubIcon
        classes="w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
        link="https://github.com/ellie-holt"
      />
    </div>

    <div class="flex items-center justify-end pr-2 gap-x-2 lg:gap-x-4">
      <p class="font-mono text-xl lg:text-2xl xl:text-3xl">CV</p>
      <GitHubIcon
        classes="w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
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
        class="w-full col-start-2 col-end-9 row-start-2 row-end-5 leading-none text-black fill-current xl:w-5/6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- <clipPath id="clip-text">
            <rect id="clip-rect-ellie" x="0" y="0" width="0" height="200" />
          </clipPath> -->
        </defs>
        <title>Ellie Holt</title>

        <text
          x="0%"
          y="98%"
          dominant-baseline="auto"
          text-anchor="start"
          font-size="250"
          font-family="'IBM Plex Mono', monospace"
          font-weight="500"
          clip-path="url(#clip-text)"
          preserveAspectRatio="none"
          textLength="100%"
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
        class="w-full col-start-5 col-end-12 row-start-5 leading-none text-black fill-current xl:w-5/6 row-end-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- <clipPath id="clip-text">
            <rect id="clip-rect-holt" x="0" y="0" width="0" height="200" />
          </clipPath> -->
        </defs>
        <title>Ellie Holt</title>

        <text
          x="5%"
          y="0%"
          dominant-baseline="hanging"
          text-anchor="start"
          font-size="250"
          font-family="'IBM Plex Mono', monospace"
          font-weight="500"
          clip-path="url(#clip-text)"
          preserveAspectRatio="none"
          textLength="100%"
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
    class="col-start-5 col-end-12 row-start-8 row-end-10 text-[7vw] xs:text-[6vw] sm:text-[9vw] xl:text-[4rem] font-mono relative contents"
  >
    <h2 class="font-mono font-medium leading-none contents">
      <svg
        viewBox="0 0 1100 100"
        class="w-full h-full col-start-5 col-end-12 leading-none text-black fill-current xl:w-6/7 row-start-8 row-end-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="start"
          font-size="100"
          font-family="'IBM Plex Mono', monospace"
          font-weight="500"
          preserveAspectRatio="xMinYMid slice"
        >
          <tspan font-size="150" fill="#f27941">{`{`}</tspan><tspan dy="0.13em">
            {` front-end web`}</tspan
          >
        </text>
      </svg>
      <svg
        viewBox="0 0 1100 100"
        class="w-full h-full col-start-5 col-end-12 leading-none text-black fill-current xl:w-6/7 row-start-10 row-end-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="40%"
          y="63%"
          dominant-baseline="text-top"
          text-anchor="middle"
          font-size="100"
          font-family="'IBM Plex Mono', monospace"
          font-weight="500"
          preserveAspectRatio="xMinYMid meet"
        >
          <tspan>{`developer `}</tspan><tspan
            font-size="150"
            dy="0.08em"
            fill="#f27941">{`}`}</tspan
          >
        </text>
      </svg>
    </h2>
  </div>
  <!-- image -->
  <div
    class="flex w-full h-full col-start-1 col-end-5 row-start-6 bg-aquamarine-100 row-end-13"
  ></div>

  <!-- scroll down arrow -->
  <div class="col-start-11 col-end-12 row-start-9 row-end-13">
    <a href="#about"
      ><div
        class="relative text-[16vw] xl:text-[14vw] leading-none cursor-pointer hover:translate-y-2 transition-transform duration-300 ease-in-out"
      >
        ↓
      </div></a
    >
  </div>
</div>

<style>
  /* .heading-noise {
    filter: url(#heading-noise);
  } */
</style>
