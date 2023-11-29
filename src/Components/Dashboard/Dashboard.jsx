import { useContext } from "react";
import { FaDonate, FaHome, FaList, FaMoneyBill, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Dashboard = () => {
  const users = useLoaderData();
console.log(users);
const { user } = useContext(AuthContext);
console.log(user);
const currentUser = users.find(user1 => user1.email === user?.email);
console.log('Current User:', currentUser);

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
        <ul className="menu p-4">
          
           {
            currentUser.role === 'admin' && 
            <>
             <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers">
              <FaUsers></FaUsers>
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allUsers">
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managePayment">
              <FaMoneyBill></FaMoneyBill>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageApplied">
              <FaMoneyBill></FaMoneyBill>
              Applied Surveys
            </NavLink>
          </li>
            </>

           }
          {currentUser.role === 'surveyor' && 
            <>
            <li>
            <NavLink to="/dashboard/surveyorHome">
              <FaHome></FaHome>
              Surveyor Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addSurveys">
              <FaDonate></FaDonate>
              Add Surveys
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageSurveys">
              <FaList></FaList>
              Manage Surveys
            </NavLink>
          </li>
            </>}
          

          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
