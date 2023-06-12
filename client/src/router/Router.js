import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";

import LoadComponent from"./LoadComponent"
const Client = React.lazy(() => import("./../apps/Client"));

const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));

const Home = React.lazy(() => import("./../pages/Home"));

const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Contact = React.lazy(() => import("./../pages/Contact"));

// const Services = React.lazy(() => import("./../pages/Services"));

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));

const Profile = React.lazy(() => import("./../pages/Profile"));
const ProjectDetails = React.lazy(() => import("./../pages/ProjectDetails"));
const Objectives = React.lazy(() => import("../components/Objectives"));
const TeamSection = React.lazy(() => import("../components/TeamSection"));
const InteractionSection = React.lazy(() =>
  import("../components/InteractionSection")
);
const Gantt = React.lazy(() => import("../components/GanttSection"));

const NoPage = React.lazy(() => import("./../pages/NoPage"));

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
      <BrowserRouter >
        <Routes>
          {!user && (
            <Route path="/auth" element={<LoadComponent Component={Auth} />}>
              <Route exact path="login" element={<LoginPage />} />
              <Route exact path="reset-password" element={<ResetPassword />} />
            </Route>
          )}
          <Route path="/" element={<Client />}>
            <Route index element={<LoadComponent Component={Home} />} />
            <Route
              path="about-us"
              element={<LoadComponent Component={AboutUs} />}
            />
            <Route
              path="contact"
              element={<LoadComponent Component={Contact} />}
            />

            <Route
              path="/services"
              element={<LoadComponent Component={ComingSoon} />}
            />

            {user && (
              <>
                <Route
                  path="profile"
                  element={<LoadComponent Component={Profile} />}
                />
                <Route
                  path="project/:projectId"
                  element={<LoadComponent Component={ProjectDetails} />}
                >
                  <Route
                    index
                    element={<LoadComponent Component={Objectives} />}
                  />
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
              </>
            )}
            <Route path="*" element={<LoadComponent Component={NoPage} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default Router;
