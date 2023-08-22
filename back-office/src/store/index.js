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
import stage from "./stage"
import interaction from "./interaction"
import task from "./task";
import message from "./message";
import objective from './objective'
import contact from "./contact";
import contract from "./contract";
import worktime from "./worktime";
import provides from "./provides";
import devis from "./devis";
import quiz from "./quiz";
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
    task,
    message,
    objective,
    stage,
    contact,
    contract,
    worktime,
    provides,
    devis,
    quiz
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
