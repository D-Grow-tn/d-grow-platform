import React,{useEffect,useState} from 'react'
import Form from '../../../components/Form'
import HeaderPage from '../../../components/HeaderPage'
import { useParams, useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest,updateRequest } from '../../../store/request';
import { showErrorToast, showSuccessToast } from "../../../utils/toast";

function EditRequest() {
  const location = useLocation();
  const { requestId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = useSelector((state) => state.request.request )
  const me = useSelector((state) => state.auth.me);

 
  const [readOnly, setReadOnly] = useState(true);
  const [auxRequests, setAuxRequests] = useState(null);
  const [inputs, setInputs] = useState([]);
  const path =location.pathname
 console.log('====================================');
 console.log(path);
 console.log('====================================');
  useEffect(() => {
    dispatch(fetchRequest(requestId));
  }, [dispatch,me]);

  useEffect(() => {
    setAuxRequests(request);
    console.log('====================================');
    console.log(auxRequests);
    console.log('====================================');
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
        multiline:true,
        name: "content",
        label: "content",
        height:"200px",
        required: true,
        value: auxRequests?.content,
      },
    ]);
  }, [auxRequests]);

 console.log('====================================');
 console.log(auxRequests);
 console.log('====================================');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuxRequests((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {subject,content}= auxRequests;
    dispatch(updateRequest({requestId,subject,content})).then(
      (result) => {
        if (!result.error) {
          showSuccessToast("request has been updated");
          setReadOnly(true);
          navigate(-1);
        } else {
          showErrorToast(result.error.message);
        }
      }
    )
 
  };

  const buttons = [
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      style:{height:100},
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
       <div>
       {}
    <HeaderPage
      title={request?.name}
      showButton={readOnly ? true : false}
      buttonFunction={() => setReadOnly(false)}
      text={"Edit request"}
    />
    </div>
    
    <div className="d-flex flex-column align-items-center my-4">
      <Form
       className=" rounded-5 p-5"
            style={{
              boxShadow: "0px 0px 8px #9E9E9E",
              width: "600px",
              alignItems: "center",
            }}
        onSubmit={onSubmit}
        inputs={inputs}
        inputsClassName="d-flex flex-column gap-3"
        buttons={!readOnly ? buttons : []}
        buttonsClassName="d-flex justify-content-end gap-3 m-3"
        onChange={handleInputChange}
        title={request?.name}
        readOnly={readOnly}
      />
    </div>
    </div>
   
 
  


      


  );
}

export default EditRequest;
