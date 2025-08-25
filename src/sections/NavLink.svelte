<script lang="js">
  import LinkButton from "$lib/ui/Button/LinkButton.svelte";
  let { text = "", link = "", colourClass = "" } = $props();
</script>

<a
  href={link}
  class="relative z-30 flex-1 cursor-pointer group shadow-border bg-none isolate"
>
  <li class="relative w-full h-full flex items-center justify-center">
    <!-- <LinkButton href={link} capitalise class="lowercase">{text}</LinkButton> -->
    <span class="relative z-10 w-full font-bold text-center">{text}</span>
    <span
      class="absolute z-0 left-0 right-0 bottom-0 h-2 {colourClass} transition-all duration-300 ease-in-out group-hover:h-full"
    ></span>
  </li>
</a>
