import type {Meta, StoryObj} from "@storybook/react-vite";
import {TourCard} from "src/components/TourCard/TourCard";

const meta: Meta<typeof TourCard> = {
  title: "shared/TourCard",
  component: TourCard,
};
export default meta;

type Story = StoryObj<typeof TourCard>;

export const Default: Story = {
  args: {
    image: "https://via.placeholder.com/300x200",
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    price: "$1,200",
  },
};

export const WithLongTitle: Story = {
  args: {
    image: "https://via.placeholder.com/300x200",
    title: "Explore the Ancient Wonders of Egypt with Our Guided Luxury Tour",
    location: "Cairo, Egypt",
    price: "$2,500",
  },
};
