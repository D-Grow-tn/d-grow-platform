import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AddButton from "./button/AddButton";
import CancelButton from "./button/CancelButton";
import SaveButton from "./button/SaveButton";
import EditButton from "./button/EditButton";
import ConfirmButton from "./button/ConfirmButton";
import DeleteButton from "./button/DeleteButton";

const HeaderPage = ({ parent,title, showButton,text,buttonFunction }) => {
  const location = useLocation();
  const navigate = useNavigate();

 

  return (
    <header className="headerPage d-flex justify-content-between align-items-center p-3">
      <div className="px-5">
        <h2 className="headerPage-title darkBlue">{title}</h2>
        <div className=" d-flex align-items-center ">
    <p style={{fontWeight:"bold"}}>{parent}</p> <p> <ArrowRightIcon /> {location.pathname} </p></div>
      </div>
      <div>
        {showButton && (
          <button
          type="button"
                class="btn"
                style={{
                  height: "40px",
                  background: "#2351AD",
                  color: "white",
                  borderRadius:"8px",
                  
                }}
          
            onClick={buttonFunction}
          >
            {text} <i class="fa-solid fa-play fa-fade px-2"></i>
          </button>
        )}
        
       
      </div>
    </header>
  );
};

export default HeaderPage;
