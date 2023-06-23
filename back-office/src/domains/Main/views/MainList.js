import React, { useEffect, useMemo, useState } from "react";
import HeaderPage from "../../../components/HeaderPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMains} from "../../../store/main";
import Table from "../../../components/Table";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";


function MainList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mains = useSelector((state)=>state.main.mains.items)
  console.log("🚀 ~ file: MainList.js:11 ~ MainList ~ mains:", mains)
  const [selected, setSelected] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };
  useEffect(()=>{
    dispatch(fetchMains())
  },[])
  const columns = useMemo(
    () => [
    //   {
    //     field: "photoURL",
    //     headerName: "Avatar",
    //     headerClassName: "header-blue",
    //     width: 100,
    //     renderCell: (params) => <Avatar src={params.row.avatar?.path} />,
    //     sortable: false,
    //     filterable: false,
    //   },
      {
        field: "title",
        headerName: "Title",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "path",
        headerName: "Path",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "type",
        headerName: "Type",
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
        field: "actions",
        headerName: "Actions",
        headerClassName: "header-blue",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div>
            <IconButton
            //   onClick={() => handleUpdate(params.row.id)}
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
  return (
    <div>
      <HeaderPage
        title="Main List"
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"Create Client"}
      />
      <Table columns={columns} rows={mains.length ? mains : []} />

    </div>
  );
}

export default MainList;
