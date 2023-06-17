import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "../../../store/test";
import { useParams } from "react-router-dom";

function OneTest() {
  const { testId } = useParams();
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.test);

  const [readOnly, setReadOnly] = useState(true);
  const [auxTest, setAuxTest] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchTest(testId));
  }, [dispatch]);

  useEffect(() => {
    setAuxTest(test);
  }, [test]);

  useEffect(() => {
    setInputs([
      {
        name: "title",
        label: "Title",
        required: true,
        value: auxTest?.name,
      },
      {
        name: "content",
        label: "Content",
        required: true,
        value: auxTest?.email,
      },
      {
        name: "correction",
        label: "Correction",
        required: true,
        value: auxTest?.correction,
      },
      {
        name: "score",
        label: "Score",
        required: true,
        value: auxTest?.score,
      },
    ]);
  }, [auxTest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxTest((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setReadOnly(true);
    console.log(auxTest);
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        setAuxTest(test);
      },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
  ];

  return (
    <div>
      <HeaderPage
        title={test?.title}
        showButton={readOnly?true:false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit Test"}
      />
      {/* <div className="popup">
        <h2 className="darkBlue">Employee Information</h2> */}

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex gap-3 justify-content-around flex-wrap"
        buttons={!readOnly?buttons:[]}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={test?.title}
        readOnly={readOnly}
      />
      {/* </div> */}
    </div>
  );
}

export default OneTest;
