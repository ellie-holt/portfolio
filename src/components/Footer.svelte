<script lang="js">
  import rough from "roughjs";
  let arrowCanvas;
  $effect(() => {
    if (!arrowCanvas) return;

    arrowCanvas.width = 100;
    arrowCanvas.height = 100;

    const width = arrowCanvas.width;
    const height = arrowCanvas.height;

    const rc = rough.canvas(arrowCanvas);

    // 1) Arrow shaft
    const x1 = width / 2;
    const y1 = height - height / 5;
    const x2 = width / 2;
    const y2 = height / 5;

    rc.line(x1, y1, x2, y2, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Arrowhead length and angle
    const headlen = height / 4;
    const θ = Math.atan2(y2 - y1, x2 - x1);
    const φ = Math.PI / 6; // 30°

    // Left side of arrowhead
    const x3 = x2 - headlen * Math.cos(θ - φ);
    const y3 = y2 - headlen * Math.sin(θ - φ);
    rc.line(x2, y2, x3, y3, {
      stroke: "#f27941",
      strokeWidth: 5,
    });

    // Right side of arrowhead
    const x4 = x2 - headlen * Math.cos(θ + φ);
    const y4 = y2 - headlen * Math.sin(θ + φ);
    rc.line(x2, y2, x4, y4, {
      stroke: "#f27941",
      strokeWidth: 5,
    });
  });
</script>

<footer
  class="flex flex-col xl:mx-6 mx-2.5 xs:mx-5 lg:mx-6 md:mx-6 bg-transparent footer"
>
  <div class="px-[1px] py-[1px] mb-10">
    <div
      class="shadow-border w-full h-full md:min-h-[20vh] sm:min-h-[30vh] xs:min-h-[32vh] flex items-end pb-6 md:justify-between sm:justify-end justify-center"
    >
      <!-- Scroll to top arrow -->
      <a
        href="#page-top"
        aria-label="Scroll to top"
        class="group md:flex items-end hidden group hover:cursor-pointer"
      >
        <canvas
          bind:this={arrowCanvas}
          class="-mb-4 -ml-4 w-full h-full group-hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
        </canvas>
        <p class="font-mono text-2xl -ml-8 whitespace-nowrap">to top</p></a
      >
      <!-- contact links -->
      <div
        class="xs:text-2xl text-2xl flex flex-col sm:px-6 px-2 items-end justify-center gap-6 sm:mt-6 mt-12"
      >
        <!-- email -->
        <div class="flex items-center justify-center gap-4">
          <span class="font-bold relative top-[1px] xs:inline hidden"
            >email:</span
          >

          <a
            href="mailto:eleanorholt97@gmail.com"
            target="_blank"
            class="relative inline-flex items-center font-mono email-link group"
          >
            <span
              class="brackets relative pr-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:translate-x-1 group-hover:scale-90 leading-none"
              >&lcub;</span
            >
            <span
              class="underline transition-all duration-300 ease-in group-hover:decoration-transparent"
              ><span class="break-all">eleanorholt97</span>@gmail.com</span
            >
            <span
              class="brackets relative pl-[0.2em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:-translate-x-1 group-hover:scale-90 leading-none"
              >&rcub;</span
            >
          </a>
        </div>

        <!-- github -->
        <div class="flex items-center justify-center gap-4">
          <span class="relative font-bold xs:inline hidden">github:</span>

          <a
            href="https://github.com/ellie-holt"
            target="_blank"
            class="relative inline-flex items-center font-mono email-link group"
          >
            <span
              class="brackets relative pr-[0.55em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:translate-x-1 group-hover:scale-90 leading-none"
              >&lcub;</span
            >
            <span
              class="underline transition-all duration-300 ease-in group-hover:decoration-transparent"
              >github.com/ellie-holt</span
            >
            <span
              class="brackets relative pl-[0.55em] text-[1.7em] font-semibold text-tangerine-500 transition-transform duration-300 ease-in group-hover:-translate-x-1 group-hover:scale-90 leading-none"
              >&rcub;</span
            ></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="absolute bottom-0 left-0 right-0 h-10 xl:mx-6 mx-2.5 xs:mx-5 lg:mx-6 md:mx-6 flex items-center justify-between px-6"
  >
    <p class="font-mono">&copy; 2025 Ellie Holt.</p>
    <p class="font-mono">
      Open source <a
        href="https://github.com/ellie-holt/portfolio"
        target="_blank"
        class="underline transition-all duration-300 ease-in hover:decoration-transparent"
        >code</a
      >.
    </p>
  </div>
</footer>
