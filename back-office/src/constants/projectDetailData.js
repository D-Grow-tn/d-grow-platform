import target from "../assets/images/target.png";
import ganttDiag from "../assets/images/ganttDiag.png";
import messages from "../assets/images/messages.png";

import team from "../assets/images/team.png";

const navData = [
  {
    nameEn: "Objectives",
    nameAr: "",
    nameFr: "",
    path: "",
    image: target,
    colorTab: "blue",
  },
  {
    nameEn: "Gantt Diagram",
    nameAr: "",
    nameFr: "Diagramme de Gantt",
    path: "/gantt",
    image: ganttDiag,
    colorTab: "green",
  },
  {
    nameEn: "Agent In Charge",
    nameAr: "",
    nameFr: "Agents responsables",
    path: "/team-section",
    image: team,
    colorTab: "blue",
  },
  {
    nameEn: "Intercations",
    nameAr: "",
    nameFr: "Interactions",
    path: "/interaction",
    image: messages,
    colorTab: "purple",
  },
];

export default navData;
