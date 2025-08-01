import type {Meta, StoryObj} from "@storybook/react-vite";
import {ButtonHello} from "src/components/ButtonHello/ButtonHello";

const MetaObj: Meta<typeof ButtonHello> = {
  title: "Components/HelloButton",
  component: ButtonHello,
  parameters: {layout: "centered"},
};

export default MetaObj;

type Story = StoryObj<typeof ButtonHello>;

export const Default: Story = {render: () => <ButtonHello />};
