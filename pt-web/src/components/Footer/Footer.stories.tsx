import {MemoryRouter} from "react-router-dom";
import type {Meta, StoryObj} from "@storybook/react-vite";
import {Footer} from "src/components/Footer/Footer";

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
