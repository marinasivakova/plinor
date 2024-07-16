import { configureStore } from '@reduxjs/toolkit'
import elementsStateReducer from './reducers/elementsStateReducer'

export const store = configureStore({
  reducer: {
    elements: elementsStateReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch