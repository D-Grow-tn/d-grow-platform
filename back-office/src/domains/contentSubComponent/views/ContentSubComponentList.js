import React, { useEffect, useMemo, useState } from "react";
import {
  fetchContentSubComponets,
  removeContentSubComponet,
} from "../../../store/contentsubcomponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Avatar, IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import DeleteModal from "../../../components/DeleteModal";

function ContentSubComponentList({ subcomponetId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentsubcomponet = useSelector(
    (state) => state?.contentsubcomponet?.contentsubcomponets?.items
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    dispatch(fetchContentSubComponets(subcomponetId));
  }, []);
  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
  };
  const handleDelete = () => {
    dispatch(removeContentSubComponet(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Content SubComponet has been deleted");
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  const handleUpdate = (id) => {
    navigate("/contentsubcomponet/one/" + id);
  };
  const columns = useMemo(
    () => [
      {
        field: "title",
        headerName: "Title",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "content",
        headerName: "Content",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "navigateTo",
        headerName: "NavigateTo",
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
    <div>
      <HeaderPage
        title="Content SubComponet List"
        showButton={true}
        buttonFunction={() => navigate("/contentsubcomponet/create")}
        text="Create Content SubComponet"
      />
      <Table
        columns={columns}
        rows={contentsubcomponet?.length ? contentsubcomponet : []}
      />
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

export default ContentSubComponentList;
