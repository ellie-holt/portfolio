/** @type { import('@storybook/svelte-vite').Preview } */

import "../src/styles/index.css";

const preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
