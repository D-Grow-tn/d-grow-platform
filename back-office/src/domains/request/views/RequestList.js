import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState, useMemo } from "react";
import HeaderPage from "../../../components/HeaderPage";
import Table from "../../../components/Table";
import { Avatar, IconButton } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteModal from "../../../components/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestsBySender, fetchRequestsByReceiver, removeRequest } from "../../../store/request";
import DisplayLottie from "../../../constants/DisplayLottie";
import loading from "../../../constants/loading.json";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";;


function RequestList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const sentRequests = useSelector((state) => state.request.sentRequests.items);
  const receivedRequests = useSelector((state) => state.request.receivedRequests.items);
  const me = useSelector((state) => state.auth.me);
  const [selected, setSelected] = useState(null);
  const [sentRows, setSentRows] = useState([]);
  const [receivedRows, setReceivedRows] = useState([]);
  const [selectedTab, setSelectedTab] = useState("received");
  const [sent,setSent]=useState(null); 
   console.log('====================================');
   console.log(sentRequests);
   console.log('====================================');

  useEffect (()=> {
    setSent(receivedRequests)
  },[sent]);
 console.log('====================================');
 console.log(sent);
 console.log('====================================');

  useEffect(() => {
    if (me) {
      dispatch(fetchRequestsBySender(me.employee.id));
      dispatch(fetchRequestsByReceiver(me.employee.id));
    }
  }, [dispatch, me]);

  useEffect(() => {
    if (sentRequests?.length) {
      let aux = sentRequests.map((e) => {
        return { ...e };
      });
      setSentRows(aux);
    }
  }, [sentRequests]);

  useEffect(() => {
    if (receivedRequests?.length) {
      let aux = receivedRequests.map((e) => {
        return { ...e, };
      });
      setReceivedRows(aux);
    }
  }, [receivedRequests]);

  const openPopup = (select) => {
    setSelected(select);
    setIsOpen(true);
  };

  const handleDelete = () => {
    dispatch(removeRequest(selected)).then((result) => {
      if (!result.error) {
        showSuccessToast("Request has been deleted");
        setIsOpen(false);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };


  const columns = useMemo(() => [
    {
      field: "subject",
      headerName: "Subject",
      headerClassName: "header-blue",
      width: 170,
    },
    {
      field: "content",
      headerName: "Content",
      headerClassName: "header-blue",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: selectedTab === "sent" ? "Sent At":"Received At",
      headerClassName: "header-blue",
      width: 200,
      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },
    

  
    {
      field : "name",
      headerClassName: "header-blue",
      headerName: selectedTab === "sent" ? " Sent to " :  "From " ,
      width: 110,
      renderCell: (params) =>
      selectedTab === "sent"
       ? params.row.receiverReq.name
       : params.row.senderReq.name,

  
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
        {selectedTab === "sent" ?
        <IconButton
              onClick={() => navigate("edit/sent/" + params.row.id)}
              color="primary"
              aria-label="update"
            >
              <RemoveRedEyeIcon />
            </IconButton>
        :      <IconButton
              onClick={() => navigate("edit/received/" + params.row.id)}
              color="primary"
              aria-label="update"
            >
              <RemoveRedEyeIcon />
            </IconButton>
          }
            
        
          <IconButton
            onClick={() => openPopup(params.row.id)}
            color="error"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ], [selectedTab]);
console.log('====================================');
console.log();
console.log('====================================');
  if (!sentRequests || !receivedRequests) {
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
        title={"Requests List"}
        showButton={true}
        buttonFunction={() => navigate("create")}
        text={"create a request"}
      />
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="lab API tabs example">
            <Tab
              label="Sent"
              value="sent"
              onClick={() => setSelectedTab("sent")}
            />
            <Tab
              label="Received"
              value="received"
              onClick={() => setSelectedTab("received")}
            />
          </TabList>
        </Box>
        <TabPanel value="sent">
          <Table columns={columns} rows={sentRows} />
        </TabPanel>
        <TabPanel value="received">
          <Table columns={columns} rows={receivedRows} />
        </TabPanel>
      </TabContext>
      {isOpen && (
        <DeleteModal
          close={() => setIsOpen(false)}
          title={selected.name}
          width={300}
          height={250}
          fnDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default RequestList;
