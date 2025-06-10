<!-- GrainyGradientBackground.svelte -->
<script>
  let { classes } = $props();
</script>

<!-- Background container -->
<div
  class={`${classes} bg-linear-to-t/oklch from-azure-300 to-tangerine-200 overflow-hidden pointer-events-none grainy-bg`}
>
  <svg
    class="absolute w-0 h-0 overflow-hidden"
    aria-hidden="true"
    focusable="false"
  >
    <filter id="grainy-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="19.5"
        numOctaves="10"
        stitchTiles="stitch"
      />
      <!-- <feColorMatrix type="saturate" values="0" /> -->
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 1" />
      </feComponentTransfer>
      <feGaussianBlur stdDeviation="0.15" />

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
    mix-blend-mode: color-dodge;
    opacity: 0.25;
    pointer-events: none;
    z-index: 0;
  }
</style>
