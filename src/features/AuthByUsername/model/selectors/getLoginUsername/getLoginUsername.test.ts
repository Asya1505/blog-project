import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })

  test('should return with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
