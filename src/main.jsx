import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./providers/AuthProvider";
import Root from "./Components/Root/Root";
import SurveysAll from "./Components/SurveysAll/SurveysAll";
import Pricing from "./Components/Pricing/Pricing";
import SurveyCreation from "./Components/Dashboard/SurveyCreation/SurveyCreation";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllUsers from "./Components/Dashboard/AllUsers/AllUsers";
import SurveyDetails from "./Components/SurveysAll/SurveyDetails";
import ManageSurveys from "./Components/Dashboard/ManageSurveys/ManageSurveys";
import UpdateSurveys from "./Components/Dashboard/ManageSurveys/UpdateSurveys";
import AdminHome from "./Components/Dashboard/AdminHome/AdminHome";
import SurveyorHome from "./Components/Dashboard/SurveyorHome/SurveyorHome";
import Private from "./Private/Private";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/surveys",
        element: <SurveysAll></SurveysAll>,
      },
      {
        path: "/allSurveys/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allSurveys/${params.id}`),
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Private><Dashboard></Dashboard></Private>,
    loader: () => fetch("http://localhost:5000/users"),
    children: [
      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/addSurveys",
        element: <SurveyCreation></SurveyCreation>,
      },
      {
        path: "/dashboard/manageUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/surveyorHome",
        element: <SurveyorHome></SurveyorHome>,
      },
      {
        path: "/dashboard/manageSurveys",
        element: <ManageSurveys></ManageSurveys>,
        loader: () => fetch("http://localhost:5000/allSurveys"),
      },
      {
        path: "/dashboard/updateSurvey/:id",
        element: <UpdateSurveys></UpdateSurveys>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allSurveys/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
