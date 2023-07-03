import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../../components/HeaderPage";
import {
  fetchContentSubComponet,
  updateContentSubComponet,
} from "../../../store/contentsubcomponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../../components/Form";

function OneContentSubComponent() {
  const dispatch = useDispatch();
  const { contentsubcomponetId } = useParams();

  const contentsubcomponet = useSelector(
    (state) => state?.contentsubcomponet?.contentsubcomponet
  );
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [aux, setAux] = useState(null);

  useEffect(() => {
    dispatch(fetchContentSubComponet(contentsubcomponetId));
  }, [dispatch]);
  useEffect(() => {
    setAux(contentsubcomponet);
  }, [contentsubcomponet]);
  useEffect(() => {
    setInputs([
      {
        name: "title",
        label: "Title",
        required: true,
        value: aux?.title,
      },
      {
        name: "content",
        label: "Content",
        required: true,
        value: aux?.content,
      },
      {
        name: "navigateTo",
        label: "NavigateTo",
        required: true,
        value: aux?.navigateTo,
      },
    ]);
  }, [aux]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAux((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content, navigateTo } = aux;
    dispatch(
      updateContentSubComponet({
        title,
        content,
        navigateTo,
        contentsubcomponetId,
      })
    ).then((result) => {
      if (!result.error) {
        showSuccessToast("Content subComponet has been updated");
        setReadOnly(true);
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
        setAux(contentsubcomponet);
        setReadOnly(true);
      },
    },
  ];
  return (
    <div style={{}}>
      <HeaderPage title="Content SubComponet Information" />

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
              {/* {main?.SubComponent} */}
              {contentsubcomponet?.title}
            </h1>
          </div>

          {readOnly && (
            <button
              type="button"
              class="btn"
              style={{
                height: "40px",
                background: "#2351AD",
                color: "white",
                borderRadius: "8px",
                marginRight: "50px",
              }}
              onClick={() => {
                setReadOnly(false);
              }}
            >
              Edit {contentsubcomponet?.title}
              <i class="fa-solid fa-play fa-fade px-2"></i>
            </button>
          )}
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
          />
        </div>
      </div>
    </div>
  );
}

export default OneContentSubComponent;
