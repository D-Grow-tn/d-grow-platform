import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth";
import client from './client';
import employee from './employees'


export const store=configureStore({
  reducer: {
    auth,
    client,
    employee
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
