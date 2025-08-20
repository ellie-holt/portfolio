<script>
  let {
    baseColor = "#fff",
    gradientVar = "--bg-mesh-soft",
    noise = true,
    overlayColor = "transparent",
    overlayBlend = "screen",
  } = $props();
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
    <div class="absolute inset-0 z-10 pointer-events-none bg-noise"></div>
  {/if}

  <!-- Colour overlay -->
  {#if overlayColor !== "transparent"}
    <div
      class="absolute inset-0 z-20 pointer-events-none"
      style={`background-color:${overlayColor};mix-blend-mode:${overlayBlend};`}
    ></div>
  {/if}
</div>
