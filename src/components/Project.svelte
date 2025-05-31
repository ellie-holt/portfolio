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
  class={`grid ${featured ? "grid-cols-[1fr_2fr] col-span-full" : "grid-cols-[1fr_1fr]"} grid-rows-[1fr_3fr] gap-x-6 p-6 border-2 border-solid box-shadow project`}
>
  <section
    class="image-container relative w-full aspect-square overflow-hidden flex items-center justify-center row-span-2"
  >
    <img
      src={image.src}
      alt={image.alt}
      class="project-image w-full h-full object-cover object-top border-2 border-dotted"
      loading="lazy"
    />
  </section>
  <section class="project-header">
    <h4
      class={`project-title leading-none ${featured ? "text-4xl" : "text-2xl"}`}
    >
      <a href={project.link} target="_blank">{project.title}</a>
    </h4>
  </section>
  <section class="project-description">
    <p class={`${featured ? "text-xl" : "text-lg"}`}>{project.description}</p>
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
