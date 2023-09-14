// import React, { useState } from 'react';
// import { createQuiz } from '../../../store/quiz';
// import { useDispatch,useSelector } from "react-redux";


// function QuizCreator() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState('');
//   const [options, setOptions] = useState(['', '', '']);
//   const [correctOption, setCorrectOption] = useState(0);
//   const dispatch = useDispatch()
//   const addQuestion = () => {
//     const newQuestion = {
//       question: currentQuestion,
//       options: [...options],
//       correctOption: correctOption,
//     };
//     setQuestions([...questions, newQuestion]);
//     setCurrentQuestion('');
//     setOptions(['', '', '']);
//     setCorrectOption(0);
//     dispatch(createQuiz())
//   };

//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const handleCorrectOptionChange = (index) => {
//     setCorrectOption(index);
//   };

//   return (
//     <div>
//       <h2>Create Quiz</h2>
//       <div>
//         <label>Question:</label>
//         <input
//           type="text"
//           value={currentQuestion}
//           onChange={(e) => setCurrentQuestion(e.target.value)}
//         />
//       </div>
//       <div>
//         {options.map((option, index) => (
//           <div key={index}>
//             <label>Option {index + 1}:</label>
//             <input
//               type="text"
//               value={option}
//               onChange={(e) => handleOptionChange(index, e.target.value)}
//             />
//             <input
//               type="radio"
//               checked={correctOption === index}
//               onChange={() => handleCorrectOptionChange(index)}
//             />
//             <label>Correct Option</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={addQuestion}>Add Question</button>

//       <h2>Preview Questions</h2>
//       <ul>
//         {questions.map((question, index) => (
//           <li key={index}>
//             <strong>Question {index + 1}:</strong> {question.question}
//             <ul>
//               {question.options.map((option, optionIndex) => (
//                 <li key={optionIndex}>
//                   {optionIndex === question.correctOption ? (
//                     <strong>{option}</strong>
//                   ) : (
//                     option
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default QuizCreator;


//****************************************** */
// import React, { useEffect, useState } from "react";
// import HeaderPage from "../../../components/HeaderPage";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createQuiz } from "../../../store/quiz";
// import { showErrorToast, showSuccessToast } from "../../../utils/toast";
// import Form from "../../../components/Form";
// import { fetchEmployees } from "../../../store/employees";

// function CreateQuiz() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [quiz, setQuiz] = useState([]);
//   const [data,setData]=useState(null)
//   console.log("🚀 ~ file: CreateQuiz.js:14 ~ CreateQuiz ~ quiz:", quiz)
//   const [inputs, setInputs] = useState([]);
//   const employees = useSelector((state)=>state.employee.employees.items)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuiz((quiz) => ({ ...quiz, [name]: value }));
//   };
//   useEffect(()=>{
//     dispatch(fetchEmployees())
//   },[dispatch])
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const body = { ...quiz,EmployeeQuizIds:data, score: parseInt(quiz.score) };
//     dispatch(createQuiz(body)).then((res) => {
//       showSuccessToast("Create Quiz succsesfuly ");
//       if (!res.error) {
//         navigate(`/quiz`);
//       } else {
//         showErrorToast(res.error.message);
//       }
//     });
//   };
//   useEffect(() => {
//     setInputs([
//       {
//         label: "Score",
//         placeholder: "Score",
//         name: "score",
//         width: 250,
//         value: quiz.name,
//         type: "number",
//         required: true,
//       },
//       {
//         label: "Content",
//         placeholder: "Content",
//         name: "content",
//         width: 250,
//         value: quiz.name,
//         required: true,
//       },
//       {
//         category: "select",
//         name: "employee",
//         label: "Emplyee",
//         required: true,
//         value:employees.map((elem)=>elem.id),
//         options: employees,
//         optionLabel: "name",
//         valueLabel: "id",

//         onChange: (value) => {
//           setQuiz((Quiz) => ({ ...Quiz, EmployeeQuizIds: data }));
//         },
//         multiple: true,

//       },
//     ]);
//   }, []);
//   const buttons = [
//     {
//       category: "cancel",
//       name: "Cancel",
//       onClick: () => navigate(-1),
//       className: "",
//       style: { width: 100 },
//     },
//     {
//       category: "save",
//       name: "Save",
//       onSubmit,
//       className: "",
//       style: { width: 100 },
//     },
//   ];
//   return (
//     <div>
//       <HeaderPage title="Quiz " parent="HR" />
//       <div className="d-flex flex-wrap align-items-center justify-content-center px-3 pt-5 ">
//         <div className="py-5  rounded-5  ">
//           <div class="d-flex justify-content-center  mb-4">
//             <Form
//               className=" rounded-5 d-flex flex-wrap  justify-content-center align-items-center  "
//               style={{
//                 boxShadow: "0px 0px 8px #9E9E9E",
//                 width: "593px",
//                 height: "500px",
//                 marginLeft: "50px",
//               }}
//               inputsClassName="d-flex justify-content-around  gap-3 flex-wrap"
//               inputs={inputs}
//               numberInputPerRow={2}
//               onSubmit={onSubmit}
//               onChange={handleChange}
//               buttons={buttons}
//               buttonsClassName=" d-flex justify-content-end gap-3"
//               setData={setData}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateQuiz;

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
  const [quiz, setQuiz] = useState([]);
  const [data,setData]=useState(null)
  console.log("🚀 ~ file: CreateQuiz.js:14 ~ CreateQuiz ~ quiz:", quiz)
  const [inputs, setInputs] = useState([]);
  const employees = useSelector((state)=>state.employee.employees.items)
  const questions = useSelector((state)=>state.question.questions.items)
 console.log("question",questions)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz((quiz) => ({ ...quiz, [name]: value }));
  };
  useEffect(()=>{
    dispatch(fetchEmployees())
    dispatch(fetchQuestions())
  },[dispatch])
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { ...quiz,QuestionQuizIds:data,EmployeeQuizIds:data, score: parseInt(quiz.score) };
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
        value:employees.map((elem)=>elem.name),
        options: employees,
        optionLabel: "name",
        valueLabel: "id",

        onChange: (value) => {
          setQuiz((Quiz) => ({ ...Quiz, EmployeeQuizIds: value }));
        },
        multiple: true,

      },
      {
        category: "select",
        name: "question",
        label: "Question",
        required: true,
        value:questions.map((elem)=>elem.text),
        options: questions,
        optionLabel: "name",
        valueLabel: "id",

        onChange: (value) => {
          setQuiz((Quiz) => ({ ...Quiz, QuestionQuizIds: value }));
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

