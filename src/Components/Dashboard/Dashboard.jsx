import {
  FaDonate,
  FaHome,
  FaList,
  FaMoneyBill,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gradient-to-r from-blue-300 to-purple-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageUsers">
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
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
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaMoneyBill></FaMoneyBill>
              Payment 
            </NavLink>
          </li>

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
      {/* dashboard content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
