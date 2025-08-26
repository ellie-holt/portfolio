<script lang="js">
  import RoughArrow from "$lib/ui/Arrow/RoughArrow.svelte";

  let {
    project = {
      title: "",
      description: "",
      link: "",
      stack: /** @type {string[]|undefined} */ (undefined),
    },
    image = { src: "", alt: "" },
    accent = "var(--color-tang-500)",
  } = $props();
</script>

<article
  class="group relative bg-white grid grid-cols-[5fr_1fr] xs:grid-cols-[4fr_1fr] sm:grid-cols-2 lg:flex lg:flex-col collapse-border-2 not-last:mb-12 lg:not-last:mb-0"
  style={`--accent:${accent};`}
>
  <!-- accent spine -->
  <div
    class="accent-spine md:hidden lg:block"
    style={`--accent:${accent}`}
    aria-hidden="true"
  ></div>

  <!-- image -->
  <figure
    class="relative overflow-hidden sm:row-span-3 md:row-span-4 order-1 bg-white"
  >
    <figcaption
      class="absolute left-6 right-6 top-6 z-10 bg-white border justify-center hidden lg:block"
    >
      <h2
        class="text-center py-2 text-4xl mb-1 xs:text-5xl sm:text-6xl md:text-[4vw]"
      >
        {project.title}
      </h2>
    </figcaption>
    <img
      src={image.src}
      alt={image.alt}
      class="w-full h-full object-cover md:aspect-auto lg:aspect-auto lg:opacity-75 lg:hover:opacity-100 transition-all duration-300 ease-out hover:scale-[1.015]"
      loading="lazy"
    />
  </figure>

  <!-- title -->
  <header
    class=" order-2 flex items-center justify-center px-2 sm:px-4 bg-white sm:col-start-2 md:row-start-1"
  >
    <h2
      class="py-3 xs:py-6 px-2 text-4xl xs:text-5xl sm:text-4xl md:text-5xl md:whitespace-nowrap lg:text-[2.2rem] xl:text-[2.6rem] leading-tight sm:leading-normal sm:mb-1 [writing-mode:vertical-rl] lg:hidden sm:[writing-mode:horizontal-tb]"
    >
      {project.title}
    </h2>
  </header>

  <!-- stack chips (optional) -->
  {#if project.stack?.length}
    <div
      class="static sm:relative lg:static order-3 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 bg-white flex items-center"
    >
      <div
        class="accent-spine hidden sm:block lg:hidden"
        style={`--accent:${accent}`}
        aria-hidden="true"
      ></div>
      <ul class="px-6 py-3 flex flex-wrap gap-2 text-sm font-mono">
        {#each project.stack as chip}
          <li class="px-2 py-1 border border-black shadow-blocky-sm">
            {chip}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- description -->
  <section
    class="static sm:relative lg:static bg-white px-6 py-6 leading-relaxed order-4 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-3 lg:grow"
  >
    <div
      class="accent-spine hidden sm:block lg:hidden"
      style={`--accent:${accent}`}
      aria-hidden="true"
    ></div>
    <p>{project.description}</p>
  </section>

  <!-- link -->
  <div
    class="relative group/link w-full h-[calc(var(--spacing-banner)_*_1.5)] flex items-center overflow-hidden bg-white order-5 col-span-full md:col-span-1 md:col-start-2 sm:row-start-4 sm:h-full lg:h-[calc(var(--spacing-banner)_*_1.5)]"
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      class="relative group z-10 ml-auto mr-0 pl-6 pr-6 lg:pr-3 xl:pr-6 py-3 font-semibold flex items-center gap-4 underline decoration-1 hover:decoration-transparent transition-all"
    >
      <span class="text-2xl md:text-2xl lg:text-2xl xl:text-3xl lowercase"
        >view project</span
      >
      <RoughArrow
        direction="right"
        stroke="#f27941"
        strokeWidth={3}
        class="w-20 h-10 md:w-24 md:h-12 group-hover/link:translate-x-2 transition-transform duration-300 ease-out"
      />
    </a>
  </div>
</article>
