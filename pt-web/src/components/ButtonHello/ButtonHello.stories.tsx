import type {Meta, StoryObj} from "@storybook/react-vite";
import {HelloButton} from "src/components/ButtonHello/ButtonHello";

const MetaObj: Meta<typeof HelloButton> = {
  title: "Components/HelloButton",
  component: HelloButton,
  parameters: {layout: "centered"},
};

export default MetaObj;

type Story = StoryObj<typeof HelloButton>;

export const Default: Story = {render: () => <HelloButton />};
