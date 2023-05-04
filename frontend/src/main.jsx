import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx' */
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import User from './pages/User.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'hooks-for-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/user",
        element: <User />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
