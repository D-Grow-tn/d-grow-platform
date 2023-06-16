import React from "react";
import HeaderPage from "../../../components/HeaderPage";


function EmployeeList() {
  return (
    <div>
      <HeaderPage title="Emlpoyees List" showButton={true} buttonPath="/employee/create"  text={"Create Employee"} />
    
     
    </div>
  );
}

export default EmployeeList;
