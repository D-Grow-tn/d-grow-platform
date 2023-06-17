import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth";
import client from './client';
import employee from './employees'
import projects from './projects';


export const store=configureStore({
  reducer: {
    auth,
    client,
    employee,
    projects
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
