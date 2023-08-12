import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks,createTask , removeTask,updateTask } from "../../../store/task";
import {fetchEmployees} from "../../../store/employees";
import "./Board.css";
import Dropdown from "react-bootstrap/Dropdown";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import { Form } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



function Board() {
  const initialBoard = {
    lists: [
      {
        id: "list1",
        title: "to_do",
        cards: [
          {
            id: "card1",
            title: "Trello graphic integration",
            labels: ["Urgent"],
            image: "path_to_image1.jpg",
          },
          { id: "card2", title: "Trello functionality", labels: ["Important"] },
        ],
      },
      {
        id: "list2",
        title: "In progress",
        cards: [],
      },
      {
        id: "list3",
        title: "Completed",
        cards: [],
      },
      {
        id: "list4",
        title: "On_hold",
        cards: [],
      },
    ],
  };

  const [board] = useState(initialBoard);
  const [card, setCard] = useState([]);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks.items);
  const [title, setTitle] = useState(null);
  const [task , setTask ] = useState(null);
  const [taskId , setTaskId ] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);


  useEffect(() => {
    const name = tasks.map((Elem) => Elem.name);
    setTitle(name);
    setCard(tasks);
  
  }, [tasks]);

  useEffect(() => {
    dispatch(fetchTasks());
   
  }, [dispatch]);

  useEffect(() =>{
    const id = tasks.map((elem) => elem.id);
    setTaskId(id)
    // console.log(taskId)
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((Task) => ({ ...Task, [name]: value }));
   
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(createTask(task)).then((result) => {
      if (!result.error) {
        showSuccessToast("Task has been created");
        setCard((prevCards)=>[...prevCards,task]);
        setTask(null);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const handleDelete = (selectedCard) => {
    dispatch(removeTask(selectedCard)).then((result) => {
      if (!result.error) {
        showSuccessToast("task has been deleted");
        setCard((prevCards) => prevCards.filter(card => card.id !== selectedCard));
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
  
    // If dropped outside a Droppable, do nothing
    if (!destination) {
      return;
    }
  
    // Move the card within the same list
    if (source.droppableId === destination.droppableId) {
      const listIndex = board.lists.findIndex((list) => list.id === source.droppableId);
      const updatedCards = [...card];
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);
  
      // Update local state
      setCard(updatedCards);
  
      // Update status in the database
      // dispatch(updateCardStatusInDatabase(movedCard.id, board.lists[listIndex].title));
    } else {
      // Move the card to a different list
      // You can dispatch an action here to update the Redux store and the database
    }
  };
  
console.log('====================================');
console.log(card.id);
console.log('====================================');
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trello</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          {board.lists.map((list) => (
            <Droppable key={list.id} droppableId={list.id} type="CARD">
              {(provided) => (
                <div
                  key={list.id}
                  className="col-md-3"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="card mb-4 bg-light">
                    <div className="card-body p-3">
                      <h2 className="card-title p-2">{list.title}</h2>
                      <div>
                        {card.map((card, index) =>
                          list.title === card.status ? (
                            <Draggable
                              key={card.id}
                              draggableId={card.id}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  key={card.id}
                                  className="card mb-2 bg-primary shadow p-3 mb-5 bg-body-tertiary rounded-3"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <div className="p-0 card-body">
                                    {card.name}
                                    <div className="employee-label">{card?.employee?.name}</div>
                                    {/* Three-dots menu */}
                                    <Dropdown className="three-dots-menu p-0">
                                      <Dropdown.Toggle
                                        variant="link"
                                        id={`dropdown-${card.id}`}
                                      >
                                        ...
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDelete(card.id)}>
                                          Delete
                                        </Dropdown.Item>
                                        <Dropdown.Item>Change Member</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ) : null
                        )}
                        <div className="mb-3">
                          <Form onSubmit={onSubmit}>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Card title"
                              name="name"
                              onChange={handleChange}
                            />
                            <button type="submit" className="btn btn-primary mt-2">
                              Add Card
                            </button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Droppable>
          ))}
          {/* ... */}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;