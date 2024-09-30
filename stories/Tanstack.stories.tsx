import type { Meta, StoryObj } from "@storybook/react";

import { createRemixStub } from "@remix-run/testing";
import TanStackClientRouter3 from "../app/routes/tanstack-client-router.$";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "React query stack",

  component: TanStackClientRouter3,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof TanStackClientRouter3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          action: () => ({ redirect: "/" }),
          loader: () => ({ redirect: "/" }),
          Component() {
            return <Story />;
          },
        },
      ]);

      return <RemixStub />;
    },
  ],
};
