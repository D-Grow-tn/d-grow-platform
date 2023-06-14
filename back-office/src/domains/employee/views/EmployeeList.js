import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from '../../../components/Table';
import { useMemo,useEffect,useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from "react-redux"
import DisplayLottie from '../../../constants/DisplayLottie'
import loading from '../../../constants/loading.json'
import {fetchEmployees} from '../../../store/employees'
import EditEmployee from "./EditEmployee";


function EmployeeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([])
  const dispatch = useDispatch()
 const Employees = useSelector((state) => state.employee.employees.items)

console.log("from client component",Employees);

  useEffect(() => {
  dispatch(fetchEmployees());
  }, []);


  useEffect(() => {
    if (Employees.length) {
      let aux = Employees.map(e => {
        return { ...e }
      })
      console.log(aux);
      setRows(aux)
    }
  }, [Employees])
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (id) => {
    console.log("Delete row with ID:", id);
  };

  const handleUpdate = (id) => {
  
    console.log("Update row with ID:", id);
  };

  const columns = useMemo(
    () => [
      {
        field: "photoURL",
        headerName: "Avatar",
        headerClassName:"header-blue",
        width: 100,
        renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Name", headerClassName:"header-blue", width: 170 },
      { field: "email", headerName: "Email",  headerClassName:"header-blue",width: 200 },
      {
        field: "active",
        headerClassName:"header-blue",
        headerName: "Active",
        width: 110,
        type: "boolean",
        editable: true,
      },
      {
        field: "createdAt",
        headerName: "Created At",
        headerClassName:"header-blue",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      },
      {
        field: "UpdatedAt",
        headerName: "Updated At",
        headerClassName:"header-blue",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      },

      {
        field: "actions",
        headerName: "Actions",
        headerClassName:"header-blue",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div>
          
            <IconButton
              onClick={togglePopup}
              color="primary"
              aria-label="update"
            >
              <RemoveRedEyeIcon />
            </IconButton>
           


            <IconButton
              onClick={() => handleDelete(params.row.id)}
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


 

  if (!Employees) {
    return <div> <DisplayLottie animationData={loading} /></div>;
  }
  return (
    <div>
      <HeaderPage title="Emlpoyees List" showButton={true} buttonPath="/employee/create"  text={"Create Employee"} />
    
      <Table columns={columns} rows={rows} />
      {isOpen && (<EditEmployee EditEmployee={Employees}/> )}
    </div>
  );
}

export default EmployeeList;
