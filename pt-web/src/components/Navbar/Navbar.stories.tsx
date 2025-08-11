import {MemoryRouter} from "react-router-dom";
import {Navbar} from "./Navbar";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Navbar> = {
  title: "shared/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;
export const Default: Story = {};
