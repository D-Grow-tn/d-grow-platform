import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../configs";

function Tranings() {
    const [section1, setSection1] = useState(null);
    useEffect(() => {
        axios
          .get(`${config.API_ENDPOINT}/website-settings/by-title/TrainingsPage`)
          .then((res) => {
            setSection1(res.data?.SubComponent.find(elem=>elem.name==='section1'))
        
            console.log("section1111111111111", res.data);
          });
      }, []);
  return (
    <div>
      {/* PART 1 */}
      <div
        style={{
          width: "100%",
          height: "650px",
          backgroundImage: `url(${
            section1?.ContentSubComponent?.find(
              (elem) => elem.title === "image"
            )?.media?.path
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.8,
            borderBottom: "5px solid #42b1bb",
          }}
          className="bg-darkbleu"
        />
        <div>hello</div>
      </div>
    </div>
  );
}

export default Tranings;
