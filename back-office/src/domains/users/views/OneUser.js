import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateUser } from "../../../store/users";
import { useParams } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function OneUser() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [readOnly, setReadOnly] = useState(true);
  const [auxUser, setAuxUser] = useState(null);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  useEffect(() => {
    setAuxUser(user);
  }, [user]);

  useEffect(() => {
    setInputs([
      {
        name: "name",
        label: "Name",
        required: true,
        value: auxUser?.name,
      },
      {
        name: "email",
        label: "Email",
        required: true,
        value: auxUser?.email,
      },

      {
        category: "select",
        label: "Role",
        placeholder: "Select Role",
        name: "isClient",
        width: 250,
        required: true,
        options: [
           "Client" ,
         "Employee" 
        ],
        optionLabel: "label",
        valueLabel: "id",
        value: auxUser?.isClient?'Client':'Employee',
        onChange: (value) => {
          setAuxUser((user) => ({ ...user, isClient: value==='Client'?true:false }));
        },
      },
    ]);
  }, [auxUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(auxUser);
    const { name, email, phone, address, bio,isClient } = auxUser;
    dispatch(updateUser({ name, phone, address, email, bio, userId,isClient })).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("User has been updated");
          setReadOnly(true);
        } else {
          showErrorToast(result.error.message);
        }
      }
    );
  };
  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        auxUser(user);
      },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
  ];

  return (
    <div style={{}}>
      <HeaderPage title="User Information" parent="Admin Setting"/>

      <div
        className=" rounded-5  mt-3"
        style={{
          boxShadow: "0px 0px 8px #9E9E9E",
          padding: "50px",
        }}
      >
        <div className="d-flex  justify-content-between align-items-center px-3 flex-wrap headerProfile">
          <div className="d-flex  align-items-center  gap-3 pb-3 ">
            {/* <img
            src={user?.avatar?.path}
            class="rounded-circle "
            style={{
              width: "100px",
            }}
            alt="Avatar"
          />
{console.log(user?.avatar?.path)} */}
          <h1
            className="darkBlue"
            style={{
              fontSize: "45px",
            }}
          >
            {user?.name}  
          </h1><i class="fa-solid fa-play fa-fade px-2"></i>
          <h3>({user?.isClient ? "Client" : "Employee"})</h3>
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
            Edit Client <i class="fa-solid fa-play fa-fade px-2"></i>
          </button>
        )}
         </div>
        <div className=" d-flex justify-content-center">
          <div
            className=" rounded-5 p-3 m-5  "
            style={{
              boxShadow: "0px 0px 8px #54b4d3", //old boxShadow #9E9E9E
              backgroundColor: "white",
              width: "70%",
              height: "500px",
            }}
          >
            <Form
              onSubmit={onSubmit}
              inputs={inputs}
              inputsClassName="d-flex flex-wrap justify-content-center mt-5"
              inputsStyle={{ rowGap: 20, columnGap: 100 }}
              numberInputPerRow={1}
              readOnly={readOnly}
              onChange={handleInputChange}
              buttonsClassName="mt-5 d-flex justify-content-center gap-3"
              buttons={!readOnly ? buttons : []}
            />
          </div>
       
      </div>
      </div>
    </div>
  );
}

export default OneUser;
