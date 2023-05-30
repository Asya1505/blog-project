import { Action, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema'
import { LoginSchema, loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
  const rootReduser: ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer,
    loginSchema: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReduser,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
