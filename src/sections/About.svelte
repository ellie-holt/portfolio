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
      "I make accessible, responsive websites with strong layout systems and small, thoughtful details. With a background in education, I bring creativity and a user-focused approach to everything I build.",

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
      from: "A background in education: supporting learners in the classroom and leading online coding lessons.",
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
        subline: "Utility classes, Tailwind, SCSS, colour theming",
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
      { icon: "devicon-jest-plain", label: "Jest" },
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
  class="collapse-border mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0"
>
  <!-- Section Subheading -->
  <div class="flex items-end h-[calc(var(--spacing-banner)_*_2)]">
    <h3 class="px-6 py-1 md:py-2 font-semibold text-2xl md:text-3xl">
      // about
    </h3>
  </div>

  <div class="collapse-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
    <!-- Intro -->
    <section class="sm:col-span-full md:col-span-4 px-6 py-6">
      <h2
        class="font-mono font-bold text-[10vw] text-aquamarine-ink 3xs:text-[9vw] 2xs:text-[7.5vw] md:text-[4.25rem] xl:text-[4.5rem] leading-tight"
      >
        {content.headline}
      </h2>
      <p class="mt-4 text-balance leading-loose">{content.subline}</p>
      <div class="flex flex-wrap gap-2 mt-6 text-sm">
        {#each content.chips as chip}
          <span
            class="bg-white shadow-blocky-xs px-2 py-1 border border-[var(--color-shadow)] font-mono"
            style="--color-shadow: var(--color-tang-300);">{chip}</span
          >
        {/each}
      </div>
    </section>

    <!-- Tools -->
    <section class="md:col-span-2 2xl:col-span-1 sm:col-start-2 px-6 py-6">
      <h4 class="pb-3">Toolbox</h4>
      <ul class="flex flex-wrap gap-3 text-sm">
        {#each content.tools as item}
          <li
            class="inline-flex items-center gap-2 bg-white shadow-blocky-xs px-3 py-2 border border-[var(--color-shadow)]"
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
      class="relative flex flex-col justify-end md:col-span-2 2xl:col-span-1 col-start-1 2xl:col-end-2 lg:row-span-2 2xl:row-span-2 xl:row-span-3 sm:row-start-2 p-[1px]"
    >
      <div
        class="top-[1px] right-[1px] bottom-[30%] left-[1px] absolute flex-1 photo-gradient"
      ></div>

      <!-- Story overlay on small screens -->
      <article
        class="sm:hidden z-20 relative flex flex-col gap-32 -mb-12 sm:mb-0 px-6 py-6"
      >
        <!-- From -->
        <div
          class="flex-1 self-start bg-white p-2 border-2 border-tang-200 w-2/3 xs:w-1/2"
        >
          <h5 class="mb-2 font-mono font-bold">From</h5>
          <p class="leading-relaxed">{content.story.from}</p>
        </div>

        <!-- Arrow -->
        {#if viewportWidth >= 576}
          <RoughJourneyArrow
            class="top-1/2 left-1/2 absolute w-75 h-30 -translate-x-1/2 -translate-y-1/2"
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
            class="top-1/2 left-1/2 absolute w-45 h-30 -translate-x-1/2 -translate-y-1/2"
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
          class="self-end bg-white p-2 border-2 border-tang-200 w-2/3 xs:w-1/2"
        >
          <h5 class="mb-2 font-mono font-bold">To</h5>
          <p class="leading-relaxed">{content.story.to}</p>
        </div>
      </article>

      <div
        class="z-10 relative grayscale-25 max-h-[540px] overflow-hidden mix-blend-darken"
      >
        <picture>
          <source srcset={me1080} media="(min-width: 1024px)" />
          <source srcset={me640} media="(min-width: 320px)" />
          <source srcset={me320} media="(min-width: 160px)" />
          <img
            src={me640}
            alt="Ellie Holt"
            class="w-full h-full object-cover object-top-right"
            loading="lazy"
          />
        </picture>
      </div>
    </section>

    <!-- Story -->
    <section
      class="hidden sm:block sm:col-span-full md:col-span-4 2xl:col-span-1 2xl:col-end-7 2xl:row-start-1 2xl:row-end-3 3xl:row-end-4"
    >
      <article
        class="z-10 relative flex justify-center items-center px-6 py-6 h-full sm:min-h-72 md:min-h-88 lg:min-h-112 xl:min-h-84"
      >
        <!-- From -->
        <div
          class="top-6 md:right-6 lg:right-auto 2xl:right-6 left-6 md:left-auto lg:left-6 absolute bg-white p-2 border-2 border-tang-300 w-2/5 md:w-3/5 2xl:w-auto xl:w-1/3"
        >
          <h5 class="mb-2 font-mono font-bold">From</h5>
          <p class="leading-relaxed">{content.story.from}</p>
        </div>

        <!-- Arrow -->
        {#if viewportWidth >= 1792}
          <!-- 2xl-3xl -->
          <RoughJourneyArrow
            class="z-10 relative w-80 h-80"
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
            class="z-10 relative w-55 h-55"
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
            class="z-10 relative w-90 h-70"
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
            class="z-10 relative w-110 h-70"
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
            class="z-10 relative w-120 h-110"
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
            class="z-10 relative w-75 h-72"
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
          class="right-6 md:right-auto lg:right-6 bottom-6 md:left-6 lg:left-auto 2xl:left-6 absolute bg-white p-2 border-2 border-tang-300 w-2/5 md:w-3/5 2xl:w-auto xl:w-1/3"
        >
          <h5 class="mb-2 font-mono font-bold">To</h5>
          <p class="leading-relaxed">{content.story.to}</p>
        </div>
      </article>
    </section>

    <!-- At a glance -->
    <aside
      class="sm:col-span-full lg:col-span-4 2xl:col-start-2 2xl:row-start-2 px-6 py-6"
    >
      <div class="flex flex-wrap xl:flex-nowrap gap-6">
        {#each content.atAGlance as item}
          <div
            class="flex-1 bg-azure-wash p-6 border-[var(--color-shadow)] border-2 font-mono"
            style="--color-shadow: var(--color-azure-300);"
          >
            <h5 class="mb-2 font-bold">{item.tagline}</h5>
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
            class="inline-flex items-center gap-2 bg-white shadow-blocky-xs px-3 py-2 border border-[var(--color-shadow)]"
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
      class="flex justify-end items-end md:col-span-2 2xl:col-span-3 3xl:col-span-2 px-6 py-6"
    >
      <LinkButton href={content.ctaHref} class="bg-white text-xl"
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
