<!-- FILE: src/sections/Project.svelte -->

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

  // Generate stable, readable ids for a11y relationships
  function slugify(str) {
    return (str || "project")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }
  const slug = slugify(project.title);
  const titleId = `project-title-${slug}`;
  const descId = `project-desc-${slug}`;
</script>

<article
  aria-labelledby={titleId}
  class="group collapse-border-2 relative lg:flex lg:flex-col grid grid-cols-[5fr_1fr] xs:grid-cols-[4fr_1fr] sm:grid-cols-2 bg-white lg:not-last:mb-0 not-last:mb-12"
  style={`--accent:${accent};`}
>
  <!-- SR-only source-of-truth heading to avoid repitition -->
  <h3 id={titleId} class="sr-only">{project.title}</h3>
  <!-- accent spine -->
  <div
    class="md:hidden lg:block accent-spine"
    style={`--accent:${accent}`}
    aria-hidden="true"
  ></div>

  <!-- image -->
  <figure
    class="group relative order-1 sm:row-span-3 md:row-span-4 bg-white overflow-hidden"
  >
    <!-- Visual overlay title on large screens; hidden from ARIA to avoid duplication -->
    <figcaption
      aria-hidden="true"
      class="hidden lg:block top-6 right-6 left-6 z-10 group-hover:z-0 absolute justify-center bg-white opacity-100 group-hover:opacity-0 border-2 transition-opacity duration-300 ease-out"
    >
      <span
        class="mb-1 py-2 md:text-[4vw] text-4xl xs:text-5xl sm:text-6xl visual-heading"
      >
        {project.title}
      </span>
    </figcaption>
    <img
      src={image.src}
      alt={image.alt}
      class="lg:hover:opacity-100 lg:opacity-75 w-full h-full object-cover md:aspect-auto lg:aspect-auto hover:scale-[1.015] transition-all duration-300 ease-out"
      loading="lazy"
    />
  </figure>

  <!-- Visual title for smaller screens; also hidden from ARIA -->
  <header
    class="flex justify-center items-center order-2 sm:col-start-2 md:row-start-1 bg-white px-2 sm:px-4"
  >
    <span
      id={titleId}
      class="visual-heading lg:hidden sm:mb-1 px-2 py-3 xs:py-6 lg:text-[2.2rem] xl:text-[2.6rem] text-4xl sm:text-4xl xs:text-5xl md:text-5xl leading-tight sm:leading-normal md:whitespace-nowrap [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]"
    >
      {project.title}
    </span>
  </header>

  <!-- Stack chips (optional) -->
  {#if project.stack?.length}
    <div
      class="static lg:static sm:relative flex items-center order-3 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-2 bg-white"
    >
      <div
        class="hidden lg:hidden sm:block accent-spine"
        style={`--accent:${accent}`}
        aria-hidden="true"
      ></div>
      <ul
        aria-label="Technologies used"
        class="flex flex-wrap gap-2 px-6 py-3 font-mono text-sm"
      >
        {#each project.stack as chip}
          <li class="shadow-blocky-xs px-2 py-1 border border-black">
            {chip}
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  <!-- Description -->
  <div
    class="static lg:static sm:relative order-4 col-span-2 sm:col-span-1 sm:col-start-2 sm:row-start-3 bg-white px-6 py-6 leading-relaxed lg:grow"
  >
    <div
      aria-hidden="true"
      class="hidden lg:hidden sm:block accent-spine"
      style={`--accent:${accent}`}
    ></div>
    <p id={descId}>{project.description}</p>
  </div>

  <!-- Link -->
  <div
    class="group/link relative flex items-center order-5 col-span-full md:col-span-1 md:col-start-2 sm:row-start-4 bg-aqua-wash w-full h-[calc(var(--spacing-banner)_*_1.5)] sm:h-full lg:h-[calc(var(--spacing-banner)_*_1.5)] overflow-hidden"
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby={titleId}
      aria-describedby={descId}
      class="group z-10 relative flex items-center gap-4 mr-0 ml-auto py-3 pr-6 lg:pr-3 xl:pr-6 pl-6 font-semibold decoration-1 hover:decoration-transparent underline transition-all"
    >
      <span class="text-2xl md:text-2xl lg:text-2xl xl:text-3xl lowercase"
        >view project</span
      >
      <RoughArrow
        direction="right"
        stroke="#f27941"
        strokeWidth={3}
        class="w-20 md:w-24 h-10 md:h-12 transition-transform group-hover/link:translate-x-2 duration-300 ease-out"
      />
      <span class="sr-only"> — {project.title} - opens in a new tab</span>
    </a>
  </div>
</article>
