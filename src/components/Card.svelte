<script lang="js">
  let { title, titleBg, children } = $props();
</script>

<div class="border-black border-2 rounded-xl box-shadow">
  <div class="py-2 px-3 {titleBg} border-b-2 border-black rounded-t-xl">
    <h3>{title}</h3>
  </div>
  <div class="px-6 pt-2 pb-4">
    {@render children?.()}
  </div>
</div>
