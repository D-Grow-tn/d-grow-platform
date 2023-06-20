import React from "react";
import HeaderPage from "../../../components/HeaderPage";
// import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { IconButton } from "@mui/material"; // import Avatar 
// import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { fetchTests } from "../../../store/test"
import { useNavigate } from "react-router-dom";

function TestList() {
  const dispatch = useDispatch();
  const Tests = useSelector((state) => state.name.tests.items);
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);

  // console.log("from client component", Tests);

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  useEffect(() => {
    if (Tests.length) {
      let aux = Tests.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [Tests]);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleDelete = (id) => {
    console.log("Delete row with ID:", id);
  };

  // const handleUpdate = (id) => {
  //   console.log("Update row with ID:", id);
  // };

  const columns = useMemo(
    () => [
      {
        field: "title",
        headerName: "Title",
        headerClassName: "header-blue",
        width: 100,
      },
      {
        field: "content",
        headerName: "Content",
        headerClassName: "header-blue",
        width: 250,
      },
      {
        field: "correction",
        headerName: "Correction",
        headerClassName: "header-blue",
        width: 200,
      },
      {
        field: "score",
        headerClassName: "header-blue",
        headerName: "Score",
        width: 100,
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
            <IconButton onClick={()=>navigate('one/'+params.row.id)} color="primary" aria-label="update">
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

  if (!Tests) {
    return (
      <div>
        {" "}
        <DisplayLottie animationData={loading} />
      </div>
    );
  }
  return (
    <div>
      <HeaderPage
        title="Tests List"
        showButton={true}
        
        buttonFunction={()=>navigate('create')}
        text={"Create Test"}
      />

      {/* <Table columns={columns} rows={rows} />
      {isOpen && <EditTest EditTest={Tests} />} */}
    </div>
  );
}

export default TestList;
