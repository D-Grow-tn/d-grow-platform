import { useEffect, useMemo, useState } from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import moment from 'moment';
import { grey } from '@mui/material/colors';


const UsersList= () => {
//   const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);



  // Mock data for users
  const mockUsers = [
    {
      id: 1,
      photoURL: 'https://example.com/avatar1.jpg',
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'basic',
      active: true,
      createdAt: '2022-01-01T10:00:00Z',
      _id: '12345',
    },
    {
      id: 2,
      photoURL: 'https://example.com/avatar2.jpg',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'admin',
      active: true,
      createdAt: '2022-02-01T12:00:00Z',
      _id: '67890',
    },
    {
        id: 3,
        photoURL: 'https://example.com/avatar3.jpg',
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        role: 'editor',
        active: false,
        createdAt: '2022-03-01T08:00:00Z',
        _id: '54321',
      },
      {
        id: 4,
        photoURL: 'https://example.com/avatar4.jpg',
        name: 'Bob Williams',
        email: 'bobwilliams@example.com',
        role: 'basic',
        active: true,
        createdAt: '2022-04-01T15:00:00Z',
        _id: '09876',
      },
      {
        id: 5,
        photoURL: 'https://example.com/avatar5.jpg',
        name: 'Sarah Davis',
        email: 'sarahdavis@example.com',
        role: 'editor',
        active: true,
        createdAt: '2022-05-01T11:00:00Z',
        _id: '13579',
      },
      {
        id: 6,
        photoURL: 'https://example.com/avatar6.jpg',
        name: 'Michael Johnson',
        email: 'michaeljohnson@example.com',
        role: 'admin',
        active: true,
        createdAt: '2022-06-01T09:00:00Z',
        _id: '24680',
      },
  ];

  const columns = useMemo(
    () => [
      {
        field: 'photoURL',
        headerName: 'Avatar',
        width: 60,
        renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: false,
        filterable: false,
      },
      { field: 'name', headerName: 'Name', width: 170 },
      { field: 'email', headerName: 'Email', width: 200 },
      {
        field: 'role',
        headerName: 'Role',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['basic', 'editor', 'admin'],
        editable: true,
      },
      {
        field: 'active',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
      },
      { field: '_id', headerName: 'Id', width: 220 },
    ],
    [rowId]
  );
  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
    
      <DataGrid
        columns={columns}
        rows={mockUsers}
        getRowId={(row) => row.id}
      
        // pageSize={pageSize}
        
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: (theme) =>
              theme.palette.mode === 'light' ? grey[200] : grey[900],
          },
        }}
       
      />
    </Box>
  );
};

export default UsersList;
