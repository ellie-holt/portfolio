<script>
  import { scrollProgress, initScrollTracking } from "./ScrollState.svelte.js";

  const defaultColors = [
    { stop: 0, from: 200, to: 280 },
    { stop: 1, from: 300, to: 240 },
  ];

  export const colorsStore = $state(undefined);
  let colors = $state(defaultColors);

  $effect(() => {
    if (colorsStore) {
      const unsubscribe = colorsStore.subscribe((val) => (colors = val));
      return unsubscribe;
    }
  });

  import { writable } from "svelte/store";

  let hue1 = writable(colors[0].from);
  let hue2 = writable(colors[0].to);
  let gradientStyle = "";

  let start = colors[0];
  let end = colors[1];
  $effect(() => {
    const progress = $scrollProgress;
    hue1.set(start.from + progress * (end.from - start.from));
    hue2.set(start.to + progress * (end.to - start.to));

    gradientStyle = `bg-[linear-gradient(to_bottom,_hsl(${$hue1},_80%,_65%),_hsl(${$hue2},_80%,_70%))]`;
  });

  gradientStyle = `bg-[linear-gradient(to_bottom,_hsl(${hue1},_80%,_65%),_hsl(${hue2},_80%,_70%))]`;
</script>

<div
  class="absolute min-h-[200vh] w-full ${gradientStyle} transition-all duration-500"
></div>
