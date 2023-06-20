import React, { useRef } from "react";
import DisplayLottie from "../constants/DisplayLottie";
import imgabout from "../constants/imgabout.json";

import Marquee from "react-fast-marquee";
import "../assets/css/aboutus.css";
import sliderPartners from "../components/aboutsliderdata.js";
import { useMediaQuery } from 'react-responsive'


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
  // Listen for Click -----------------------------------------------------------
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const membersLists = [
    [
      {
        name: "Olive Yew",
        image: member1,
        role: "Web Developer",
      },
      {
        name: "Olive Tree",
        image: member2,
        role: "Backend Developer",
      },
      {
        name: "Maureen Biologist",
        image: member3,
        role: "Web Desginer",
      },
      {
        name: "Lynn O’Leeum",
        image: member4,
        role: "Product Manager",
      },
    ],
    [
      {
        name: "Simon Sais",
        image: member5,
        role: "Web Developer",
      },
      {
        name: "Audie Yose",
        image: member6,
        role: "UX Developer",
      },
      {
        name: "Anita Bath",
        image: member7,
        role: "Comunity Manager",
      },
      {
        name: "Stan Dupp",
        image: member8,
        role: "Web Developer",
      },
    ]

  ];

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
     <section >
      <div className="container " style={{paddingTop:"-42px"}}>
          <div className="row content ">
            <div
              className="col-lg-6  pt-lg-0 
              mt-5  py-5 dark-bleu "
              style={{ textAlign: "center" }}
            >
              <h2  style={{
                  fontWeight: "bold",
                  paddingBottom: "30px",
                }}>D-Grow</h2>
              <p style={{ color: "#213764", textAlign: "center" }}>
                D-Grow, an industry-leading provider of innovative digital
                solutions, stands at the forefront of revolutionizing the way
                businesses interact with the digital world. 
                With our unwavering commitment to excellence, we specialize in
                crafting exceptional websites and mobile applications that
                redefine user experiences.
              </p>
              <a
           
                type="button"
                class="btn mt-5"
                style={{
                  width: "150px",
                  height: "40px",
                  background: "#00ac9e",
                  color: "white",
                }}

               
                href="#aboutus"
              >
                
                show more
             
              </a>
            </div>
            <div className="col-lg-6 ">
              <DisplayLottie animationData={imgabout}  style={{marginTop:"-90px"}}/>
            </div>
          </div>
        </div>
      </section>
      <section className="section-header">
        <header className="section-header" style={{ height: "150px" }}>
          <h3>| Our Clients </h3>
          <p style={{ color: "#213764" }}>
            We work with business owners across all industries in all cities. We
            love meeting (in-person or virtually) with each of our clients to
            discover who they are, what they do, and why they shine.
            <br />
            <br />
            By choosing D-Grow as your digital partner, you can establish a
            strong online presence and unlock the full potential of the digital
            realm. Join us on this transformative journey, where innovation
            meets elegance and technology merges with imagination. Together, we
            will pave the way for your digital success. Our clients include:
            <h3>JALYSS.COM</h3>
          </p>
        </header>
        <div className="home section-header" style={{ height: "500px" }}>
          <div className="home-popular">
            <div className="slider">
              <div className="slider-prev " />
              <ul>
                <li>
                  <img
                    className="item small1"
                    style={{ order: 0 }}
                    src={jalyss1}
                  />
                </li>
                <li>
                  <img
                    className="item big1"
                    style={{ order: 1 }}
                    src={jalyss2}
                  />
                </li>
                <li>
                  <img
                    className="item focus"
                    style={{ order: 2 }}
                    src={jalyss3}
                  />
                </li>
                <li>
                  <img
                    className="item big2"
                    style={{ order: 3 }}
                    src={jalyss4}
                  />
                </li>
                <li>
                  <img
                    className="item small2"
                    style={{ order: 4 }}
                    src={jalyss5}
                  />
                </li>
              </ul>
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

      <header className="section-header" style={{ paddingBottom: "20px" }}>
        <h3> | Our Team </h3>
        <p style={{ color: "#213764" }}>
          Our team consists of a group of highly skilled professionals who are
          passionate about leveraging the power of technology to create digital
          solutions that propel businesses to new heights. Drawing from our
          extensive industry expertise and a deep understanding of the
          ever-evolving digital landscape, we are dedicated to delivering
          solutions that exceed expectations.
        </p>
      </header>

      <Carousel className="d-flex">
        {!isMobile && membersLists?.map((members) => {
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

        {isMobile && membersLists?.flat().map((m) => {
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

      <section className="services " id="services">
        <div className="container">
          <header className="section-header">
            <h3>| Our Websites</h3>
            <p>
              At D-Grow, we offer comprehensive digital strategy consulting
              services. Our experts develop customized strategies aligned with
              your goals, leveraging the latest trends and technologies. We
              provide valuable insights through market analysis, consumer
              behavior, and competitor landscapes. Our commitment to excellence
              ensures high-quality solutions from concept to execution,
              exceeding your expectations.
            </p>
          </header>
          <div className="row" style={{ paddingLeft: "52px" }}>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="icon" style={{ background: "#fff" }}>
                  <i
                    className="fa fa-briefcase service-icon"
                    style={{ color: "#1A408C" }}
                  />
                </div>
                <h4 className="title">
                  <a href="">Full Control</a>
                </h4>
                <p className="description">
                  You can make changes anytime, anywhere.
                </p>
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
                  <a href="">Mobile Responsiveness</a>
                </h4>
                <p className="description">
                  Your website will look great on mobile, tablet, and desktop.
                </p>
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
                  <a href="">Gorgeous Design</a>
                </h4>
                <p className="description">
                  Beautiful, sleek design tailored to you and your business.
                </p>
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
                  <a href="">Friendly Support</a>
                </h4>
                <p className="description">
                  Our staff is always happy to help, even after your website has
                  been delivered!
                </p>
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
                  <a href="">Strategized Advertising</a>
                </h4>
                <p className="description">
                  Get your website featured on top searches to be chosen ahead
                  of competitors.
                </p>
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
                  <a href="">SEO</a>
                </h4>
                <p className="description">
                  Rank high on search engine results to increase your visitors –
                  and customers!
                </p>
              </div>
            </div>
          </div>
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
              <p style={{ color: "#213764", textAlign: "center" }}>
                D-Grow, an industry-leading provider of innovative digital
                solutions, stands at the forefront of revolutionizing the way
                businesses interact with the digital world. With our unwavering
                commitment to excellence, we specialize in crafting exceptional
                websites and mobile applications that redefine user experiences.
                <br />
                When it comes to mobile application development, we pride
                ourselves on our ability to transform ideas into captivating and
                feature-rich applications. Whether it's creating a user-friendly
                interface, implementing complex functionalities, or optimizing
                performance across various devices, our team excels in crafting
                mobile applications that stand out from the competition In the
                realm of web development, we strive to build websites that leave
                a lasting impression. We go beyond just aesthetics and focus on
                developing websites that seamlessly blend visual appeal with
                intuitive navigation and robust functionality. Our approach
                ensures that every website we create not only captures attention
                but also delivers a smooth and engaging user experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
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
      </div>
    </div>
  );
}

export default AboutUs;
