import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function WeeklySprints() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  return (
    <div>
      WeeklySprints
      <button
        type="button"
        class="btn"
        onClick={() => navigate(`/project/one/${projectId}/current-sprint`)}
        style={{ backgroundColor: "#1a408c", color: "#fff" }}
      >
        Current Sprint
      </button>
    </div>
  );
}

export default WeeklySprints;
