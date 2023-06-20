import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import HeaderPage from '../../../components/HeaderPage'
import Form from "../../../components/Form";
import { createUser, fetchUsers } from "../../../store/users";

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users.items);
  const [user, setUser] = useState(null);
  const [inputs, setInputs] = useState([]);
  
  useEffect(() => {
    dispatch(fetchUsers());
    
  }, [dispatch]);

  useEffect(() => {
    setInputs([
      {
        label: "Name",
        placeholder: "Name",
        name: "name",
        required: true,
        width: 300,
      },
      {
        label: "Email",
        placeholder: "email@gmail.com",
        name: "email",
        width: 300,
        required: true,
      },

      {
        label: "Password",
        placeholder: "email@gmail.com",
        name: "password",
        width: 300,
        required: true,
      },
      {
        category: "select",
        label: "Role",
        placeholder: "Select Role",
        name: "isClient",
        width: 300,
        required: true,
        options: [
           "Client" ,
         "Employee" 
        ],
        optionLabel: "label",
        valueLabel: "id",
        value: user?.isClient?'Client':'Employee',
        onChange: (value) => {
          setUser((user) => ({ ...user, isClient: value==='Client'?true:false }));
        },
      },
 
    ]);
  }, [users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((User) => ({ ...User, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createUser(user)).then((result) => {
      if (!result.error) {
        showSuccessToast("User has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate(-1),
      className: "",
      style: { width: 100 },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
      className: "",
      style: { width: 100 },
    },
  ];
  return (
    <div>
  <HeaderPage title={'Create user'}/>
  <div className=" d-flex justify-content-center">
  <div
        className=" rounded-5 p-3 m-5  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3", //old boxShadow #9E9E9E
          backgroundColor: "white",
          width:"70%",
          height:"500px"
        }}
      >
  <Form
          className=" pt-4  "
          inputsClassName="d-flex flex-wrap justify-content-center  "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
          }}
          numberInputPerRow={1}
          inputs={inputs}
          buttons={buttons}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
        </div>
</div>
    </div>
  )
}

export default CreateUser
