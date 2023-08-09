import React, { useEffect, useMemo, useState } from "react";
import HeaderPage from "../../../components/HeaderPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMains, removeMain } from "../../../store/main";
import Table from "../../../components/Table";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function MainList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mains = useSelector((state) => state.main.mains.items);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };
  const handleUpdate = (id) => {
    navigate("one/" + id);
  };
  const handleDelete = () => {
    dispatch(removeMain(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Main has been deleted");
        setIsOpen(false);
        dispatch(fetchMains());
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  useEffect(() => {
    dispatch(fetchMains());
  }, []);
  const columns = useMemo(
    () => [
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
  return (
    <div  className="p-3">
      <HeaderPage
        title="Main List"
        showButton={true}
        buttonFunction={() => navigate("create")}
        text="Create Main"
        parent="WebSite Setting"
      />
      <Table columns={columns} rows={mains.length ? mains : []} />
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

export default MainList;
