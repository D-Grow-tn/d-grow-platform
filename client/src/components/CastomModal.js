import '../assets/css/Modal.css';
import { RiCloseLine } from "react-icons/ri";


function CastomModal({setIsOpen,title,buttonName,content}) {
 
  return (
    <>
   <div className="darkBG"  onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
            <h5 className="heading">{title}</h5>
          <div className="modalHeader">
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
          {content}
            <input   placeholder='hello'/>
            <input   placeholder='hello'/>
            <input   placeholder='hello'/>
            <input   placeholder='hello'/>

          </div>
          <div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                {buttonName}
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CastomModal