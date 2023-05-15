import React from "react";
import ReactDOM from "react-dom/client";
/* import App from './App.jsx' */
import Root from "./pages/root.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import User from "./pages/User.jsx";
import Points from "./pages/Points.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "hooks-for-redux";
import Team from "./pages/team/Team.jsx";
import CreateTeam from "./pages/team/createTeam.jsx";
import JoinTeam from "./pages/team/joinTeam.jsx";
import TeamInfo from "./pages/team/teamInfo.jsx";
import Junks from "./pages/junks.jsx";

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
      },
      {
        path: "/user/points",
        element: <Points />,
      },
      {
        path: "/user/junks",
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
