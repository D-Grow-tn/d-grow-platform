import React, { useEffect, useState } from "react";
import { fetchMain, updateMain } from "../../../store/main";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import HeaderPage from "../../../components/HeaderPage";
import Form from "../../../components/Form";
import SubComponetList from "../../SubComponet/views/SubComponetList";

function OneMain() {
  const dispatch = useDispatch();
  const { mainId } = useParams();
  const main = useSelector((state) => state.main.main);
  const [readOnly, setReadOnly] = useState(true);
  const [auxClient, setAuxClient] = useState(null);
  const [inputs, setInputs] = useState([]);
  const [show, setShow] = useState(false);

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
  const countProjects = () => {
    if (main?.SubComponent?.length <= 1) {
      return "SubComponent";
    }
    return "SubComponents";
  };

  return (
    <div>
      <HeaderPage title="Main Information" />

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
              {main?.title}
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
              Edit {main?.title}
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

        <div style={{ marginTop: "80px" }}>
          <div className="d-flex  justify-content-between align-items-center my-5 py-4  flex-wrap headerProfile">
            <h1 className="darkBlue">Sub componet</h1>

            <div>
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
                  setShow(!show);
                }}
              >
                {main?.SubComponent?.length} {countProjects()}
                <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>

          {main?.SubComponent?.length !== 0 && show && (
            <SubComponetList mainID={mainId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default OneMain;
