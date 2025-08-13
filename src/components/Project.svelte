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
  class={`relative shadow-border flex flex-wrap flex-col sm:flex-row 2xl:flex-col 2xl:divide-x-0 divide-y-2 sm:divide-y 2xl:divide-y col-span-full ${featured ? "2xl:col-span-1" : "md:flex-col md:col-span-1"} bg-white`}
>
  <!-- image -->
  <section
    class={`relative z-10 overflow-hidden sm:flex-1 sm:border-r ${featured ? "2xl:border-r-0 2xl:flex-auto" : "md:border-r-0 md:flex-auto"}`}
  >
    <img
      src={image.src}
      alt={image.alt}
      class="w-full h-full object-cover"
      loading="lazy"
    />
  </section>

  <!-- title and description -->
  <section
    class={`p-6 sm:flex-0 ${featured ? "2xl:flex-auto sm:basis-1/4" : "md:flex-auto"}`}
  >
    <h4 class="mb-3">
      <a href={project.link} target="_blank">{project.title}</a>
    </h4>
    <p class="leading-snug">
      {project.description}
    </p>
  </section>

  <!-- extra info and link -->
  <section
    class={`sm:basis-full ${featured ? "2xl:basis-0" : "md:basis-0"} px-6 pb-10`}
  >
    <h5 class="mt-6 text-lg mb-3">Blah</h5>
    <ul class="list-disc pl-6">
      <li class="mb-3">Lorem ipsum</li>
      <li class="mb-3">Lorem ipsum dolor sit amet</li>
      <li class="mb-3">Lorem ipsum dolor sit amet consectetur</li>
    </ul>
    <h5 class="mt-6 text-lg mb-3">etc</h5>
    <p class=" italic text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
    </p>
  </section>
</article>
