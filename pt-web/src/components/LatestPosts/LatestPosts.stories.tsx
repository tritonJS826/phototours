import type {Meta, StoryObj} from "@storybook/react-vite";
import {LatestPosts} from "src/components/LatestPosts/LatestPosts";

const meta: Meta<typeof LatestPosts> = {
  title: "shared/LatestPosts",
  component: LatestPosts,
};
export default meta;

type Story = StoryObj<typeof LatestPosts>;

export const Default: Story = {};
