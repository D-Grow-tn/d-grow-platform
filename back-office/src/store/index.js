import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth";
import client from './client';
import employee from './employees'
import request from './request';


export const store=configureStore({
  reducer: {
    auth,
    client,
    employee,
    request
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
