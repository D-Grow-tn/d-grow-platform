import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProject, updateProject } from "../../../store/projects";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";
import { fetchClients } from "../../../store/client";
import { fetchTechnologies } from "../../../store/technology";
import { fetchTeams } from "../../../store/team";
import Status from "./projectStatus";

function OneProject() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const project = useSelector((state) => state.project.project);
  const teams = useSelector((state) => state.team.teams.items);
  const employees = useSelector((state) => state.employee.employees.items);
  const clients = useSelector((state) => state.client.clients.items);
  const technologies = useSelector(
    (state) => state.technology.technologies.items
  );
  const [readOnly, setReadOnly] = useState(true);
  const [auxProject, setAuxProject] = useState(null);
  const [data, setData] = useState([]);

  const [inputs, setInputs] = useState([]);
  const projectTechnologyIds = data;
  // const teamId = data?.toString()

  useEffect(() => {
    dispatch(fetchProject(projectId));
    dispatch(fetchEmployees());
    dispatch(fetchClients());
    dispatch(fetchTechnologies());
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    setAuxProject(project);
  }, [project]);

  const handleEdit = (id) => {
    navigate("../edit/" + id);
  };

  console.log(auxProject, "aux");
  
  return (
    <div style={{}}>
      <HeaderPage
        title="Project Information"
        showButton={readOnly ? true : false}
        buttonFunction={() => handleEdit(auxProject.id)}
        text={"Edit Project"}
      />

      <div className="container d-flex justify-content-center align-items-center "></div>
      <div class="card  m-5 ">
        <div class="card-header d-flex justify-content-center align-items-center ">
          Featured
        </div>
        <div class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5">
          <div className=" ">
            <h3
              class="card-title "
              style={{
                color: "#181f38",
                fontSize: "36px",
                lineHeight: "44px",
                fontWeight: 400,
                fontFamily: "Merriweather",
              }}
            >
                {auxProject?.name}
            </h3>
            <p class="card-text" style={{ maxWidth: "400px" }}>
              Description: {auxProject?.description}
            </p>
            <p class="card-text">
              <span class="text-muted">Project Owner:</span>{" "}
              {auxProject?.client?.name}
            </p>
            <div className="d-flex align-items-center gap-3"></div>

            <p class="card-text mt-2">
              <span class="text-muted">Project Manager: </span>
              {auxProject?.projectManager?.name}
            </p>
            <p class="card-text mt-2">
              <span class="text-muted">Consultant: </span>
              {auxProject?.consultant?.name}
            </p>
            <p class="card-text mt-2">
              <span class="text-muted">Team: </span>
              {auxProject?.team?.name}
            </p>
            <p class="card-text mt-2">
              <span class="text-muted">Technologies: </span>
              {auxProject?.projectTechnologies?.map((e) => e?.technologies?.name).join(" | ")}
            </p>
            
            <p class="card-text mt-2">
              <span class="text-muted">Status: </span>
              {auxProject?.status}
            </p>
            <p class="card-text mt-2">
              <span class="text-muted">Duration: </span>
              {auxProject?.duration}
            </p>
          </div>
        </div>
        <div
          class="card-footer text-muted d-flex justify-content-center align-items-center "
          id="dateDiv"
        >
          {`Start: ${auxProject?.startAt} End: ${auxProject?.endAt}`}
        </div>
      </div>
    </div>
  );
}

export default OneProject;
