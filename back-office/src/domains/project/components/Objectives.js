import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import {  useNavigate} from "react-router-dom";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import tick from "../../../constants/tick.json";
import onHold from "../../../constants/onHold.json";
function Objectives() {
  const projectStore = useSelector((state) => state.project);
  const { project } = projectStore;
  const navigate =useNavigate()
  return (
    <div className=" mt-5 justify-content-center align-items-center gap-5 px-5 ">
      <MDBContainer style={{ maxWidth: "1000px" }}>
        <MDBAccordion alwaysOpen="true">
          {project?.objective.map((objective, index) => (
              
            <MDBAccordionItem
            // style={{}}
              key={index}
              collapseId={`collapse${index}`}
              headerTitle={
                <div className="d-flex align-items-center gap-3">
                  <div>{objective.name} <button onClick={()=>navigate(`weekly-sprints/${objective.id}`)}>WeeklySprints</button></div>
                 
                  <div>
                    {objective.status === "in_progress" ? (
                      <DisplayLottie
                        animationData={loading}
                        style={{ width: "35px", height: "35px" }}
                      />
                    ) : objective.status === "completed" ? (
                      <DisplayLottie
                        animationData={tick}
                        style={{ width: "35px", height: "35px" }}
                      />
                    ) : objective.status === "pending" ? (
                      <DisplayLottie
                        animationData={onHold}
                        style={{ width: "35px", height: "35px" }}
                      />
                    ) : null}
                  </div>
                </div>
              }
            >
              <ul>
                {objective?.subobjective.map((subObjective, subIndex) => (

                 <li
                    key={subIndex}
                    className= "d-flex align-items-center gap-3"
                  > 
                    <div>{subObjective.name}</div>
                    <div>
                      {subObjective.status === "in_progress" ? (
                        <DisplayLottie
                          animationData={loading}
                          style={{ width: "35px", height: "35px" }}
                        />
                      ) : subObjective.status === "completed" ? (
                        <DisplayLottie
                          animationData={tick}
                          style={{ width: "35px", height: "35px" }}
                        />
                      ) : subObjective.status === "pending" ? (
                        <DisplayLottie
                          animationData={onHold}
                          style={{ width: "35px", height: "35px" }}
                          className="mt-5"
                        />
                      ) : (
                        subObjective.status
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <ul>
                {objective?.Stage.map((Stage, subIndex) => (

                 <li
                    key={subIndex}
                    className= "d-flex align-items-center gap-3"
                  > 
                    <div>{Stage.name}</div>
                    <div> 
              {Stage?.task.map((task, subIndex) => (
                <div>{task.name}</div>
              ))}
               </div>
                  
                  </li>
                ))}
              </ul>
             
            </MDBAccordionItem>
          ))}

        </MDBAccordion>
      </MDBContainer>
    </div>
  );
}

export default Objectives;
