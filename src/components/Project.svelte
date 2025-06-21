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
  class={`grid border-2 border-black shadow-blocky-md shadow-tangerine-200 ${featured ? " grid-cols-[1fr_1fr] md:grid-cols-1 col-span-2 md:col-span-1 row-span-1 md:row-span-2" : "grid-rows-1 grid-cols-1 md:grid-cols-[1fr_1fr] col-span-1 row-span-1"}`}
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
    <div class="link absolute bottom-4 right-4 text-right text-base">
      <a href={project.link} class="underline">Open →</a>
    </div>
  </section>
</article>

<style>
  .link a {
    --size: 10px;
    --thickness: 2px;
    --gap: 6px;

    padding: calc(var(--gap) + var(--thickness));
    outline: var(--thickness) solid var(--color-azure-400);
    outline-offset: calc(-1 * var(--thickness));
    mask:
      conic-gradient(at var(--size) var(--size), #0000 75%, #000 0) 0 0 /
        calc(100% - var(--size)) calc(100% - var(--size)),
      conic-gradient(#000 0 0) content-box;
    transition: 0.4s;
  }

  .link a:hover {
    outline-offset: calc(-1 * var(--gap));
  }
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
