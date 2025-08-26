<!-- src/lib/ui/Arrow/RoughJourneyArrow.svelte -->

<script>
  import rough from "roughjs";

  let {
    stroke = "#f27941",
    strokeWidth = 5, // logical px
    wiggles = 2,
    amplitude = 0.2, // tail amplitude as fraction of height
    dash = 18, // dash length (px in CSS pixels)
    gap = 12, // gap length (px in CSS pixels)
    rotation = 0,
    headAngleDeg = 28, // arrowhead spread
    headLen = 28, // arrowhead length (px in CSS pixels)
    class: classes = "",
  } = $props();

  let canvas;
  let ro; // ResizeObserver

  // Split a polyline into dashed segments and draw only the "on" parts with roughjs
  function drawDashedPolyline(rc, pts, dashPx, gapPx, options) {
    if (pts.length < 2) return;
    let on = true;
    let remain = dashPx; // remaining length in current on/off phase
    let i = 0;
    while (i < pts.length - 1) {
      let [x1, y1] = pts[i];
      let [x2, y2] = pts[i + 1];
      let dx = x2 - x1;
      let dy = y2 - y1;
      let segLen = Math.hypot(dx, dy);
      if (segLen === 0) {
        i++;
        continue;
      }
      let ux = dx / segLen;
      let uy = dy / segLen;
      let traveled = 0;
      while (traveled < segLen) {
        const step = Math.min(remain, segLen - traveled);
        const sx1 = x1 + ux * traveled;
        const sy1 = y1 + uy * traveled;
        const sx2 = x1 + ux * (traveled + step);
        const sy2 = y1 + uy * (traveled + step);
        if (on) rc.line(sx1, sy1, sx2, sy2, options);
        traveled += step;
        remain -= step;
        if (remain <= 0) {
          on = !on;
          remain = on ? dashPx : gapPx;
        }
      }
      i++;
    }
  }

  function buildMeander(width, height, waves, ampFrac) {
    const N = 160; // samples; higher = smoother
    const midY = height / 2;
    const amp = Math.max(2, ampFrac * height);
    const left = Math.max(8, 0.04 * width);
    const right = width - left;
    const pts = [];
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      const x = left + (right - left) * t;
      const y =
        midY +
        amp * Math.sin(2 * Math.PI * waves * t) +
        amp * 0.08 * Math.sin(2 * Math.PI * (waves * 2.2) * t + 0.7);
      pts.push([x, y]);
    }
    return pts;
  }

  function draw() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const cssW = Math.max(1, rect.width);
    const cssH = Math.max(1, rect.height);

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);

    const rc = rough.canvas(canvas);

    // Build the meandering tail in CSS px, then upscale for DPR
    const ptsCss = buildMeander(cssW, cssH, wiggles, amplitude);
    const pts = ptsCss.map(([x, y]) => [x * dpr, y * dpr]);

    const opts = {
      stroke,
      strokeWidth: strokeWidth * dpr, // preserve visual
      roughness: 1.1,
      bowing: 0.8,
    };

    // Tail: dashed polyline
    drawDashedPolyline(rc, pts, dash * dpr, gap * dpr, opts);

    // Arrowhead at tail end using tangent from last segment
    if (pts.length >= 2) {
      const [x2, y2] = pts[pts.length - 1];
      const [x1, y1] = pts[pts.length - 2];
      const theta = Math.atan2(y2 - y1, x2 - x1);
      const phi = (headAngleDeg * Math.PI) / 180;
      const len = headLen * dpr;

      const hx1 = x2 - len * Math.cos(theta - phi);
      const hy1 = y2 - len * Math.sin(theta - phi);
      const hx2 = x2 - len * Math.cos(theta + phi);
      const hy2 = y2 - len * Math.sin(theta + phi);

      rc.line(x2, y2, hx1, hy1, opts);
      rc.line(x2, y2, hx2, hy2, opts);
    }
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
