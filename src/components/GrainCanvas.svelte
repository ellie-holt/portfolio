<!-- src/components/GrainCanvas.svelte -->
<script>
  let canvasEl;

  function generateNoise(canvas, width = 512, height = 512) {
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(width, height);
    const buffer = imageData.data;

    for (let i = 0; i < buffer.length; i += 4) {
      const val = Math.random() * 255;
      buffer[i] = val;
      buffer[i + 1] = val;
      buffer[i + 2] = val;
      buffer[i + 3] = 40; // alpha (0–255)
    }

    ctx.putImageData(imageData, 0, 0);
  }

  $effect(() => {
    if (typeof window !== "undefined" && canvasEl) {
      generateNoise(canvasEl);
    }
  });
</script>

<canvas bind:this={canvasEl} class="grain-canvas"> </canvas>

<style>
  .grain-canvas {
    position: absolute;
    background: transparent;
    mix-blend-mode: color-dodge;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mix-blend-mode: color-dodge;
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
  }
</style>
