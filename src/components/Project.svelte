<script lang="js">
  let {
    project = {
      title: "",
      description: "",
      link: "",
    },
    image = {
      src: "",
      alt: "",
    },
  } = $props();

  import RoughArrow from "./RoughArrow.svelte";
</script>

<div class="lg:col-span-1 flex flex-col">
  <article
    class="grid grid-cols-[5fr_1fr] xs:grid-cols-[4fr_1fr] sm:grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col relative shadow-border bg-white flex-1"
  >
    <!-- image -->
    <section class="relative lg:row-start-1 z-10 overflow-hidden shadow-border">
      <img
        src={image.src}
        alt={image.alt}
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </section>

    <!-- title and description -->
    <section
      class="shadow-border flex lg:row-start-2 flex-col gap-[1px] w-full h-full lg:col-span-2 lg:flex-1"
    >
      <div
        class="w-full h-full sm:h-auto shadow-border flex items-center lg:justify-center flex-1"
      >
        <h2
          class="py-3 xs:py-6 px-6 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[2.5rem] xl:text-[3.2rem] 2xl:text-[3.4rem] lg:text-4xl [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]"
        >
          {project.title}
        </h2>
      </div>

      <div class="p-6 shadow-border w-full h-full hidden sm:block">
        <p class="">
          {project.description}
        </p>
      </div>
    </section>

    <section class="sm:hidden col-span-2 pt-[1px]">
      <div class="px-6 py-6 shadow-border leading-loose w-full h-full">
        <p class="">
          {project.description}
        </p>
      </div>
    </section>
  </article>

  <div
    class="w-full shadow-border lg:h-banner h-[calc(var(--spacing-banner)_*_2)] flex items-start lg:items-center overflow-hidden"
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      class="pl-6 py-3 font-semibold flex items-center justify-end w-full group"
    >
      <h3
        class="md:py-4 xl:text-3xl lg:text-2xl md:text-3xl text-2xl lowercase underline decoration-1 group-hover:decoration-transparent transition-all duration-300 ease-in-out"
      >
        view project
      </h3>
      <div class="w-25">
        <RoughArrow
          direction="right"
          class="relative w-full h-full group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
        />
      </div>
    </a>
  </div>
</div>
