
import React, { useEffect, useState } from "react";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createQuiz } from "../../../store/quiz";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import Form from "../../../components/Form";
import { fetchEmployees } from "../../../store/employees";
import { fetchQuestions } from "../../../store/question";

function CreateQuiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({});
  
  const [data, setData] = useState([]);
  const [dataa, setDataa] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [inputss, setInputss] = useState([]);
  const [employeeQuizIds, setEmployeeQuizIds] = useState([]);
  const [questionQuizIds, setQuestionQuizIds] = useState([]);
  const employees = useSelector((state) => state.employee.employees.items);
  const questions = useSelector((state) => state.question.questions.items);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz((prevQuiz) => ({ ...prevQuiz, [name]: value }));
  };

  useEffect(() => {
    dispatch(fetchEmployees());
    dispatch(fetchQuestions());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("first data",data)
    const body = {
      ...quiz,
      EmployeeQuizIds: data,
      
      score: parseInt(quiz.score || 0),
      QuestionQuizIds: dataa,
    }


    dispatch(createQuiz(body)).then((res) => {
      showSuccessToast("Create Quiz successfully");
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
        value: quiz.score || "", 
        type: "number",
        required: true,
      },
      {
        label: "Content",
        placeholder: "Content",
        name: "content",
        width: 250,
        value: quiz.content || "", 
        required: true,
      },
      {
        category: "select",
        name: "employee",
        label: "Employee",
        required: true,
        value: quiz.EmployeeQuizIds || [], 
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        width: 200,
        onChange: (value) => {
          setQuiz((prevQuiz) => ({ ...prevQuiz, EmployeeQuizIds: value }));
     
        },
        multiple: true,
      },
   
    ]);
  }, [quiz, employees, questions]);
  useEffect(() => {
    setInputss([
      {
      category: "select",
      name: "question",
      label: "Question",
      required: true,
      value: quiz.QuestionQuizIds || [], 
      options: questions,
      optionLabel: "text",
      valueLabel: "id",
      width: 200,
      onChange: (value) => {
        setQuiz((prevQuiz) => ({ ...prevQuiz, QuestionQuizIds: value }));
      },
      multiple: true,
    },
  ]);
}, [quiz, questions]);
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
    {
      category: "Add",
      name: "Add",
      onClick: () => navigate(-1),
      className: "AddB",
      style: { width: 70 },
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
              data={data}
            />
             <Form
              className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
              style={{
                boxShadow: "0px 0px 8px #9E9E9E",
                width: "593px",
                height: "500px",
                marginLeft: "50px",
              }}
              inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
              inputs={inputss}
              numberInputPerRow={2}
              onSubmit={onSubmit}
              onChange={handleChange}
              buttons={buttons}
              buttonsClassName=" d-flex justify-content-end gap-3"
              setData={setDataa}
              data={dataa}
            />
          </div>
        </div>
      </div>
      {/* <form  onSubmit={onSubmit} onChange={handleChange} setData={setData}>
        <input
          label="Title"
          placeholder="Title Quiz"
          name="Title"
          width="250"
          value={quiz?.content}
          type="string"
          required
        />
        <input
          label="score"
          placeholder="Score Quiz"
          name="Score"
          width="250"
          value={quiz?.score}
          type="number"
          required
        />

        <select name="employee" >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
        <select name="question"  >
          {questions.map((question) => (
            <option key={question.id} value={question.text}>
              {question.text}
            </option>
          ))}
        </select>
       <SaveButton/>
       <CancelButton/>
       <AddButton/>
      </form> */}
      <div></div>
      <div></div>
    </div>
  );
}
export default CreateQuiz;