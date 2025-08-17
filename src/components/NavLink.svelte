<script lang="js">
  let { text = "", link = "", colourClass = "" } = $props();
</script>

<li
  class="relative z-30 flex items-center justify-center flex-1 cursor-pointer group shadow-border bg-none isolate"
>
  <a
    href={link}
    class="inline w-full px-2 py-4 font-bold text-center align-baseline xs:py-5 md:py-6"
    >{text}</a
  >
  <span
    class="absolute left-0 right-0 bottom-0 h-2 {colourClass} transition-all duration-300 ease-in-out group-hover:h-full"
  ></span>
</li>
