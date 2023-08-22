import React, { useEffect, useState } from "react";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createQuiz } from "../../../store/quiz";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import Form from "../../../components/Form";
import { fetchEmployees } from "../../../store/employees";

function CreateQuiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState([]);
  const [data,setData]=useState(null)
  console.log("🚀 ~ file: CreateQuiz.js:14 ~ CreateQuiz ~ quiz:", quiz)
  const [inputs, setInputs] = useState([]);
  const employees = useSelector((state)=>state.employee.employees.items)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz((quiz) => ({ ...quiz, [name]: value }));
  };
  useEffect(()=>{
    dispatch(fetchEmployees())
  },[dispatch])
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { ...quiz,EmployeeQuizIds:data, score: parseInt(quiz.score) };
    dispatch(createQuiz(body)).then((res) => {
      showSuccessToast("Create Quiz succsesfuly ");
      if (!res.error) {
        navigate(`/quiz`);
      } else {
        showErrorToast(res.error.message);
      }
    });
  };
  useEffect(() => {
    setInputs([
      {
        label: "Score",
        placeholder: "Score",
        name: "score",
        width: 250,
        value: quiz.name,
        type: "number",
        required: true,
      },
      {
        label: "Content",
        placeholder: "Content",
        name: "content",
        width: 250,
        value: quiz.name,
        required: true,
      },
      {
        category: "select",
        name: "employee",
        label: "Emplyee",
        required: true,
        value:employees.map((elem)=>elem.id),
        options: employees,
        optionLabel: "name",
        valueLabel: "id",

        onChange: (value) => {
          setQuiz((Quiz) => ({ ...Quiz, EmployeeQuizIds: data }));
        },
        multiple: true,

      },
    ]);
  }, []);
  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate(-1),
      className: "",
      style: { width: 100 },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
      className: "",
      style: { width: 100 },
    },
  ];
  return (
    <div>
      <HeaderPage title="Quiz " parent="HR" />
      <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
        <div className="py-5  rounded-5  ">
          <div class="d-flex justify-content-center  mb-4">
            <Form
              className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
              style={{
                boxShadow: "0px 0px 8px #9E9E9E",
                width: "593px",
                height: "500px",
                marginLeft: "50px",
              }}
              inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
              inputs={inputs}
              numberInputPerRow={2}
              onSubmit={onSubmit}
              onChange={handleChange}
              buttons={buttons}
              buttonsClassName=" d-flex justify-content-end gap-3"
              setData={setData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
