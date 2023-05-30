import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { DeepPartial } from '@reduxjs/toolkit'


export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story: StoryObj) => (
  <StoreProvider initialState = {state}>
    { story }
  </StoreProvider>
)
