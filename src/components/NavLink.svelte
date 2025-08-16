<script lang="js">
  let { text = "", link = "", colour = "" } = $props();
</script>

<li
  class="z-30 group relative overflow-hidden shadow-border flex justify-center items-center flex-1 bg-none cursor-pointer isolate"
>
  <a
    href={link}
    class="w-full px-2 align-baseline text-center font-bold inline py-4 xs:py-5 md:py-6"
    >{text}</a
  >
  <span
    class="absolute left-0 right-0 bottom-0 h-2 {colour} transition-all duration-300 ease-in-out group-hover:h-full"
  ></span>
</li>
