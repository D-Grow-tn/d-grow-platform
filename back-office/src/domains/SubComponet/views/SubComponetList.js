import React, { useEffect, useMemo, useState } from "react";
import DeleteModal from "../../../components/DeleteModal";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchSubComponets,
  removeSubComponet,
} from "../../../store/subComponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function SubComponetList({ mainID }) {
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
  const subcomponets = useSelector(
    (state) => state.subComponet.subcomponets.items.filter(
      (subcomponet) => subcomponet.mainId === mainID
    )
  );


  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    dispatch(fetchSubComponets());
  }, []);
  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };
  const handleDelete = () => {
    dispatch(removeSubComponet(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("SubComponet has been deleted");
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  const handleUpdate = (id) => {
    navigate("/subcomponet/one/" + id);
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
        field: "position",
        headerName: "Position",
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
        title="SubComponet List"
        showButton={true}
        buttonFunction={() => navigate("/subcomponet/createSub")}
        text="Create SubComponet"
      />
      <Table
        columns={columns}
        rows={subcomponets?.length ? subcomponets : []}
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

export default SubComponetList;
