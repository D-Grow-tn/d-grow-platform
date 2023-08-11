import React, { useEffect, useMemo,useState } from 'react'
import HeaderPage from '../../../components/HeaderPage'
import {useNavigate} from "react-router-dom"
import Table from '../../../components/Table';
import DeleteModal from '../../../components/DeleteModal';
import { fetchTeams, removeTeam } from '../../../store/team';
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { IconButton } from '@mui/material';
import loading from "../../../constants/loading.json";
import DisplayLottie from '../../../constants/DisplayLottie';
function TeamList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teams = useSelector((state) => state.team.teams.items);
    console.log("🚀 ~ file: TeamList.js:18 ~ TeamList ~ teams:", teams)
    const [selected, setSelected] = useState(null);
  
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchTeams());
      }, []);
    
      const handleUpdate = (id) => {
        navigate("one/" + id);
      };
    
      const openPopup = (select) => {
        setSelected(select);
        setIsOpen(true);
    
      };
      const handleDelete = () => {
        dispatch(removeTeam(selected.id)).then((result) => {
          if (!result.error) {
            showSuccessToast("Technology has been deleted");
            setIsOpen(false)
          } else {
            showErrorToast(result.error.message);
          }
        });
      };
    const columns = useMemo(
        () => [
          {
            field: "name",
            headerName: "Name",
            headerClassName: "header-blue",
            width: 170,
          },
          {
            field: "teamMembership ",
            headerName: "Team Membership",
            headerClassName: "header-blue",
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.teamMembership.map((e)=>e.employee?.name).join(" | ")}</div>;
              },

          },
          {
            field: " project",
            headerName: "Project Name",
            headerClassName: "header-blue",
            width: 200,
          },
          {
            field: "createdAt",
            headerName: "Created At",
            headerClassName: "header-blue",
            width: 200,
            renderCell: (params) =>
              moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
          },
          {
            field: "UpdatedAt",
            headerName: "Updated At",
            headerClassName: "header-blue",
            width: 200,
            renderCell: (params) =>
              moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
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
                <IconButton
                  onClick={() => handleUpdate(params.row.id)}
                  color="primary"
                  aria-label="update"
                >
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton
                  onClick={() => openPopup(params.row)}
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
      if (!teams) {
        return (
          <div>
            {" "}
            <DisplayLottie animationData={loading} />
          </div>
        );
      }
  return (
    <div className="p-3"> 
    <HeaderPage
    title={"Team List"}
    showButton={true}
    buttonFunction={() => navigate("create")}
    text={"Create Team"}
    parent="PMO"
  />
      <Table columns={columns} rows={teams.length ? teams : []} />
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
  )
}

export default TeamList