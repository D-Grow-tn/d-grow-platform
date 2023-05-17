import React, { useState } from "react";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { MySvgComponent } from "../components/Svg";
import { useParams } from "react-router-dom";
import projectData from "../constants/ProjectsData";
import TextHeader from "../components/TextHeader";
import "../assets/css/projectDetails.css"
function ProjectDetails() {
  const { projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(
    projectData[projectId]
  );
  console.log(selectedProject, "im project");
  let tasks = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];
  const [selectedDiv, setSelectedDiv] = useState(1);

  const handleClick = (divIndex) => {
    setSelectedDiv(divIndex);
  };

  const [selectedObjective, setSelectedObjective] = useState(null);

  const handleObjectiveClick = (index) => {
    setSelectedObjective(index);
  };
  return (
    <div>
      
      <div
        style={{  width: "100%", backgroundColor: "#ebedf5" }}
      >
       
          <TextHeader
            title={selectedProject.name}
            description={selectedProject.description}
          />
            {/* nav links */}


            <div
      className="d-flex justify-content-center mt-3"
      style={{ maxWidth: "1000px", margin: "0 auto" }}
    >
      <div style={{ flex: "1", textAlign: "center" }}>
        <div onClick={() => handleClick(1)}>
          <img
            src="https://tourduvalat.org/wp-content/uploads/2017/11/bullseye2-512.png"
            height="24"
            width="35"
          />
          <div>Objectifs</div>
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: selectedDiv === 1 ? "blue" : "#C1D9D8",
          }}
          className="mt-2"
        ></div>
      </div>

      <div style={{ flex: "1", textAlign: "center" }}>
        <div onClick={() => handleClick(2)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5639/5639804.png"
            height="24"
            width="35"
          />
          <div>Diagram de gantt</div>
       
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: selectedDiv === 2 ? "green" : "#C1D9D8",
          }}
          className="mt-2"
        ></div>
      </div>

      <div style={{ flex: "1", textAlign: "center" }}>
        <div onClick={() => handleClick(3)}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4059/4059783.png"
            height="24"
            width="35"
          />
          <div>Team</div>

        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: selectedDiv === 3 ? "blue" : "#C1D9D8",
          }}
          className="mt-2"
        ></div>
      </div>

      <div style={{ flex: "1", textAlign: "center" }}>
        <div onClick={() => handleClick(4)}>
          <img
            src="https://www.iconarchive.com/download/i86695/johanchalibert/mac-osx-yosemite/messages.1024.png"
            height="24"
            width="35"
          />
          <div>Interaction</div>
        </div>
        <div
          style={{
            height: "3px",
            backgroundColor: selectedDiv === 4 ? "purple" : "#C1D9D8",
          }}
          className="mt-2"
        ></div>
      </div>
    </div>
                                   {/* end */}
                                   <div className="d-flex">
      <div className="main-objectives">
        {selectedProject.objectives.map((objective, index) => (
          <div
            key={index}
            className={`objective ${selectedObjective === index ? "active" : ""}`}
            onClick={() => handleObjectiveClick(index)}
          >
            {objective.name}
          </div>
        ))}
      </div>
      <div className="sub-objectives">
        {selectedObjective !== null && (
          <ul>
            {selectedProject.objectives[selectedObjective].subobjects.map((subObjective, index) => (
              <li key={index}>{subObjective.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
      </div>
      <MySvgComponent />
      {/* <Gantt tasks={tasks} /> */}
    
    </div>
  );
}

export default ProjectDetails;
