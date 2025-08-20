<!-- FILE: src/components/About.svelte -->
<script lang="js">
  // Edit these strings/arrays only — the layout renders from this content.
  import RoughArrow from "./RoughArrow.svelte";
  import RoughJourneyArrow from "./RoughJourneyArrow.svelte";
  const content = {
    headline: "Hi, I'm Ellie — a front-end developer.",
    subline:
      "I build accessible, responsive interfaces with strong layout systems and small, thoughtful details. I like turning designs into fast, tidy code that feels good to use.",
    chips: [
      "London, UK",
      "Open to junior roles",
      "Open to small freelance projects",
      "Accessibility-first",
    ],
    atAGlance: [
      "Layouts that scale: CSS Grid, Flexbox, container queries",
      "Utility-first styling with design tokens & Tailwind",
      "React, Svelte, modern JS",
      "Accessibility by default: semantic HTML, focus states, keyboard paths",
    ],
    tools: [
      { icon: "devicon-react-original", label: "React" },
      { icon: "devicon-svelte-plain", label: "Svelte" },
      { icon: "devicon-tailwindcss-original", label: "Tailwind CSS" },
      { icon: "devicon-javascript-plain", label: "JavaScript (ES6+)" },
      { icon: "devicon-html5-plain", label: "HTML" },
      { icon: "devicon-css3-plain", label: "CSS / SCSS" },
      { icon: "devicon-git-plain", label: "Git & GitHub" },
    ],
    learning: [
      { icon: "devicon-nextjs-plain", label: "Next.js" },
      { icon: "devicon-mysql-plain", label: "Databases (MySQL, PostgreSQL)" },
      { icon: "devicon-typescript-plain", label: "TypeScript" },
    ],
    story: {
      photoAlt: "Ellie Holt portrait",
      caption: "Hi 👋",
      from: "A background in education.",
      to: "Teaching myself front-end development.",
    },
    nowNext: [
      "Now: polishing this portfolio",
      "Exploring: venturing into back-end development",
      "Open to: junior roles & freelance opportunities",
    ],
    ctaText: "Get in touch →",
    ctaHref: "#contact",
  };
</script>

<section
  id="about"
  class="mx-2.5 xs:mx-5 md:mx-6 lg:mx-6 xl:mx-6 scroll-m-15 3xs:scroll-m-14 2xs:scroll-m-0"
>
  <div class="h-[calc(var(--spacing-banner)_*_2)] bg-tang-100 flex items-end">
    <h3 class="md:py-4 py-3 px-6 md:text-3xl text-2xl font-semibold">
      // about
    </h3>
  </div>

  <div
    class="divider divider-rail divider-gap grid grid-cols-1 md:grid-cols-6"
    style="--thick:1px; --line:var(--color-azure-ink); --item-bg:#fff;"
  >
    <!-- Intro -->
    <section class="md:col-span-4 px-6 py-6">
      <h2
        class="font-mono font-bold text-aquamarine-ink leading-tight text-[10vw] 3xs:text-[9vw] 2xs:text-[7.5vw] md:text-[4.25rem] xl:text-[4.5rem]"
      >
        {content.headline}
      </h2>
      <p class="leading-loose mt-4 text-balance">{content.subline}</p>
      <div class="mt-6 flex flex-wrap gap-2 text-sm">
        {#each content.chips as chip}
          <span
            class="px-2 py-1 border border-black shadow-blocky-sm bg-white font-mono"
            >{chip}</span
          >
        {/each}
      </div>
    </section>

    <!-- At a glance -->
    <aside class="md:col-span-2 px-6 py-6">
      <h4 class="pb-3">At a glance</h4>
      <ul class="leading-loose">
        {#each content.atAGlance as line}
          <li>{line}</li>
        {/each}
      </ul>
    </aside>

    <!-- Tools -->
    <section class="md:col-span-4 px-6 py-6">
      <h4 class="pb-3">Toolbox</h4>
      <ul class="flex flex-wrap gap-3 text-sm">
        {#each content.tools as item}
          <li
            class="inline-flex shadow-blocky-sm items-center gap-2 px-3 py-2 border border-black"
          >
            {#if item.icon}
              <i class={item.icon} aria-hidden="true"></i>
            {/if}
            <span>{item.label}</span>
          </li>
        {/each}
      </ul>
    </section>

    <!-- Learning -->
    <section class="md:col-span-2 px-6 py-6">
      <h4 class="pb-3">Levelling up</h4>
      <ul class="flex flex-wrap gap-3 text-sm">
        {#each content.learning as item}
          <li
            class="inline-flex shadow-blocky-sm items-center gap-2 px-3 py-2 border border-black"
          >
            {#if item.icon}
              <i class={item.icon} aria-hidden="true"></i>
            {/if}
            <span>{item.label}</span>
          </li>
        {/each}
      </ul>
    </section>

    <!-- Story -->
    <section class="md:col-span-6">
      <div
        class="divider divider-gap relative grid grid-cols-1 md:grid-cols-6"
        style="--thick:1px; --line:var(--color-azure-ink); --item-bg:#fff;"
      >
        <article
          class="px-6 py-6 relative z-10 bg-white md:col-start-1 md:col-span-full flex flex-col"
        >
          <!-- From -->
          <div class="self-start flex-1 w-1/2 md:w-1/3">
            <h5 class="font-mono font-bold mb-2">From</h5>
            <p class="leading-relaxed">{content.story.from}</p>
          </div>

          <!-- Arrow -->
          <RoughJourneyArrow
            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -6 sm:h-20 h-30 w-80 md:w-90 lg:w-100 xl:w-120"
            wiggles={1}
            amplitude={0.4}
            stroke="#f27941"
            strokeWidth={5}
            dash={18}
            gap={12}
            headLen={28}
          />

          <!-- To -->
          <div class="self-end w-1/2 md:w-1/3">
            <h5 class="font-mono font-bold mb-2">To</h5>
            <p class="leading-relaxed">{content.story.to}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Now / Next -->
    <section class="md:col-span-4 px-6 py-6">
      <h4 class="pb-3">Now / Next</h4>
      <div class="flex flex-wrap gap-2 text-sm">
        {#each content.nowNext as line}
          <span
            class="px-2 py-1 border shadow-blocky-sm border-black bg-white font-mono"
            >{line}</span
          >
        {/each}
      </div>
    </section>

    <!-- CTA -->
    <aside class="md:col-span-2 px-6 py-6 flex items-end">
      <a
        href={content.ctaHref}
        class="underline decoration-1 hover:decoration-transparent transition-all font-mono brutal-btn text-xl"
        >{content.ctaText}</a
      >
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
</style>
