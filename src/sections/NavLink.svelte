<!-- FILE: src/sections/NavLink.svelte -->

<script lang="js">
  import LinkButton from "$lib/ui/Button/LinkButton.svelte";
  let { text = "", link = "", colourClass = "" } = $props();
</script>

<li
  class="z-30 cursor-pointer group relative shadow-border flex-1 bg-none isolate collapse-border-2"
>
  <a
    href={link}
    class="relative w-full h-full flex items-center justify-center"
  >
    <span class="relative z-10 w-full font-bold text-center">{text}</span>
    <span
      aria-hidden="true"
      role="presentation"
      class="absolute z-0 left-0 right-0 bottom-0 h-2 {colourClass} transition-all duration-300 ease-in-out group-hover:h-full"
    ></span>
  </a>
</li>
