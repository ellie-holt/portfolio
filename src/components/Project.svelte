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
</script>

<article class="flex flex-col w-1/3 project">
  <section
    class="flex flex-col items-center border-black text-on-secondary-light project-header"
  >
    <h4 class="p-2 border-black project-title">
      <a href={project.link} target="_blank">{project.title}</a>
    </h4>
    <div class="image-container">
      <img
        src={image.src}
        alt={image.alt}
        class="border-t-4 border-black project-image"
        loading="lazy"
      />
    </div>
  </section>
  <section class="p-4 project-description text-on-primary-light">
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
