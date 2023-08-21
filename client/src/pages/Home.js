import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
  const [section5, setSection5] = useState({});
  const [pgrSection1, setPrgSection1] = useState([]);
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
  const [section5Animation, setSection5Animation] = useState(null);
  const [titleSection6, setTitleSection6] = useState([]);
  const [SliderSection6, setSliderSection6] = useState([]);
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
    let dev = section5?.ContentSubComponent?.find(
      (elem) => elem.type === "image"
    )?.media?.path;
    if (dev) {
      axios.get(dev).then((res) => {
        console.log(res);
        setSection5Animation(res.data);
      });
    }
  }, [
    section2?.ContentSubComponent?.find((elem) => elem.type === "image")?.media
      ?.path,
  ]);

  useEffect(() => {
    axios
      .get(`${config.API_ENDPOINT}/website-settings/by-title/HomePage`)
      .then((res) => {
        setSection1(
          res.data?.SubComponent?.find((elem) => elem.name === "section1")
        );

        setPrgSection1(
          res.data?.SubComponent[0]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
        );
        setPrgSection2(
          res.data?.SubComponent[0]?.ContentSubComponent.filter(
            (elem) => elem.title === "paragraph"
          )
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
        console.log("dataaaa", res.data.SubComponent);
        setTitleSection5(
          res.data?.SubComponent[4]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setSection5(
          res.data?.SubComponent?.find((elem) => elem.name === "section5")
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
        setTitleSection6(
          res.data?.SubComponent[5]?.ContentSubComponent.filter(
            (elem) => elem.title === "title"
          )
        );
        setSliderSection6(
          res.data?.SubComponent[5]?.ContentSubComponent.filter(
            (elem) => elem.title === "image"
          )
        );
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(
  //   section1?.ContentSubComponent?.find((elem) => elem.title === "background")
  //     ?.navigateTo,
  //   "loggg"
  // );
  console.log("section6", titleSection6[0]?.content);
  console.log("imageeeeeesection6", SliderSection6);

  //
  return (
    <div className="bg-light">
      {/* PART 1 */}

      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundImage: `url(${
            section1?.ContentSubComponent?.find(
              (elem) => elem.title === "image"
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
            <dt>{pgrSection1[0]?.content}</dt>
            <dd>{pgrSection1[0]?.content.nexts}</dd>
            <dt>{pgrSection1[1]?.content}</dt>
            <dd>{pgrSection1[1]?.content.nexts}</dd>
            <dt>{pgrSection1[2]?.content}</dt>
            <dd>{pgrSection1[2]?.content.nexts}</dd>
            <dt>{pgrSection1[3]?.content}</dt>
            <dd>{pgrSection1[3]?.content.nexts}</dd>
            <dt>{pgrSection1[4]?.content}</dt>
            <dd>{pgrSection1[4]?.content.nexts}</dd>
            <dt>{pgrSection1[5]?.content}</dt>
            <dd>{pgrSection1[5]?.content.nexts}</dd>
            <dt>{pgrSection1[6]?.content}</dt>
            <dd>{pgrSection1[6]?.content.nexts}</dd>
            <dt>{pgrSection1[7]?.content}</dt>
            <dd>{pgrSection1[7]?.content.nexts}</dd>
            <dt>{pgrSection1[8]?.content}</dt>
            <dd>{pgrSection1[8]?.content.nexts}</dd>
          </dl>

          {/* <dt>2</dt>
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
            </dd> */}
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
                {titleSection2[0]?.content}{" "}
                <spann style={{ color: "#00ac9e" }}>
                  {titleSection2[1]?.content}
                </spann>{" "}
                {titleSection2[2]?.content}
              </h2>

              <h4>
                {pgrSection2[0]?.content}
                <br />{" "}
              </h4>

              <p> {pgrSection2[1]?.content}</p>
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
            </Carousel.Item>
          ))}
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
              <DisplayLottie animationData={section5Animation} />
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
                  {titleSection5[0]?.content}
                  <spann style={{ color: "#00ac9e" }}>
                    {" "}
                    {titleSection5[1]?.content}
                  </spann>{" "}
                  {titleSection5[2]?.content}
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
          {titleSection6[0]?.content}
          <span style={{ color: "#00ac9e" }}>{titleSection6[1]?.content}</span>
          {titleSection6[2]?.content}
        </h3>

        <Marquee direction="right" autoFill="true">
          <section>
            <div className="container-marquee">
              <ul className="grid-list d-flex">
                {SliderSection6?.map((image, index) => (
                  <div key={index} className="cardy category-card">
                    <div className="card-icon">
                      <img
                        src={image?.navigateTo}
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
      </section>
    </div>
  );
}

export default Home;
