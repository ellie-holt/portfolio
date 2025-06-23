<!-- GrainyGradientBackground.svelte -->
<script>
  let { classes } = $props();
</script>

<!-- Background container -->
<div
  class={`${classes} background-gradient overflow-hidden bg-size-[100%] grainy-bg -z-10`}
>
  <svg
    class="absolute w-0 h-0 overflow-hidden"
    aria-hidden="true"
    focusable="false"
  >
    <filter id="grainy-noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="2.4"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 1" />
      </feComponentTransfer>
      <feGaussianBlur stdDeviation="0.8" />

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
    opacity: 0.2;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    backface-visibility: hidden;
  }
  .background-gradient {
    position: absolute;
    inset: 0;
    background-color: hsla(18, 100%, 97%, 1);
    background-image: radial-gradient(
        at 28% 25%,
        hsla(221, 86%, 88%, 1) 0px,
        transparent 50%
      ),
      radial-gradient(at 95% 98%, hsla(18, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 51% 37%, hsla(159, 87%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 43% 84%, hsla(160, 88%, 86%, 1) 0px, transparent 50%),
      radial-gradient(at 82% 28%, hsla(221, 93%, 80%, 1) 0px, transparent 50%),
      radial-gradient(at 19% 59%, hsla(18, 100%, 87%, 1) 0px, transparent 50%);
    background-size: cover;
  }
</style>
