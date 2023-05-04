import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App.jsx' */
import Root from './Root.jsx'
import Home from './Home.jsx'
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
