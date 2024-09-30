import type { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "storybook-addon-remix-react-router";
import Module from "../app/routes/server-stack.$";

const meta = {
  title: "Server Stack",
  component: Module,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Module>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {},
  decorators: [withRouter],
};

export const About: Story = {
  args: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      outlet: {
        path: "/about",
      },
    },
  },
};
