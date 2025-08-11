import {Container} from "./Container";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Container> = {
  title: "shared/Container",
  component: Container,
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <p>
        This is some sample content inside the Container component.
      </p>
    ),
  },
};

export const WithMultipleElements: Story = {
  args: {
    children: (
      <>
        <h2>
          Container Title
        </h2>
        <p>
          This container has multiple elements inside. You can place any JSX
          content here.
        </p>
        <button>
          Click me
        </button>
      </>
    ),
  },
};
