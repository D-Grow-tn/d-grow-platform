import { IconButton } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchContracts, removeContract } from '../../../store/contract';
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HeaderPage from '../../../components/HeaderPage';
import Table from '../../../components/Table';
import DeleteModal from '../../../components/DeleteModal';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import moment from "moment";

function ContarctList() {
    const [inputs, setInputs] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const contracts = useSelector((state) => state.contract.contracts.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(fetchContracts());
    }, [dispatch]);
    const handleUpdate = (id) => {
      navigate("contractView/" + id);
    };
    const handleDelete = () => {
      dispatch(removeContract(selected.id)).then((result) => {
        if (!result.error) {
          showSuccessToast("Contract has been deleted");
          dispatch(fetchContracts());
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
          field: "client",
          headerName: "Client",
          headerClassName: "header-blue",
          width: 200,
          renderCell: (params) => {
            console.log(params.row,"params")
            return <div>{params.row?.client?.name}</div>;
          },
        },
        {
          field: "project",
          headerName: "Project",
          headerClassName: "header-blue",
          width: 200,
          renderCell: (params) => {
            console.log(params.row,"params")
            return <div>{params.row?.project?.name}</div>;
          },
        },
        {
          field: "price",
          headerName: "Price",
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
          title={"Contract List"}
          showButton={true}
          buttonFunction={() => navigate("create")}
          text={"Create Contract"}
        />
       
        <Table columns={columns} rows={contracts.length ? contracts : []} />
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

export default ContarctList