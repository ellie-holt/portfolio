<script lang="js">
  import rough from "roughjs";

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

  let arrowCanvas;
  $effect(() => {
    if (!arrowCanvas) return;

    const { width, height } = arrowCanvas.getBoundingClientRect();

    arrowCanvas.width = width;
    arrowCanvas.height = height;

    const rc = rough.canvas(arrowCanvas);

    // 1) Arrow shaft
    const x1 = width / 5;
    const y1 = height / 2;
    const x2 = width - width / 5;
    const y2 = height / 2;

    rc.line(x1, y1, x2, y2, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Arrowhead length and angle
    const headlen = width / 4;
    const θ = Math.atan2(y2 - y1, x2 - x1);
    const φ = Math.PI / 6; // 30°

    // Top side of arrowhead
    const x3 = x2 - headlen * Math.cos(θ - φ);
    const y3 = y2 - headlen * Math.sin(θ - φ);
    rc.line(x2, y2, x3, y3, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Bottom side of arrowhead
    const x4 = x2 - headlen * Math.cos(θ + φ);
    const y4 = y2 - headlen * Math.sin(θ + φ);
    rc.line(x2, y2, x4, y4, {
      stroke: "#f27941",
      strokeWidth: 5,
    });
  });
</script>

<div class="lg:col-span-1">
  <article
    class="grid grid-cols-[5fr_1fr] xs:grid-cols-[4fr_1fr] sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[6fr_7fr] xl:grid-rows-[7fr_6fr] 2xl:grid-rows-[3fr_2fr] 3xl:grid-rows-[2fr_1fr] relative shadow-border bg-white"
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
      class="shadow-border flex lg:row-start-2 flex-col gap-[1px] w-full h-full lg:col-span-2"
    >
      <div
        class="w-full h-full sm:h-auto shadow-border flex items-center lg:justify-center"
      >
        <h2
          class="py-3 xs:py-6 px-6 text-5xl sm:text-6xl md:text-7xl xl:text-[3.4rem] lg:text-4xl [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]"
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
      <div class="p-6 shadow-border w-full h-full">
        <p class="">
          {project.description}
        </p>
      </div>
    </section>
  </article>

  <div class="w-full shadow-border h-banner flex items-center overflow-hidden">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      class="px-6 py-3 font-semibold flex items-center justify-end w-full group"
    >
      <h3
        class="md:py-4 xl:text-3xl lg:text-2xl md:text-3xl text-2xl lowercase underline decoration-1 group-hover:decoration-transparent transition-all duration-300 ease-in-out"
      >
        view project
      </h3>
      <div class="w-25">
        <canvas
          bind:this={arrowCanvas}
          class="w-full h-full group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
        >
        </canvas>
      </div>
    </a>
  </div>
</div>
