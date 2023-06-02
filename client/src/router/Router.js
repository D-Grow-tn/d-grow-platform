import React, { useEffect, useState } from "react";

import LoadComponent from "./LoadComponent";
import Client from "./../apps/Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";

const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));

const Home = React.lazy(() => import("./../pages/Home"));

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));

const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));

const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Profile = React.lazy(() => import("./../pages/Profile"));

const Chat = React.lazy(() => import("./../pages/Chat"));
const Services = React.lazy(() => import("./../pages/Services"));

const Contact = React.lazy(() => import("./../pages/Contact"));
const ProjectDetails = React.lazy(() => import("./../pages/ProjectDetails"));
const Signup = React.lazy(() => import("../pages/Signup"));

function Router() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const Authorization = token.Authorization;
      dispatch(me(Authorization)).then((res) => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  return (
    <div>
      {loading && (
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 bg-white">
          Loading
        </div>
      )}
      <BrowserRouter>
        <Routes>
          {!user && (
            <Route path="/auth" element={<LoadComponent Component={Auth} />}>
              <Route exact path="login" element={<LoginPage />} />
              <Route exact path="reset-password" element={<ResetPassword />} />
            </Route>
          )}
          <Route path="/" element={<Client />}>
            <Route index element={<LoadComponent Component={Home} />} />

            {user && (
              <Route
                path="profile"
                element={<LoadComponent Component={Profile} />}
              />
            )}
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
            <Route
              path="/services"
              element={<LoadComponent Component={Services} />}
            />
            <Route path="chat" element={<LoadComponent Component={Chat} />} />

            <Route
              path="signup"
              element={<LoadComponent Component={Signup} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
