<script>
  import { Application, Texture, TilingSprite } from "pixi.js";
  import GrainSVG from "./GrainSVG.svelte";

  let { mode = "auto" } = $props();
  let container;
  let app;

  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  const prefersSmooth = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  ).matches;

  const effectiveMode =
    mode === "auto" ? (isMobile || !prefersSmooth ? "pixi" : "svg") : mode;

  function createNoiseCanvas(size = 64) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const val = Math.random() * 255;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = 64; // grain strength (alpha)
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas;
  }

  $effect(() => {
    if (!container || effectiveMode !== "pixi") return;

    // Avoid double-initialisation
    if (container.querySelector("canvas")) return;

    (async () => {
      try {
        app = new Application();

        await app.init({
          resizeTo: document.body,
          backgroundAlpha: 0,
          autoStart: true,
          antialias: false,
          powerPreference: "low-power",
        });

        container.appendChild(app.canvas);

        Object.assign(app.canvas.style, {
          position: "absolute",
          inset: "0",
          pointerEvents: "none",
          mixBlendMode: "overlay",
          opacity: "0.2",
          zIndex: "-1",
        });

        const noiseCanvas = createNoiseCanvas();
        const texture = Texture.from(noiseCanvas);

        const tilingSprite = new TilingSprite({
          texture,
          width: app.screen.width,
          height: app.screen.height,
        });

        app.stage.addChild(tilingSprite);
        app.render();
        app.stop();
      } catch (error) {
        console.error("Error initializing PixiJS Application:", error);
      }
    })();

    return () => {
      app?.destroy(true, { children: true });
    };
  });
</script>

{#if effectiveMode === "svg"}
  <GrainSVG classes="absolute inset-0 z-[-1]" />
{:else if effectiveMode === "pixi"}
  <div bind:this={container} class="grain-pixi"></div>
{/if}

<style>
  .grain-pixi {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
</style>
