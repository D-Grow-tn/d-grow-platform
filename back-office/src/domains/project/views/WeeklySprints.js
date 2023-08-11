import React, { useEffect, useState } from "react";
import List from '../components/List';
import "../../../assets/styles/weekly sprint.css";
import { useDispatch, useSelector } from "react-redux";
import stage, { createStage, fetchStages} from "../../../store/stage";
import { useNavigate, useParams,useHistory } from "react-router-dom";
import { fetchProject } from "../../../store/projects";

import { fetchObjectives } from "../../../store/objective";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import AddButton from "../../../components/button/AddButton";
import TextInput from "../../../components/TextInput";
import ArchivedStages from "../components/ArchivedStages";


const WeeklySprints = () => {
  
  const project = useSelector((state) => state.project);
  const [show, setShow] = useState(true);
  const { projectId,objectiveId} = useParams();
  const [newStageTitle, setNewStageTitle] = useState('');
  const [sprints, setSprints] = useState([]);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const objective = useSelector((state) => state.objectives);
   const [archivedStages, setArchivedStages] = useState([]);
   const [stagesState, setStagesState] = useState({});
   const stages = useSelector((state) => state.stage.stages.items);
   const [auxStage, setAuxStage] = useState(stages);
   console.log("frome weekly",stages)
   useEffect(() => {
    dispatch(fetchProject(projectId))
    dispatch(fetchObjectives(projectId))
    dispatch(fetchStages(objectiveId))
   
    
   }, [dispatch, projectId, objectiveId])

  
   const handleArchive = (stage) => {
    setArchivedStages((prevArchivedStages) => [...prevArchivedStages, stage.id]);
    setStagesState((prevState) => ({
      ...prevState,
      [stage.id]: false, // Hide the specific List component

    }));
    navigate('archived-stages');
  };

   const onSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    if (newStageTitle.trim() === '') {
      return; // Don't proceed if the stage title is empty
    }
  
    try {
      const stageData = {
        name: newStageTitle,
      };
  
      const res = await dispatch(createStage({ id: objectiveId, body: stageData }));
  
      if (!res.error) {
        showSuccessToast('Create stage successfully');
        setAuxStage([auxStage,stageData])
      } else {
        showErrorToast(res.error.message);
      }
    } catch (error) {
      showErrorToast('An error occurred');
    }
  };
  

 

  return (
    <div className="board">


    {stages.map((stage, subIndex) => (
   <div key={subIndex}>
   {stagesState[stage.id] !== false && (
     <List
       title={stage.name}
       id={stage.id}
       sprints={stages}
       index={subIndex}
       show={stagesState[stage.id] !== false} // Pass the individual show state as a prop
       onArchive={() => handleArchive(stage)} // Pass the function to update the show state
     />
   )}
 </div>
))}

{/* {archivedStages.length > 0 && (
        <ArchivedStages archivedStages={archivedStages} stages={stages} />
      )} */}

      <div className="add-task-container">
        <TextInput
          type="text"
          value={newStageTitle}
          onChange={(e) => setNewStageTitle(e.target.value)}
          placeholder="New Sprint"
          width="200px"
          style={{margin:"0px"}}
        />
        <AddButton onClick={onSubmit} style={{ fontWeight: "bold", width: "90px"}}/>
      </div>
    </div>
  );
};

export default WeeklySprints;
