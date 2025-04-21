<script lang="js">
  export let project = {
    title: "",
    description: "",
    link: "",
  };
  export let image = {
    src: "",
    alt: "",
  };
</script>

<article class="project flex flex-col self-stretch w-1/3">
  <section class="project-header flex flex-col items-center border-b-4">
    <h3 class="project-title p-2">
      <a href={project.link} target="_blank">{project.title}</a>
    </h3>
    <div class="image-container">
      <img
        src={image.src}
        alt={image.alt}
        class="project-image"
        loading="lazy"
      />
    </div>
  </section>
  <section class="project-description p-4">
    <p>{project.description}</p>
  </section>
</article>

<style>
  .image-container {
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
  }
</style>
