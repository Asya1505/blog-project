import { DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getUser'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  });
});