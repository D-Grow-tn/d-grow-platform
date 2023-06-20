import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { fetchUsers, removeUser } from "../../../store/users";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";


function UsersList() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.user.users.items);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);

  console.log("from client component",Users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (Users.length) {
      let aux = Users.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [Users]);

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };

  const handleDelete = () => {
    dispatch(removeUser(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("User has been deleted");
        setIsOpen(false)
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };

  const columns = useMemo(
    () => [
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
        field: "name",
        headerName: "Name",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "email",
        headerName: "Email",
        headerClassName: "header-blue",
        width: 200,
      },   
      {
        field: "isClient",
        headerClassName: "header-blue",
        headerName: "Role",
        width: 180,
        valueGetter: (params) => (params.row.isClient ? "Client" : "Employee"),
      },
      {
        field: "active",
        headerClassName: "header-blue",
        headerName: "Active",
        width: 150,
        type: "boolean",
        editable: true,
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
        field: "actions",
        headerName: "Actions",
        headerClassName: "header-blue",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div>
            <IconButton    onClick={() => handleUpdate(params.row.id)}
              color="primary"
              aria-label="update">
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

  if (!Users) {
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
        title="Users List"
        showButton={true}
        
        buttonFunction={()=>navigate('create')}
        text={"Create User"}
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

export default UsersList;
