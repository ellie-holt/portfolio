<!-- FILE: src/components/About.svelte -->
<script lang="js">
  import RoughJourneyArrow from "$lib/ui/Arrow/RoughJourneyArrow.svelte";
  import LinkButton from "$lib/ui/Button/LinkButton.svelte";
  import me160 from "../assets/me-160.webp";
  import me320 from "../assets/me-320.webp";
  import me640 from "../assets/me-640.webp";
  import me1080 from "../assets/me-1080.webp";

  const content = {
    headline: "Hi, I'm Ellie — a front-end web developer.",

    subline:
      "I build accessible, responsive interfaces with strong layout systems and small, thoughtful details. I like turning designs into fast, tidy code that feels good to use.",

    chips: ["London, UK", "Open to junior roles and freelance projects"],

    tools: [
      { icon: "devicon-react-original", label: "React" },
      { icon: "devicon-svelte-plain", label: "Svelte" },
      { icon: "devicon-tailwindcss-original", label: "Tailwind CSS" },
      { icon: "devicon-javascript-plain", label: "JavaScript (ES6+)" },
      { icon: "devicon-html5-plain", label: "HTML" },
      { icon: "devicon-css3-plain", label: "CSS / SCSS" },
      { icon: "devicon-axios-plain", label: "Axios" },
      { icon: "devicon-git-plain", label: "Git & GitHub" },
      { icon: "devicon-figma-plain", label: "Figma" },
      { icon: "devicon-storybook-plain", label: "Storybook" },
    ],

    story: {
      photoAlt: "Ellie Holt portrait",
      caption: "Hi 👋",
      from: "A background in education: supporting learners in the classroom and leading online coding lessons",
      to: "Teaching myself front-end development: building creative, responsive websites from scratch.",
    },

    atAGlance: [
      {
        tagline: "Responsive layouts:",
        subline: "CSS Grid, Flexbox, media queries",
      },
      {
        tagline: "Accessibility first:",
        subline: "Semantic HTML,  WCAG 2.2, focus states, keyboard paths",
      },
      {
        tagline: "Design systems and styling:",
        subline: "Utility classes, Tailwind, typography, colour theory",
      },
      {
        tagline: "Modern JavaScript + frameworks:",
        subline: "React, Svelte, ES modules",
      },
    ],

    learning: [
      { icon: "devicon-nextjs-plain", label: "Next.js" },
      { icon: "devicon-mysql-plain", label: "Databases (MySQL, PostgreSQL)" },
      { icon: "devicon-typescript-plain", label: "TypeScript" },
    ],

    ctaText: "Get in touch →",
    ctaHref: "#contact",
  };

  let viewportWidth = $state(0);
  $inspect(viewportWidth);
</script>

<svelte:window bind:innerWidth={viewportWidth} />

<section
  id="about"
  class="mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0 collapse-border"
