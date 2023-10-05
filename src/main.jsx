import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Contact from "./components/Conatct/Contact";
import Details from "./components/Details/Details";
import ErrorPage from "./error-page";
import First from "./components/First/First";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <First></First>
      },
      {
        path: "header",
        element: <Header></Header>
      },
      {
        path: "friends",
        element: <Friends></Friends>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "details",
        element: <Details></Details>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);