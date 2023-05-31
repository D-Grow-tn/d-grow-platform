import { configureStore } from '@reduxjs/toolkit'
import client from './client'
import auth from "./auth";
import projects from './projects';

export const store=configureStore({
  reducer: {
    auth,
    projects,
    client
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
