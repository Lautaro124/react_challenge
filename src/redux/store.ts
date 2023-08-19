import { configureStore } from '@reduxjs/toolkit'
import AccountReducer from './slices/account'

export const store = configureStore({
  reducer: {
    acount: AccountReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
