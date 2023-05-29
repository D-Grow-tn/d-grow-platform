import { configureStore } from '@reduxjs/toolkit'
import clientReducer from './client'
import auth from "./auth";
import projects from './projects';

export const store=configureStore({
  reducer: {
    client : clientReducer,
    auth,
    projects,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
