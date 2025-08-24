<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Button from "$lib/ui/Button/Button.svelte";
  import LinkButton from "./LinkButton.svelte";
  import { action } from "storybook/actions";

  const click = action("click");

  const { Story } = defineMeta({
    title: "UI/Button",
    component: Button,
    subcomponents: { LinkButton },
    args: {
      bar: false,
      tone: "azure",
      fullWidth: false,
      label: "Click Me",
      class: "",
    },

    argTypes: {
      // Shared
      bar: {
        control: { type: "boolean" },
      },
      tone: {
        control: { type: "select" },
        options: ["tang", "azure", "aqua"],
      },
      fullWidth: {
        control: { type: "boolean" },
      },
      class: {
        control: { type: "text" },
      },

      // Button
      type: {
        control: { type: "inline-radio" },
        options: ["button", "submit", "reset"],
      },
      disabled: {
        control: { type: "boolean" },
      },

      // LinkButton
      href: {
        control: { type: "text" },
      },
      target: {
        control: { type: "radio" },
        options: ["_self", "_blank", "_parent", "_top"],
      },
      rel: {
        control: { type: "text" },
      },
    },
  });
</script>

<!-- ======= BUTTON STORIES ======= -->

<Story name="Action / Default">
  {#snippet template(args)}
    <Button {...args}>{args.label}</Button>
  {/snippet}
</Story>

<Story
  name="Action / Bar Azure"
  args={{ bar: true, tone: "azure", label: "Save" }}
>
  {#snippet template(args)}
    <Button {...args}>{args.label}</Button>
  {/snippet}
</Story>

<Story
  name="Action / Bar Tang"
  args={{ bar: true, tone: "tang", label: "Save" }}
>
  {#snippet template(args)}
    <Button {...args}>{args.label}</Button>
  {/snippet}
</Story>

<Story
  name="Action / Bar Aqua"
  args={{ bar: true, tone: "aqua", label: "Confirm" }}
>
  {#snippet template(args)}
    <Button {...args}>{args.label}</Button>
  {/snippet}
</Story>

<Story
  name="Action / Full width submit"
  args={{
    type: "submit",
    bar: true,
    tone: "azure",
    fullWidth: true,
    label: "Send",
  }}
>
  {#snippet template(args)}
    <Button {...args}>{args.label}</Button>
  {/snippet}
</Story>

<!-- ======= LINK BUTTON STORIES ======= -->

<Story name="Nav / Plain link" args={{ href: "#contact", label: "Contact" }}>
  {#snippet template(args)}
    <LinkButton {...args}>{args.label}</LinkButton>
  {/snippet}
</Story>

<Story
  name="Nav / Full width Azure"
  args={{
    href: "#contact",
    bar: true,
    tone: "azure",
    fullWidth: true,
    label: "Get in touch",
  }}
>
  {#snippet template(args)}
    <LinkButton {...args}>{args.label}</LinkButton>
  {/snippet}
</Story>

<Story
  name="Nav / External"
  args={{
    href: "https://github.com/ellie-holt",
    target: "_blank",
    bar: true,
    tone: "tang",
    label: "GitHub",
  }}
>
  {#snippet template(args)}
    <LinkButton {...args}>{args.label}</LinkButton>
  {/snippet}
</Story>
