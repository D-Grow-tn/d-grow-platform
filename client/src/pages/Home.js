import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import development from "../constants/development.json";
import dev from "../constants/dev.json";
import plan from "../constants/plan.json";
import ListGroup from "react-bootstrap/ListGroup";
import DisplayLottie from "../constants/DisplayLottie";
import Card from "react-bootstrap/Card";
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
        "https://chrm.or.ke/assets/img/1579608618-Organizational-Development.jpeg",
      serv: "website service",
    },
    {
      image:
        "https://i.pinimg.com/564x/e8/2e/4f/e82e4f8aea93a0d318395a8a872b72fe.jpg",
      serv: "mobile application",
    },
    {
      image:
        "https://www.newsanyway.com/wp-content/uploads/2020/04/mobile-app-development-company-1024x918-1.png",
      serv: "mobile application",
    },
  ];

  const images = [
    "https://i.pinimg.com/564x/ab/3f/5a/ab3f5a328f0c37e7ae2287c8c66f6209.jpg",
    "https://www.newsanyway.com/wp-content/uploads/2020/04/mobile-app-development-company-1024x918-1.png",
    "https://example.com/slide3.jpg",
  ];

  return (
    <div className="bg-light">
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption style={{ paddingBottom: "80px" }}>
            <h3
              className="dark-bleu"
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              Transforming Ideas into Stunning Websites and Mobile Apps
            </h3>
            <p style={{ fontSize: "30px" }} className="dark-bleu">
              Unleash the Power of Digital Innovation!"{" "}
            </p>
          </Carousel.Caption>
          <img
            className="d-block w-100 "
            src="https://i.pinimg.com/564x/f1/2a/22/f12a222abac962182c5c0b9999a88fa2.jpg"
            alt="First slide"
            style={{ height: "500px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/564x/f1/2a/22/f12a222abac962182c5c0b9999a88fa2.jpg"
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
            src="https://i.pinimg.com/564x/f1/2a/22/f12a222abac962182c5c0b9999a88fa2.jpg"
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption
            style={{ color: "#213764", paddingBottom: "180px" }}
          >
            <h3
              className="dark-bleu"
              style={{
                fontSize: "50px",
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

      <section>
        {/* className=" d-flex mx-5 p-5 gap-5 justify-content-between align-items-center dark-bleu" */}
        {/* style={{ textAlign:"center" }}
      > */}
        <div className="container">
          <div className="row content">
            <div
              className="col-lg-6 pt-4 pt-lg-0 mt-5 dark-bleu"
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
      <section>
        <div className="container">
          <div className="row content">
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
      <div>
        <h1
          style={{
            fontWeight: "bold",
            color: "#213764",
            paddingTop: "100px",
            textAlign: "center",
          }}
        >
          Services
        </h1>
        {/* <Card  className="text-center " style={{backgroundColor: "rgb(218 234 240)" , borderRadius:"10px"}}
 >
        <div className=" d-flex  mx-5 p-5 justify-content-around align-items-center  "
        >
         
        {services.map((project, i) => (
                  <div className="   mt-3 " key={i}>
            <Card style={{ width: "18rem" }} className="shadow proCard">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.serv}</Card.Title> */}
        {/* <Card.Text>
              kljljljlj
                </Card.Text> */}
        {/* </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">More details</Card.Link>
                
              </Card.Body>
            </Card>
            </div> ))}
          </div>
         
           </Card>
        </div>
 */}

        <MDBRow className="row-cols-1 row-cols-md-3 g-4 px-5 mx-5">
          {services.map((project, i) => (
            <div className="   p-5 " key={i}>
              <MDBCol style={{ width: "300px" }} className="shadow proCard">
                <MDBCard>
                  <MDBCardImage
                    src={project.image}
                    alt="..."
                    position="top"
                    style={{ height: "200px" }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{project.serv}</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          ))}

          <button
            type="button"
            class="btn mt-5"
            style={{
              width: "170px",
              height: "40px",
              background: "#47bdea",
              color: "white",
              position: "relative",
              marginLeft: "80%",
            }}
            onClick={() => navigate("/services")}
          >
            See more <i class="fa-solid fa-play fa-fade px-2"></i>
          </button>
        </MDBRow>
      </div>
    </div>
  );
}

export default Home;
