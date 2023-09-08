import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import { fetchQuiz, updataQuiz } from "../../../store/quiz";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import Form from "../../../components/Form";
import { fetchEmployees } from "../../../store/employees";
import { fetchQuestions } from "../../../store/question";
import "../../../assets/styles/EditQuiz.css";
import { logo } from "../../../assets/images/image";
function EditQuiz() {
  const dispatch = useDispatch();
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [readOnly, setReadOnly] = useState(true);
  const [auxQuiz, setAuxQuiz] = useState(null);
  const [data, setData] = useState(null);
  const employees = useSelector((state) => state.employee.employees.items);
  const questions = useSelector((state) => state.question.questions.items);
  const [scoreq, setScoreq] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [inputs, setInputs] = useState([]);
  // const clients = useSelector((state) => state.client.clients.items);
  const quiz = useSelector((state) => state.quiz.quiz);

  useEffect(() => {
    dispatch(fetchQuiz(quizId));
    dispatch(fetchEmployees());
    dispatch(fetchQuestions());
  }, [dispatch]);
  console.log("🚀Question one", questions);
  useEffect(() => {
    setAuxQuiz(quiz);
  }, [quiz]);

  console.log("quiz", quiz);
  useEffect(() => {
    setInputs([
      {
        name: "content",
        required: true,
        value: auxQuiz?.content,
        backgroundColor: "#fff",
        width: 100,
      },
      {
        name: "score",
        required: true,
        value: auxQuiz?.score,
        backgroundColor: "#fff",
        width: 100,
        marginTop: 0,
      },

      {
        name: "question",
        label: "Question",
        required: true,

        value: auxQuiz?.QuestionQuiz.map((quest) => quest.question.text),

        onChange: (value) => {
          auxQuiz((Quiz) => ({ ...Quiz, QuestionQuizIds: [value] }));
          console.log("🚀Quiz one", value);
        },
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
    const body = {
      ...auxQuiz,
      QuestionQuizIds: data,
      quizId,
      score: parseInt(auxQuiz.score),
    };

    dispatch(updataQuiz(body)).then((result) => {
      if (!result.error) {
        showSuccessToast("Quiz has been updated");
        setReadOnly(true);
        navigate("/quiz");
      } else {
        showErrorToast(result.error.message);
      }
    });
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

  const cheking = (e) => {
    console.log("checked");
    quiz?.QuestionQuiz.map((elm)=>{
      
     elm.question?.OptionQuestion?.map((el)=>{
        if( el.option. correctOption===true)(
         setScoreq(scoreq+10)
        )
        else
        setScoreq(scoreq)
       })
    })
  
  };
  const handleNextClick = () => {
    // Move to the next question if there is one
    if (questionIndex < quiz.QuestionQuiz.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const handlePreviousClick =()=>{
    if (questionIndex <= quiz.QuestionQuiz.length - 1) {
      setQuestionIndex(questionIndex - 1);
  }
}
  return (
    <div>
      <HeaderPage
        title="Quiz "
        parent="HR"
        showButton={readOnly ? true : false}
        buttonFunction={() => setReadOnly(false)}
        text="Edit Quiz"
      />
      <div
        className="rounded-7"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          maxWidth: "65%",
          maxHeight: "625px",
          padding: "10px",
          transform: "translate(25%,-25%)",
          marginTop: "200px",
        }}
      >
        {/* <div className="d-flex justify-content-center  align-items-center mt-5 ">
          <Form
            onSubmit={onSubmit}
            inputs={inputs}
            inputsClassName="d-flex flex-wrap justify-content-around mt-0"
            inputsStyle={{ rowGap: 20, columnGap: 100,width:"100%" }}
          
            numberInputPerRow={2}
            readOnly={readOnly}
            onChange={handleInputChange}
            buttonsClassName="mt-5 d-flex justify-content-center gap-3"
            buttons={!readOnly ? buttons : []}
            setData={setData}
          />
   
        </div> */}
        <img src={logo} style={{width:"114px",height:"auto",marginBottom:'7px'}} />
       
        <main>
          <div className="d-flex justify-content-around align-items-center headerQuiz ">
            <div>
              <h4>{quiz?.content}</h4>
            </div>
            <div>
              <h6>SCORE : {quiz?.score}</h6>
            </div>
          </div>

          <section>
            {quiz?.QuestionQuiz.map((elem, index) => (
              <div
                key={index}
                style={{ display: index === questionIndex ? "block" : "none" ,paddingLeft:"20px"}}
              >
                <h6>{index +1} : {elem.question?.text}</h6>
                <ul>
                  {elem.question?.OptionQuestion?.map((el, optionIndex) => (
                    <li
                      key={optionIndex}
                      className="form-check-label d-flex"
                      for="flexCheckDefault"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        onClick={cheking}
                        id={`flexCheckDefault${optionIndex}`}
                        style={{marginTop: "10px"}}
                      />
                      <label
                        className="question"
                        htmlFor={`flexCheckDefault${optionIndex}`}
                      >
                        {el.option.content}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                <button className="btnPrevious" onClick={handlePreviousClick} >
                Previous
                </button>
                <button className="btnNext " onClick={handleNextClick} >
                  Next
                </button>
               
                </div>
               
              </div>
              
            ))}
           
          </section>
          <div className="d-flex justify-content-center pt-3 "><h5>SCORE TOTAL:{scoreq}</h5></div>
        </main>
       
      </div>
    </div>
  );
}

export default EditQuiz;
