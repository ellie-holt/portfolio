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
    featured = false,
  } = $props();
</script>

<article
  class={`grid border-2 border-black bg-white shadow-[4px_4px_0_#000] ${featured ? " grid-cols-[1fr_1fr] md:grid-cols-1 col-span-2 md:col-span-1 row-span-1 md:row-span-2" : "grid-rows-1 grid-cols-1 md:grid-cols-[1fr_1fr] col-span-1 row-span-1"}`}
>
  <!-- image -->
  <section
    class={`${featured ? "border-r-2 md:border-b-2 md:border-r-0" : "border-b-2 md:border-r-2 md:border-b-0"}  border-black`}
  >
    <img
      src={image.src}
      alt={image.alt}
      class={`${featured ? "w-full h-full" : "w-full h-full"} object-cover`}
      loading="lazy"
    />
  </section>

  <!-- title -->
  <section class={`${featured ? "" : ""} px-6 pt-6 pb-10 relative`}>
    <h3
      class={`uppercase text-lg font-bold mb-2 ${featured ? "text-4xl" : "text-2xl"}`}
    >
      <a href={project.link} target="_blank">{project.title}</a>
    </h3>

    <!-- description and link -->
    <p
      class={`${featured ? "text-base" : "text-sm"} leading-snug tracking-tight`}
    >
      {project.description}
    </p>
    <div class="absolute bottom-4 right-4 text-right text-base">
      <a href={project.link} class="underline">Open →</a>
    </div>
  </section>
</article>

<style>
  /* .image-container {
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
  }

  .project-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    overflow-x: visible;
  } */
</style>
