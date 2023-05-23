import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
};

export default meta
type Story = StoryObj<typeof ErrorPage>

//ToDo fix
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
    ),
  ]
}
