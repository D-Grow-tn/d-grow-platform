import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import {
  fetchSubComponet,
  updateSubComponet,
} from "../../../store/subComponet";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ContentSubComponentList from "../../contentSubComponent/views/ContentSubComponentList";
import image from "../../../assets/images/EditImage.png";
function OneSubComponet() {
  const dispatch = useDispatch();
  const { subcomponetId } = useParams();
  const subComponet = useSelector((state) => state?.subComponet?.subcomponet);
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [aux, setAux] = useState(null);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
  useEffect(() => {
    dispatch(fetchSubComponet(subcomponetId));
  }, [dispatch]);
  useEffect(() => {
    setAux(subComponet);
  }, [subComponet]);
  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: aux?.name,
      },
      {
        name: "position",
        label: "Position",
        required: true,
        value: aux?.position,
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
    const { name, position } = aux;
    dispatch(updateSubComponet({ name, position, subcomponetId })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("Client has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
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
    const createdAt = subComponet?.createdAt;
    const endAt = subComponet?.updatedAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [subComponet]);
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
        setAux(subComponet);
        setReadOnly(true);
      },
    },
  ];
  const countProjects = () => {
    if (subComponet?.SubComponent?.length <= 1) {
      return "ContentSubComponent";
    }
    return "ContentSubComponents";
  };
  return (
    <div style={{}}>
      <HeaderPage title="SubComponet Information" />
      <div className="container d-flex justify-content-center align-items-center ">
        {readOnly && (
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <h1 className="text-center flex-grow-1"> {subComponet?.name}</h1>
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
                  <h3 class="text-primary  d-inline">Name: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {subComponet?.name}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Position: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {subComponet?.position}
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
          inputs={ !readOnly ? inputs : []}
          inputsClassName="d-flex flex-wrap justify-content-center mt-5"
          inputsStyle={{ rowGap: 20, columnGap: 100 }}
          numberInputPerRow={2}
          readOnly={readOnly}
          onChange={handleInputChange}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          buttons={!readOnly ? buttons : []}
        />
      </div>
      {readOnly && (
        <div>
          <ContentSubComponentList subcomponetID={subcomponetId} />
        </div>
      )}
    </div>
  );
}

export default OneSubComponet;
