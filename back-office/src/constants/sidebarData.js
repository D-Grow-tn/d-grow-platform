import {
  FaUsers,
  FaClipboardList,
  FaGlobe,
  FaUserCog,
  FaChartBar,
  FaTools,
  FaUserFriends,
  FaBriefcase,
  FaUserShield,
  FaFileInvoice,
  FaHandshake,
  FaEnvelopeOpenText,
  FaUserTie,
  FaFlask,
  FaInfoCircle,
  FaHome,
  FaProjectDiagram,
  FaUserAlt,
  FaCalendarAlt,
  FaQuestionCircle,
} from "react-icons/fa";
export const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaChartBar />,
  },
  {
    name: "Administration",
    icon: <FaGlobe />,
    children: [
      {
        name: "Invoices",
        path: "/invoices",
        icon: <FaFileInvoice />,
      },
      {
        name: "Provides",
        path: "*",
        icon: <FaHandshake />,
      },
      {
        name: "Request",
        path: "*",
        icon: <FaEnvelopeOpenText />,
      },
    ],
  },
  {
    name: "HR",
    icon: <FaBriefcase />,
    children: [
      {
        name: "Employee",
        path: "/employee",
        icon: <FaUserTie />,
      },
      {
        name: "Test",
        path: "/test",
        icon: <FaFlask />,
      },
      {
        name: "Quiz",
        path: "/quiz",
        icon: <FaQuestionCircle />,
      },
      {
        name: "Events",
        path: "/events",
        icon: <FaCalendarAlt />,
      },
    ],
  },
  {
    name: "CRM",
    icon: <FaUsers />,
    children: [
      {
        name: "client",
        path: "/client",
        icon: <FaUserAlt />,
      },
    ],
  },
  {
    name: "PMO",
    icon: <FaClipboardList />,
    children: [
      {
        name: "Project",
        path: "/project",
        icon: <FaProjectDiagram />,
      },
    ],
  },
  {
    name: "WebSite Setting",
    icon: <FaTools />,
    children: [
      {
        name: "Home",
        path: "*",
        icon: <FaHome />,
      },
      {
        name: "About us",
        path: "*",
        icon: <FaInfoCircle />,
      },
    ],
  },
  {
    name: "Admin Setting",
    icon: <FaUserCog />,
    children: [
      {
        name: "Users",
        path: "*",
        icon: <FaUsers />,
      },
      {
        name: "Role",
        path: "/role",
        icon: <FaUserShield />,
      },
    ],
  },
];
