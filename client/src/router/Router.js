import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadComponent from "./LoadComponent";
import Client from './../apps/Client';

const ComingSoon = React.lazy(() => import("../pages/ComingSoon"));

const Home = React.lazy(() => import("./../pages/Home"));

const Login = React.lazy(() => import("../pages/Auth/Login"));

const SignUp = React.lazy(() => import("../pages/Auth/SignUp"));

const AboutUs = React.lazy(() => import("../pages/AboutUs"));

const Profile = React.lazy(() => import('./../pages/Profile'));

const Chat = React.lazy(() => import('./../pages/Chat'));

const Contact = React.lazy(() => import('./../pages/Contact'));



function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />}>
            <Route path="home" element={<LoadComponent Component={Home}/>} />
            <Route path="login" element={<LoadComponent Component={Login}/>} />
            <Route path="sign-up" element={<LoadComponent Component={SignUp}/>} />
            <Route path="profile" element={<LoadComponent Component={Profile}/>} />
            <Route path="about-us" element={<LoadComponent Component={AboutUs}/>} />
            <Route path="contact" element={<LoadComponent Component={Contact}/>} />
            <Route path="*" element={<LoadComponent Component={ComingSoon}/>} />
            <Route path="chat" element={<LoadComponent Component={Chat}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
