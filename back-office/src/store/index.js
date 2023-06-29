import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import client from "./client";
import employee from "./employees";
import request from "./request";
import projects from "./projects";
import event from "./event";

import decision from "./decision";
import main from "./main";
import user from "./users";
import subComponet from "./subComponet";
import contentsubcomponet from "./contentsubcomponet";
export const store = configureStore({
  reducer: {
    auth,
    client,
    employee,
    request,
    projects,
    event,
    main,
    decision,

    user,
    subComponet,
    contentsubcomponet,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