>
  <div class="h-[calc(var(--spacing-banner)_*_2)] flex items-end">
    <h3 class="md:py-4 py-3 px-6 md:text-3xl text-2xl font-semibold">
      // about
    </h3>
  </div>

  <div class="collapse-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
    <!-- Intro -->
    <section class="sm:col-span-full md:col-span-4 px-6 py-6">
      <h2
        class="font-mono font-bold text-aquamarine-ink leading-tight text-[10vw] 3xs:text-[9vw] 2xs:text-[7.5vw] md:text-[4.25rem] xl:text-[4.5rem]"
      >
        {content.headline}
      </h2>
      <p class="leading-loose mt-4 text-balance">{content.subline}</p>
      <div class="mt-6 flex flex-wrap gap-2 text-sm">
        {#each content.chips as chip}
          <span
            class="px-2 py-1 border border-[var(--color-shadow)] shadow-blocky-xs bg-white font-mono"
            style="--color-shadow: var(--color-tang-300);">{chip}</span
          >
        {/each}
      </div>
    </section>

    <!-- Tools -->
    <section class="sm:col-start-2 md:col-span-2 2xl:col-span-1 px-6 py-6">
      <h4 class="pb-3">Toolbox</h4>
      <ul class="flex flex-wrap gap-3 text-sm">
        {#each content.tools as item}
          <li
            class="inline-flex shadow-blocky-xs items-center gap-2 px-3 py-2 border bg-white border-[var(--color-shadow)]"
            style="--color-shadow: var(--color-azure-300);"
          >
            {#if item.icon}
              <i class={item.icon} aria-hidden="true"></i>
            {/if}
            <span>{item.label}</span>
          </li>
        {/each}
      </ul>
    </section>

    <!-- Photo -->
    <section
      class="relative md:col-span-2 sm:row-start-2 col-start-1 2xl:col-end-2 lg:row-span-2 xl:row-span-3 2xl:col-span-1 2xl:row-span-2 p-[1px] flex flex-col justify-end"
    >
      <div
        class="photo-gradient flex-1 absolute top-[1px] left-[1px] right-[1px] bottom-[30%]"
      ></div>

      <!-- Story overlay on small screens -->
      <article
        class="sm:hidden px-6 py-6 relative z-20 flex gap-32 flex-col -mb-12 sm:mb-0"
      >
        <!-- From -->
        <div
          class="bg-white border-2 border-tang-200 p-2 self-start flex-1 w-2/3 xs:w-1/2"
        >
          <h5 class="font-mono font-bold mb-2">From</h5>
          <p class="leading-relaxed">{content.story.from}</p>
        </div>

        <!-- Arrow -->
        {#if viewportWidth >= 576}
          <RoughJourneyArrow
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-30 w-75"
            wiggles={1}
            amplitude={0.4}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={20}
            headLen={28}
          />
        {:else}
          <RoughJourneyArrow
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-30 w-45"
            wiggles={1}
            amplitude={0.4}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={20}
            headLen={28}
          />
        {/if}

        <!-- To -->
        <div
          class="bg-white border-2 border-tang-200 p-2 self-end w-2/3 xs:w-1/2"
        >
          <h5 class="font-mono font-bold mb-2">To</h5>
          <p class="leading-relaxed">{content.story.to}</p>
        </div>
      </article>

      <div
        class="relative z-10 mix-blend-darken grayscale-25 max-h-[540px] overflow-hidden"
      >
        <picture>
          <source srcset={me1080} media="(min-width: 1024px)" />
          <source srcset={me640} media="(min-width: 320px)" />
          <source srcset={me320} media="(min-width: 160px)" />
          <img
            src={me640}
            alt="Ellie Holt"
            class="object-cover object-top-right w-full h-full"
            loading="lazy"
          />
        </picture>
      </div>
    </section>

    <!-- Story -->
    <section
      class="hidden sm:block sm:col-span-full md:col-span-4 2xl:col-end-7 2xl:col-span-1 2xl:row-start-1 2xl:row-end-3 3xl:row-end-4"
    >
      <article
        class="px-6 py-6 h-full sm:min-h-72 md:min-h-88 lg:min-h-112 xl:min-h-84 relative z-10 flex items-center justify-center"
      >
        <!-- From -->
        <div
          class=" p-2 absolute left-6 top-6 md:right-6 lg:right-auto lg:left-6 md:left-auto 2xl:right-6 w-2/5 md:w-3/5 xl:w-1/3 2xl:w-auto bg-white border-2 border-tang-200"
        >
          <h5 class="font-mono font-bold mb-2">From</h5>
          <p class="leading-relaxed">{content.story.from}</p>
        </div>

        <!-- Arrow -->
        {#if viewportWidth >= 1792}
          <!-- 2xl-3xl -->
          <RoughJourneyArrow
            class="relative z-10 w-80 h-80"
            wiggles={1.5}
            amplitude={0.18}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={90}
            headLen={28}
          />
        {:else if viewportWidth >= 1536}
          <!-- 2xl-3xl -->
          <RoughJourneyArrow
            class="relative z-10 w-55 h-55"
            wiggles={1}
            amplitude={0.2}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={90}
            headLen={28}
          />
        {:else if viewportWidth >= 1280}
          <!-- xl-2xl -->
          <RoughJourneyArrow
            class="relative z-10 w-90 h-70"
            wiggles={1}
            amplitude={0.3}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={355}
            headLen={28}
          />
        {:else if viewportWidth >= 1024}
          <!-- lg-xl -->
          <RoughJourneyArrow
            class="relative z-10 sm:h-72 sm:w-75 md:h-110 h-30 w-80 md:w-120 lg:h-70 lg:w-110"
            wiggles={2}
            amplitude={0.2}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={20}
            headLen={28}
          />
        {:else if viewportWidth >= 768}
          <!-- md-lg -->
          <RoughJourneyArrow
            class="relative z-10 md:h-110 h-30 w-80 md:w-120  "
            wiggles={1}
            amplitude={0.4}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={60}
            headLen={28}
          />
        {:else}
          <!-- sm-md -->
          <RoughJourneyArrow
            class="relative z-10 sm:h-72 sm:w-75 h-30 w-80 md:w-90"
            wiggles={1}
            amplitude={0.3}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            rotation={348}
            headLen={28}
          />
        {/if}
        <!-- To -->
        <div
          class="p-2 absolute right-6 bottom-6 md:right-auto md:left-6 lg:left-auto lg:right-6 2xl:left-6 w-2/5 md:w-3/5 xl:w-1/3 2xl:w-auto bg-white border-2 border-tang-200"
        >
          <h5 class="font-mono font-bold mb-2">To</h5>
          <p class="leading-relaxed">{content.story.to}</p>
        </div>
      </article>
    </section>

    <!-- At a glance -->
    <aside
      class="sm:col-span-full lg:col-span-4 2xl:row-start-2 2xl:col-start-2 px-6 py-6"
    >
      <div class="flex flex-wrap xl:flex-nowrap gap-6">
        {#each content.atAGlance as item}
          <div
            class="flex-1 border-2 border-[var(--color-shadow)] bg-azure-wash font-mono p-6"
            style="--color-shadow: var(--color-azure-300);"
          >
            <h5 class="font-bold mb-2">{item.tagline}</h5>
            <p class="font-mono">{item.subline}</p>
          </div>
        {/each}
      </div>
    </aside>

    <!-- Learning -->
    <section class="md:col-span-4 xl:col-span-2 px-6 py-6">
      <h4 class="pb-3">Levelling up</h4>
      <ul class="flex flex-wrap gap-3 text-sm">
        {#each content.learning as item}
          <li
            class="inline-flex shadow-blocky-xs items-center gap-2 px-3 py-2 border bg-white border-[var(--color-shadow)]"
            style="--color-shadow: var(--color-azure-300);"
          >
            {#if item.icon}
              <i class={item.icon} aria-hidden="true"></i>
            {/if}
            <span>{item.label}</span>
          </li>
        {/each}
      </ul>
    </section>

    <!-- Link -->
    <aside
      class="md:col-span-2 2xl:col-span-3 3xl:col-span-2 px-6 py-6 flex items-end justify-end"
    >
      <LinkButton href={content.ctaHref} class="text-xl bg-white"
        >{content.ctaText}
      </LinkButton>
    </aside>
  </div>
</section>

<style>
  i[class^="devicon-"],
  i[class*=" devicon-"] {
    font-size: 1.1em;
    line-height: 1;
  }
  .text-balance {
    text-wrap: balance;
  }

  .photo-gradient {
    background-image: linear-gradient(
      340deg,
      hsla(255, 11%, 93%, 0.7) 0%,
      hsla(240, 10%, 92%, 0.8) 13%,
      hsla(240, 10%, 92%, 0.9) 19%,
      hsl(236deg 10% 91%) 24%,
      hsl(231deg 10% 91%) 28%,
      hsl(227deg 10% 90%) 32%,
      hsl(223deg 10% 89%) 35%,
      hsl(220deg 10% 89%) 39%,
      hsl(214deg 17% 89%) 42%,
      hsl(212deg 24% 89%) 45%,
      hsl(210deg 32% 90%) 48%,
      hsl(209deg 40% 90%) 52%,
      hsl(208deg 49% 90%) 55%,
      hsl(208deg 58% 91%) 58%,
      hsl(207deg 69% 91%) 61%,
      hsla(206, 70%, 91%, 0.9) 65%,
      hsla(208, 70%, 91%, 0.8) 68%,
      hsla(208, 70%, 91%, 0.7) 72%,
      hsla(208, 70%, 91%, 0.6) 76%,
      hsla(208, 70%, 91%, 0.5) 81%,
      hsla(208, 70%, 91%, 0.4) 87%,
      hsla(208, 70%, 91%, 0.3) 100%
    );
  }
</style>
