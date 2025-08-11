import {MemoryRouter} from "react-router-dom";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Link} from "src/components/ui/link/Link";

const meta: Meta<typeof Link> = {
  title: "shared/Link",
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Link>;

export const InternalLink: Story = {
  args: {
    to: "/about",
    children: "Go to About Page",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://google.com",
    target: "_blank",
    children: "Visit Google",
  },
};

export const WithCustomClass: Story = {
  args: {
    href: "#",
    className: "custom-class",
    children: "Custom Styled Link",
  },
};
