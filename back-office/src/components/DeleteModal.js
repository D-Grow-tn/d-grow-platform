import React, { useRef, useEffect } from "react";

import Form from "./Form";

function DeleteModal({ close, title, width, height,fnDelete }) {
  const wrapperRef = useRef(null);
  const handleClickOutside = (event) => {
    if (!wrapperRef.current.contains(event.target)) {
      close();
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const buttons = [
    {
      category: "delete",
      name: "Delete",
      onClick:fnDelete,
      type:'button'
    },
    {
      category: "cancel",
      type: "button",
      name: "Cancel",
      onClick: close,
    },
  ];

  return (
    <div
      className=" w-100 h-100"
      style={{
        zIndex: 99,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.35)",
      }}
    >
      <div
        className="p-3 "
        style={{
          width: width,
          height: height,
          backgroundColor: "white",
          borderRadius: 10,
        }}
        ref={wrapperRef}
      >
        <p className="text-center">Are you sure you want delete ?</p>
        <Form
          inputsClassName="d-flex justify-content-between flex-wrap px-5 "
          buttons={buttons}
          buttonsClassName="d-flex justify-content-center align-items-end gap-3 p-3 "
          buttonsStyle={{ height: 80 }}
          title={title}
          titleClassName="text-center p-2"
        />
      </div>
    </div>
  );
}

export default DeleteModal;
