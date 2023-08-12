import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dev from "../constants/dev.json";
import plan from "../constants/plan.json";
import { back1 } from "../assets/img/images";
import Marquee from "react-fast-marquee";
import sliderPartners from "../components/aboutsliderdata.js";
import DisplayLottie from "../constants/DisplayLottie";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import config from "../configs";
import { fetchProduct } from "../store/products";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.products.items);
  const displayservices = services.slice(0, 3);
  const [section1, setSection1] = useState({});
  const [section2, setSection2] = useState({});
  const [section2Animation, setSection2Animation] = useState(null);
  const [titleSection2, setTitleSection2] = useState([]);
  const [pgrSection2, setPrgSection2] = useState([]);
  const [buttonSection2, setbuttonSection2] = useState(null);
  const [titleSection3, setTitleSection3] = useState([]);
  const [pgrSection3, setPrgSection3] = useState([]);
  const [titleSection4, setTitleSection4] = useState([]);
  const [pgrSection4, setPrgSection4] = useState([]);
  const [buttonSection4, setbuttonSection4] = useState(null);
  const [titleSection5, setTitleSection5] = useState([]);
  const [pgrSection5, setPrgSection5] = useState([]);
  const [buttonSection5, setbuttonSection5] = useState(null);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  useEffect(() => {
    let path = section2?.ContentSubComponent?.find(
      (elem) => elem.type === "image"
    )?.media?.path;
    if (path) {
      console.log(path);

      axios.get(path).then((res) => {
        console.log(res);
        setSection2Animation(res.data);
      });
    }
  }, [
    section2?.ContentSubComponent?.find((elem) => elem.type === "image")?.media
      ?.path,
  ]);

  // const services = [
  //   {
  //     image:
  //       "https://i.pinimg.com/564x/c9/6a/fe/c96afee943781f42644179c9eca4e3c5.jpg",
  //     serv: "             Web Front-End SOLUTIONS       ",
  //     descp:"How design is implemented on the web."
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/564x/e8/2e/4f/e82e4f8aea93a0d318395a8a872b72fe.jpg",
  //     serv: "          UX/UI       WEBsite AND   MOBILE app       ",
  //     descp:"User Interface and User Experience Design."
  //   },
  //   {
  //     image:
  //       "https://www.newsanyway.com/wp-content/uploads/2020/04/mobile-app-development-company-1024x918-1.png",
  //     serv: "       BRANDING       AND CORPORATE     DESIGN          ",
  //     descp:"Visual communication and problem-solving"
  //   },
  // ];

  useEffect(() => {
    axios
      .get(`${config.API_ENDPOINT}/website-settings/by-title/HomePage`)
      .then((res) => {
        setSection1(
          res.data?.SubComponent?.find((elem) => elem.name === "section1")
        );
        setSection2(
          res.data?.SubComponent?.find((elem) => elem.name === "section2")
        );
        setTitleSection2(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setPrgSection2(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
        );
        setbuttonSection2(
          res.data?.SubComponent[1]?.ContentSubComponent.filter(
            (elem) => elem.title === "button"
          )
        );
        setTitleSection3(
          res.data?.SubComponent[2]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setPrgSection3(
          res.data?.SubComponent[2]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph" && elem.nexts?.length
          )
        );
        setTitleSection5(
          res.data?.SubComponent[4]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setPrgSection5(
          res.data?.SubComponent[4]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
        );
        setbuttonSection5(
          res.data?.SubComponent[4]?.ContentSubComponent.filter(
            (elem) => elem.title === "button"
          )
        );
      });
  }, []);
  console.log(
    section1?.ContentSubComponent?.find((elem) => elem.title === "background")
      ?.navigateTo,
    "loggg"
  );
  return (
    <div className="bg-light">
      {/* PART 1 */}

      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${
            section1?.ContentSubComponent?.find(
              (elem) => elem.title === "background"
            )?.media?.path
          })`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          position: "relative",
        }}
      >
        <div id="container">
          <dl>
            <dt>1</dt>
            <dd>
              Unleash your potential with our empowering digital services !
            </dd>
            <dt>2</dt>
            <dd>
              Ignite your success with captivating websites and apps that engage
              and convert!
            </dd>
            <dt>3</dt>
            <dd>
              Streamline operations and boost productivity with our custom
              digital solutions!
            </dd>
            <dt>4</dt>
            <dd>
              Propel your business forward with tailored strategies that drive
              growth!
            </dd>
            <dt>5</dt>
            <dd>
              Reach customers on the go with mobile-optimized experiences that
              drive engagement.
            </dd>
            <dt>6</dt>
            <dd>
              Stand out and make a lasting impression with our visually stunning
              digital solutions.
            </dd>
            <dt>7</dt>
            <dd>
              Experience the added value of our solutions and elevate your
              business to new heights.
            </dd>
            <dt>8</dt>
            <dd>
              Delight your customers with seamless and intuitive experiences
              that prioritize their needs!
            </dd>
            <dt>9</dt>
            <dd>
              Stay ahead of the curve with cutting-edge technologies that
              future-proof your business!
            </dd>
          </dl>
        </div>
      </div>

      {/* PART 2 */}
      <section>
        {/* className=" d-flex mx-5 p-5 gap-5 justify-content-between align-items-center dark-bleu" */}
        {/* style={{ textAlign:"center" }}
      > */}
        <div className="container " style={{ paddingTop: "150px" }}>
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
                {titleSection2?.map((e) => e?.content[0])}{" "}
                <spann style={{ color: "#00ac9e" }}>
                  {titleSection2?.map((e) => e?.content[2])}
                </spann>{" "}
                {titleSection2?.map((e) => e?.content[2])}
              </h2>

              <h4>
                {pgrSection2?.map((e) => e?.content)} <br />{" "}
              </h4>

              <p>
                {" "}
                we pride ourselves on delivering high-quality solutions that
                combine cutting-edge technology, aesthetic design, and
                user-centric functionality.
              </p>
              {buttonSection2?.map((el, i) => (
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
                  {el?.content} <i class="fa-solid fa-play fa-fade px-2"></i>
                </a>
              ))}
            </div>

            <div className="col-lg-6 ">
              {section2Animation && (
                <DisplayLottie
                  animationData={section2Animation}
                  style={{ width: "500px" }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS REVIEWS */}
      <section className="back">
        <h1
          // className="dark-bleu"
          style={{
            fontSize: "45px",
            fontWeight: "bold",
            paddingTop: "40px",
            textAlign: "center",
            color: "#00ac9e",
          }}
        >
          {titleSection3?.map((e) => e?.content)}
        </h1>
        <Carousel variant="dark ">
          {pgrSection3?.map((e, i) => (
            <Carousel.Item key={i} style={{ height: "500px" }}>
              <Carousel.Caption style={{ paddingBottom: "120px" }}>
                <h3 className="dark-bleu">{e?.content}</h3>
                <p
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  className="dark-bleu"
                >
                  {e?.nexts?.find((el) => el.title === "paragraph")?.content}
                </p>
              </Carousel.Caption>
              {/* <img
              className="d-block w-100 "
              src={back1}
              alt="First slide"
              style={{ height: "500px" }}
            /> */}
            </Carousel.Item>
          ))}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={back1}
              alt="Second slide"
              style={{ height: "500px" }}
            />

            <Carousel.Caption style={{ paddingBottom: "130px" }}>
              {" "}
              <h3 className="dark-bleu">
                "It is a distinct pleasure for me to recommend D-Grow to any and
                all interested parties. They have been professional,
                comprehensive and competent throughout the process of our
                working together. We feel that we have established a
                relationship with them for years to come. The reaction to our
                new web site has been overwhelmingly positive."
              </h3>
              <p
                style={{ fontSize: "20px", fontWeight: "bold" }}
                className="dark-bleu"
              >
                Majdi.G{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={back1}
              alt="Second slide"
              style={{ height: "500px" }}
            />

            <Carousel.Caption style={{ paddingBottom: "130px" }}>
              {" "}
              <h3 className="dark-bleu">
                "Compared to the other companies we have used in the past,
                D-Grow has been far and above the best in every area. While
                building our new web site, the customer service has been prompt
                and straightforward and the actual services are well documented
                and logical to our needs."
              </h3>
              <p
                style={{ fontSize: "20px", fontWeight: "bold" }}
                className="dark-bleu"
              >
                Salma.N{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </section>
      {/* SERVICES */}
      <section className="mt-5 back2">
        <div
          style={{
            color: "#1a408c",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1 style={{ color: "#00ac9e", fontWeight: "bold" }}>
            {" "}
            {titleSection4?.map((e) => e?.content)}
          </h1>

          <p style={{ paddingTop: "20px", fontSize: "20px" }}>
            {pgrSection4?.map((e) => e?.content)}
          </p>
        </div>
        <div className="d-flex flex-wrap py-2 gap-5 justify-content-center">
          {displayservices.map((project, i) => (
            <div className="card-hover" key={i} style={{ width: "350px" }}>
              <div className="card-hover__content">
                <h3
                  className="card-hover__title"
                  style={{ fontWeight: "bold", color: "#1a408c" }}
                >
                  {project.name}
                </h3>
                <p className="card-hover__text">{project.content}</p>
                <a href="" className="card-hover__link">
                  <span onClick={() => navigate(`/applications/${project.id}`)}>
                    Learn more
                  </span>
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
            </div>
          ))}
        </div>
        {buttonSection4?.map((el, i) => (
          <a
            type={el?.type}
            class="btn mt-5"
            style={{
              width: "150px",
              height: "40px",
              background: "#00ac9e",
              color: "white",
              marginLeft: "79%",
            }}
            href={el?.navigateTo}
          >
            {el?.content} <i class="fa-solid fa-play fa-fade px-2"></i>
          </a>
        ))}
      </section>

      {/* Contact */}
      <section className="back py-">
        <div className="container">
          <div className="row content ">
            <div className="col-lg-5 ">
              <DisplayLottie animationData={dev} />
            </div>
            <div
              className="col-lg-6 p-5 mt-5  dark-bleu"
              style={{ textAlign: "center" }}
            >
              <div style={{ paddingTop: "60px" }}>
                <h2
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {titleSection5?.map((e) => e?.content)}
                  Elevate your{" "}
                  <spann style={{ color: "#00ac9e" }}>Digital</spann> Presence
                </h2>

                <p style={{ paddingTop: "20px" }}>
                  {pgrSection5?.map((e) => e?.content)}

                  {/* Contact us today to unlock the full potential of your
                <br /> business with our expert web and mobile development
                services. */}
                </p>
                {buttonSection5?.map((el, i) => (
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
                    {el?.content} <i class="fa-solid fa-play fa-fade px-2"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h3
          style={{
            color: "#1a408c",
            textAlign: "center",
            marginTop: "40px",
            fontWeight: "bold",
            paddingTop: "20px",
          }}
        >
          {" "}
          We have established strong{" "}
          <span style={{ color: "#00ac9e" }}>Partnerships</span> with renowned
          global brands, earning their trust.
        </h3>
        <Marquee autoFill={true}>
          <section>
            <div className="container-marquee">
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
        <div style={{ marginTop: "-90px" }}>
          <Marquee direction="right" autoFill="true">
            <section>
              <div className="container-marquee">
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
      </section>
    </div>
  );
}

export default Home;
