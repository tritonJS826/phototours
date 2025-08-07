import {Button} from "./Button";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const BigGreen: Story = {
  args: {
    children: "Big Green",
    variant: "green",
    blockSize: "bigGreen",
  },
};

export const SmallGreen: Story = {
  args: {
    children: "Small Green",
    variant: "green",
    blockSize: "smallGreen",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Grey: Story = {
  args: {
    children: "Grey",
    variant: "grey",
  },
};

export const SquareGreen: Story = {
  args: {
    children: "+",
    variant: "green",
    blockSize: "smallGreen",
    square: true,
  },
};
