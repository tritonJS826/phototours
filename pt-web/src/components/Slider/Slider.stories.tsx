import {MemoryRouter} from "react-router-dom";
import {Slider} from "./Slider";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Slider> = {
  title: "shared/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};
