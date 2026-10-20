import { configureStore } from '@reduxjs/toolkit'
import { scrollReducer, mouseReducer } from '../slices/slices'
export const store = configureStore({
  reducer: {
    scrollReducer,
    mouseReducer,
  },
})
