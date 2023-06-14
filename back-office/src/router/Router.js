import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "../domains/employee/Employee";
import EmployeeList from "../domains/employee/views/EmployeeList";
import CreateEmployee from "../domains/employee/views/CreateEmployee";
import EditEmployee from "../domains/employee/views/EditEmployee";
import Client from "../domains/client/Client";
import CreateClient from "../domains/client/views/CreateClient";
import ClientList from "../domains/client/views/ClientList";
import EditClient from "../domains/client/views/EditClient";
import Project from "../domains/project/Project";
import ProjectList from "../domains/project/views/ProjectList";
import Decision from "../domains/decision/Decision";
import DecisionList from "../domains/decision/views/DecisionList";
import CreateDecision from "../domains/decision/views/CreateDecision";
import EditDecision from "../domains/decision/views/EditDecision";
import Dashboard from "../domains/dashboard/Dashboard";
import Quiz from "../domains/Quiz/Quiz";
import QuizList from "../domains/Quiz/views/QuizList";
import CreateQuiz from "../domains/Quiz/views/CreateQuiz";
import EditQuiz from "../domains/Quiz/views/EditQuiz";
import Main from "../apps/Main";
import LoginAdmin from "../pages/LoginAdmin";
import NoPage from "../domains/noPage/NoPage";
import CreateProject from './../domains/project/views/CreateProject';
import EditProject from './../domains/project/views/EditProject';
import ResetPassword from './../pages/ResetPassword'
import ValidateCode from "../pages/ValidateCode";
import NewPassword from "../pages/NewPassword";
import CreateProfile from "../componets/createProfile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Dashboard />} />

          <Route path="employee" element={<Employee />}>
            <Route index element={<EmployeeList />} />
            <Route path="create" element={<CreateEmployee />} />
            <Route path="edit/:employeeId" element={<EditEmployee />} />
          </Route>

          <Route path="client" element={<Client />}>
            <Route index element={<ClientList />} />
            <Route path="create" element={<CreateClient />} />
            <Route path="edit/:clientId" element={<EditClient />} />
          </Route>

          <Route path="project" element={<Project />}>
            <Route index element={<ProjectList />} />
            <Route path="create" element={<CreateProject />} />
            <Route path="edit/:projectId" element={<EditProject />} />
          </Route>

          <Route path="project" element={<Decision />}>
            <Route index element={<DecisionList />} />
            <Route path="create" element={<CreateDecision />} />
            <Route path="edit/:projectId" element={<EditDecision />} />
          </Route>

          <Route path="quiz" element={<Quiz />}>
            <Route index element={<QuizList />} />
            <Route path="create" element={<CreateQuiz />} />
            <Route path="edit/:quizId" element={<EditQuiz />} />
          </Route>

         

         
        </Route>
       
        <Route path="loginAdmin" element={<LoginAdmin />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="validateCode" element={<ValidateCode />} />
          <Route path="newPassword" element={<NewPassword />} />
          
          <Route path="*" element={<NoPage />} />
          
          <Route path="createProfile" element={<CreateProfile />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default Router;
