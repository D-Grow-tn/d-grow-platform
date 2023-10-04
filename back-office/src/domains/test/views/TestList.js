import { IconButton } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";

import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchTests, removeTests } from "../../../store/test";
import { logo } from "../../../assets/images/image";

function TestList() {
  const [inputs, setInputs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const test = useSelector((state) => state.test.tests.items);

  console.log(
    "test from testList",
    test.map((elem) => elem?.title)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);
  const handleUpdate = (id) => {
    navigate("edit/" + id);
  };
  const handleDelete = () => {
    dispatch(removeTests(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Test has been deleted");
        dispatch(fetchTests());
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
  

  return (
    <div>
      <HeaderPage
        title="Test "
        parent="HR"
        showButton={true}
        text={"Create Test"}
        buttonFunction={() => navigate("create")}
      />
      {/* <Table columns={columns} rows={test.length ? test : []} /> */}
      <div className="d-flex flex-wrap  justify-content-center gap-3 ">
        {test.map((elem, i) => (
          <div class="card bg-light mb-3" style={{ maxWidth: "16rem" }}>
            <div class="card-header d-flex flex-wrap justify-content-between align-items-center" style={{ borderBottomColor:"#1a408c" }}>
              <div> {elem?.title}</div>
            <div
              className=" d-flex flex-wrap "
              // style={{ marginBottom:"-55px" }}
              
            >
              <IconButton
                onClick={() => handleUpdate(elem.id)}
                color="primary"
                aria-label="update"
                style={{color:"#1a408c",backgroundColor:"white"}}
              >
                <RemoveRedEyeIcon />
              </IconButton>
              <IconButton
                onClick={() => openPopup(elem)}
                color="error"
                aria-label="delete"
                style={{color:"#DC3545",backgroundColor:"white"}}
              >
                <DeleteIcon />
              </IconButton>
            </div>
            </div>
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text">{elem?.content}</p>
            </div>
           
            <img src={logo} alt="Logo" style={{width:"100px", marginBottom:"-51px", marginLeft:"120px"}} />
        
            <div 
        
              style={{
                width: "0",
                height: "0",
                borderLeft: "25px solid transparent",
                borderRight: "25px solid transparent",
                borderBottom: "50px solid #1a408c",
                transform: "skew(27deg)",
                paddingBottom: "10px",
                marginBottom: "-10px",
                marginLeft: "-25px",
              }}
            ></div>
          </div>
         
        ))}
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
    </div>
  );
}

export default TestList;
