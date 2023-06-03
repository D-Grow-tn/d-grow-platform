import { configureStore } from '@reduxjs/toolkit'
import client from './client'
import auth from "./auth";
import projects from './projects';
import interactions from './interactions';
export const store=configureStore({
  reducer: {
    auth,
    projects,
    client,
    interactions
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
