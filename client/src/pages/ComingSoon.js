import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import DisplayLottie from "../constants/DisplayLottie";
import comingsoon from "../constants/comingsoon.json";
import Contact from "./Contact";

function ComingSoon() {
  const datacount="2023/07/23"
  const [day, setDay] = useState("--");
  const [hour, setHour] = useState("--");
  const [minute, setMinute] = useState("--");
  const [second, setSecond] = useState("--");

  useEffect(() => {
    const interval = setInterval(countDownDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const countDownDate = function () {
    let timeleft = new Date(datacount).getTime() - new Date().getTime();

    setDay(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinute(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    setSecond(Math.floor((timeleft % (1000 * 60)) / 1000));
  };

  return (
    <div className="body dark-bleu">
      <section className="header">
      <div id="header" className="d-flex align-items-center ">
        <div className="container d-flex flex-column align-items-center dark-bleu">
          <h1>ComingSoon</h1>
          <h2>
            We're working hard to improve our website and we'll ready to launch
            after
          </h2>
          <div
            className="countdown d-flex justify-content-center "
            data-count="2023/12/5"
          >
            <div>
              <h3>{day}</h3>
              <h4>Days</h4>
            </div>
            <div>
              <h3>{hour}</h3>
              <h4>Hours</h4>
            </div>
            <div>
              <h3>{minute}</h3>
              <h4>Minutes</h4>
            </div>
            <div>
              <h3>{second}</h3>
              <h4>Seconds</h4>
            </div>
          </div>
        </div>
      </div>
      </section>
      <main id="main" style={{backgroundColor:"#f3fcf6"}}>
        {/* ======= About Us Section ======= */}
        <section id="about" className="about ">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6 pt-4 pt-lg-0 mt-5">
                <h2>D-Grow</h2>

                <p style={{ color: "#213764"}}>
                  D-Grow is a leading provider of innovative digital solutions,
                  specializing in the development of websites and mobile
                  applications. With a team of highly skilled professionals and
                  a wealth of industry expertise.
                </p>
                <ul style={{ color: "#213764"}}>
                  <li>
                    <i className="bi bi-check" />
                    Mobile Application Development{" "}
                  </li>
                  <li>
                    <i className="bi bi-check" />
                    Web Development{" "}
                  </li>
                  <li>
                    <i className="bi bi-check" /> Digital Strategy Consulting
                  </li>
                </ul>
                <p className="fst-italic" style={{ color: "#213764"}}>
                  we pride ourselves on delivering high-quality solutions that
                  combine cutting-edge technology, aesthetic design, and
                  user-centric functionality. We offer comprehensive services to
                  help businesses establish a strong online presence and drive
                  their success in the digital realm.
                </p>
              </div>
              <div className="col-lg-6 ">
                <DisplayLottie animationData={comingsoon} />
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Contact Us Section ======= */}
       <Contact/>
        {/* End Contact Us Section */}
      </main>
      {/* End #main */}
    </div>
  );
}

export default ComingSoon;
