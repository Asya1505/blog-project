import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta
type Story = StoryObj<typeof AppLink>

// ToDo fix
export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
}

export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
}

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const RedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
}
