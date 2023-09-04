import React from 'react'

const ArchivedStages = ({ archivedStages, stages }) => {
    return (
      <div>
        <h2>Archived Stages</h2>
        {archivedStages.map((archivedStageId) => {
          const stage = stages.find((s) => s.id === archivedStageId);
          if (!stage) return null;
  
          return (
            <div key={archivedStageId}>
              {/* Render the archived stage */}
              {stage.name}
            </div>
          );
        })}
      </div>
    );
  };

  export default ArchivedStages;
