import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../../components/Form";
import { useParams } from "react-router-dom";
import { fetchClient } from "../../../store/client";
import { useNavigate } from "react-router-dom";

function Delete() {

    const { clientId } = useParams();
    const navigate= useNavigate()
    const dispatch = useDispatch();
    const client = useSelector((state) => state.client.client);
    const [auxClient, setAuxClient] = useState(null);

    useEffect(() => {
        dispatch(fetchClient(clientId));
      }, [dispatch]);
    
      useEffect(() => {
        setAuxClient(client);
      }, [client]);
    
  
      const buttons = [
       
        {
          category: "delete",
          name: "Delete",
   
       },
        {
          category: "cancel",
          type: "button",
          name: "Cancel",
          onClick: () => {
            setAuxClient(client);
          },
            },
         
      ];

  return (
    <div className="popup">
      <p>Are you sure you want delete ?</p>
      <Form
       
        inputsClassName="d-flex justify-content-between flex-wrap px-5 "
        inputsStyle={{rowGap:20}}
        numberInputPerRow={3}
        buttons={buttons}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
    
        title={client?.name}
        
      />
  
    </div>
  )
}

export default Delete
