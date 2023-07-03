import React, { useEffect, useState } from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProject, updateProject } from '../../../store/projects';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import Form from '../../../components/Form';
function EditProject() {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const project = useSelector((state) => state?.project?.project);

  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [aux, setAux] = useState(null)
  console.log("🚀 ~ file: EditProject.js:17 ~ EditProject ~ aux:", aux)

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch]);
  useEffect(() => {
    setAux(project);
  }, [project]);
  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: aux?.name,
      },
      {
        name: "description",
        label: "Description",
        required: true,
        value: aux?.description,
      },
      {
        name: "duration",
        label: "Duration",
        required: true,
        value: aux?.duration,
      },
      // {
      //   name: "client",
      //   label: "Client",
      //   required: true,
      //   value: aux?.client,
      // },
      {
        name: "startAt",
        label: "startAt",
        required: true,
        value: aux?.startAt,
      },
        {
        name: "endAt",
        label: "endAt",
        required: true,
        value: aux?.startAt,
      },
      {
        name: "status",
        label: "Status",
        required: true,
        value: aux?.status,
      },
      // {
      //   name: "projectManager",
      //   label: "ProjectManager",
      //   required: true,
      //   value: aux?.projectManager,
      // },
      {
        name: "consultant",
        label: "Consultant",
        required: true,
        value: aux?.consultant?.name,
      },
  
    ]);
  }, [aux]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const  {
      name,
      description,
      duration,
      client,
      startAt,
      endAt,
      status,
      projectManager,
      consultant,
      id
    } = aux;
    dispatch(updateProject( {
      name,
      description,
      duration,
      // client,
      // startAt,
      // endAt,
      // status,
      // projectManager,
      // consultant,
      id
    })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Client has been updated");
          setReadOnly(true);
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
        setAux(project);
        setReadOnly(true);
      },
    },
  ];
  const countProjects = () => {
    if (project?.project?.length <= 1) {
      return "ContentSubComponent";
    }
    return "ContentSubComponents";
  };
  return (
    <div>
      <HeaderPage title=" Project Information" />
      <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            <h1
              className="darkBlue"
              style={{
                fontSize: "45px",
              }}
            >
              {project?.name}
            </h1>
          </div>

          {readOnly && (
            <button
              type="button"
              class="btn"
              style={{
                height: "40px",
                background: "#2351AD",
                color: "white",
                borderRadius: "8px",
                marginRight: "50px",
              }}
              onClick={() => {
                setReadOnly(false);
              }}
            >
              Edit {project?.name}
              <i class="fa-solid fa-play fa-fade px-2"></i>
            </button>
          )}
        </div>

        <div className="d-flex justify-content-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-center mt-5"
            inputsStyle={{ rowGap: 20, columnGap: 100 }}
            numberInputPerRow={2}
            readOnly={readOnly}
            onChange={handleInputChange}
            buttonsClassName="mt-5 d-flex justify-content-center gap-3"
            buttons={!readOnly ? buttons : []}
          />
        </div>

       
      </div>
    </div>

  )
}

export default EditProject
