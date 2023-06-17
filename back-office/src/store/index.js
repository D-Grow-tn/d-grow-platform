import { configureStore } from '@reduxjs/toolkit'
import auth from "./auth";
import client from './client';
import employee from './employees'
import request from './request';

import projects from './projects';

import event from './event'



export const store=configureStore({
  reducer: {
    auth,
    client,
    employee,

    request


    projects,

    event,


  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})
