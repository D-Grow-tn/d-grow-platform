import React, { useEffect, useState } from "react";
import { fetchMain, updateMain } from "../../../store/main";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import SubComponetList from "../../SubComponet/views/SubComponetList";
import image from "../../../assets/images/EditImage.png";
function OneMain() {
  const dispatch = useDispatch();
  const { mainId } = useParams();
  const main = useSelector((state) => state.main.main);
  const [readOnly, setReadOnly] = useState(true);
  const [auxClient, setAuxClient] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);
  const [formattedCreatedAt, setFormattedCreatedAt] = useState("");
  const [formattedEndAt, setFormattedEndAt] = useState("");
  useEffect(() => {
    dispatch(fetchMain(mainId));
  }, [dispatch]);
  useEffect(() => {
    setAuxClient(main);
  }, [main]);
  useEffect(() => {
    setInputs([
      {
        name: "title",
        label: "Title",
        required: true,
        value: auxClient?.title,
      },
      {
        name: "path",
        label: "Path",
        required: true,
        value: auxClient?.path,
      },
      {
        name: "type",
        label: "Type",
        required: true,
        value: auxClient?.type,
      },
    ]);
  }, [auxClient]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxClient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, path, type } = auxClient;
    dispatch(updateMain({ title, path, type, mainId })).then((result) => {
      if (!result.error) {
        showSuccessToast("Client has been updated");
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
        setAuxClient(main);
        setReadOnly(true);
      },
    },
  ];
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
    const createdAt = main?.createdAt;
    const endAt = main?.updatedAt;

    const formattedCreatedAt = formatDate(createdAt);
    const formattedEndAt = formatDate(endAt);

    setFormattedCreatedAt(formattedCreatedAt);
    setFormattedEndAt(formattedEndAt);
  }, [main]);
  const countProjects = () => {
    if (main?.SubComponent?.length <= 1) {
      return "SubComponent";
    }
    return "SubComponents";
  };

  return (
    <div className="p-3">
      <HeaderPage title="Main Information" parent="WebSite Setting" />

      <div className="container d-flex justify-content-center align-items-center ">
        {readOnly && (
          <div class="card  m-5 ">
            <div class="card-header d-flex justify-content-between align-items-center ">
              <h1 className="text-center flex-grow-1"> {main?.title}</h1>
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
                    {main?.title}
                  </h4>{" "}
                </p>
                <p class="card-text m-0 mt-5">
                  <h3 class="text-primary d-inline">Type: </h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {main?.type}
                  </h4>{" "}
                </p>

                <p class="card-text mt-5">
                  <h3 class="text-primary d-inline">Path:</h3>{" "}
                  <h4 className="custom-paragraph text-dark font-weight-bold d-inline">
                    {" "}
                    {main?.path}
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
      {readOnly && (
        <div style={{ marginTop: "0px" }}>
          <SubComponetList mainID={mainId} />
        </div>
      )}
    </div>
  );
}

export default OneMain;
