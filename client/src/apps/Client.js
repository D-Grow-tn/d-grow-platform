import Naavbar from "../layouts/Naavbar";
import Footer from "./../layouts/Footer";
import { Outlet } from "react-router-dom";
import "../assets/css/style.css";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { TbBallBasketball } from "react-icons/tb";
// import ComingSoon from "../pages/ComingSoon";



function Client() {



  return (
    <div>
     {/* <div
        style={{ height: "40px", color: "white" }}
        className="d-flex justify-content-between align-items-center  px-5 w-100 bg-darkbleu"
      >
        <div>
          <BsTelephone /> +2165862555
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <div>
            <GrFacebookOption />
          </div>
          <div className="px-2">
            <GrTwitter />
          </div>
          <div className="px-2">
            {" "}
            <BsInstagram />
          </div>
          <div className="px-2">
            {" "}
            <TbBallBasketball />
          </div>
        </div>
      </div> */}
      <Naavbar/>
       <Outlet /> 
{/* <ComingSoon/> */}
      <Footer />
    </div>
  );
}

export default Client;
