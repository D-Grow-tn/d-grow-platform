import React, { useState } from 'react';
import { createQuiz } from '../../../store/quiz';
import { useDispatch,useSelector } from "react-redux";


function QuizCreator() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '']);
  const [correctOption, setCorrectOption] = useState(0);
  const dispatch = useDispatch()
  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: [...options],
      correctOption: correctOption,
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setOptions(['', '', '']);
    setCorrectOption(0);
    dispatch(createQuiz())
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleCorrectOptionChange = (index) => {
    setCorrectOption(index);
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>Option {index + 1}:</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <input
              type="radio"
              checked={correctOption === index}
              onChange={() => handleCorrectOptionChange(index)}
            />
            <label>Correct Option</label>
          </div>
        ))}
      </div>
      <button onClick={addQuestion}>Add Question</button>

      <h2>Preview Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <strong>Question {index + 1}:</strong> {question.question}
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  {optionIndex === question.correctOption ? (
                    <strong>{option}</strong>
                  ) : (
                    option
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizCreator;
