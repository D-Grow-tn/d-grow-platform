import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import {
    Gantt,
    Task,
    EventOption,
    StylingOption,
    ViewMode,
    DisplayOption,
  } from "gantt-task-react";
function GanttSection() {
    const projectStore = useSelector((state) => state.projects);
    const { project } = projectStore;
  const [tasks, setTasks] = useState([]);


    useEffect(() => {
 
        if (project) {
        
          let auxTasks = [];
    
          project.objective.forEach((element) => {
            auxTasks.push({
              start: new Date(element.startAt),
              end: new Date(element.endAt),
              name: element.name,
              id: element.id,
              type: "project",
              progress: 0,
              hideChildren: true,
              styles: {
                progressColor: "#6dd0c5",
                progressSelectedColor: "#3ba395",
              },
              open: false,
        
              children: element.Stage,
              dependencies: [], // No dependencies
            });
          });
          setTasks(auxTasks);
        }
      }, [project]);






  return (
    <div
    className="mt-5 justify-content-center align-items-center px-3"
    id="tab2"
    style={{ maxWidth: "1200px" }}
  >
    {tasks.length ? (
      <Gantt
        listCellWidth="60px"
        tasks={tasks}
        onExpanderClick={(task) => {
          console.log(task);
          let newArray = [];
          let auxTasks = tasks.slice(); // copy of tasks

          if (task.open) {
            auxTasks[task.index].hideChildren = true;
            auxTasks.splice(task.index + 1, task.children.length);
          } else {
            auxTasks[task.index].hideChildren = false;
            newArray = task.children.map((elem) => {
              return {
                start: new Date(elem.startAt),
                end: new Date(elem.endAt),
                name: elem.name,
                id: elem.id,
                type: "task",
                progress: elem.porcentage,
                styles: {
                  progressColor: "#6dd0c5",
                  progressSelectedColor: "#3ba395",
                },
                project: task.id,
                dependencies: [elem.previousStageId], // No dependencies
              };
            });
            auxTasks.splice(task.index + 1, 0, ...newArray);
          }
          auxTasks[task.index].open = !auxTasks[task.index].open;
          console.log(auxTasks);

          setTasks(auxTasks);
        }}
      />
    ) : null}
  </div>
  )
}

export default GanttSection
