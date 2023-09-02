// import { IconButton } from "@mui/material";
// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import DeleteModal from "../../../components/DeleteModal";
// import HeaderPage from "../../../components/HeaderPage";
// import Table from "../../../components/Table";

// import { showErrorToast, showSuccessToast } from "../../../utils/toast";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { fetchTests, removeTests } from "../../../store/tests";


// function TestList() {
//   const [inputs, setInputs] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const tests = useSelector((state) => state.test.tests.items );
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchTests());
//   }, [dispatch]);
//   const handleUpdate = (id) => {
//     navigate("edit/" + id);
//   };
//   const handleDelete = () => {
//     dispatch(removeTests(selected.id)).then((result) => {
//       if (!result.error) {
//         showSuccessToast("Test has been deleted");
//         dispatch(fetchTests());
//         setIsOpen(false);
//       } else {
//         showErrorToast(result.error.message);
//       }
//     });
//   };

//   const openPopup = (select) => {
//     setSelected(select);
//     setIsOpen(true);
//   };
//   const columns = useMemo(
//     () => [
//       {
//         field: "title",
//         headerName: "Title",
//         headerClassName: "header-blue",
//         width: 170,
//       },
//       {
//         field: "content",
//         headerName: "Content",
//         headerClassName: "header-blue",
//         width: 170,
//       },
//       {
//         field: "correction",
//         headerName: "Correction",
//         headerClassName: "header-blue",
//         width: 170,
//       },
//       // {
//       //   field: "EmployeeTest",
//       //   headerName: "EmployeeTest",
//       //   headerClassName: "header-blue",
//       //   width: 200,
//       //   renderCell: (params) => {
//       //     return <div>{params.row?.EmployeeTest.map((elem)=>elem.employee.name).join(" | ")}</div>;
//       //   },
//       // },

//       {
//         field: "score",
//         headerName: "Score",
//         headerClassName: "header-blue",
//         width: 170,
//       },
      
      

//       {
//         field: "actions",
//         headerName: "Actions",
//         headerClassName: "header-blue",
//         width: 120,
//         sortable: false,
//         filterable: false,
//         renderCell: (params) => (
//           <div>
//             <IconButton
//               onClick={() => handleUpdate(params.row.id)}
//               color="primary"
//               aria-label="update"
//             >
//               <RemoveRedEyeIcon />
//             </IconButton>
//             <IconButton
//               onClick={() => openPopup(params.row)}
//               color="error"
//               aria-label="delete"
//             >
//               <DeleteIcon />
//             </IconButton>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   return (
//     <div>
//       <HeaderPage
//         title="Test "
//         parent="HR"
//         showButton={true}
//         text={"Create Test"}
//         buttonFunction={() => navigate("create")}
//       />
//       <Table columns={columns} rows={tests.length ? tests : []} />
//       {isOpen && (
//         <DeleteModal
//           close={() => setIsOpen(false)}
//           title={selected.name}
//           width={300}
//           height={250}
//           fnDelete={handleDelete}
//         />
//       )}
//     </div>
//   );
// }

// export default TestList;
