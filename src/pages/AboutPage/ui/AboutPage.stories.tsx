import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
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
type Story = StoryObj<typeof AboutPage>

// ToDo fix
export const Light: Story = {
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
