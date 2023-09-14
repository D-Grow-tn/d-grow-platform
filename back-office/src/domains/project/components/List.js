import React, { useState } from 'react';
import { useSelector,useDispatch} from "react-redux";
import Card from './Card';
import { fetchStages, removeStage, updateStage } from '../../../store/stage';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { fetchObjectives } from '../../../store/objective';

const List = ({ title, id, show, onArchive ,onUpdate}) => {
   const stageId =id;
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch()
  const [tasks, setTasks] = useState([]);
  const [backgroundColor, setBackgroundColor]=useState()
  const projectStore = useSelector((state) => state.project);
  const { project } = projectStore;
  const [editing, setEditing] =useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
 
  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      // setTasks([...tasks, { title: newTaskTitle }]);
      setNewTaskTitle('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

 
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (e) => {
    e.preventDefault();
 
      setEditing(true);

 

  };
  const handleArchive = () => {
    onArchive(); // Call the function to update the show state
    setAnchorEl(null);
  };
  const handleDelete = (e) => {
    e.preventDefault();
 dispatch(removeStage(id));

  };
  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;
 

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
    
  };

  const handleUpdate = () => {
    if (updatedTitle.trim() !== '') {
      // Call a function to update the card title (you can implement this function using Redux or pass an update function from the parent component)
     dispatch (updateStage({id:stageId,body:updatedTitle}));
     setUpdatedTitle(updatedTitle);
      setEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setUpdatedTitle(title); // Reset the title to the original value
  };
  return (
    <div className="list">
     {show && (
   <div className='d-flex justify-content-between'>
   
   {editing ?
   (
    <div>
      <input type="text" value={updatedTitle} onChange={handleTitleChange} />
      <button onClick={handleUpdate}>Save</button>
      <button onClick={handleCancelEdit}>Cancel</button>
    </div>
  ) : (
    <div>
      <p>{updatedTitle}</p>
      {/* <button  onClick={handleEdit}>Edit</button> */}
    </div>
  )}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu 
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          
          },
        }}
      >
     <MenuItem onClick={handleEdit} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
       
        <MenuItem onClick={handleArchive} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
      
       <MenuItem onClick={handleDelete} disableRipple>
      <DeleteIcon />
       Delete
       </MenuItem>
      </Menu>
    </div>
  )
}
   
{project?.objective.map((objective, index) => (
  objective?.Stage.map((stage, subIndex) => (
    <div key={subIndex}>
      {stage?.name === title && (
        stage?.task.map((task, sSubIndex) => (
          <Card key={sSubIndex} title={task.name} onDelete={() => deleteTask(sSubIndex)} />
        ))
      )}
    </div>
  ))
))}

      {tasks.map((task, index) => (
        <Card key={index} title={task.title} onDelete={() => deleteTask(index)}  />
      ))}
      <div className="add-task-container">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={addTask}>Add Card</button>
      </div>
    </div>
  );
};

export default List;
