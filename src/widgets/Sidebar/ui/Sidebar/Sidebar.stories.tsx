import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
}
