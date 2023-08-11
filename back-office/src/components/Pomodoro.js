import React, { useState, useEffect } from 'react';
import {  FaPlay, FaPause,FaStop } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkTime,createWorkTime,fetchWorkTimeByEmployee} from "../store/worktime";


import moment from 'moment';


function Pomodoro({project}) {
  const dispatch = useDispatch();
  const worktime = useSelector((state) => state.worktime.worktimes.items);
  const employeeWork=useSelector((state)=>state.worktime.worktime)
  const me = useSelector((state) => state.auth.me);

  
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWorking, setIsWorking] = useState(false);
  const [stop,setStop]=useState(false)
  const [workingTime, setWorkingTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [breakInterval, setBreakInterval] = useState(null);
  const [pause,setPause]= useState(false);


console.log(employeeWork,"employeewooooork");
//   const startTimer = () => {
//     setIsWorking(true);
//     setIsOnBreak(false);
//     setTimerInterval(setInterval(() => setTimeElapsed((prevTime) => prevTime + 1), 1000));
//   };

//   const startBreak = () => {
//     setIsWorking(false);
//     setIsOnBreak(true);
//     setTimerInterval(setInterval(() => setTimeElapsed((prevTime) => prevTime + 1), 1000));
//   };


  // const stopTimer = () => {
  //   setIsWorking(false);
  //   clearInterval(timerInterval);
  //   setTimerInterval(null);
  //   clearInterval(breakInterval);
  //   setBreakInterval(null);
   
  // };
// const formatTime = (timeInSeconds) => {
  //   const hours = Math.floor(timeInSeconds / 3600);
  //   const minutes = Math.floor((timeInSeconds % 3600) / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  // };


  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${secs}s`;
  };
  useEffect(() => {
    if (stop ) {
      setWorkingTime((prevTime) => prevTime + 1);
    }
    else {
      setBreakTime((prevTime) => prevTime + 1)
    }
  }, [isWorking]);

  // Fetch work time by employee ID when the component mounts
  useEffect(() => {
    dispatch(fetchWorkTimeByEmployee(me?.employee.id));
    console.log(employeeWork,"rrrrrrrr");
  }, [dispatch,me]);
  



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    
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

      setTimerInterval(setInterval(() => setWorkingTime((prevTime) => prevTime + 1), 1000));
      dispatch(createWorkTime({ employeeId: me?.employee.id, totalWorkTime: workingTime })); 
     setStop(!stop)
    setIsWorking(!isWorking) 
    
    } else if (stop){
      setIsWorking(!isWorking) 
      setBreakInterval(setInterval(() => setBreakTime((prevTime) => prevTime + 1), 1000));
      dispatch(createWorkTime({ employeeId: me?.employee.id, totalBreakTime: breakTime }));
      clearInterval(timerInterval);
         setTimerInterval(null);
    } else {
      setIsWorking(!isWorking) 
      clearInterval(breakInterval);
      setBreakInterval(null);
    }
  };
  
  
  
  return (
    <header className="headerPage d-flex justify-content-between align-items-center p-3">
   <div className="px-3"> 
   <h2 className="headerPage-title darkBlue">Current Sprint</h2>  
   <h4> {project}</h4>
   </div>
<div className="darkBlue d-flex justify-content-between align-items-center gap-2 ">
   <p  style={{fontSize:"30px",fontWeight:"bold"}}>{formattedTime}</p>
   <span style={{fontSize:"15px",marginBottom:"20px"}}>PM</span>
   {!isWorking ?(<FaPlay className="working-icon mx-3"   style={{marginBottom:"5px"}} onClick={toggleWorkingMode}  />
   ):stop?(<FaStop className="working-icon mx-3" onClick={toggleWorkingMode}/>): (<FaPause className="break-icon mx-3" style={{marginBottom:"5px"}} onClick={toggleWorkingMode} />)}
</div>
{stop && isWorking? (<div style={{fontSize:"20px",fontWeight:"bold"}}><span className="working-status" > Work Time</span><p>{formatTime(workingTime)}</p></div> ):stop  && (<div style={{fontSize:"20px",fontWeight:"bold"}}><span className="break-status" >Break Time</span><p>{formatTime(breakTime)}</p></div>)}
 
   </header>
  )
}

export default Pomodoro
