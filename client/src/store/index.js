import { configureStore } from '@reduxjs/toolkit'
import client from './client'
import auth from "./auth";
import projects from './projects';
import interactions from './interactions';
import product from './products';
import contact from './contact';
export const store=configureStore({
  reducer: {
    auth,
    projects,
    client,
    interactions,
    product,
    contact,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
