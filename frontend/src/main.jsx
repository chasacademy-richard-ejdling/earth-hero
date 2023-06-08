import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.jsx' */
import Root from "./pages/root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import User from "./pages/User.jsx";
import Points from "./pages/Points.jsx";
import Settings from "./pages/Settings.jsx";
import Help from "./pages/Help.jsx";
import Info from "./pages/Info.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "hooks-for-redux";
import TeamStart from "./pages/team/TeamStart.jsx";
import CreateTeam from "./pages/team/createTeam.jsx";
import JoinTeam from "./pages/team/joinTeam.jsx";
import TeamInfo from "./pages/team/teamInfo.jsx";
<<<<<<< HEAD
import Junks from "./pages/junks.jsx";
=======
import InfoPoints from "./pages/InfoPoints.jsx";
import TeamHome from "./pages/team/TeamHome.jsx";
import TeamPoints from "./pages/TeamPoints.jsx";
import InfoSite from "./pages/InfoSite.jsx";
>>>>>>> development

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
<<<<<<< HEAD
        path: "/user/team",
        element: <Team />,
      },
      {
        path: "/user/team/create",
        element: <CreateTeam />,
      },
      {
        path: "/user/team/join",
        element: <JoinTeam />,
      },
      {
        path: "/user/team/info",
        element: <TeamInfo />,
=======
        path: "/user/team-start",
        element: <TeamStart />,
      },
      {
        path: "/user/team-start/create",
        element: <CreateTeam />,
      },
      {
        path: "/user/team-start/join",
        element: <JoinTeam />,
      },
      {
        path: "/user/team-start/info",
        element: <TeamInfo />,
      },
      {
        path: "/user/team/:teamName",
        element: <TeamHome />,
      },
      {
        path: "/user/team/:teamName/points",
        element: <TeamPoints />,
>>>>>>> development
      },
      {
        path: "/user/points",
        element: <Points />,
<<<<<<< HEAD
      },
      {
        path: "/user/junks",
        element: <Junks />,
=======
>>>>>>> development
      },
      {
        path: "/user/info-points",
        element: <InfoPoints />,
      },
      {
        path: "/user/settings",
        element: <Settings />,
      },
      {
        path: "/user/settings/help",
        element: <Help />,
      },
      {
        path: "/user/settings/info",
        element: <Info />,
      },
      {
        path: "/user/settings/infosite",
        element: <InfoSite />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
