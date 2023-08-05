import React, { useState, useEffect } from 'react';
import {  FaPlay, FaPause } from "react-icons/fa";
import moment from 'moment';


function Pomodoro({project}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWorking, setIsWorking] = useState(false);
  const [workStartTime, setWorkStartTime] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
   const [timeInSeconds, setTimeInSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      if (!isWorking){
        setTimeInSeconds(prevTime => prevTime + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const toggleWorkingMode = () => {
    setIsWorking(!isWorking);
    if (!isWorking) {
      setWorkStartTime(moment());
    } else {
      setBreakStartTime(moment());
    }
  };
  





  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <header className="headerPage d-flex justify-content-between align-items-center p-3">
   <div className="px-5"> 
   <h2 className="headerPage-title darkBlue">Current Sprint</h2>  
   <h4> {project}</h4>
   </div>
<div className="darkBlue d-flex justify-content-between align-items-center gap-2">
   <p  style={{fontSize:"30px",fontWeight:"bold"}}>{formattedTime}</p>
   <span style={{fontSize:"15px",marginBottom:"20px"}}>PM</span>
   {!isWorking ? ( <FaPlay className="toggle-icon mx-3" style={{marginBottom:"5px"}} onClick={toggleWorkingMode}  />): (<FaPause className="toggle-icon mx-3" style={{marginBottom:"5px"}} onClick={toggleWorkingMode} />)}
</div>
{!isWorking ? (<div><span className="darkBlue"> Work Time</span><p>{formatTime(timeInSeconds)}</p></div> ): (<div><span>Break Time</span><p></p></div>)}

              
           
   </header>
  )
}

export default Pomodoro
