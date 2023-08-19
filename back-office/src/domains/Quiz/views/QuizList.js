import { IconButton } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/DeleteModal";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { fetchQuizs, removeQuiz } from "../../../store/quiz";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";

function QuizList() {
  const [inputs, setInputs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const quizs = useSelector((state) => state.quiz.quizes.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchQuizs());
  }, [dispatch]);
  const handleUpdate = (id) => {
    navigate("edit/" + id);
  };
  const handleDelete = () => {
    dispatch(removeQuiz(selected.id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Quiz has been deleted");
        dispatch(fetchQuizs());
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
        field: "content",
        headerName: "Content",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "EmployeeQuiz",
        headerName: "EmployeeQuiz",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) => {
          return <div>{params.row?.EmployeeQuiz.map((elem)=>elem.employee.name).join(" | ")}</div>;
        },
      },

      {
        field: "score",
        headerName: "Score",
        headerClassName: "header-blue",
        width: 170,
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
    <div>
      <HeaderPage
        title="Quiz "
        parent="HR"
        showButton={true}
        text={"Create Quiz"}
        buttonFunction={() => navigate("create")}
      />
      <Table columns={columns} rows={quizs.length ? quizs : []} />
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

export default QuizList;
