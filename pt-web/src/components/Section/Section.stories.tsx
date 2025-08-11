import type {Meta, StoryObj} from "@storybook/react-vite";
import {Section} from "src/components/Section/Section";

const meta: Meta<typeof Section> = {
  title: "shared/Section",
  component: Section,
};
export default meta;

type Story = StoryObj<typeof Section>;

export const WithTitle: Story = {
  args: {
    title: "Section Title",
    children: <p>
      This is some sample content inside the section.
    </p>,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: <p>
      This section does not have a title.
    </p>,
  },
};
