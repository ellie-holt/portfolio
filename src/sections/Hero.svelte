<!-- FILE: src/sections/Hero.svelte -->

<script lang="js">
  import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
  import RoughArrow from "../lib/ui/Arrow/RoughArrow.svelte";

  let { arrowIsHidden = false } = $props();
</script>

<header
  aria-labelledby="site-title site-tagline"
  class="mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 -mb-14 md:-mb-16"
>
  <div class="collapse-border relative">
    <!-- Top contact links  -->
    <div class="z-10 relative">
      <div
        class="flex justify-center 2xs:justify-between items-center 2xs:px-6 h-banner text-lg 3xs:text-xl"
      >
        <a
          href="mailto:eleanorholt97@gmail.com"
          target="_blank"
          class="group inline-flex relative items-center font-mono email-link"
        >
          <span
            aria-hidden="true"
            role="presentation"
            class="relative pr-[0.2em] font-semibold text-[1.7em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:translate-x-1 duration-300 ease-in brackets"
            >&lcub;</span
          >
          <span
            class="transition-[text-decoration-color] group-hover:decoration-transparent underline duration-300 ease-in"
            ><span class="break-all">eleanorholt97</span>@gmail.com</span
          >
          <span
            aria-hidden="true"
            role="presentation"
            class="relative pl-[0.2em] font-semibold text-[1.7em] text-tang-500 leading-none group-hover:scale-90 transition-transform group-hover:-translate-x-1 duration-300 ease-in brackets"
            >&rcub;</span
          >
        </a>
        <div class="hidden 2xs:flex justify-evenly items-center gap-4">
          <p class="hidden sm:inline font-mono text-xl lg:text-2xl xl:text-3xl">
            Github →
          </p>
          <GitHubIcon
            classes="min-w-6 xs:w-full max-w-9 3xs:max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out motion-reduce:transform-none"
            link="https://github.com/ellie-holt"
            fill="var(--color-tangerine-500)"
          />
        </div>
      </div>
    </div>

    <!-- Expandable hero section -->
    <div
      class="z-0 relative flex flex-col min-h-[calc(78vh_-_20px)] 3xs:min-h-[80vh]"
    >
      <div class="2xs:hidden flex justify-end p-6">
        <GitHubIcon
          classes="min-w-6 xs:w-full max-w-9 3xs:max-w-10 md:max-w-12 lg:max-w-14 min-w-0 hover:rotate-10 transition-transform duration-300 ease-in-out motion-reduce:transform-none"
          link="https://github.com/ellie-holt"
          fill="var(--color-tang-500)"
        />
      </div>
      <div
        class="top-auto right-0 bottom-0 left-0 absolute flex flex-col justify-end items-center leading-none"
      >
        <a href="index.html">
          <h1
            id="site-title"
            class="col-span-2 col-start-1 row-start-1 text-shadow font-bold text-[26vw] text-azure-200 3xs:text-[13vw] lg:text-[12vw] xl:text-[11vw] 3xs:text-left text-center leading-none white"
          >
            Ellie Holt:
          </h1>
        </a>
        <h2
          id="site-tagline"
          class="col-span-2 row-start-2 font-mono font-medium text-black leading-snug whitespace-nowrap"
        >
          <span
            aria-hidden="true"
            class="top-0.5 3xs:top-1 2xs:top-1.5 xs:top-2 lg:top-2.5 xl:top-3 left-3 md:left-5 relative text-[#f27941] text-[11vw] 4xs:text-[11.5vw] 3xs:text-[12vw] 2xs:text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw]"
            >{`{`}</span
          >
          <span
            class="text-[7.7vw] 4xs:text-[8vw] 3xs:text-[8.5vw] 2xs:text-[5vw] lg:text-[4.5vw] xl:text-[4vw]"
            ><span class="hidden 2xs:inline">front-end</span>
            web developer</span
          >

          <span
            aria-hidden="true"
            class="top-0.5 3xs:top-1 2xs:top-1.5 xs:top-2 lg:top-2.5 xl:top-3 right-3 md:right-5 relative text-[#f27941] text-[11vw] 4xs:text-[11.5vw] 3xs:text-[12vw] 2xs:text-[8.5vw] lg:text-[8vw] xl:text-[7.5vw]"
            >{`}`}</span
          >
        </h2>
        <div
          class={`${arrowIsHidden ? "invisible" : "visible"} relative z-30 group pointer-events-auto 2xs:bottom-0 bottom-2`}
        >
          <a href="#about" aria-label="Skip to about section">
            <RoughArrow
              direction="down"
              class="w-[100px] 2xs:w-[150px] h-[100px] 2xs:h-[150px] transition-transform group-hover:translate-y-2 duration-300 ease-in-out [image-rendering:smooth]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  :root {
    --line-color: var(--color-azure-muted);
  }
</style>
