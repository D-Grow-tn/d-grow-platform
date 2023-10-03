import React from 'react'
import HeaderPage from '../../../components/HeaderPage'
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { fetchInvoices, removeInvoice } from '../../../store/invoice';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayLottie from '../../../constants/DisplayLottie';
import loading from "../../../constants/loading.json";
import DeleteModal from '../../../components/DeleteModal';
import Table from '../../../components/Table';

function InvoicesList() {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoice.invoices.items);
  console.log("🚀 ~ file: InvoicesList.js:18 ~ InvoicesList ~ invoices:", invoices)
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, []);

  useEffect(() => {
    if (invoices.length) {
      let aux = invoices.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [invoices]);

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(isOpen);
  };

  const handleDelete = () => {
    dispatch(removeInvoice(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Invoice has been deleted");
        setIsOpen(false)
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const columns = useMemo(
    () => [
     
      {
        field: "Client",
        headerName: "client",
        headerClassName: "header-blue",
        width: 170,
        renderCell: (params) => {
          // console.log(params.row.client,"params")
          return <div>{params.row?.Client?.name}</div>;
        },
      },
      {
        field: "total",
        headerName: "Total",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "invoiceNumber",
        headerClassName: "header-blue",
        headerName: "InvoiceNumber",
        width: 110,

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

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };
  if (!invoices) {
    return (
      <div>
        {" "}
        <DisplayLottie animationData={loading} />
      </div>
    );
  }
  return (
    <div>
    <HeaderPage title={'Invoices '} parent="Administration"
     showButton={true}
     buttonFunction={() => navigate("create")}
     text={"Create Invoice"}/>
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
  )
}

export default InvoicesList
