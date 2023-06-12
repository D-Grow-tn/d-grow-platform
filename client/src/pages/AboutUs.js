import React, { useRef } from "react";
import DisplayLottie from "../constants/DisplayLottie";
import imgabout from "../constants/imgabout.json";

import Marquee from "react-fast-marquee";
import "../assets/css/aboutus.css";

import{home, jalyss1, jalyss2, jalyss3, jalyss4, jalyss5} from "../assets/img/images"


import Carousel from "react-bootstrap/Carousel";
function AboutUs() {


  const sectionRef = useRef(null);

  const handleSeeMoreClick = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  // Listen for Click -----------------------------------------------------------

document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("slider-prev")){
      togglePrevious();
      togglePreviousDesc();
      updatePrev();
  }
  else if(e.target.classList.contains("slider-next")){
      toggleNext();
      toggleNextDesc();
      updateNext();
  }
})



// Rotate the Course Title -----------------------------------------------------------

function togglePrevious(){
  const currentActive = document.querySelector("h3.active");
  const currentIndex = parseInt(currentActive.dataset.index);
  //console.log(currentIndex);

  if(currentIndex - 1 >= 0){
      const previousChild = document.querySelector(`[data-index="${currentIndex-1}"]`);
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
  }
  else{
      const previousChild = document.querySelector(`[data-index="${4}"]`);
      //console.log(previousChild)
      currentActive.classList.remove("active");
      previousChild.classList.add("active");
  }
}


function toggleNext(){
  const currentActive = document.querySelector("h3.active");
  const currentIndex = parseInt(currentActive.dataset.index);
  //console.log(currentIndex);

  if(currentIndex + 1 <= 4){
      const nextChild = document.querySelector(`[data-index="${currentIndex+1}"]`);
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
  }
  else{
      const nextChild = document.querySelector(`[data-index="${0}"]`);
      //console.log(nextChild)
      currentActive.classList.remove("active");
      nextChild.classList.add("active");
  }
}



// Rotate the Course Description -----------------------------------------------------------

function togglePreviousDesc(){
const currentActive = document.querySelector("h2.active");
const currentIndex = parseInt(currentActive.dataset.index);
//console.log(currentIndex);

if(currentIndex - 1 >= 10){
    const previousChild = document.querySelector(`[data-index="${currentIndex-1}"]`);
    //console.log(previousChild)
    currentActive.classList.remove("active");
    previousChild.classList.add("active");
}
else{
    const previousChild = document.querySelector(`[data-index="${14}"]`);
    //console.log(previousChild)
    currentActive.classList.remove("active");
    previousChild.classList.add("active");
}
}


function toggleNextDesc(){
const currentActive = document.querySelector("h2.active");
const currentIndex = parseInt(currentActive.dataset.index);
//console.log(currentIndex);

if(currentIndex + 1 <= 14){
    const nextChild = document.querySelector(`[data-index="${currentIndex+1}"]`);
    //console.log(nextChild)
    currentActive.classList.remove("active");
    nextChild.classList.add("active");
}
else{
    const nextChild = document.querySelector(`[data-index="${10}"]`);
    //console.log(nextChild)
    currentActive.classList.remove("active");
    nextChild.classList.add("active");
}
}



// Rotate the Course Images -----------------------------------------------------------

function updateNext() {
  // Set the position of each item based on the current index
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    let position = parseInt(item.style.order);
    console.log(position);
    if (position + 1 <= 4){
      position ++;
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
    if (position2 === 0) {
      item.classList.add('small1');
      item.classList.remove('small2');
    } else if (position2 === 1) {
      item.classList.add('big1');
      item.classList.remove('small1');
    } else if (position2 === 2) {
      item.classList.add('focus');
      item.classList.remove('big1');
    } else if (position2 === 3) {
      item.classList.add('big2');
      item.classList.remove('focus');
    } else if (position2 === 4) {
      item.classList.add('small2');
      item.classList.remove('big2');
    }
  });
}

