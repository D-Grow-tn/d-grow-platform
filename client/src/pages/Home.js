import React from "react";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="bg-light">
      <div className="mx-5 py-5 justify-content-between align-items-center " style={{width:400}}>
        <h4 >
        Unleash Your Digital Potential: Transforming Businesses with Exquisite
        Websites and Powerful Mobile Applications
      </h4>
      </div>

      <button
        onClick={()=>navigate('contact')}
        style={{
          backgroundColor: "#3ab1c8",
          borderRadiusColor: "#3ab1c8",
          borderRadius: 5,
        }}
        className="mx-5"
      >
        CONTACT-US
      </button>
      <div className="mx-5 py-5 ">
        <h2  >
        Unleash Your Digital Potential: Transforming Businesses with Exquisite
        Websites and Powerful Mobile Applications
      </h2>
      </div>

      <button
        onClick={()=>navigate('contact')}
        style={{
          backgroundColor: "#3ab1c8",
          borderRadiusColor: "#3ab1c8",
          borderRadius: 5,
        }}
        className="mx-5"
      >
        ABOUT-US
      </button>
      <div>
        <h2>Services</h2>
      </div>
      <div  style={{backgroundColor:'#070f4e',height:"200px"}} >
       <p className="mx-5 "> we want you start your project with us</p>
      </div>
      <div className="mx-5 py-5 ">
        <h2  >
        Unleash Your Digital Potential: Transforming Businesses with Exquisite
        Websites and Powerful Mobile Applications
      </h2>
      </div>

      <button
        onClick={()=>navigate('contact')}
        style={{
          backgroundColor: "#3ab1c8",
          borderRadiusColor: "#3ab1c8",
          borderRadius: 5,
        }}
        className="mx-5"
      >
        CONTACT-US
      </button>
      <div className="mx-5 py-5 ">
        <h2  >
        Unleash Your Digital Potential: Transforming Businesses with Exquisite
        Websites and Powerful Mobile Applications
      </h2>
      </div>

      <button
        onClick={()=>navigate('contact')}
        style={{
          backgroundColor: "#3ab1c8",
          borderRadiusColor: "#3ab1c8",
          borderRadius: 5,
        }}
        className="mx-5"
      >
        ABOUT-US
      </button>
      <div>
        <h2>Services</h2>
      </div>
      <div  style={{backgroundColor:'#070f4e',height:"200px"}} >
       <p className="mx-5 "> we want you start your project with us</p>
      </div>
    </div>
  );
}

export default Home;
