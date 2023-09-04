import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from '../../../components/HeaderPage'
import { fetchQuiz, updataQuiz } from '../../../store/quiz';
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import Form from '../../../components/Form';
import { fetchEmployees } from '../../../store/employees';

function EditQuiz() {
  const dispatch = useDispatch();
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(true);
  const [auxQuiz, setAuxQuiz] = useState(null);
  const [data,setData]=useState(null)
  const employees = useSelector((state)=>state.employee.employees.items)

  console.log("🚀 ~ file: EditQuiz.js:15 ~ EditQuiz ~ auxQuiz:", auxQuiz)
  const [inputs, setInputs] = useState([]);
  // const clients = useSelector((state) => state.client.clients.items);
  const quiz = useSelector((state) => state.quiz.quiz);

  useEffect(() => {
    dispatch(fetchQuiz(quizId));
    dispatch(fetchEmployees())
  }, [dispatch]);

  useEffect(() => {
    setAuxQuiz(quiz);
  }, [quiz]);

  useEffect(() => {
    setInputs([
      {
        name: "score",
        label: "Score",
        required: true,
        value: auxQuiz?.score,
      },
      {
        name: "content",
        label: "Content",
        required: true,
        value: auxQuiz?.content,
      },
      {
        category: "select",
        name: "employee",
        label: "Employee",
        required: true,
        options: employees,
        optionLabel: "name",
        valueLabel: "id",
        value: (auxQuiz?.EmployeeQuiz[0].employee.name),

        onChange: (value) => {
          auxQuiz((Quiz) => ({ ...Quiz, EmployeeQuizIds: [value] }));
        },
        multiple: true,

      },
    ]);
  }, [auxQuiz]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxQuiz((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const body = { ...auxQuiz,EmployeeQuizIds:data, quizId,score: parseInt(auxQuiz.score) };

    dispatch(updataQuiz(body)).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Quiz has been updated");
          setReadOnly(true);
          navigate("/quiz");
         
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
  };

  const buttons = [
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setAuxQuiz(quiz);
        setReadOnly(true);
      },
    },
  ];
  return (
    <div>
       <HeaderPage title="Quiz " parent="HR" 
    showButton={readOnly ? true : false}

    buttonFunction={() => setReadOnly(false)}
       text='Edit Quiz'
       />
    <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            <h1
              className="darkBlue"
              style={{
                fontSize: "45px",
              }}
            >
              {/* {devis?.client?.map((elem)=>elem.name)} */}
            </h1>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-center mt-5"
            inputsStyle={{ rowGap: 20, columnGap: 100 }}
            numberInputPerRow={2}
            readOnly={readOnly}
            onChange={handleInputChange}
            buttonsClassName="mt-5 d-flex justify-content-center gap-3"
            buttons={!readOnly ? buttons : []}
            setData={setData}
          />
        </div>
      </div>
    </div>
  )
}

export default EditQuiz
