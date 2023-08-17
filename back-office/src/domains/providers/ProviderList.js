import React from "react";
import HeaderPage from "../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchProvides, removeProvide } from "../../store/provides";
import Table from "../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function ProviderList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Provides = useSelector((state) => state.provides.provides.items);
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(Provides , "from provider component");

  useEffect(() => {
    dispatch(fetchProvides());
  }, [dispatch]);

  const handleUpdate = (id) => {
    navigate("edit/" + id);
  };
  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
  };
  const handleDelete = () => {
    dispatch(removeProvide(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("provide has been deleted");
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
        headerClassName: "header-blue",
        headerName: "description",
        width: 110,
      },
      {
        field: "email",
        headerName: "email",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "phone",
        headerName: "phone",
        headerClassName: "header-blue",
        width: 170,
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
        title={"Providers List"}
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"Create Provide"}
      />
      <Table columns={columns} rows={Provides?.length ? Provides : []} />
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

export default ProviderList;
