import React from "react";

function TextHoverUnderline({
  width,
  height,
  color,
  bgColor,
  duration,
  content,
  type,
  fontSize,
}) {
  let style = {
    width: width ? width : "",
    height: height ? height : "",
    color: color ? color : "",
    backgroundColor: bgColor ? bgColor : "",
  };
  return (
    <div
      className="hover-underline-transition pointer d-flex justify-content-center align-items-center"
      style={{ width: width, position: "relative" }}
    >
      <h6 className="m-2" style={{fontSize}}>{content}</h6>
      <div
        className="hover-underline-transition-line"
        style={
          duration
            ? { transition: `width ${duration}ms ${type}`, ...style }
            : style
        }
      />
    </div>
  );
}

export default TextHoverUnderline;
