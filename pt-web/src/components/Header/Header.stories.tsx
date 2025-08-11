import {MemoryRouter} from "react-router-dom";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Header} from "src/components/Header/Header";

const meta: Meta<typeof Header> = {
  title: "shared/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
