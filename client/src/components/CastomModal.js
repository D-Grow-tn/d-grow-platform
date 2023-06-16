import "../assets/css/Modal.css";
import { RiCloseLine } from "react-icons/ri";
import CastomInput from "./CastomInput";

function CastomModal({
  setIsOpen,
  title,
  buttonName,
  nameValue,
  addressValue,
  phoneValue,
  setName,
  setAdress,
  setPhone,
  handleUpdate
}) {


  const handleSubmit=async()=>{
  try{
    await handleUpdate()

  setIsOpen(false)
  }catch(error){
    console.log(error)
  }
  }
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <h1 className="heading  ">{title}</h1>

          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent mt-5">
            <CastomInput
              label="Name"
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={nameValue}
               onChange={(e)=>setName(e.target.value)}
            />
            <CastomInput
              label="Adresse"
              type="text"
              placeholder="Enter your Adresse"
              value={addressValue}
              onChange={(e)=>setAdress(e.target.value)}

            />{" "}
            <CastomInput
              label="Phone"
              type="number"
              placeholder="Enter your Phone"
              value={phoneValue}
              onChange={(e)=>setPhone(e.target.value)}

            />
          </div>
          <div></div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={handleSubmit}>
                {buttonName}
              </button>
              <button className="cancelBtn" onClick={() =>setIsOpen(false) }>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CastomModal;
