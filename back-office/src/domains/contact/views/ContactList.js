import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import OneEmployee from "../../employee/views/OneEmployee";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Table from "../../../components/Table";
import DeleteModal from "../../../components/DeleteModal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchContacts, removeContact } from "../../../store/contact";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import moment from "moment";

function ContactList() {
  const [inputs, setInputs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const contacts = useSelector((state) => state.contact.contacts.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const handleUpdate = (id) => {
    navigate("one/" + id);
  };
  const handleDelete = () => {
    dispatch(removeContact(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Client has been deleted");
        dispatch(fetchContacts());
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
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
        field: "email",
        headerName: "Email",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "subject",
        headerName: "Subject",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "message",
        headerName: "Message",
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

  // const buttons = [
  //   {
  //     category: "cancel",
  //     name: "Cancel",
  //     onClick: () => navigate(-1),
  //     className: "",
  //     style: { width: 100 },
  //   },
  //   {
  //     category: "save",
  //     name: "Save",
  //     // onSubmit,
  //     className: "",
  //     style: { width: 100 },
  //   },
  // ];
  return (
    <div>
      <HeaderPage
        title={"Contact List"}
        showButton={true}
        // buttonFunction={() => navigate("create")}
        // text={"Create Client"}
      />
      <Table columns={columns} rows={contacts.length ? contacts : []} />
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

export default ContactList;
