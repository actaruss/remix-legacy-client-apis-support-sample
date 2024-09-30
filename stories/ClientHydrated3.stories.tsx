import type { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "storybook-addon-remix-react-router";
import FallbackNestedClientRouter3 from "../app/routes/hydrated-route-3.$";

const meta = {
  title: "Client hydrated 3",
  component: FallbackNestedClientRouter3,
  tags: ["autodocs"],
} satisfies Meta<typeof FallbackNestedClientRouter3>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Home: Story = {
  args: {},
  decorators: [withRouter],
};

export const Services: Story = {
  args: {},
  decorators: [withRouter],
  //* https://www.npmjs.com/package/storybook-addon-react-router-v6/v/1.0.1
  parameters: {
    reactRouter: {
      outlet: {
        path: "/services",
      },
    },
  },
};

export const ServicesModal: Story = {
  args: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      outlet: {
        path: "/services/modal",
      },
    },
  },
};
