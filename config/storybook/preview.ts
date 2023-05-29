import { Preview } from '@storybook/react'
import { addDecorator } from '@storybook/client-api'
import { StyleDecorator } from 'shared/config/storybook/StoreDecorator/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// start with comment
addDecorator(() => ThemeDecorator(Theme.LIGHT))
addDecorator(StyleDecorator)
// addDecorator(RouterDecorator)
export default preview
