<!-- src/lib/ui/Arrow/RoughJourneyArrow.stories.svelte -->

<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import RoughJourneyArrow from "$lib/ui/Arrow/RoughJourneyArrow.svelte";

  const { Story } = defineMeta({
    title: "UI/Arrow/RoughJourneyArrow",
    component: RoughJourneyArrow,

    args: {
      stroke: "#f27941", // tang-500
      strokeWidth: 5,
      wiggles: 2,
      amplitude: 0.2,
      dash: 18,
      gap: 12,
      headAngleDeg: 28,
      headLen: 28,
      class: "w-108 h-32",
    },

    argTypes: {
      stroke: { control: { type: "color" } },
      strokeWidth: { control: { type: "range", min: 1, max: 20, step: 1 } },
      wiggles: { control: { type: "range", min: 0, max: 10, step: 1 } },
      amplitude: { control: { type: "range", min: 0, max: 0.5, step: 0.01 } },
      dash: { control: { type: "range", min: 4, max: 40, step: 1 } },
      gap: { control: { type: "range", min: 2, max: 40, step: 1 } },

      headAngleDeg: { control: { type: "range", min: 10, max: 60, step: 1 } },
      headLen: { control: { type: "range", min: 8, max: 80, step: 1 } },
      class: { control: { type: "text" } },
    },
  });
</script>

{#snippet frame(args)}
  <div
    class="inline-flex items-center justify-center p-12 m-12 bg-white border"
  >
    <RoughJourneyArrow {...args} />
  </div>
{/snippet}

<!-- Default with full controls -->
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

<!-- Wiggles and amplitude -->
<Story
  name="Wiggles and amplitude"
  args={{ wiggles: 5, amplitude: 0.28 }}
  parameters={{ controls: { include: ["wiggles", "amplitude"] } }}
>
  {#snippet template(args)}{@render frame(args)}{/snippet}
</Story>

<!-- Dash vs gap -->
<Story
  name="Dash vs gap"
  args={{ dash: 28, gap: 6 }}
  parameters={{ controls: { include: ["dash", "gap"] } }}
>
  {#snippet template(args)}{@render frame(args)}{/snippet}
</Story>

<!-- Arrowhead tuning -->
<Story
  name="Arrowhead tuning"
  args={{ headAngleDeg: 40, headLen: 40 }}
  parameters={{ controls: { include: ["headAngleDeg", "headLen"] } }}
>
  {#snippet template(args)}{@render frame(args)}{/snippet}
</Story>

<!-- Sizes gallery -->
<Story name="Sizes" asChild>
  <div class="flex flex-col items-end gap-6">
    <div class="flex flex-col items-center gap-2">
      <div class="p-2 bg-white border">
        <RoughJourneyArrow class="w-56 h-16" />
      </div>
      <span class="text-sm font-mono">w-56 h-16</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="p-2 bg-white border">
        <RoughJourneyArrow class="w-80 h-20" />
      </div>
      <span class="text-sm font-mono">w-80 h-20</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="p-2 bg-white border">
        <RoughJourneyArrow class="w-[32rem] h-24" />
      </div>
      <span class="text-sm font-mono">w-128 h-24</span>
    </div>
  </div>
</Story>
