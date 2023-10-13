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
import FriendDetails from "./components/FriendDetails/FriendDetails";
import ErrorPage from "./error-page";
import First from "./components/First/First";
import Details from "./components/Details/Details";
import Meal from "./components/Meal/Meal";
import MealDetails from "./components/MealDetails/MealDetails";

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
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "details",
        element: <Details></Details>
      },
      {
        path: "friend/:details",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.details}`)
      },
      {
        path: "meals",
        element: <Meal></Meal>,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      },
      {
        path: "meal/:details",
        element: <MealDetails></MealDetails>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);