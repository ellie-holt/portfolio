<!-- src/lib/ui/Background/BackgroundLayer.svelte -->

<script>
  let {
    baseColor = "#fff",
    variant = "soft", // "soft" | "brutal" | "inked"
    noise = true,
    noiseOpacity = 0.18,
    overlayColor = "transparent",
    overlayBlend = "screen",
  } = $props();
  const variantMap = {
    soft: "--bg-mesh-soft",
    brutal: "--bg-mesh-brutal",
    inked: "--bg-mesh-inked",
  };
  let gradientVar = $derived(variantMap[variant] ?? "--bg-mesh-soft");
</script>

<div class="absolute inset-0 -z-10" style={`background-color:${baseColor};`}>
  <!-- Mesh gradient layer -->
  <div
    class="absolute inset-0 z-0"
    style={`background-image: var(${gradientVar});
    background-size: cover; background-repeat: no-repeat;`}
  ></div>

  <!-- Noise layer -->
  {#if noise}
    <div
      class="absolute inset-0 z-10 pointer-events-none bg-noise"
      style={`opacity:${noiseOpacity};`}
    ></div>
  {/if}

  <!-- Colour overlay -->
  {#if overlayColor !== "transparent"}
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      style={`background-color:${overlayColor};mix-blend-mode:${overlayBlend};`}
    ></div>
  {/if}
</div>
