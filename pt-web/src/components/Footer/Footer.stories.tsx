import {MemoryRouter} from "react-router-dom";
import {Footer} from "./Footer";
import type {Meta, StoryObj} from "@storybook/react-vite";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {render: () => <Footer />};
