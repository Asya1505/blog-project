import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
    ThemeDecorator(Theme.LIGHT),
  ],
};

export default meta
type Story = StoryObj<typeof ProfilePage>

// ToDo fix
export const Light: Story = {
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
