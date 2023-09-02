import React, { useEffect, useState } from "react";
import List from "../components/List";
import "../../../assets/styles/weekly sprint.css";
import { useDispatch, useSelector } from "react-redux";
import stage, { createStage, fetchStages } from "../../../store/stage";
import { useNavigate, useParams, useHistory } from "react-router-dom";
import { fetchProject } from "../../../store/projects";
import { format, addDays } from "date-fns";
import { fetchObjectives } from "../../../store/objective";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import AddButton from "../../../components/button/AddButton";
import TextInput from "../../../components/TextInput";
import ArchivedStages from "../components/ArchivedStages";
import { BsPen, BsPlusLg } from "react-icons/bs";

import {
  Card,
  CardContent,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "../../../assets/styles/weekly sprint.css";
const WeeklySprints = () => {
  const Sprints = ["Sprint 1", "Sprint 2", "Sprint 3"];
  const project = useSelector((state) => state.project);
  const [show, setShow] = useState(true);
  const { projectId, objectiveId } = useParams();
  const [newStageTitle, setNewStageTitle] = useState("");
  // const [sprints, setSprints] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const objective = useSelector((state) => state.objectives);
  const [archivedStages, setArchivedStages] = useState([]);
  const [stagesState, setStagesState] = useState({});
  const stages = useSelector((state) => state.stage.stages.items);
  const [auxStage, setAuxStage] = useState(stages);
  console.log("frome weekly", stages);
  useEffect(() => {
    dispatch(fetchProject(projectId));
    dispatch(fetchObjectives(projectId));
    dispatch(fetchStages(objectiveId)); // Fetch stages for the current week

    // ...
  }, [dispatch, projectId]);

  const handleArchive = (stage) => {
    setArchivedStages((prevArchivedStages) => [
      ...prevArchivedStages,
      stage.id,
    ]);
    setStagesState((prevState) => ({
      ...prevState,
      [stage.id]: false, // Hide the specific List component
    }));
    navigate("archived-stages");
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (newStageTitle.trim() === "") {
      return; // Don't proceed if the stage title is empty
    }

    try {
      const stageData = {
        name: newStageTitle,
      };

      const res = await dispatch(createStage(stageData));

      if (!res.error) {
        showSuccessToast("Create stage successfully");
        setAuxStage([auxStage, stageData]);
      } else {
        showErrorToast(res.error.message);
      }
    } catch (error) {
      showErrorToast("An error occurred");
    }
  };

  const open = () => {
    console.log("open");
  };

  return (
    <div>
      <div className="board d-flex flex-wrap sprintStage">
        {Sprints.map((sprint, subIndex) => (
          <div key={subIndex}>
            {stagesState[stage.id] !== false && (
              <List
                title={sprint}
                id={sprint.id}
                sprints={Sprints}
                index={subIndex}
                show={stagesState[stage.id] !== false} // Pass the individual show state as a prop
                onArchive={() => handleArchive(stage)} // Pass the function to update the show state
              />
            )}
          </div>
        ))}
        {/* <List
            title= // Change to a static title

sprints={stages} // Assuming stages is your array of stages
            />
            */}
        {/* {archivedStages.length > 0 && (
        <ArchivedStages archivedStages={archivedStages} stages={stages} />
      )} */}

        <div>
          <Card className="StageCard" style={{ borderRadius: "12px" }}>
            <CardContent style={{ backgroundColor: "#F1F2F4" }}>
              <Typography className="typTitle">Stages List</Typography>
              {stages.map((stage, subIndex) => (
                <a
                  key={subIndex}
                  className="d-flex flex-wrap linkstage justify-content-left"
                  style={{
                    marginBottom: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    font: "14px",
                    padding: "10px",
                  }}
                  onClick={open}
                >
                  <div className="d-flex justify-content-between align-items-center w-100 ">
                    {stage.name}

                    <BsPen className="EditStage" />
                  </div>
                </a>
              ))}
              <div className="add-Stage-container d-flex align-items-center">
                <BsPlusLg />

                <TextInput
                  type="text"
                  value={newStageTitle}
                  onChange={(e) => setNewStageTitle(e.target.value)}
                  placeholder="New Sprint"
                  width="100px"
                  style={{ margin: "0px" }}
                />
                <AddButton
                  onClick={onSubmit}
                  style={{ fontWeight: "bold", width: "50px" }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeeklySprints;
