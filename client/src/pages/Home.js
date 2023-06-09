import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import development from "../constants/development.json";
import dev from "../constants/dev.json";
import plan from "../constants/plan.json";
import{ background2} from "../assets/img/images"

import DisplayLottie from "../constants/DisplayLottie";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const navigate = useNavigate();
  const services = [
    {
      image:
        "https://i.pinimg.com/564x/c9/6a/fe/c96afee943781f42644179c9eca4e3c5.jpg",
      serv: "             Web Front-End SOLUTIONS       ",
      descp:"How design is implemented on the web."
    },
    {
      image:
        "https://i.pinimg.com/564x/e8/2e/4f/e82e4f8aea93a0d318395a8a872b72fe.jpg",
      serv: "          UX/UI       WEBsite AND   MOBILE app       ",
      descp:"User Interface and User Experience Design."
    },
    {
      image:
        "https://www.newsanyway.com/wp-content/uploads/2020/04/mobile-app-development-company-1024x918-1.png",
      serv: "       BRANDING       AND CORPORATE     DESIGN          ",
      descp:"Visual communication and problem-solving"
    },
  ];

  const images = [
    "https://i.pinimg.com/564x/ab/3f/5a/ab3f5a328f0c37e7ae2287c8c66f6209.jpg",
    "https://www.newsanyway.com/wp-content/uploads/2020/04/mobile-app-development-company-1024x918-1.png",
    "https://example.com/slide3.jpg",
  ];

  return (
    <div className="bg-light">
     {/* PART 1 */}

      <div
      className="welcome"
        style={{ width: "100%", height: "500px"}}
      >
      <div>
        <dl>
          <dt>0</dt>
          <dd> Transforming Ideas into Stunning Websites and Mobile Apps </dd>
          <dt>1</dt>
          <dd>
            Go straight down and then you're done. That's the way to make a one.
          </dd>
          <dt>2</dt>
          <dd>
            Make a candy cane and then a shoe. That's the way to make a two!
          </dd>
          <dt>3</dt>
          <dd>Around a tree. Around a tree. That's the way to make a three!</dd>
          <dt>4</dt>
          <dd>
            Down, across, and down some more. That is how you make a four!
          </dd>
          <dt>5</dt>
          <dd>
            Take a drive. Swim around. To make a five come back to the ground.
          </dd>
          <dt>6</dt>
          <dd>
            Slide down and around to pick up sticks. That is the way to make a
            six.
          </dd>
          <dt>7</dt>
          <dd>
            Straight across and down from heaven. That is how you make a seven!
          </dd>
          <dt>8</dt>
          <dd>Make an S but don't just wait. Come back up to make an eight!</dd>
          <dt>9</dt>
          <dd>Make a loop and then a line. That's the way to make a nine!</dd>
        </dl>
      </div>
      </div>

      {/* PART 2 */}
      <section >
        {/* className=" d-flex mx-5 p-5 gap-5 justify-content-between align-items-center dark-bleu" */}
        {/* style={{ textAlign:"center" }}
      > */}
        <div className="container " style={{paddingTop:"150px"}}>
          <div className="row content ">
            <div
              className="col-lg-6 pt-5 pt-lg-0 
              mt-5  py-5 dark-bleu "
              style={{ textAlign: "center" }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  paddingBottom: "30px",
                }}
              >
                Unleash Your Digital Potential
              </h2>
              <h4>
                Transforming Businesses with Exquisite Websites and Powerful
                Mobile Applications <br />{" "}
              </h4>
              <p>
                we pride ourselves on delivering high-quality solutions that
                combine cutting-edge technology, aesthetic design, and
                user-centric functionality.
              </p>
              <button
                type="button"
                class="btn mt-5"
                style={{
                  width: "170px",
                  height: "40px",
                  background: "#47bdea",
                  color: "white",
                }}
                onClick={() => navigate("/about-us")}
              >
                Read more <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>

            <div className="col-lg-6 ">
              <DisplayLottie animationData={plan} style={{ width: "500px" }} />
            </div>
          </div>
        </div>
      </section>

  {/* SERVICES */}
  <section className="mt-5">
  <h1
          style={{
            fontWeight: "bold",
            color: "#1a408c",
            // paddingTop: "100px",
            textAlign: "center",
            marginBottom:"50px"
          }}
        >Services
        </h1>


        <div className="d-flex flex-wrap gap-5 justify-content-center">
{services.map((project, i) => (
                  
<div className="card-hover" key={i} style={{ width:"350px"}}>
  <div className="card-hover__content">
    <h3 className="card-hover__title" style={{fontWeight:"bold", color:"#1a408c"}}>
    {project.serv}
    </h3>
    <p className="card-hover__text">
    {project.descp}
    </p>
    <a href="#" className="card-hover__link">
      <span>Learn more</span>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </a>
  </div>
  <div className="card-hover__extra">
    <h4>
    Make your <span>choice</span> right now!
    </h4>
  </div>
 
</div>   ))}
</div>
<button
                type="button"
                class="btn mt-5"
                style={{
                  width: "150px",
                  height: "40px",
                  background: "#47bdea",
                  color: "white",
                  marginLeft:"79%"
                }}
                onClick={() => navigate("/services")}
              >
               See More <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
