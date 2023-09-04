import React from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { useMemo, useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { fetchEvents, removeEvent } from "../../../store/event";
import { useNavigate } from "react-router-dom";
import { Image } from "mui-image";
import DeleteModal from "../../../components/DeleteModal";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import CastomCard from "../../../components/CastomCard";
import Carousel from "react-bootstrap/Carousel";

function EventList() {
  const dispatch = useDispatch();
  const Events = useSelector((state) => state.event.events.items);
  console.log("🚀 ~ file: EventsList.js:23 ~ EventList ~ Events:", Events);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(null);

  console.log("from client component", Events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const handleUpdate = (id) => {
    navigate("one/" + id);
  };
  useEffect(() => {
    if (Events.length) {
      let aux = Events.map((e) => {
        return { ...e };
      });
      console.log(aux);
      setRows(aux);
    }
  }, [Events]);

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
    console.log(select);
  };

  const handleDelete = (id) => {
    console.log(id,"id");
    dispatch(removeEvent(id)).then((result) => {
      if (!result.error) {
        showSuccessToast("Event has been deleted");
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };
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
        parent="HR"
        buttonFunction={() => navigate("create")}
        text={"Create Event"}
      />
      <div className="d-flex justify-content-center align-items-center mt-3">
        <Carousel
          variant="dark "
          style={{
            width: "650px",
            height: "370px",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          {Events?.map((img, i) => (
            <Carousel.Item key={i}>
              <img
                // className="d-block w-100 "
                src={img?.MediaEvent.map((item) => item.media.path)}
                alt={`Slide ${i + 1}`}
                style={{
                  borderRadius: "10px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {isOpen && (
        <DeleteModal
          close={() => setIsOpen(false)}
          title={selected?.name}
          width={300}
          height={250}
          fnDelete={() => handleDelete(selected)}
        />
      )}
      <div className="d-flex flex-wrap m-5  gap-5 justify-content-center">
        {Events.map((elem) => (
          <CastomCard
            image={elem.MediaEvent[0]?.media?.path}
            name={elem.name}
            description={elem.description}
            onClick={() => handleUpdate(elem.id)}
            deleteFunction={() => openPopup(elem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default EventList;
