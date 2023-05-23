import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './client'

export const store=configureStore({
  reducer: {
    client : clientReducer
  },
})
