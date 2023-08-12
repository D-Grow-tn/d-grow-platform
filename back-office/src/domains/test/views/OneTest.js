import React, { useEffect, useState } from "react";
import Form from "../../../components/Form";
import HeaderPage from "../../../components/HeaderPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest } from "../../../store/test";
import { useParams } from "react-router-dom";

function OneTest() {
  

  return (
    <div>
      <HeaderPage
        parent="HR"
      />
      
    </div>
  );
}

export default OneTest;
