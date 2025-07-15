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
  class={`relative place-self-center border border-black rounded-xl flex col-span-full   ${featured ? "md:col-span-2 xl:w-10/12 2xl:w-9/12" : "md:col-span-1"} divide-x`}
>
  <!-- <div class="absolute inset-0 bg-transparent w-2/3 h-full"></div> -->
  <!-- image -->
  <section
    class={`relative z-10 flex-1 ${featured ? "" : ""} overflow-hidden rounded-l-xl`}
  >
    <img
      src={image.src}
      alt={image.alt}
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </section>

  <section class="px-6 pt-6 pb-10 flex-1 bg-azure-100 rounded-r-xl">
    <!-- title -->
    <h4 class="mb-2">
      <a href={project.link} target="_blank">{project.title}</a>
    </h4>

    <!-- description and link -->
    <p class="leading-snug">
      {project.description}
    </p>
    <h4 class="mt-4 text-lg">Blah</h4>
    <ul class="list-disc pl-6">
      <li class="mt-4">Lorem ipsum</li>
      <li class="mt-2">Lorem ipsum dolor sit amet</li>
      <li class="mt-2">Lorem ipsum dolor sit amet consectetur</li>
    </ul>
    <h4 class="mt-4 text-lg">etc</h4>
    <p class="mt-2 italic text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
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
