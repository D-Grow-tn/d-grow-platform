import React, { useState } from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { TablePagination } from '@mui/material';

function Table({ columns, rows }) {
  const [page, setPage] = useState(0); // Démarrez la page à 0 (première page)
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Réinitialisez la page lorsque vous changez le nombre de lignes par page
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={paginatedRows}
        getRowId={(row) => row.id}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        hideFooterPagination
        sx={{
          [`& .${gridClasses.row}`]: {
            bgcolor: '#daeaf088',
          },
        }}
      />
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[10, 20, 50]} 
      />
    </div>
  );
}

export default Table;
