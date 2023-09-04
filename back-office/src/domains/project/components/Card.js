import React, { useState } from 'react';

const Card = ({ title, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleUpdate = () => {
    if (updatedTitle.trim() !== '') {
      // Call a function to update the card title (you can implement this function using Redux or pass an update function from the parent component)
      onUpdate(updatedTitle);
      setEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setUpdatedTitle(title); // Reset the title to the original value
  };

  return (
    <div className="card">
      {editing ? (
        <div>
          <input type="text" value={updatedTitle} onChange={handleTitleChange} />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{title}</p>
          <button  onClick={handleEdit}>Edit</button>
          
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Card;
