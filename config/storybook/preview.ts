import { Preview } from '@storybook/react'
import { addDecorator } from '@storybook/client-api'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

// start with comment
//addDecorator(() => ThemeDecorator(Theme.LIGHT))
//addDecorator(StyleDecorator)
//addDecorator(StoreDecorator)
//  addDecorator(RouterDecorator)
export default preview
