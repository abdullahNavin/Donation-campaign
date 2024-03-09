import {
  createBrowserRouter,
} from "react-router-dom";
import MainPage from "../components/MainPage";
import Home from "../components/Home";
import Donation from "./Donation";
import Statistics from "./Statistics";
import Ditails from "./Ditails";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Donation',
        element: <Donation></Donation>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/Ditails/:id',
        loader:({params})=>fetch('/data.json'),
        element:<Ditails></Ditails>
      }
    ]
  },
]);

export default Routers;