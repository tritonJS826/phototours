import {BlogCard} from "./BlogCard";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof BlogCard> = {
  title: "shared/BlogCard",
  component: BlogCard,
};
export default meta;

type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    image: "https://via.placeholder.com/300x200",
    title: "Article title",
    date: "August 08, 2025",
    // eslint-disable-next-line max-len
    excerpt: "This is a short article excerpt. It should be interesting enough to catch the reader's attention and make them want to read more.",
  },
};

export const WithLongText: Story = {
  args: {
    image: "https://via.placeholder.com/300x200",
    title:
      "A very long article title that might take multiple lines and tests the component's responsiveness",
    date: "January 01, 2025",
    // eslint-disable-next-line max-len
    excerpt: "This is an example of a longer article excerpt, which might contain multiple sentences. It allows testing how the component handles a large amount of text in the excerpt.",
  },
};
