import React from "react";

import LoadComponent from "./LoadComponent";
import Client from "./../apps/Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));

const Home = React.lazy(() => import("./../pages/Home"));

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));

const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));

const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Profile = React.lazy(() => import("./../pages/Profile"));

const Chat = React.lazy(() => import("./../pages/Chat"));

const Contact = React.lazy(() => import("./../pages/Contact"));
const ProjectDetails = React.lazy(() => import('./../pages/ProjectDetails'));


function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<LoadComponent Component={Auth} />}>
            <Route exact index element={<LoginPage />} />
            <Route exact path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<Client />}>
            <Route index element={<LoadComponent Component={Home} />} />

            <Route
              path="profile"
              element={<LoadComponent Component={Profile} />}
            />
            <Route
              path="about-us"
              element={<LoadComponent Component={AboutUs} />}
            />
            <Route
              path="contact"
              element={<LoadComponent Component={Contact} />}
            />

            <Route
              path="profile/:projectId-details"
              element={<LoadComponent Component={ProjectDetails} />}
            />
            <Route
              path="*"
              element={<LoadComponent Component={ComingSoon} />}
            />
            <Route path="chat" element={<LoadComponent Component={Chat} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
