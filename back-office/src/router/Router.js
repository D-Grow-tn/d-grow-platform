import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "../domains/employee/Employee";
import EmployeeList from "../domains/employee/views/EmployeeList";
import CreateEmployee from "../domains/employee/views/CreateEmployee";
import OneEmployee from "../domains/employee/views/OneEmployee";
import Client from "../domains/client/Client";
import CreateClient from "../domains/client/views/CreateClient";
import ClientList from "../domains/client/views/ClientList";
import EditClient from "../domains/client/views/OneClient";
import Project from "../domains/project/Project";
import ProjectList from "../domains/project/views/ProjectList";
import Decision from "../domains/decision/Decision";
import DecisionList from "../domains/decision/views/DecisionList";
import CreateDecision from "../domains/decision/views/CreateDecision";
import OneDecision from "../domains/decision/views/OneDecision";
import Dashboard from "../domains/dashboard/Dashboard";
import Quiz from "../domains/Quiz/Quiz";
import QuizList from "../domains/Quiz/views/QuizList";
import CreateQuiz from "../domains/Quiz/views/CreateQuiz";
import EditQuiz from "../domains/Quiz/views/EditQuiz";
import Main from "../apps/Main";
import LoginAdmin from "../pages/LoginAdmin";
import NoPage from "../domains/noPage/NoPage";
import CreateProject from "./../domains/project/views/CreateProject";
import EditProject from "./../domains/project/views/EditProject";
import ResetPassword from "./../pages/ResetPassword";
import Events from "../domains/events/Events";
import EventsList from "./../domains/events/views/EventsList";
import CreateEvents from "./../domains/events/views/CreateEvents";
import OneEvent from "./../domains/events/views/OneEvent";
import Test from "../domains/test/Test";
import TestList from "../domains/test/views/TestList";
import CreateTest from "../domains/test/views/CreateTest";
import EditTest from "../domains/test/views/EditTest";
import Invoices from "../domains/invoices/Invoices";
import InvoicesList from "../domains/invoices/views/InvoicesList";
import CreateInvoice from "../domains/invoices/views/CreateInvoice";
import EditInvoice from "../domains/invoices/views/EditInvoice";
import Role from "./../domains/role/Role";
import RoleList from "./../domains/role/views/RoleList";
import CreateRole from "./../domains/role/views/CreateRole";
import EditRole from "./../domains/role/views/EditRole";

import ValidateCode from "../pages/ValidateCode";
import NewPassword from "../pages/NewPassword";
import User from "../domains/users/User";
import UsersList from "../domains/users/views/UsersList";
import CreateUser from "../domains/users/views/CreateUser";
import EditUser from "../domains/users/views/EditUser";
import Providers from "../domains/providers/Providers";
import ProviderList from "../domains/providers/ProviderList";
import CreateProvider from "../domains/providers/CreateProvider";
import EditProvider from "../domains/providers/EditProvider";
import RequestList from "../domains/request/views/RequestList";
import CreateRequest from "../domains/request/views/CreateRequest";
import EditRequest from "../domains/request/views/EditRequest";
import Request from "../domains/request/Request";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../store/auth";
import AuthAdmin from "../apps/AuthAdmin";


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
          {user && (
            <Route path="/" element={<Main />}>
              <Route index element={<Dashboard />} />

              <Route path="employee" element={<Employee />}>
                <Route index element={<EmployeeList />} />
                <Route path="create" element={<CreateEmployee />} />
                <Route path="one/:employeeId" element={<OneEmployee />} />
              </Route>
              <Route path="events" element={<Events />}>
                <Route index element={<EventsList />} />
                <Route path="create" element={<CreateEvents />} />
                <Route path="one/:eventId" element={<OneEvent />} />
              </Route>
              <Route path="quiz" element={<Quiz />}>
                <Route index element={<QuizList />} />
                <Route path="create" element={<CreateQuiz />} />
                <Route path="edit/:quizId" element={<EditQuiz />} />
              </Route>
              <Route path="test" element={<Test />}>
                <Route index element={<TestList />} />
                <Route path="create" element={<CreateTest />} />
                <Route path="edit/:testId" element={<EditTest />} />
              </Route>
              <Route path="invoices" element={<Invoices />}>
                <Route index element={<InvoicesList />} />
                <Route path="create" element={<CreateInvoice />} />
                <Route path="edit/:invoiceId" element={<EditInvoice />} />
              </Route>
              <Route path="role" element={<Role />}>
                <Route index element={<RoleList />} />
                <Route path="create" element={<CreateRole />} />
                <Route path="edit/:roleId" element={<EditRole />} />
              </Route>

              <Route path="client" element={<Client />}>
                <Route index element={<ClientList />} />
                <Route path="create" element={<CreateClient />} />
                <Route path="one/:clientId" element={<EditClient />} />
              </Route>

              <Route path="project" element={<Project />}>
                <Route index element={<ProjectList />} />
                <Route path="create" element={<CreateProject />} />
                <Route path="edit/:projectId" element={<EditProject />} />
              </Route>

              <Route path="decision" element={<Decision />}>
                <Route index element={<DecisionList />} />
                <Route path="create" element={<CreateDecision />} />
                <Route path="one/:decisionId" element={<OneDecision />} />
              </Route>
              <Route path="user" element={<User />}>
                <Route index element={<UsersList />} />
                <Route path="create" element={<CreateUser />} />
                <Route path="edit/:userId" element={<EditUser />} />
              </Route>
              <Route path="provider" element={<Providers />}>
                <Route index element={<ProviderList />} />
                <Route path="create" element={<CreateProvider />} />
                <Route path="edit/:providerId" element={<EditProvider />} />
              </Route>

              <Route path="request" element={<Request />}>
                <Route index element={<RequestList />} />
                <Route path="create" element={<CreateRequest />} />
                <Route path="edit/:requestId" element={<EditRequest />} />
              </Route>
            </Route>
          )}
          {!user && (
            <Route path="/" element={<AuthAdmin />}>
              <Route index element={<LoginAdmin />} />
              <Route path="resetPassword" element={<ResetPassword />} />
              <Route path="validateCode" element={<ValidateCode />} />
              <Route path="newPassword" element={<NewPassword />} />
            </Route>
          )}
          <Route path="*" element={<NoPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;