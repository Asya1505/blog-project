import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { User } from './User'

describe('User', () => {
  test('test render', () => {
    componentRender(<User />, {
      initialState: { counter: { value: 10 } },
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<User />, {
      initialState: { counter: { value: 10 } },
    })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    componentRender(<User />, {
      initialState: { counter: { value: 10 } },
    })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
