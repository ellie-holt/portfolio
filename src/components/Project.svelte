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
  class={`flex  border-black border rounded-xl  ${featured ? "  col-span-2 row-span-1 " : "col-span-1 row-span-1"}`}
>
  <div class="w-20 rounded-l-xl flex items-center p-4">→</div>
  <!-- image -->
  <section class={`${featured ? "" : ""}  `}>
    <img
      src={image.src}
      alt={image.alt}
      class={`rounded-tl-xl max-w-96 ${featured ? "rounded-l-xl w-full h-full" : "rounded-tr-xl md:rounded-tr-none  md:rounded-bl-xl w-full h-full"}  object-cover`}
      loading="lazy"
    />
  </section>

  <section class="relative px-6 pt-6 pb-10">
    <!-- title -->
    <h4 class="mb-2">
      <a href={project.link} target="_blank">{project.title}</a>
    </h4>

    <!-- description and link -->
    <p class="leading-snug">
      {project.description}
    </p>
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
