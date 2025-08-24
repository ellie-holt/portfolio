<script lang="js">
  import LinkButton from "$lib/ui/Button/LinkButton.svelte";
  let { text = "", link = "", colourClass = "" } = $props();
</script>

<li
  class="relative z-30 flex items-center justify-center flex-1 cursor-pointer group shadow-border bg-none isolate"
>
  <!-- <LinkButton href={link} capitalise class="lowercase">{text}</LinkButton> -->
  <a href={link} class="w-full font-bold text-center">{text}</a>
  <span
    class="absolute left-0 right-0 bottom-0 h-2 {colourClass} transition-all duration-300 ease-in-out group-hover:h-full"
  ></span>
</li>
