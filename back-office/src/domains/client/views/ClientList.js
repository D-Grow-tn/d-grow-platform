import React from 'react'
import HeaderPage from '../../../components/HeaderPage'
import Table from '../../../components/Table'
import {useMemo, useState } from "react";
import { Avatar, Box,IconButton} from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";

function ClientList() {
  const [rowId, setRowId] = useState(null);

  const mockUsers = [
    {
      id: 1,
      photoURL: "https://example.com/avatar1.jpg",
      name: "John Doe",
      email: "johndoe@example.com",
      role: "basic",
      active: true,
      createdAt: "2022-01-01T10:00:00Z",
      _id: "12345",
    },
    {
      id: 2,
      photoURL: "https://example.com/avatar2.jpg",
      name: "Jane Smith",
      email: "janesmith@example.com",
      role: "admin",
      active: true,
      createdAt: "2022-02-01T12:00:00Z",
      _id: "67890",
    },
    {
      id: 3,
      photoURL: "https://example.com/avatar3.jpg",
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      role: "editor",
      active: false,
      createdAt: "2022-03-01T08:00:00Z",
      _id: "54321",
    },
    {
      id: 4,
      photoURL: "https://example.com/avatar4.jpg",
      name: "Bob Williams",
      email: "bobwilliams@example.com",
      role: "basic",
      active: true,
      createdAt: "2022-04-01T15:00:00Z",
      _id: "09876",
    },
    {
      id: 5,
      photoURL: "https://example.com/avatar5.jpg",
      name: "Sarah Davis",
      email: "sarahdavis@example.com",
      
      active: true,
      createdAt: "2022-05-01T11:00:00Z",
      _id: "13579",
    },
    {
      id: 6,
      photoURL: "https://example.com/avatar6.jpg",
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      role: "admin",
      active: true,
      createdAt: "2022-06-01T09:00:00Z",
      _id: "24680",
    },
  ];
  const columns = useMemo(
    () => [
      {
        field: "photoURL",
        headerName: "Avatar",
        width: 60,
        renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: false,
        filterable: false,
      },
      { field: "name", headerName: "Name", width: 170 },
      { field: "email", headerName: "Email", width: 200 },
   ,
      {
        field: "active",
        headerName: "Active",
        width: 100,
        type: "boolean",
        editable: true,
      }, {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      },
      {
        field: "UpdatedAt",
        headerName: "Updated At",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
      },
      { field: "_id", headerName: "Id", width: 220 },
      // {
      //   field: "actions",
      //   headerName: "Actions",
      //   width: 150,
      //   sortable: false,
      //   filterable: false,
      //   renderCell: (params) => (
      //     <>
      //       <IconButton
      //         color="primary"
      //         aria-label="Edit"
      //         onClick={() => handleEdit(params.row.id)}
      //       >
      //         <EditIcon />
      //       </IconButton>
      //       <IconButton
      //         color="secondary"
      //         aria-label="Delete"
      //         onClick={() => handleDelete(params.row.id)}
      //       >
      //         <DeleteIcon />
      //       </IconButton>
      //     </>
      //   ),
      // },
    ],
    [rowId])
  return (
    <div>
      <HeaderPage title={'Client List'} showButton={true} buttonPath="/client/create"  text={"Create Client"}/>
      <Box
      sx={{
        width: "100%",
      }}
    >
      <Table columns={columns} rows={mockUsers}/>
    </Box>
    </div>
  )
}

export default ClientList
