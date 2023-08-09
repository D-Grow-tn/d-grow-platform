import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import client from "./client";
import employee from "./employees";
import request from "./request";
import project from "./projects";
import event from "./event";
import technology from "./technology";
import decision from "./decision";
import main from "./main";
import user from "./users";
import subComponet from "./subComponet";
import contentsubcomponet from "./contentsubcomponet";
import team from "./team"
import interaction from "./interaction"
import message from "./message";
import worktime from "./worktime";
export const store = configureStore({
  reducer: {
    auth,
    interaction,
    client,
    employee,
    request,
    project,
    event,
    main,
    decision,
    technology,
    user,
    subComponet,
    contentsubcomponet,
    team,
    message,
    worktime,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
