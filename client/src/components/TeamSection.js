import React from 'react'
import { useSelector } from "react-redux";

function TeamSection() {
    const projectStore = useSelector((state) => state.projects);
    const { project } = projectStore;
  return (
    <div className="  team-area mt-5">
    <h1
      className="text-center"
      style={{
        color: "#181f38",
        fontSize: "36px",
        lineHeight: "44px",
        fontWeight: 400,
        fontFamily:"Merriweather",
        marginBottom:"40px"
      }}
    >
      Our committed professionals
    </h1>

    <div className="team-box d-flex  flex-wrap justify-content-center align-items-center gap-5">
      <div className="box">
        <img
          src="https://images.prismic.io/utopix-next-website/Y2E4OTI3NzQtNmUyOC00YmU2LWE5ZjctODcxY2RlMzg2ZDIy_26dfc43e-31dd-463f-ad04-56f39a430691_profilhomme1.jpg?ixlib=js-3.7.1&w=3840&auto=format&fit=max"
          alt=""
        />
        <h2>{project?.consultant.name}</h2>
        <span>Consultant</span>
      </div>
      <div className="box">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&usqp=CAU"
          alt=""
        />
        <h2>{project?.projectManager.name}</h2>
        <span>Project Manager</span>
      </div>
    </div>
  </div>
  )
}

export default TeamSection
