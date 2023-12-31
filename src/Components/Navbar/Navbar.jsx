import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/281-2811269_and-the-survey-says-clip-art-payroll-logo-removebg-preview.png";

import { AuthContext } from "../../providers/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/surveys">Surveys Page</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing page</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar w-full bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img className="h-10 mr-8" src={user?.photoURL} />
              </div>
            </label>
          )}
          {user && user.displayName}
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className=" hover:bg-green-300 text-green-400 font-bold py-3 px-4 border border-white rounded-full transition duration-300 ease-in-out">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
