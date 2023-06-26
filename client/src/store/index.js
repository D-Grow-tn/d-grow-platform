import { configureStore } from '@reduxjs/toolkit'
import client from './client'
import auth from "./auth";
import projects from './projects';
import interactions from './interactions';
import product from './products';
export const store=configureStore({
  reducer: {
    auth,
    projects,
    client,
    interactions,
    product
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
