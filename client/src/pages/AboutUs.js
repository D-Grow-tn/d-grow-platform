import React, { useRef, useState, useEffect } from "react";
import DisplayLottie from "../constants/DisplayLottie";
// import imgabout from "../constants/imgabout.json";
import config from "../configs";
import axios from "axios";
import Marquee from "react-fast-marquee";
import "../assets/css/aboutus.css";
import sliderPartners from "../components/aboutsliderdata.js";
import { useMediaQuery } from "react-responsive";

import {
  jalyss1,
  jalyss2,
  jalyss3,
  jalyss4,
  jalyss5,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  im9,
  im10,
  im11,
  im12,
  im13,
} from "../assets/img/images";

import Carousel from "react-bootstrap/Carousel";

function AboutUs() {
  const [section1p, setSection1p] = useState(null);
  const [section1I, setSection1I] = useState(null);
  const [section1b, setSection1b] = useState(null);
  const [section2p, setSection2p] = useState(null);
  const [section3, setSection3] = useState(null);
  const [section4, setSection4] = useState(null);
  const [section5, setSection5] = useState(null);
  useEffect(() => {
    axios
      .get(`${config.API_ENDPOINT}/website-settings/by-title/AboutPage`)
      .then((res) => {
        setSection1p(
          res.data?.SubComponent[0].ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
       
        );
        console.log("section1",res.data);
        setSection1I(
          res.data?.SubComponent[0].ContentSubComponent.filter(
            (elem) => elem.title === "image"
          )
        );

        setSection1b(
          res.data?.SubComponent[0].ContentSubComponent.filter(
            (elem) => elem.title === "button"
          )
        );

        setSection2p(
          res.data?.SubComponent[1].ContentSubComponent.filter((elem) => elem.title === "section2")
       
          );
          setSection3(
            res.data?.SubComponent[2].ContentSubComponent.filter((elem) => elem.title === "section3")
         
            );
          
            setSection4(
              res.data?.SubComponent[3].ContentSubComponent.filter((elem) => elem.title === "section4")
           
              );
              setSection5(
                res.data?.SubComponent[4].ContentSubComponent.filter((elem) => elem.title === "section5")
             
                )
        
          console.log("s3",res.data);
      });
    
  }, []);

  console.log("section5",section5);

  // Listen for Click -----------------------------------------------------------
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("slider-prev")) {
      togglePrevious();
      togglePreviousDesc();
      updatePrev();
    } else if (e.target.classList.contains("slider-next")) {
      toggleNext();
      toggleNextDesc();
      updateNext();
    }
  });

  // Rotate the Course Title -----------------------------------------------------------

  function togglePrevious() {
    const currentActive = document.querySelector("h3.active");
    const currentIndex = parseInt(currentActive.dataset.index);
    console.log(currentIndex);

    if (currentIndex - 1 >= 0) {
      const previousChild = document.querySelector(
        `[data-index="${currentIndex - 1}"]`
      );
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
    } else {
      const previousChild = document.querySelector(`[data-index="${4}"]`);
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
    }
  }

  function toggleNext() {
    const currentActive = document.querySelector("h3.active");
    const currentIndex = parseInt(currentActive.dataset.index);
    //console.log(currentIndex);

    if (currentIndex + 1 <= 4) {
      const nextChild = document.querySelector(
        `[data-index="${currentIndex + 1}"]`
      );
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
    } else {
      const nextChild = document.querySelector(`[data-index="${0}"]`);
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
    }
  }

  // Rotate the Course Description -----------------------------------------------------------

  function togglePreviousDesc() {
    const currentActive = document.querySelector("h2.active");
    const currentIndex = parseInt(currentActive.dataset.index);
    //console.log(currentIndex);

    if (currentIndex - 1 >= 10) {
      const previousChild = document.querySelector(
        `[data-index="${currentIndex - 1}"]`
      );
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
    } else {
      const previousChild = document.querySelector(`[data-index="${14}"]`);
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
    }
  }

  function toggleNextDesc() {
    const currentActive = document.querySelector("h2.active");
    const currentIndex = parseInt(currentActive.dataset.index);
    //console.log(currentIndex);

    if (currentIndex + 1 <= 14) {
      const nextChild = document.querySelector(
        `[data-index="${currentIndex + 1}"]`
      );
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
    } else {
      const nextChild = document.querySelector(`[data-index="${10}"]`);
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
    }
  }

  // Rotate the Course Images -----------------------------------------------------------

  function updateNext() {
    // Set the position of each item based on the current index
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      let position = parseInt(item.style.order);
      console.log(position);
      if (position + 1 <= 4) {
        position++;
        item.style.order = position;
        console.log(position);
      } else {
        item.style.order = 0;
        console.log(position);
      }
    });
    // Apply styles based on the position of each item
    items.forEach((item) => {
      let position2 = parseInt(item.style.order);
      if (position2 == 0) {
        item.classList.add("small1");
        item.classList.remove("small2");
      } else if (position2 == 1) {
        item.classList.add("big1");
        item.classList.remove("small1");
      } else if (position2 == 2) {
        item.classList.add("focus");
        item.classList.remove("big1");
      } else if (position2 == 3) {
        item.classList.add("big2");
        item.classList.remove("focus");
      } else if (position2 == 4) {
        item.classList.add("small2");
        item.classList.remove("big2");
      }
    });
  }

  function updatePrev() {
    // Set the position of each item based on the current index
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      let position = parseInt(item.style.order);
      console.log(position);
      if (position - 1 >= 0) {
        position--;
        item.style.order = position;
        console.log(position);
      } else {
        item.style.order = 4;
        console.log(position);
      }
    });
    // Apply styles based on the position of each item
    items.forEach((item) => {
      let position2 = parseInt(item.style.order);
      if (position2 == 0) {
        item.classList.add("small1");
        item.classList.remove("big1");
      } else if (position2 == 1) {
        item.classList.add("big1");
        item.classList.remove("focus");
      } else if (position2 == 2) {
        item.classList.add("focus");
        item.classList.remove("big2");
      } else if (position2 == 3) {
        item.classList.add("big2");
        item.classList.remove("small2");
      } else if (position2 == 4) {
        item.classList.add("small2");
        item.classList.remove("small1");
      }
    });
  }
  return (
    <div>
      <section>
        <div className="container " style={{ paddingTop: "-42px" }}>
          <div className="row content ">
            <div
              className="col-lg-6  pt-lg-0 
              mt-5  py-5 dark-bleu "
              style={{ textAlign: "center" }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  paddingBottom: "30px",
                }}
              >
                D-Grow
              </h2>
              {section1p?.map((elem, i) => (
                <p style={{ color: "#213764", textAlign: "center" }}>
                  {elem?.content}
                </p>
              ))}
              {section1b?.map((el, i) => (
                <a
                  type={el?.type}
                  class="btn mt-5"
                  style={{
                    width: "150px",
                    height: "40px",
                    background: "#00ac9e",
                    color: "white",
                  }}
                  href={el?.navigateTo}
                >
                  {el?.content}
                </a>
              ))}
            </div>
            <div className="col-lg-6 ">
              {/* {section1I?.map((e, i) => (
                <DisplayLottie
                  animationData={e?.content}
                  style={{ marginTop: "-90px" }}
                />
              ))} */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-header">
      <h3>| Our Clients </h3>
      
      {section2p?.map((el, i) => (
        <header >
            
            <p style={{ color: "#213764" }}>
              {el?.content}
              
            </p>
            
        </header>
      
        ))}

        <div className="home section-header">
          <div className="home-popular">
            <div className="slider">
              <div className="slider-prev " />
              
              {section2p?.map((el, i) => (
          <>
                {el?.subContent?.map((elem,j) => (
              
                 
              
              <ul key={j}>
              <li>
                <img className="item small1" style={{ order: 0 }} src={elem.src1} alt="" />
              </li>
              <li>
                <img className="item big1" style={{ order: 1 }} src={elem.src2} alt="" />
              </li>
              <li>
                <img className="item focus" style={{ order: 2 }} src={elem.src3} alt="" />
              </li>
              <li>
                <img className="item big2" style={{ order: 3 }} src={elem.src4} alt="" />
              </li>
              <li>
                <img className="item small2" style={{ order: 4 }} src={elem.src5} alt="" />
              </li>
            </ul>
               
                ))}
             </>
        ))}
              
              <div className="slider-next" />

            </div>
            
            <div className="description">
              <h3 data-index={4}></h3>
              <h3 data-index={3}></h3>
              <h3 data-index={2} className="active"></h3>
              <h3 data-index={1}></h3>
              <h3 data-index={0}></h3>
            </div>
            <div className="further-description">
              <h2 data-index={14}></h2>
              <h2 data-index={13}></h2>
              <h2 data-index={12} className="active"></h2>
              <h2 data-index={11}></h2>
              <h2 data-index={10}></h2>
            </div>
          </div>
          <div className="home-header"></div>
        </div>
       
    
      </section>
      <section>
  
        <header className="section-header" style={{ paddingBottom: "20px" }}>
          <h3> | Our Team </h3> 
          {section3?.map((el, k) => {
  return (
  
    <p style={{ color: "#213764" }}>
      {el?.content}
    </p>
     ) })}
        
        </header>
       
        {section3?.map((el, k) => {
  return (
    <>
        <Carousel className="d-flex">
          {!isMobile &&
            el?.subContent?.map((members) => {
              return (
                <Carousel.Item className="d-flex-nowrap">
                  <div className="container">
                    <div className="row row1">
                      {members?.map((m) => {
                        return (
                          <div className="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                            <div className="our-team">
                              <div className="picture">
                                <img className="img-fluid" src={m.image} />
                              </div>
                              <div className="team-content">
                                <h3 className="name">{m.name}</h3>
                                <h4 className="title">{m.role}</h4>
                              </div>
                              <ul className="social">
                                <li>
                                  <a
                                    href="https://codepen.io/collection/XdWJOQ/"
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    href="https://codepen.io/collection/XdWJOQ/"
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    href="https://codepen.io/collection/XdWJOQ/"
                                    className="fa fa-google-plus"
                                    aria-hidden="true"
                                  ></a>
                                </li>
                                <li>
                                  <a
                                    href="https://codepen.io/collection/XdWJOQ/"
                                    className="fa fa-linkedin"
                                    aria-hidden="true"
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}

          {isMobile &&
            el?.subContent?.flat().map((m) => {
              return (
                <Carousel.Item className="d-flex-nowrap">
                  <div className="container">
                    <div className="row row1">
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                        <div className="our-team">
                          <div className="picture">
                            <img className="img-fluid" src={m.image} />
                          </div>
                          <div className="team-content">
                            <h3 className="name">{m.name}</h3>
                            <h4 className="title">{m.role}</h4>
                          </div>
                          <ul className="social">
                            <li>
                              <a
                                href="https://codepen.io/collection/XdWJOQ/"
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></a>
                            </li>
                            <li>
                              <a
                                href="https://codepen.io/collection/XdWJOQ/"
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></a>
                            </li>
                            <li>
                              <a
                                href="https://codepen.io/collection/XdWJOQ/"
                                className="fa fa-google-plus"
                                aria-hidden="true"
                              ></a>
                            </li>
                            <li>
                              <a
                                href="https://codepen.io/collection/XdWJOQ/"
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
        </Carousel>
        </>
        );
          })}
      
   
    
          
      </section>

      <section className="services" id="services">
  <div className="container">
    <header className="section-header">
      <h3>| Our Websites</h3>
      {section4?.map((el, i) => {
        return <p key={i}>{el?.content}</p>;
      })}
    </header>
    {section4?.map((el, i) => {
      return (
        <div className="row" style={{ paddingLeft: "52px" }} key={i}>
          {el?.subContent?.map((elem, j) => {
            {console.log("elem",elem)}
            return (
              <React.Fragment key={j}>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-briefcase service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[0].name}</a>
                     
                    </h4>
                    <p className="description">{elem[0].description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-clipboard service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[1].name}</a>
                    </h4>
                    <p className="description">{elem[1].description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-chart-bar service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[2].name}</a>
                    </h4>
                    <p className="description">{elem[2].description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-binoculars service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[3].name}</a>
                    </h4>
                    <p className="description">{elem[3].description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-cog service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[4].name}</a>
                    </h4>
                    <p className="description">{elem[4].description}</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="box">
                    <div className="icon" style={{ background: "#fff" }}>
                      <i
                        className="fa fa-calendar-alt service-icon"
                        style={{ color: "#1A408C" }}
                      />
                    </div>
                    <h4 className="title">
                      <a href="">{elem[5].name}</a>
                    </h4>
                    <p className="description">{elem[5].description}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      );
    })}
  </div>
</section>


      <section className="aboutus" id="aboutus">
        <div className="container">
          <div className="row content">
            <div
              className="col-lg-6  mt-5 "
              style={{ paddingTop: "-30px", width: " 1320px" }}
            >
              <h2 style={{ color: "#213764", textAlign: "center" }}>D-Grow</h2>
              {section5?.map((el, i) => (
                
              <p style={{ color: "#213764", textAlign: "center" }}>
                {el?.content}
              </p>
              ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <Marquee autoFill={true}>
          <section>
            <div className="container">
              <ul className="grid-list d-flex">
                {sliderPartners[0].map((image, index) => (
                  <div key={index} className="cardy category-card">
                    <div className="card-icon">
                      <img
                        src={image}
                        width="150px"
                        height="230px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </Marquee>
        <div style={{ marginTop: "-50px" }}>
          <Marquee direction="right" autoFill="true">
            <section>
              <div className="container">
                <ul className="grid-list d-flex">
                  {sliderPartners[1].map((image, index) => (
                    <div key={index} className="cardy category-card">
                      <div className="card-icon">
                        <img
                          src={image}
                          width="150px"
                          height="230px"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </section>
          </Marquee>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
