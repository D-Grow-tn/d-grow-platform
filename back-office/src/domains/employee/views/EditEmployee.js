import React, { useState } from "react";
import Form from "../../../components/Form";




function EditEmployee({Employee}) 
{
 
  const [EmployeeInf, setEmployeeInf] = useState({Employee})
  
  const inputs = [
    {
      label: "Name",
      required: true,
    },]


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeInf((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };



  return (
    <div>
   
   <div className="popup">
          <h2 className="darkBlue">Employee Information</h2>
          
      <Form
      inputs={inputs}
      onChange={handleInputChange}
      value={EmployeeInf.name}
       />
       
        </div>
    
  </div>
  )}


export default EditEmployee
