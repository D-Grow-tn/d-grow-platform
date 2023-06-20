import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import client from "./client";
import employee from "./employees";
import request from "./request";
import projects from "./projects";
import event from "./event";
import decision from "./decision";

export const store = configureStore({
  reducer: {
    auth,
    client,
    employee,
    request,
    projects,
    event,
    decision
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
