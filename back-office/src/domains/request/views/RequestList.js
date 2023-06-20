import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useEffect, useState, useMemo } from "react";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestsByEmployee } from "../../../store/request";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { useNavigate } from "react-router-dom";
import EditRequest from "./EditRequest";


function RequestList() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const requests = useSelector((state) => state.request.requests.items);
  const [rows, setRows] = useState([]);
  const me = useSelector((state) => state.auth.me);

  useEffect(() => {
    if (me) {
      dispatch(fetchRequestsByEmployee(me.employee.id));
    }
  }, [dispatch, me]);
 
  useEffect(() => {
    if (requests?.length) {
      let aux = requests.map((e) => {
        return { ...e };
      });
      setRows(aux);
    }
  }, [requests]);

  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


  const handleDelete = (id) => {
    console.log("Delete row with ID:", id);
  };

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };

  const columns = useMemo(() => [
    {
      field: "photoURL",
      headerName: "Avatar",
      headerClassName: "header-blue",
      width: 100,
      renderCell: (params) => <Avatar src={params.row.photoURL} />,
      sortable: false,
      filterable: false,
    },
    {
      field: "subject",
      headerName: "subject",
      headerClassName: "header-blue",
      width: 170,
    },
    {
      field: "content",
      headerName: "content",
      headerClassName: "header-blue",
      width: 200,
    },

    {
      field: "createdAt",
      headerName: "Created At",
      headerClassName: "header-blue",
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "UpdatedAt",
      headerName: "Updated At",
      headerClassName: "header-blue",
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    {
      field: "employeeId",
      headerClassName: "header-blue",
      headerName: "employee",
      width: 110,
      type: "boolean",
      editable: true, 
    },
    {
      field: "mediaId",
      headerClassName: "header-blue",
      headerName: "mediaId",
      width: 110,
      type: "boolean",
      editable: true,
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
            onClick= {()=>navigate('edit/'+params.row.id)}
            color="primary"
            aria-label="update"
          >
            <RemoveRedEyeIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDelete(params.row.id)}
            color="error"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ]);

   if (!requests) {
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
        title={"Requests List"}
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"create a request"}
      />
      <Table columns={columns} rows={rows}></Table> 
      {isOpen && <EditRequest EditRequest={requests}  />}
    </div>
  );
}

export default RequestList;
