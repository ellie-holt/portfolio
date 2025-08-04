<script>
  let { opacity = 0.05, speed = 80, resolution = 0.5 } = $props();

  let canvas;
  let ctx;
  let animationInterval;
  let initialised = false;

  function drawNoise() {
    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.createImageData(width, height);

    for (let i = 0; i < imageData.data.length; i += 4) {
      const val = Math.random() * 255;
      imageData.data[i] = val;
      imageData.data[i + 1] = val;
      imageData.data[i + 2] = val;
      imageData.data[i + 3] = opacity * 255;
    }

    ctx.putImageData(imageData, 0, 0);
  }

  function resize() {
    canvas.width = window.innerWidth * resolution;
    canvas.height = window.innerHeight * resolution;
  }

  $effect(() => {
    if (canvas && !initialised) {
      resize();
      ctx = canvas.getContext("2d");
      animationInterval = setInterval(drawNoise, speed);
      initialised = true;
    }
  });

  $effect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 w-full h-full z-[-1] pointer-events-none"
  style="opacity: {opacity}; image-rendering: pixelated;"
></canvas>

<style>
  canvas {
    display: block;
    width: 100vw;
    height: 100vh;
  }
</style>
