import React, { useEffect, useState } from "react";

import LoadComponent from "./LoadComponent";
import Client from "./../apps/Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";
import Objectives from "../components/Objectives";
import TeamSection from "../components/TeamSection";
import InteractionSection from "../components/InteractionSection";
import Gantt from "../components/GanttSection";

const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));

const Home = React.lazy(() => import("./../pages/Home"));

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));

const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));

const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Profile = React.lazy(() => import("./../pages/Profile"));

const Chat = React.lazy(() => import("./../pages/Chat"));
const Services = React.lazy(() => import("./../pages/Services"));
const NoPage = React.lazy(() => import("./../pages/NoPage"));
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
            <Route index element={<LoadComponent Component={ComingSoon} />} />

            {user && (
              <Route
                path="profile"
                element={<LoadComponent Component={Profile} />}
              />
            )}

              <Route
              path="home"
              element={<LoadComponent Component={Home} />}
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
             path="project/:projectId"
              element={<LoadComponent Component={ProjectDetails} />}
            >
              <Route   index   element={<LoadComponent Component={Objectives} />} />
              <Route
                path="team-section"
                element={<LoadComponent Component={TeamSection} />}
              />
              <Route
                path="interaction"
                element={<LoadComponent Component={InteractionSection} />}
              />
              <Route
                path="gantt"
                element={<LoadComponent Component={Gantt} />}
              />
            </Route>

            <Route
              path="*"
              element={<LoadComponent Component={NoPage} />}
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
            {/* <Route
              path="objectives"
              element={<LoadComponent Component={Objectives} />}
            />
             <Route
              path="team-section"
              element={<LoadComponent Component={TeamSection} />}
            />
             <Route
              path="interaction"
              element={<LoadComponent Component={InteractionSection} />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
