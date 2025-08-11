import type {Meta, StoryObj} from "@storybook/react-vite";
import {Icon} from "src/components/Icon/Icon";

const meta: Meta<typeof Icon> = {
  title: "shared/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {type: "select"},
      options: ["search", "phone", "facebook", "instagram"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const SearchIcon: Story = {args: {name: "search"}};

export const PhoneIcon: Story = {args: {name: "phone"}};

export const FacebookIcon: Story = {args: {name: "facebook"}};

export const InstagramIcon: Story = {args: {name: "instagram"}};

export const All: Story = {
  render: () => (
    <div style={{display: "flex", gap: 16, alignItems: "center"}}>
      <Icon name="search" />
      <Icon name="phone" />
      <Icon name="facebook" />
      <Icon name="instagram" />
    </div>
  ),
};
