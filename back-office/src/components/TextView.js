import React, { useEffect, useState } from "react";

function TextView({ value, label, width }) {
  const [widthlabel, setWidthlabel] = useState(50);
  useEffect(() => {
    let aux = document.getElementById("label")?.offsetWidth;
    if (aux) {
      setWidthlabel(aux);
    }
  }, [document.getElementById("label")?.offsetWidth]);

  return (
    <div
      style={{
        height: 55,
        width: width ? width : 250,
        border: "1px solid #b2b9bc",
        borderRadius: 8,
      }}
      className="bgLightBlue align-items-center d-flex px-3 position-relative textView"
    >
      <div
        className="position-absolute bgLightBlue"
        style={{
          top: -1,
          left: 10,
          fontSize: 12,
          width: widthlabel + 20,
          height: 10,
        }}
      ></div>
      <label
        id="label"
        className="position-absolute"
        style={{ top: -11, left: 15, fontSize: 12, color: "#5d6062" }}
      >
        {label}
      </label>

      <p className="m-0">{value}</p>
    </div>
  );
}

export default TextView;
