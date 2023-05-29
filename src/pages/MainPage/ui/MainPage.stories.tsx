import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
    ThemeDecorator(Theme.LIGHT),
  ],
};

export default meta
type Story = StoryObj<typeof MainPage>

// ToDo fix
export const Light: Story = {
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
