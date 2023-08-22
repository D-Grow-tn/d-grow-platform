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
import image from "../../../assets/images/EditImage.png";
function OneContentSubComponent() {
  const dispatch = useDispatch();
  const { contentsubcomponetId } = useParams();

  const contentsubcomponet = useSelector(
    (state) => state?.contentsubcomponet?.contentsubcomponet
  );
  console.log(
    "🚀 ~ file: OneContentSubComponent.js:19 ~ OneContentSubComponent ~ contentsubcomponet:",
    contentsubcomponet
  );
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [aux, setAux] = useState(null);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
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
  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 because months are zero-based
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    }
    const createdAt = contentsubcomponet?.createdAt;
    const endAt = contentsubcomponet?.updatedAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [contentsubcomponet]);
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

      <div className="container d-flex justify-content-center align-items-center ">
        {readOnly && (
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <h1 className="text-center flex-grow-1">
                {" "}
                {contentsubcomponet?.title}
              </h1>
              {"       "}
              <img
                src={image}
                height="35"
                width="35"
                alt=""
                onClick={() => {
                  setReadOnly(false);
                }}
              />
            </div>
            <div
              class="card-body d-flex flex-column flex-md-row align-items-center d-flex justify-content-around gap-5"
              style={{
                minWidth: "600px",
                minHeight: "300px",
                marginTop: "-40px",
              }}
            >
              <div className=" ">
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary  d-inline">Title: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {contentsubcomponet?.title}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Content: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {contentsubcomponet?.content}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Type: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {contentsubcomponet?.type}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">NavigateTo: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    "{contentsubcomponet?.navigateTo}"
                  </h4>{" "}
                </p>
              </div>
            </div>
            <div
              class="card-footer text-dark d-flex justify-content-center align-items-center "
              id="dateDiv"
            >
              <h5>
                {" "}
                {`CreatedAt: ${formattedCreatedAt}   UpdatedAt: ${formattedEndAt}`}
              </h5>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-5 ">
        <Form
          onSubmit={onSubmit}
          inputs={!readOnly ? inputs : []}
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
  );
}

export default OneContentSubComponent;
