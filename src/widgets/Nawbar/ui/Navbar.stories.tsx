import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import { StoreProvider } from 'app/providers/StoreProvider';

const meta: Meta<typeof Navbar> = {
  title: 'widget/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta
type Story = StoryObj<typeof Navbar>

// ToDo fix
export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    (Story) => (
      <StoreProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </StoreProvider>
    ),
  ],
}
