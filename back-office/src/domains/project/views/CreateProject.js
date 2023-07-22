import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import { createProject } from "../../../store/projects";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { fetchEmployees } from "../../../store/employees";
import { fetchClients } from "../../../store/client";
import { useDropzone } from "react-dropzone";
import { fetchTechnologies } from "../../../store/technology";
import { fetchTeams } from "../../../store/team";

function CreateProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [data, setData] = useState();
  const employees = useSelector((state) => state.employee.employees.items);
  const clients = useSelector((state) => state.client.clients.items);
  const technologies = useSelector(
    (state) => state.technology.technologies.items
  );
  const teams = useSelector(
    (state) => state.team.teams.items
  );
  // const [employee, setEmployee] = useState(null);
  const [client, setClient] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [droppedFiles, setDroppedFiles] = useState([]);

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchClients());
    dispatch(fetchTechnologies());
    dispatch(fetchTeams())
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((project) => ({ ...project, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { projectTechnologyIds, ...rest } = project;
    const aux = { ...rest, projectTechnologyIds: data };
    console.log(aux, "test");
    dispatch(createProject(aux)).then((res) => {
      showSuccessToast("Create Project succsesfuly ")
      if (!res.error) {
        navigate(`/project`);
      } else {
        showErrorToast(res.error.message);
      }
    });
  };
  const onDrop = useCallback((acceptedFiles) => {
    setDroppedFiles(acceptedFiles.map((file) => URL.createObjectURL(file)));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    setInputs([
      {
        label: "Name",
        placeholder: "Name",
        name: "name",
        width: 250,
        value: project.name,
        required: true,
      },
      {
        label: "Description",
        placeholder: "it's a new project...",
        value: project.description,
        name: "description",
        required: true,
      },
      {
        label: "Duration",
        placeholder: "put your duration",
        value: project.duration,
        name: "duration",
        required: true,
      },
      {
        label: "Status",
        placeholder: "put your status",
        value: project.status,
        name: "status",
        required: true,
      },
      {
        label: "startAt",
        placeholder: "2023-06-17T17:50:20Z",

        name: "startAt",
        width: 250,
        required: true,
        value: project.startAt,
      },
      {
        label: "endAt",
        placeholder: "2023-06-20T17:50:20Z",
        name: "endAt",

        width: 250,
        required: true,
        value: project.endAt,
      },
      {
        category: "select",
        label: "Project Manager",
        placeholder: "Select an employee",
        name: "projectManagerId",
        width: 250,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value: project.projectManagerId || "",
        onChange: (value) => {
          setProject((Project) => ({ ...Project, projectManagerId: value }));
        },
      },
      {
        category: "select",
        label: "Consultant",
        placeholder: "Select an employee",
        name: "consultant",
        width: 250,
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value: project.consultantId || "",
        onChange: (value) => {
          setProject((Project) => ({ ...Project, consultantId: value }));
        },
      },
      {
        category: "select",
        label: "Client",
        placeholder: "Select client",
        name: "clientId",
        width: 250,
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        value: project.clientId || "",
        onChange: (value) => {
          setProject((Project) => ({ ...Project, clientId: value }));
        },
      },
      {
        category: "select",
        label: "Team",
        placeholder: "Select team",
        name: "teamId",
        width: 250,
        required: true,
        options: teams,
        optionLabel: "name",
        valueLabel: "id",
        value: project.teamId || "",
        onChange: (value) => {
          setProject((Project) => ({ ...Project, teamId: value }));
        },

      },
      {
        category: "select",
        label: "Technology",
        placeholder: "Select Technology",
        name: "projectTechnologyIds",
        width: 250,
        required: true,
        options: technologies,
        optionLabel: "name",
        valueLabel: "id",
        value: technologies.id || {},
        onChange: (value) => {
          setProject((Project) => ({ ...Project }));
          setProject({ ...project, projectTechnologyIds: data });
        },
        multiple: true,
      },
    ]);
  }, [employees, clients, technologies,teams]);

  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate (-1),
      className: "",
      style: { width: 100 },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
      className: "",
      style: { width: 100 },
    },
  ];

  return (
    <div>
      <HeaderPage title="Create Project" />
      <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
        <div className="py-5  rounded-5  ">
          <div class="d-flex justify-content-center  mb-4">
            <div
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "active" : ""}`}
            >
              <Form {...getInputProps()} onChange={onDrop} />

              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag and drop files here, or click to select files</p>
              )}

              {/* Display the dropped image previews */}
              {droppedFiles.length > 0 && (
                <div>
                  <h3>Dropped Images:</h3>
                  <div className="image-preview-container ">
                    {droppedFiles.map((imageUrl, index) => (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Dropped Image ${index + 1}`}
                        className="container"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Form
              className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
              style={{
                boxShadow: "0px 0px 8px #9E9E9E",
                width: "593px",
                height: "500px",
                marginLeft: "50px",
              }}
              inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
              inputs={inputs}
              numberInputPerRow={2}
              onSubmit={onSubmit}
              onChange={handleChange}
              buttons={buttons}
              buttonsClassName=" d-flex justify-content-end gap-3"
              setData={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
