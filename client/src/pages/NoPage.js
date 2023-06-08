import React from "react";
import DisplayLottie from "../constants/DisplayLottie";
import noPage from "../constants/noPage.json";
import { useNavigate } from 'react-router-dom';

function NoPage() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  return (
    <div>
      <div className="container  py-5" >
        <div className="row content  gap-5">
          <DisplayLottie animationData={noPage} style={{ width: "600px" }} />

          <div className="col-lg-6  pt-lg-0 p-5 mt-5 dark-bleu ">
            <div style={{ paddingTop: "60px" }}>
              <h1 style={{ fontWeight: "bold", fontSize: "80px" }}>
                {" "}
                Oops !!
                <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>
                  {" "}
                <span style={{color:"#00ac9e"}}>nothing</span>   here....
                </h1>
              </h1>
            </div>
            <div className="py-3">
              <p>
                The page you are looking for does not exist or may have been
                moved <br />
                Try to go back to previous page{" "}
              </p>

              <button
                type="button"
                class="btn mt-5"
                style={{
                  width: "150px",
                  height: "40px",
                  marginLeft: "60%",
                  background: "#00ac9e",
                  color: "white",
                }}
                onClick={goBack}
              >
                Go back <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
