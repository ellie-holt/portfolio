<script lang="js">
  let { text = "", link = "" } = $props();
</script>

<li
  class="z-30 group relative overflow-hidden flex justify-center items-center flex-1 border rounded-xl bg-none cursor-pointer isolate"
>
  <a
    href={link}
    class="w-full px-2 align-baseline text-center font-bold inline py-4"
    >{text}</a
  >

  <svg
    class="absolute inset-0 w-full h-full pointer-events-none z-0"
    viewBox="0 0 200 60"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Gradient before hover -->
      <linearGradient id="grad-default" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="50%" stop-color="var(--color-tangerine-100)" />
        <stop offset="85%" stop-color="var(--color-azure-300)" />
      </linearGradient>

      <!-- Gradient after hover -->
      <linearGradient id="grad-hover" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="15%" stop-color="var(--color-tangerine-100)" />
        <stop offset="70%" stop-color="var(--color-azure-300)" />
      </linearGradient>

      <!-- Noise filter -->
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="2"
          result="turbulence"
        />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" />
      </filter>
    </defs>

    <!-- Default background -->
    <rect
      width="150%"
      height="150%"
      x="-25%"
      y="-25%"
      class="transition-all duration-700 ease-in-out"
      fill="url(#grad-default)"
      filter="url(#noise)"
    />

    <!-- Hover background -->
    <rect
      width="150%"
      height="150%"
      x="-25%"
      y="-25%"
      class="opacity-0 hover:opacity-100 group-focus:opacity-100 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
      fill="url(#grad-hover)"
      filter="url(#noise)"
    />
  </svg>
</li>
