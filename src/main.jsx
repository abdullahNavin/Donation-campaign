import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Route/Routers'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Routers from './Route/Routers';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>,
)
