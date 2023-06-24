import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDecisionByEmployee,
  removeDecision,
} from "../../../store/decision";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function DecisionList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const decision = useSelector((state) => state.decision.decisions.items);
  const me = useSelector((state) => state.auth.me);
  const [selected, setSelected] = useState(null);
  const [rows, setRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (me) {
      dispatch(fetchDecisionByEmployee(me.employee.id));
    }
  }, [dispatch, me]);

  useEffect(() => {
    if (decision.length) {
      let aux = decision.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [decision]);

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };
  const handleDelete = () => {
    dispatch(removeDecision(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Decision has been deleted");
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
  const columns = useMemo(
    () => [
      {
        field: "content",
        headerName: "Content",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "DecisionApply",
        headerName: "Employees",
        headerClassName: "header-blue",
        width: 170,
        renderCell: (params) => (
          <div>{params.row.DecisionApply[0].employee.name}</div>
        ),
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

  if (!decision) {
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
        title="Decisions List"
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"Create Decision"}
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

export default DecisionList;
