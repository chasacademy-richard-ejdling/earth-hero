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
import InfoPoints from "./pages/InfoPoints.jsx";
import TeamHome from "./pages/team/TeamHome.jsx";
import TeamPoints from "./pages/TeamPoints.jsx";
import InfoSite from "./pages/InfoSite.jsx";
import HeroInfo from "./pages/HeroInfo.jsx";
import Junks from "./pages/Junks.jsx";


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
        path: "/team-start",
        element: <TeamStart />,
      },
      {
        path: "/team-start/create",
        element: <CreateTeam />,
      },
      {
        path: "/team-start/join",
        element: <JoinTeam />,
      },
      {
        path: "/team",
        element: <TeamHome />,
      },
      {
        path: "/team/points",
        element: <TeamPoints />,
      },
      {
        path: "/points",
        element: <Points />,
      },
      {
        path: "/info-points",
        element: <InfoPoints />,
      },
      {
        path: "/hero-info",
        element: <HeroInfo />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/settings/help",
        element: <Help />,
      },
      {
        path: "/settings/info",
        element: <Info />,
      },
      {
        path: "/settings/infosite",
        element: <InfoSite />,
      },
      {
        path: "/junks",
        element: <Junks />,
      },
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
