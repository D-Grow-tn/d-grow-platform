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

function EditProject() {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const project = useSelector((state) => state.project.project);
  const employees = useSelector((state) => state.employee.employees.items);
  const clients = useSelector((state) => state.client.clients.items);
  const technologies = useSelector((state) => state.technology.technologies.items);
  const [readOnly, setReadOnly] = useState(true);
  const [auxProject, setAuxProject] = useState(null);
  const [inputs, setInputs] = useState([]);
  const employeeId = auxProject?.projectTechnologies[0]?.technologyId
  const projectTechnologyIds = [employeeId]
  useEffect(() => {
    dispatch(fetchProject(projectId));
    dispatch(fetchEmployees());
    dispatch(fetchClients());
    dispatch(fetchTechnologies());
  }, [dispatch]);

  useEffect(() => {
    setAuxProject(project);
  }, [project]);
  console.log(auxProject,"projectTechnologyIds")
  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxProject?.name,
      },
      {
        name: "description",
        label: "Description",
        required: true,
        value: auxProject?.description,
      },
      {
        name: "duration",
        label: "Duration",
        required: true,
        value: auxProject?.duration,
      },
      {
        name: "status",
        label: "Status",
        required: true,
        value: auxProject?.status,
      },
      {
        name: "startAt",
        label: "Start At",
        required: true,
        value: auxProject?.startAt,
      },
      {
        name: "endAt",
        label: "End At",
        required: true,
        value: auxProject?.endAt,
      },
      {
        category:"select",
        label: "Project Manager",
        name: "projectManagerId",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        
        value: auxProject?.projectManager?.name ,
        onChange: (value) => {
         setAuxProject((Project) => ({ ...Project, projectManagerId: value }));
        },

      },
      {
        category:"select",
        label: "Consultant",
        name: "consultant",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        
        value: auxProject?.consultant?.name ,
        onChange: (value) => {
         setAuxProject((Project) => ({ ...Project, consultantId: value }));
        },

      },
      {
        category:"select",
        label: "Team",
        name: "team",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        
        value: auxProject?.team?.name ,
        onChange: (value) => {
         setAuxProject((Project) => ({ ...Project, teamId: value }));
        },

      },
      {
        category:"select",
        label: "Client",
        name: "clientId",
        required: true,
        options: clients,
        optionLabel: "name",
        valueLabel: "id",
        
        value: auxProject?.client?.name ,
        onChange: (value) => {
         setAuxProject((Project) => ({ ...Project, clientId: value }));
        },

      },
      {
        category:"select",
        label: "Technology",
        name: "projectTechnologyIds",
        required: true,
        options: technologies,
        optionLabel: "name",
        valueLabel: "name ",
        
        value: auxProject?.projectTechnologies?.technologyId ,
        onChange: (value) => {
         setAuxProject((Project) => ({ ...Project, projectTechnologyIds: [value] }));
        },

      },
      
    ]);
  }, [auxProject]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
   
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, description,duration,status, startAt, endAt } = auxProject;
    dispatch(updateProject({ name, description,duration,status, startAt, endAt, projectId,projectTechnologyIds })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Project has been updated");
          setReadOnly(true);
          navigate(-1);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
  };
  const buttons = [
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setAuxProject(project);
        setReadOnly(true);
      },
    },
  ];
  
  return (
    <div style={{}}>
      <HeaderPage
        title="Project Information"
        showButton={readOnly ? true : false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Project"}
      />
     
      <div className="d-flex   align-items-center  justify-content-center flex-wrap gap-3">
      </div>

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex flex-wrap justify-content-center px-3 gap-5"
        inputsStyle={{ rowGap: 20 }}
        numberInputPerRow={2}
        readOnly={readOnly}
        onChange={handleInputChange}
        buttonsClassName="d-flex justify-content-end gap-3"
        buttons={!readOnly ? buttons : []}
      />
      {/* </div> */}
    </div>

  )
}

export default EditProject
