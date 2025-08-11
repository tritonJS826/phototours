import type {Meta, StoryObj} from "@storybook/react-vite";
import {SearchInput} from "src/components/SearchInput/SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "shared/SearchInput",
  component: SearchInput,
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
