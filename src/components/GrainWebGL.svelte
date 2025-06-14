<script>
  import { Application, Texture, TilingSprite } from "pixi.js";

  let container;
  let app;

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
    if (!container) return;

    // Avoid double-initialisation
    if (container.querySelector("canvas")) return;

    (async () => {
      try {
        app = new Application();

        await app.init({
          resizeTo: document.body,
          backgroundAlpha: 0,
          autoStart: true,
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

        //     app.ticker.add(() => {
        //       tilingSprite.tilePosition.x += 0.1;
        //       tilingSprite.tilePosition.y += 0.1;
        //     }
        // );
      } catch (error) {
        console.error("Error initializing PixiJS Application:", error);
      }
    })();

    return () => {
      app?.destroy(true, { children: true });
    };
  });
</script>

<div bind:this={container} class="grain"></div>

<style>
  .grain {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    width: 100%;
    height: 100%;
  }
</style>
