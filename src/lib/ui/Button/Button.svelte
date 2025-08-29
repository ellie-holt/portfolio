<!-- FILE: src/lib/ui/Button/Button.svelte -->

<script lang="js">
  /** @typedef {import('svelte').Snippet} Snippet */

  /** @type {{
   *   type?: 'button'|'submit'|'reset',
   *  form?: string,
   *   disabled?: boolean,
   *   bar?: boolean,
   *   tone?: 'tang'|'azure'|'aqua',
   *   fullWidth?: boolean,
   *   class?: string,
   *   label?: string,
   *   children?: Snippet
   * }} */

  let {
    type = /** @type {'button'|'submit'|'reset'} */ ("button"),
    form = "",
    disabled = false,
    bar = false,
    tone = "azure",
    fullWidth = false,
    label = "Button",
    class: classes = "",
    children,
  } = $props();

  const toneBg =
    {
      azure: "bg-azure-200",
      aqua: "bg-aqua-200",
      tang: "bg-tang-200",
    }[tone] ?? "bg-azure-200";

  const base =
    "brutal-btn" +
    (bar ? " relative group text-2xl font-bold hover:font-semibold" : "") +
    (fullWidth ? " w-full" : "");

  const btnClass = `${base} ${classes}`.trim();
</script>

<button {type} {form} {disabled} class={btnClass}>
  {#if bar}
    <span class="relative z-10">
      {#if children}{@render children()}{:else}{label}{/if}
    </span>
    <span
      class={`absolute z-0 left-0 right-0 bottom-0 h-2 ${toneBg} transition-all duration-300 ease-in-out group-hover:h-full`}
      aria-hidden="true"
    ></span>
  {:else if children}{@render children()}{:else}{label}{/if}
</button>
