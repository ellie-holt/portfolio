<script>
  let {
    baseColor = "var(--color-tangerine-100)",
    gradientVar = "--gradient",
    mixBlendModeNoise = "plus-lighten",
    noiseFile = "file(13).png",
    noiseOpacity = 1,
    colorOverlay = "var(--color-azure-600)",
    mixBlendModeColor = "screen",
  } = $props();
</script>

<div class="absolute inset-0 -z-10" style={`background-color: ${baseColor};`}>
  <!-- gradient layer-->
  <div
    class="absolute inset-0 z-0"
    style={`
      background-image: var(${gradientVar});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  ></div>

  <!-- noise layer -->
  <div
    class="absolute inset-0 z-10 pointer-events-none"
    style={`
    background-image: url('src/assets/${noiseFile}');
    mix-blend-mode: ${mixBlendModeNoise};
    background-size: 800px 800px;
    background-repeat: repeat;
    opacity: ${noiseOpacity};
  `}
  ></div>

  <!-- color overlay -->
  <div
    class="absolute inset-0 z-15 pointer-events-none"
    style={`
    background-color: ${colorOverlay};
    mix-blend-mode: ${mixBlendModeColor};
  `}
  ></div>
</div>
