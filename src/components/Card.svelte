<script lang="js">
  let { title = "", titleBg = "", children } = $props();
</script>

<div class="border-black border-2 shadow-blocky shadow-azure-300">
  {#if title}
    <div class="py-2 px-3 {titleBg} border-b-2 border-black">
      <h3>{title}</h3>
    </div>
  {/if}
  <div class="px-6 pt-2 pb-4">
    {@render children?.()}
  </div>
</div>
