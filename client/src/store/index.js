import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './client'
import auth from "./auth";

export const store=configureStore({
  reducer: {
    client : clientReducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
