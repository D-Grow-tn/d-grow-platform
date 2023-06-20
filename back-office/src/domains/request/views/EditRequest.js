import React,{useEffect,useState} from 'react'
import Form from '../../../components/Form'
import HeaderPage from '../../../components/HeaderPage'
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from '../../../store/request';
import { useParams } from "react-router-dom";

function EditRequest() {
  const { requestId } = useParams();
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request.request);

 
  const [readOnly, setReadOnly] = useState(true);
  const [auxRequests, setAuxRequests] = useState(null);
  const [inputs, setInputs] = useState([]);


  useEffect(() => {
    dispatch(fetchRequest(requestId));
  }, [dispatch]);

  useEffect(() => {
    setAuxRequests(request);
  }, [request]);

  useEffect(() => {
    setInputs([
      {
        name: "subject",
        label: "subject",
        required: true,
        value: auxRequests?.subject,
      },
      {
        name: "content",
        label: "content",
        required: true,
        value: auxRequests?.content,
      },
    ]);
  }, [auxRequests]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxRequests((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setReadOnly(true);
    console.log(auxRequests);
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: () => {
        setReadOnly(true);
        setAuxRequests(request);
      },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
    },
  ];


  return (
    <div>
       <HeaderPage
        title={request?.name}
        showButton={readOnly?true:false}
        buttonFunction={() => setReadOnly(false)}
        text={"Edit request"}
      />

      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex gap-3 justify-content-around flex-wrap"
        buttons={!readOnly?buttons:[]}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={request?.name}
        readOnly={readOnly}
      />

    </div>
  );
}

export default EditRequest;
