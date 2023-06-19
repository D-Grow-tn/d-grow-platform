import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import {Avatar ,IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { fetchEvents } from "../../../store/event";
import EditEvent from "./OneEvent";
import { useNavigate } from "react-router-dom";
import { Image } from 'mui-image'

function EventList() {
  const dispatch = useDispatch();
  const Events = useSelector((state) => state.event.events.items);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);

  console.log("from client component", Events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  useEffect(() => {
    if (Events.length) {
      let aux = Events.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [Events]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (id) => {
    console.log("Delete row with ID:", id);
  };

  const handleUpdate = (id) => {
    console.log("Update row with ID:", id);
  };

  const columns = useMemo(
    () => [
      {
        field: "image",
        headerName: "Image",
        headerClassName: "header-blue",
        width: 100,
        renderCell: (params) => <Image src={params.row.MediaEvent[0]?.media?.path} />,
        sortable: false,
        filterable: false,
      },
      {
        field: "name",
        headerName: "Name",
        headerClassName: "header-blue",
        width: 170,
      },
      {
        field: "employeeId",
        headerName: "Orgniser",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) =>(<div>{params.row.employee.name}</div>)
      },
      {
        field: "active",
        headerClassName: "header-blue",
        headerName: "Active",
        width: 110,
        type: "boolean",
        editable: true,
      },
      {
        field: "Start At",
        headerName: "Start At",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) =>
          moment(params.row.startAt).format("YYYY-MM-DD HH:MM:SS"),
      },
      {
        field: "End At",
        headerName: "End At",
        headerClassName: "header-blue",
        width: 200,
        renderCell: (params) =>
          moment(params.row.endAt).format("YYYY-MM-DD HH:MM:SS"),
      },

      {
        field: "actions",
        headerName: "Actions",
        headerClassName: "header-blue",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
          <div>
            <IconButton onClick={()=>navigate('one/'+params.row.id)} color="primary" aria-label="update">
              <RemoveRedEyeIcon />
            </IconButton>

            <IconButton
              onClick={() => handleDelete(params.row.id)}
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ),
      },
    ],
    []
  );

  if (!Events) {
    return (
      <div>
        {" "}
        <DisplayLottie animationData={loading} />
      </div>
    );
  }
  return (
    <div>
      <HeaderPage
        title="Events List"
        showButton={true}
        
        buttonFunction={()=>navigate('create')}
        text={"Create Event"}
      />

      <Table columns={columns} rows={rows} />
      {isOpen && <EditEvent EditEvent={Events} />}
    </div>
  );
}

export default EventList;
