import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../store/client";
import Contact from "./Contact";

function Signup() {
  const [name, setName] = useState("");
  const [addresse, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch()
  const state = useSelector((state) => state.client.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      profile({
        name:  name ,
        address:  addresse ,
        phoneNumber: phone ,
      })
    );
  };

  return (
    <div>
      name: <input onChange={(e) => setName(e.target.value)} />
      <br />
      addresse: <input onChange={(e) => setAdress(e.target.value)} />
      <br />
      phoneNumber: <input onChange={(e) => setPhone(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>submit</button>
      <p>{state.name}</p>
      <p>{state.address}</p>
      <p>{state.phoneNumber}</p>
   
    <Contact/>
    </div>
  ); 
}

export default Signup;
