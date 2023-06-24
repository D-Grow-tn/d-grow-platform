import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import client from "./client";
import employee from "./employees";
import request from "./request";
import project from "./projects";
import event from "./event";

import decision from "./decision";

import user from "./users";


export const store = configureStore({
  reducer: {
    auth,
    client,
    employee,
    request,
    project,
    event,

    decision,

    user,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
