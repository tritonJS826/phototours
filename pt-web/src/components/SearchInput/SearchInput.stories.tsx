import {SearchInput} from "./SearchInput";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof SearchInput> = {
  title: "shared/SearchInput",
  component: SearchInput,
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
