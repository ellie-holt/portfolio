<!-- FILE: src/lib/ui/Arrow/RoughArrow.svelte -->

<script>
  import rough from "roughjs";
  let {
    direction = "down",
    stroke = "#f27941",
    strokeWidth = 5,
    class: classes = "",
  } = $props();
  let canvas;

  let ro;
  function draw() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width));
    canvas.height = Math.max(1, Math.floor(rect.height));

    const rc = rough.canvas(canvas);
    const w = canvas.width;
    const h = canvas.height;

    // Shaft endpoints by direction
    let x1, y1, x2, y2, headlen, theta;
    headlen = direction === "left" || direction === "right" ? w / 4 : h / 4;

    if (direction === "down") {
      x1 = w / 2;
      y1 = h / 6;
      x2 = w / 2;
      y2 = h - h / 6;
    }
    if (direction === "up") {
      x1 = w / 2;
      y1 = h - h / 6;
      x2 = w / 2;
      y2 = h / 6;
    }
    if (direction === "right") {
      x1 = w / 6;
      y1 = h / 2;
      x2 = w - w / 6;
      y2 = h / 2;
    }
    if (direction === "left") {
      x1 = w - w / 6;
      y1 = h / 2;
      x2 = w / 6;
      y2 = h / 2;
    }

    rc.line(x1, y1, x2, y2, {
      stroke,
      strokeWidth,
    });

    theta = Math.atan2(y2 - y1, x2 - x1);
    const phi = Math.PI / 6;
    const x3 = x2 - headlen * Math.cos(theta - phi);
    const y3 = y2 - headlen * Math.sin(theta - phi);
    const x4 = x2 - headlen * Math.cos(theta + phi);
    const y4 = y2 - headlen * Math.sin(theta + phi);

    rc.line(x2, y2, x3, y3, {
      stroke,
      strokeWidth,
    });
    rc.line(x2, y2, x4, y4, {
      stroke,
      strokeWidth,
    });
  }

  $effect(() => {
    if (!canvas) return;
    draw();
    ro?.disconnect();
    ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro?.disconnect();
  });
</script>

<canvas bind:this={canvas} class={classes} aria-hidden="true"></canvas>

<style>
  canvas {
    display: block;
  }
</style>
