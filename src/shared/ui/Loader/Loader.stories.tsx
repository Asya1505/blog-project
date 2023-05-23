import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ]
};

export default meta
type Story = StoryObj<typeof Loader>

//ToDo fix
export const Light: Story = {}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}