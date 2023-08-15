import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDevises, removeDevis } from '../../../store/devis';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import moment from "moment";
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import HeaderPage from '../../../components/HeaderPage';
import Table from '../../../components/Table';
import DeleteModal from '../../../components/DeleteModal';

function DevisList() {
    const [inputs, setInputs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const devises = useSelector((state) => state.devis.devises.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchDevises());
    }, [dispatch]);
    const handleUpdate = (id) => {
      navigate("one/" + id);
    };
    const handleDelete = () => {
      dispatch(removeDevis(selected.id)).then((result) => {
        if (!result.error) {
          showSuccessToast("Quotation has been deleted");
          dispatch(fetchDevises());
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
          field: "devisNumber",
          headerName: "DevisNumber",
          headerClassName: "header-blue",
          width: 170,
        },
        {
          field: "client",
          headerName: "Client",
          headerClassName: "header-blue",
          width: 200,
          renderCell: (params) => {
            console.log(params.row.client,"params")
            return <div>{params.row?.client.map((elem)=>elem.name).join(" | ")}</div>;
          },
        },
    
        {
          field: "price",
          headerName: "Price",
          headerClassName: "header-blue",
          width: 170,
        },
        {
          field: "discreption",
          headerName: "discreption",
          headerClassName: "header-blue",
          width: 170,
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
  

    return (
      <div className='p-3' >
        <HeaderPage
          title={"Quotation List"}
          showButton={true}
          buttonFunction={() => navigate("create")}
          text={"Create Quotation"}
        />
       
        <Table columns={columns} rows={devises.length ? devises : []} />
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

export default DevisList