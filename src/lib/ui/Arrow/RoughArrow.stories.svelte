<!-- src/lib/ui/Arrow/RoughArrow.stories.svelte -->

<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import RoughArrow from "$lib/ui/Arrow/RoughArrow.svelte";

  const { Story } = defineMeta({
    title: "UI/Arrow/RoughArrow",
    component: RoughArrow,

    args: {
      direction: "down",
      stroke: "#f27941", // tang-500
      strokeWidth: 5,
      class: "w-32 h-32",
    },

    argTypes: {
      direction: {
        control: { type: "inline-radio" },
        options: ["up", "down", "left", "right"],
      },
      stroke: { control: { type: "color" } },
      strokeWidth: { control: { type: "range", min: 1, max: 20, step: 1 } },
      class: { control: { type: "text" } },
    },
  });
</script>

{#snippet frame(args)}
  <div
    class="inline-flex items-center justify-center p-12 m-12 bg-white border"
  >
    <RoughArrow {...args} />
  </div>
{/snippet}

<!-- Default with controls -->
<Story name="Default">
  {#snippet template(args)}{@render frame(args)}{/snippet}
</Story>

<!-- Colour and thickness -->
<Story
  name="Colour and thickness"
  args={{ stroke: "#5f85de", strokeWidth: 7 }}
  parameters={{ controls: { include: ["stroke", "strokeWidth"] } }}
>
  {#snippet template(args)}{@render frame(args)}{/snippet}
</Story>

<!-- Directions gallery -->
<Story name="Directions" asChild>
  <div class="m-12 flex gap-6 items-stretch">
    <div class="flex flex-col items-center gap-2">
      <div class="p-2 bg-white border">
        <RoughArrow direction="up" class="w-20 h-20" />
      </div>
      <span class="text-sm font-mono">up</span>
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <div class="p-2 bg-white border">
        <RoughArrow direction="down" class="w-20 h-20" />
      </div>
      <span class="text-sm font-mono">down</span>
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <div class="p-2 bg-white border">
        <RoughArrow direction="left" class="w-20 h-20" />
      </div>
      <span class="text-sm font-mono">left</span>
    </div>
    <div class="flex flex-col items-center justify-between gap-2">
      <div class="p-2 bg-white border">
        <RoughArrow direction="right" class="w-20 h-20" />
      </div>
      <span class="text-sm font-mono">right</span>
    </div>
  </div>
</Story>
