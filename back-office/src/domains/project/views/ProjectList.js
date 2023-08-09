import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import {  fetchProjects, removeProject } from "../../../store/projects";
import { Image } from "mui-image";

function ProjectList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.project.projects.items);
  const me = useSelector((state) => state.auth.me);
  const [selected, setSelected] = useState(null);
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
      dispatch(fetchProjects());
  
  }, [dispatch, me]);

  useEffect(() => {
    if (projects.length) {
      let aux = projects.map((e) => {
        return { ...e };
      });
      setRows(aux);
    }
  }, [projects]);

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
  };

  const handleDelete = () => {
    dispatch(removeProject(selected.id)).then((result) => {
      console.log(selected.id, "selected");
      if (!result.error) {
        showSuccessToast("Project has been deleted");
        setIsOpen(false);
        
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const columns = useMemo(
    () => [
   
      {
        field: "name",
        headerName: "Name",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "description",
        headerName: "Description",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "duration",
        headerName: "Duration",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "status",
        headerName: "Status",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "projectManagerId",
        headerName: "Project Manager",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) => <div>{params.row.projectManager?.name}</div>,
      },

      {
        field: "consultantId",
        headerName: "Consultant",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) => {
          return <div>{params.row.consultant?.name}</div>;
        },
      },
      {
        field: "team",
        headerName: "Team",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) =>{ 
          console.log(params.row,"paramsteam");
        return <div>{params.row.team?.name}</div>},
      },
      {
        field: "clientId",
        headerName: "Client",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) => <div>{params.row.client?.name}</div>,
      },
      {
        field: "projectTechnologies",
        headerName: "Technology",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) => {
          console.log(params.row,"params")
          return <div>{params.row.projectTechnologies.map((e)=>e.technologies?.name).join(" | ")}</div>;
        },
      },

      {
        field: "actions",
        headerName: "Actions",
        headerClassName: "header-blue",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div>
            <IconButton
              onClick={() => handleUpdate(params.row.id)}
              color="primary"
              aria-label="update"
            >
              <RemoveRedEyeIcon />
            </IconButton>

            <IconButton
              onClick={() => openPopup(params.row)}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );
  if (!projects) {
    return (
      <div>
        {" "}
        <DisplayLottie animationData={loading} />
      </div>
    );
  }

  return (
    <div>
      <HeaderPage
        title={"Project List"}
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"Create Project"}
        parent="PMO"
      />

      <Table columns={columns} rows={rows} />
      {isOpen && (
        <DeleteModal
          close={() => setIsOpen(false)}
          title={selected.name}
          width={300}
          height={250}
          fnDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default ProjectList;
