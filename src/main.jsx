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
        path: "/pricing",
        element: <Pricing></Pricing>,   
      },        
    ],
},
{
  path: "/dashboard",
  element: <Dashboard></Dashboard>,
  children:[
    {
      path:"/dashboard/addSurveys",
      element:<SurveyCreation></SurveyCreation>
    },
    {
      path:"/dashboard/manageUsers",
      element:<AllUsers></AllUsers>
    }
  ]
},


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