function updatePrev() {
  // Set the position of each item based on the current index
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    let position = parseInt(item.style.order);
    console.log(position);
    if (position - 1 >= 0){
      position --;
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
      item.classList.add('small1');
      item.classList.remove('big1');
    } else if (position2 == 1) {
      item.classList.add('big1');
      item.classList.remove('focus');
    } else if (position2 == 2) {
      item.classList.add('focus');
      item.classList.remove('big2');
    } else if (position2 == 3) {
      item.classList.add('big2');
      item.classList.remove('small2');
    } else if (position2 == 4) {
      item.classList.add('small2');
      item.classList.remove('small1');
    }
  });
}
  return (
    <div>
      <section style={{height:"530px"}}>
        <div className="container ">
          <div className="row content">
            <div className="col-lg-6  mt-5 ">
              <h2 style={{ color: "#213764", textAlign: "center" }}>D-Grow</h2>
              <p style={{ color: "#213764", textAlign: "center" }}>
                D-Grow, an industry-leading provider of innovative digital
                solutions, stands at the forefront of revolutionizing the way
                businesses interact with the digital world. 
                With our unwavering commitment to excellence, we specialize in
                crafting exceptional websites and mobile applications that
                redefine user experiences.
              </p>
              <button
                type="button"
                class="btn "
                style={{
                  width: "170px",
                  height: "40px",
                  marginLeft:"100px",
                  background: "#47bdea",
                  color: "white",
                }}

               
                onClick={handleSeeMoreClick}
              >
                show more
              </button>
            </div>
            <div className="col-lg-6 ">
              <DisplayLottie animationData={imgabout}  style={{marginTop:"-90px"}}/>
            </div>
          </div>
        </div>
      </section>
      <section className="section-header">
      <header className="section-header" style={{height:"150px"}}>
        <h3>| Our Clients </h3>
        <p style={{ color: "#213764" }}>
          We work with business owners across all industries in all cities. We
          love meeting (in-person or virtually) with each of our clients to
          discover who they are, what they do, and why they shine.
          <br />
          <br />
          By choosing D-Grow as your digital partner, you can establish a strong
          online presence and unlock the full potential of the digital realm.
          Join us on this transformative journey, where innovation meets
          elegance and technology merges with imagination. Together, we will
          pave the way for your digital success.
          Our clients include:<h3>JALYSS.COM</h3>
        </p>
        
      </header>
      <div className="home section-header" style={{height:"500px"}}>
  <div className="home-popular">
    
    <div className="slider">
      <div className="slider-prev "  />
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
      <h3 data-index={2} className="active">
        
      </h3>
      <h3 data-index={1}></h3>
      <h3 data-index={0}></h3>
    </div>
    <div className="further-description">
      <h2 data-index={14}>
     
      </h2>
      <h2 data-index={13}>
        
      </h2>
      <h2 data-index={12} className="active">
        
      </h2>
      <h2 data-index={11}>
       
      </h2>
      <h2 data-index={10}>
        
      </h2>
    </div>
  </div>
  <div className="home-header">
    
  </div>
</div>

      </section>
     

      <header className="section-header" style={{paddingBottom:"20px"}} >
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

      <Carousel>
        <Carousel.Item >
          <div class="container">
            <div class="row row1">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=1027"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Michele Miller</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=839"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Patricia Knott</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=856"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Justin Ramos</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=836"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Mary Huntley</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="container">
            <div class="row row1">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=1027"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Michele Miller</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=839"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Patricia Knott</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=856"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Justin Ramos</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=836"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Mary Huntley</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div class="container ">
            <div class="row row1" >
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=1027"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Michele Miller</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=839"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Patricia Knott</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=856"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Justin Ramos</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 cad">
                <div class="our-team">
                  <div class="picture">
                    <img
                      class="img-fluid"
                      src="https://picsum.photos/130/130?image=836"
                    />
                  </div>
                  <div class="team-content">
                    <h3 class="name">Mary Huntley</h3>
                    <h4 class="title">Web Developer</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>

          <a
              class="carousel-control-prev"
              role="button"
              tabindex="0"
              href="#"
             
            >
              <span
                aria-hidden="true"
                class="carousel-control-prev-icon"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>

            <a
              class="carousel-control-next"
              role="button"
              tabindex="0"
              href="#"
              
            >
              <span
                aria-hidden="true"
                class="carousel-control-next-icon"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
        </Carousel.Item>
        
      </Carousel>

      <section className="services " id="services">
        <div className="container">
          <header className="section-header">
            <h3>| Our Websites</h3>
            <p>
            At D-Grow, we offer comprehensive digital strategy consulting services. 
            Our experts develop customized strategies aligned with your goals, leveraging the latest trends and technologies.
             We provide valuable insights through market analysis, consumer behavior, and competitor landscapes.
             Our commitment to excellence ensures high-quality solutions from concept to execution, exceeding your expectations.
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

      <section className="aboutus " id="aboutus" ref={sectionRef}>
        <div className="container">
          <div className="row content">
         
            <div className="col-lg-6  mt-5 " style={{ paddingTop: "80px",width:" 1320px" }}>
              <h2 style={{ color: "#213764", textAlign: "center" }}>D-Grow</h2>
              <p style={{ color: "#213764", textAlign: "center" }}>
                D-Grow, an industry-leading provider of innovative digital
                solutions, stands at the forefront of revolutionizing the way
                businesses interact with the digital world. With our unwavering
                commitment to excellence, we specialize in crafting exceptional
                websites and mobile applications that redefine user experiences.
                <br/>
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
        <Marquee autoFill="true">
          <section>
            <div className="container ">
              <ul class="grid-list d-flex ">
                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(55deg, #8a2387 10%, #e94057 70%, #f27121 )",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://1.bp.blogspot.com/-R8Wg5OO4So4/XrM70ozuv-I/AAAAAAAAO_w/2KxGDI1x5YohE7sO_whvfKSI2jDlwjlGQCLcBGAsYHQ/s1600/%25D8%25A7%25D8%25AA%25D8%25B5%25D8%25A7%25D9%2584%25D8%25A7%25D8%25AA%2B%25D8%25AA%25D9%2588%25D9%2586%25D8%25B3.jpg"
                        width="150px"
                        height="100px"
                        loading="lazy"
                        alt="Music Production icon"
                      />
                    </div>
                  </div>
                </>

                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(55deg, #8a2387 10%, #e94057 70%, #f27121 )",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://1.bp.blogspot.com/-R8Wg5OO4So4/XrM70ozuv-I/AAAAAAAAO_w/2KxGDI1x5YohE7sO_whvfKSI2jDlwjlGQCLcBGAsYHQ/s1600/%25D8%25A7%25D8%25AA%25D8%25B5%25D8%25A7%25D9%2584%25D8%25A7%25D8%25AA%2B%25D8%25AA%25D9%2588%25D9%2586%25D8%25B3.jpg"
                        width="150px"
                        height="100px"
                        loading="lazy"
                        alt="Music Production icon"
                      />
                    </div>
                  </div>
                </>
                <>
                  <div
                    class="cardy category-card"
                    style={
                      {
                        // background: "linear-gradient(337deg, #654ea3, #da98b4)",
                      }
                    }
                  >
                    <div class="card-icon">
                      <img
                        src="https://www.tunisietravail.net/uploads/2017/05/fis.png"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>

                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://media.licdn.com/dms/image/C4E0BAQGe5a-VgEpAqA/company-logo_200_200/0/1519886650615?e=2147483647&v=beta&t=nNqtR2r6ML9nyTHpJ9UFR9bctVDU22Hm6_H15aA7Cx8"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>
                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://www.chercheinfo.com/uploads/0-2621bad1a2.jpg"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>
                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://pbs.twimg.com/profile_images/1197160347272126464/DEbkWAl2_400x400.jpg"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>
                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://tunisia.mom-gmr.org/typo3temp/_processed_/e/4/csm_133_import_d2de21d6cb.jpg"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>
                <>
                  <div
                    class="cardy category-card"
                    style={{
                      background:
                        "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                    }}
                  >
                    <div class="card-icon">
                      <img
                        src="https://static.goldenline.pl/firm_logo/014/firm_65038_856c4e_small200.jpg"
                        width="150px"
                        height="200px"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </>
              </ul>
            </div>
          </section>
        </Marquee>
        <div style={{ marginTop: "-50px" }}>
          <Marquee direction="right" autoFill="true">
            <ul class="grid-list d-flex ">
              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(55deg, #8a2387 10%, #e94057 70%, #f27121 )",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://www.sony.net/top/2017/img/icon/top-og.jpg"
                      width="150px"
                      height="100px"
                      loading="lazy"
                      alt="Music Production icon"
                    />
                  </div>
                </div>
              </>

              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(55deg, #8a2387 10%, #e94057 70%, #f27121 )",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://www.sony.net/top/2017/img/icon/top-og.jpg"
                      width="150px"
                      height="100px"
                      loading="lazy"
                      alt="Music Production icon"
                    />
                  </div>
                </div>
              </>

              <>
                <div
                  class="cardy category-card"
                  style={
                    {
                      // background: "linear-gradient(337deg, #654ea3, #da98b4)",
                    }
                  }
                >
                  <div class="card-icon">
                    <img
                      src="https://cdn.allotech-dz.com/wp-content/uploads/2018/10/ooredoo-logo-200x200.png"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>

              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://avatars.githubusercontent.com/u/18357950?s=200&v=4"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://www.embedded-france.org/wp-content/uploads/2018/06/Safran.jpg"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CdQzn0uGpBTrNerY-9DuiIaycYr8F5W7Og&usqp=CAU"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://tunisiefm.net/sites/default/files/styles/116_x_116/public/radio/logos/logo-mwzyk-fm.jpg?itok=3UrCjgiT"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  class="cardy category-card"
                  style={{
                    background:
                      "linear-gradient(354deg, #283593 10%, #1976d2 40%)",
                  }}
                >
                  <div class="card-icon">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvS-3FedVBbH_oYt8QclkZtDU4l-H1m3vLUmIAxj61r7RgWJnyZnSCxaSctZPNjLj2VCY&usqp=CAU"
                      width="150px"
                      height="200px"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </>
            </ul>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