</section>




      {/* <div
        className=" px-5 align-items-center  "
        style={{ borderRadius: "10px", height: "100px",textAlign:"center" }}
      >
        {" "}
      </div> */}
      {/* <div
          style={{
            borderRadius: "10px",
            height: "5px",
            width: "550px",
            backgroundColor: "#47bdea",
          }}
          className=" m-5 justify-content-center "
        ></div> */}
      {/* <h3
        className=" p-5  mx-5 justify-content-center "
        style={{ color: "#213764", fontWeight: "bold", width: "90%", textAlign:"center" }}
      >
        Empowering businesses with stunning websites and engaging mobile
        applications for a strong digital presence
      </h3> */}

      {/* <img
        src="https://i.pinimg.com/564x/ab/3f/5a/ab3f5a328f0c37e7ae2287c8c66f6209.jpg"
        className="home-g"
      /> */}

    
      

      <section className="back" >
        <div className="container">
          <div className="row content ">
            <div className="col-lg-5 ">
              <DisplayLottie animationData={dev} />
            </div>
            <div
              className="col-lg-6 pt-4  mt-5 dark-bleu"
              style={{ textAlign: "center" }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  paddingBottom: "30px",
                }}
              >
                Elevate your digital presence
              </h2>

              <p>
                Contact us today to unlock the full potential of your
                <br /> business with our expert web and mobile development
                services.
              </p>
              <button
                type="button"
                class="btn mt-5"
                style={{
                  width: "150px",
                  height: "40px",
                  background: "#47bdea",
                  color: "white",
                }}
                onClick={() => navigate("/contact")}
              >
                Contact-us <i class="fa-solid fa-play fa-fade px-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

    


          {/* CLIENTS REVIEWS */}
<section>
  <h1 
  className="dark-bleu"
    style={{
      fontSize:"50px",
      fontWeight: "bold",
      paddingTop: "10px",
      textAlign: "center",
      
    }}> 
    Clients Reviews</h1>
<Carousel variant="dark">
        <Carousel.Item>
          <Carousel.Caption  style={{ paddingBottom: "100px" }}>
            <h3
          className="dark-bleu"
            >
            " Since having our new website built by D-Grow, we have seen a 200% increase in the number of online contact forms being filled out and returned to us. 
             Matt and his team worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective. Thanks to D-Grow for all of your hard work and support! "


            </h3>
            <p style={{ fontSize: "20px",fontWeight: "bold", }} className="dark-bleu">
              Mohamed.L{" "}
            </p>
          </Carousel.Caption>
          <img
            className="d-block w-100 "
            src={background2}
            alt="First slide"
            style={{ height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={background2}
            alt="Second slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption
            style={{ color: "#213764", paddingBottom: "180px" }}
          >
            <h3
              className="dark-bleu"
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              Unlocking Your Online Potential{" "}
            </h3>
            <p style={{ fontSize: "30px" }}>
              Let Us Build Your Digital Empire, One Click at a Time!{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={background2}
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption
            style={{ color: "#213764", paddingBottom: "180px" }}
          >
            <h3
              className="dark-bleu"
              style={{
                fontSize: "55px",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              Crafting Seamless User Experiences
            </h3>
            <p style={{ fontSize: "30px" }}>
              {" "}
              Elevate Your Brand with Cutting-Edge Web and Mobile Solutions!"{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</section>



    </div>
  );
}

export default Home;
