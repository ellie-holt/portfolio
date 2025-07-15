<script lang="js">
  import { getCanvasBoundingBox } from "pixi.js";

  import me from "../assets/me.jpeg";
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

<div
  class="grid grid-cols-12 px-5 -mb-12 md:px-8 lg:px-32 xl:px-48 grid-rows-12"
>
  <div
    class="flex flex-col col-start-9 col-end-13 row-start-1 row-end-5 pt-2 sm:row-end-4 2xl:row-end-3 gap-y-2 lg:gap-y-4"
  >
    <!-- github icon -->
    <div
      class="flex items-center justify-end flex-grow pr-2 gap-x-2 lg:gap-x-4"
    >
      <p class="font-mono text-xl lg:text-2xl xl:text-3xl">Github</p>
      <GitHubIcon
        classes="min-w-8 xs:w-full max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out"
        link="https://github.com/ellie-holt"
      />
    </div>

    <div
      class="flex items-center justify-end flex-grow pr-2 gap-x-2 lg:gap-x-4"
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
        class="w-full col-start-2 col-end-9 row-start-2 row-end-5 leading-none text-black fill-current xl:w-5/6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <!-- <clipPath id="clip-text">
            <rect id="clip-rect-ellie" x="0" y="0" width="0" height="200" />
          </clipPath> -->
        </defs>

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
          <tspan font-size="150" fill="#f27941" dx="0.2em">{`{`}</tspan><tspan
            dy="0.13em"
            dx="0.3em"
          >
            {`front-end web`}</tspan
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
          <tspan dx="0.5em">{`developer`}</tspan><tspan
            font-size="150"
            dy="0.08em"
            dx="0.3em"
            fill="#f27941">{`}`}</tspan
          >
        </text>
      </svg>
    </h2>
  </div>
  <!-- image -->
  <div
    class="flex col-end-5 row-start-5 row-end-13 md:row-end-12 col-start-2 grayscale-25 p-2 md:p-3 max-h-[520px] mt-4 xl:mt-0 2xl:mt-4"
  >
    <img
      alt="Ellie Holt"
      srcset="{me1080} 1080w,
        {me640} 640w,
        {me320} 320w,
        {me160} 160w"
      src={me}
      class="object-cover object-bottom w-full h-full"
      loading="lazy"
    />
  </div>

  <!-- scroll down arrow -->
  <div
    class="col-start-11 col-end-12 row-start-9 row-end-13 justify-self-center"
  >
    <a href="#about" class=""
      ><div
        class="relative text-[13.5vw] xl:text-[12vw] leading-none cursor-pointer hover:translate-y-2 transition-transform duration-300 ease-in-out z-10"
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
