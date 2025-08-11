import {LatestPosts} from "./LatestPosts";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof LatestPosts> = {
  title: "shared/LatestPosts",
  component: LatestPosts,
};
export default meta;

type Story = StoryObj<typeof LatestPosts>;

export const Default: Story = {};
