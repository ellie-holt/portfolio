<!-- GrainyGradientBackground.svelte -->
<script>
  let { classes } = $props();
</script>

<!-- Background container -->
<div
  class={`${classes} bg-linear-to-t/oklch from-azure-300 via-azure-200 to-tangerine-100 overflow-hidden bg-size-[100%] grainy-bg -z-10`}
>
  <svg
    class="absolute w-0 h-0 overflow-hidden"
    aria-hidden="true"
    focusable="false"
  >
    <filter id="grainy-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="2.5"
        numOctaves="2"
        stitchTiles="stitch"
      />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 1" />
      </feComponentTransfer>
      <feGaussianBlur stdDeviation="0.25" />

      <feComposite
        operator="in"
        in="turbulence"
        in2="SourceAlpha"
        result="composite"
      />
      <feColorMatrix in="composite" type="luminanceToAlpha" />
      <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
    </filter>
  </svg>
</div>

<style>
  .grainy-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: url("#grainy-noise");
    mix-blend-mode: hard-light;
    opacity: 0.25;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    backface-visibility: hidden;
  }
</style>
