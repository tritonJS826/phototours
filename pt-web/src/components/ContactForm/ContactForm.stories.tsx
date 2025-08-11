import {ContactForm} from "./ContactForm";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof ContactForm> = {
  title: "shared/ContactForm",
  component: ContactForm,
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
