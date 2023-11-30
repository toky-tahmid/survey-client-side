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
import SurveyCreation from "./Components/Dashboard/SurveyCreation/SurveyCreation";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllUsers from "./Components/Dashboard/AllUsers/AllUsers";
import SurveyDetails from "./Components/SurveysAll/SurveyDetails";
import ManageSurveys from "./Components/Dashboard/ManageSurveys/ManageSurveys";
import UpdateSurveys from "./Components/Dashboard/ManageSurveys/UpdateSurveys";
import AdminHome from "./Components/Dashboard/AdminHome/AdminHome";
import SurveyorHome from "./Components/Dashboard/SurveyorHome/SurveyorHome";
import Private from "./Private/Private";
import Payment from "./Components/Pricing/Payment";
import ManagePayment from "./Components/Dashboard/ManagePayment/ManagePayment";
import SeeAllUsers from "./Components/Dashboard/SeeAllUsers/SeeAllUsers";
import SurveyApplied from "./Components/Dashboard/SurveyApplied/SurveyApplied";
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
          fetch(`https://survey-server-mu.vercel.app/allSurveys/${params.id}`),
      },
      {
        path: "/pricing",
        element: <Private><Payment></Payment></Private>,
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <Private><Dashboard></Dashboard></Private>,
    loader: () => fetch("https://survey-server-mu.vercel.app/users"),
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
        path: "/dashboard/allUsers",
        element: <SeeAllUsers></SeeAllUsers>,
      },
      {
        path: "/dashboard/surveyorHome",
        element: <SurveyorHome></SurveyorHome>,
      },
      {
        path: "/dashboard/manageSurveys",
        element: <ManageSurveys></ManageSurveys>,
        loader: () => fetch("https://survey-server-mu.vercel.app/allSurveys"),
      },
      {
        path: "/dashboard/managePayment",
        element: <ManagePayment></ManagePayment>,
      },
      {
        path: "/dashboard/manageApplied",
        element: <SurveyApplied></SurveyApplied>,
      },
      {
        path: "/dashboard/updateSurvey/:id",
        element: <UpdateSurveys></UpdateSurveys>,
        loader: ({ params }) =>
          fetch(`https://survey-server-mu.vercel.app/allSurveys/${params.id}`),
      },
    ],
  },
]);
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);


