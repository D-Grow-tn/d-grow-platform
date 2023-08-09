import React from "react";
import HeaderPage from "../../../components/HeaderPage";

import { useNavigate } from "react-router-dom";

function TestList() {

  const navigate = useNavigate();

  return (
    <div>
      <HeaderPage
        title="Tests List"
        parent="HR"
      />

      {/* <Table columns={columns} rows={rows} />
      {isOpen && <EditTest EditTest={Tests} />} */}
    </div>
  );
}

export default TestList;
