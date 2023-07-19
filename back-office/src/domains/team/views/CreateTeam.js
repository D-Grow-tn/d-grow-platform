import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import Form from "../../../components/Form";
import { createTeam, fetchTeams } from "../../../store/team";
import HeaderPage from "../../../components/HeaderPage";
function CreateTeam() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  const [inputs, setInputs] = useState([]);
  const teams = useSelector((state) => state.team.teams.items);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    setInputs([
      {
        label: "Name",
        placeholder: "Name",
        name: "name",
        required: true,
        width: 300,
      },
    ]);
  }, [teams]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeam(team)).then((result) => {
      if (!result.error) {
        showSuccessToast("Team has been created");
        navigate(-1);
      } else {
        showErrorToast(result.error.message);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam((Team) => ({ ...Team, [name]: value }));
  };
  const buttons = [
    {
      category: "cancel",
      name: "Cancel",
      onClick: () => navigate(-1),
      className: "",
      style: { width: 100 },
    },
    {
      category: "save",
      name: "Save",
      onSubmit,
      className: "",
      style: { width: 100 },
    },
  ];

  return (
    <div>
      <HeaderPage title={"Create Team"} />
      <div className="py-3"></div>
      <div
        className=" rounded-5 p-3  "
        style={{
          boxShadow: "0px 0px 8px #54b4d3",
          backgroundColor: "white",
        }}
      >
        {" "}
        <Form
          className=" pt-4  "
          inputsClassName="d-flex flex-wrap justify-content-center  "
          inputsStyle={{
            rowGap: 20,
            columnGap: 100,
          }}
          numberInputPerRow={1}
          inputs={inputs}
          buttons={buttons}
          buttonsClassName="mt-5 d-flex justify-content-center gap-3"
          onSubmit={onSubmit}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default CreateTeam;
