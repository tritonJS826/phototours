import {MemoryRouter} from "react-router-dom";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Slider} from "src/components/Slider/Slider";

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
