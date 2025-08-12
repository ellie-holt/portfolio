<script lang="js">
  let { text = "", link = "" } = $props();
</script>

<li
  class="z-30 group relative overflow-hidden flex justify-center items-center flex-1 bg-none cursor-pointer isolate"
>
  <a
    href={link}
    class="w-full px-2 align-baseline text-center font-bold inline py-4"
    >{text}</a
  >
</li>
