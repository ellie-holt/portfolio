<!-- FILE: src/lib/ui/Button/LinkButton.svelte -->

<script lang="js">
  /** @typedef {import('svelte').Snippet} Snippet */

  /** @type {{
   *   href: string,
   *   target?: '_self'|'_blank'|'_parent'|'_top',
   *   rel?: string,
   *   bar?: boolean,
   *   tone?: 'tang'|'azure'|'aqua',
   *   fullWidth?: boolean,
   *   class?: string,
   *   label?: string,
   *   children?: Snippet
   * }} */

  let {
    href,
    target = undefined,
    rel = undefined,
    bar = false,
    tone = "azure",
    fullWidth = false,
    label = "Link",
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
    "brutal-btn inline-block link-underline" +
    (bar ? " relative group text-2xl font-bold  hover:font-semibold" : "") +
    (fullWidth ? " w-full" : "");

  const aClass = `${base} ${classes}`.trim();
</script>

<a
  {href}
  {target}
  rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
  class={aClass}
>
  {#if bar}
    <span class="relative z-10">
      {#if children}{@render children()}{:else}{label}{/if}
    </span>
    <span
      class={`absolute z-0 left-0 right-0 bottom-0 h-2 ${toneBg} transition-all duration-300 ease-in-out group-hover:h-full`}
      aria-hidden="true"
    ></span>
  {:else if children}{@render children()}{:else}{label}{/if}
</a>
