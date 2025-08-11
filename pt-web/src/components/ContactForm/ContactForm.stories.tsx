import type {Meta, StoryObj} from "@storybook/react-vite";
import {ContactForm} from "src/components/ContactForm/ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "shared/ContactForm",
  component: ContactForm,
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
