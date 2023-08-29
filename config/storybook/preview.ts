import { Preview } from '@storybook/react'

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
// addDecorator(() => ThemeDecorator(Theme.LIGHT))
// addDecorator(StyleDecorator)
// addDecorator(StoreDecorator)
//  addDecorator(RouterDecorator)
export default preview
