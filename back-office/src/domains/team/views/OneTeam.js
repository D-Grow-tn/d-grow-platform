import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Form from '../../../components/Form';
import HeaderPage from '../../../components/HeaderPage';
import { createTeamMemberShip, fetchTeam, fetchTeams, updateTeam } from '../../../store/team';
import { employees, fetchEmployees } from '../../../store/employees';

import { showErrorToast, showSuccessToast } from '../../../utils/toast';
function OneTeam() {
    const dispatch = useDispatch();
    const { teamId } = useParams();
    const navigate = useNavigate();
    const team = useSelector((state) => state.team.team);
    const [readOnly, setReadOnly] = useState(true);
    const [data,setData] = useState(null)
    const [auxTeam, setAuxTeam] = useState(null);
    console.log("🚀 ~ file: OneTeam.js:18 ~ OneTeam ~ auxTeam:", auxTeam)
    const [inputs, setInputs] = useState([]);
    const teams = useSelector((state) => state.team.teams.items);
    const employees = useSelector((state) => state.employee.employees.items);
     const teamMember = auxTeam?.teamMembership.map((e)=>{
      console.log( e.employee.name)
      return e.employee.name
    })
     console.log("🚀 ~ file: OneTeam.js:26 ~ teamMember ~ teamMember:", teamMember)
    const employeeId = data?.join(" , ")
    console.log("🚀 ~ file: OneTeam.js:24 ~ OneTeam ~ employeeId:", employeeId)
    useEffect(() => {
      dispatch(fetchTeam(teamId));
      dispatch(fetchTeams());
      dispatch(fetchEmployees())
    }, [dispatch, teamId]);
  
    useEffect(() => {
      setAuxTeam(team);
    }, [team]);
  
    useEffect(() => {
      setInputs([
        {
          category: "select",
          name: "name",
          label: "Name",
          required: true,
          value: auxTeam?.name,
          options: teams,
          optionLabel: "name",
          valueLabel: "name",
          onChange: (value) => {
            setAuxTeam((Team) => ({ ...Team, name: value }));
          }
        },
        {
            category: "select",
            name: "employeeId",
            label: "Team Members",
            required: true,
            value:teamMember ,
            options: employees,
            optionLabel: "name",
            valueLabel: "id",

            onChange: (value) => {
              setAuxTeam((Team) => ({ ...Team, employeeId: value }));
            },
            multiple: true,

          },
        // {
        //   name: "description",
        //   label: "Description",
        //   required: true,
        //   value: auxTeam?.description,
        //   width: 500,
        //   height: 100,
        // },
      ]);
    }, [auxTeam, teams]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAuxTeam((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      const { name, description } = auxTeam;
      dispatch(createTeamMemberShip({teamId,employeeId}))
      dispatch(updateTeam({ name,teamId})).then(
        (result) => {
          if (!result.error) {
            showSuccessToast("team has been updated");
            setReadOnly(true);
            navigate(`/team`);
          } else {
            showErrorToast(result.error.message);
          }
        }
      );
    };
  
    const buttons = [
      {
        category: "save",
        name: "Save",
        onSubmit,
      },
      {
        category: "cancel",
        type: "button",
        name: "Cancel",
        onClick: () => {
          setAuxTeam(team);
          setReadOnly(true);
        },
      },
    ];
  
    return (
      <div style={{}}>
        <HeaderPage title="Team Information" />
  
        <div
          className="rounded-5 mt-3"
          style={{
            boxShadow: "0px 0px 8px #9E9E9E",
            padding: "50px",
          }}
        >
          <div className="d-flex justify-content-between align-items-center px-3 flex-wrap headerProfile">
            {readOnly && (
              <button
                type="button"
                className="btn"
                style={{
                  height: "40px",
                  background: "#2351AD",
                  color: "white",
                  borderRadius: "8px",
                  marginRight: "50px",
                }}
                onClick={() => {
                  setReadOnly(false);
                }}
              >
                Edit Team <i className="fa-solid fa-play fa-fade px-2"></i>
              </button>
            )}
          </div>
          <div className="d-flex justify-content-center mt-5 ">
            <Form
              onSubmit={onSubmit}
              inputs={inputs}
              inputsClassName="d-flex flex-wrap justify-content-center mt-5"
              inputsStyle={{ rowGap: 20, columnGap: 100 }}
              numberInputPerRow={2}
              readOnly={readOnly}
              onChange={handleInputChange}
              buttonsClassName="mt-5 d-flex justify-content-center gap-3"
              buttons={!readOnly ? buttons : []}
              setData={setData}
            />
          </div>
        </div>
      </div>
  )
}

export default OneTeam