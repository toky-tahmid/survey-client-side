/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="min-w-screen flex items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-gradient-to-r  from-pink-500 to-red-500 text-black shadow-lg p-8">
        <h4 className="ml-20 text-4xl font-bold text-white">Login Now!!</h4>
        <form
          onSubmit={handleLogIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px] form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 text-sm  outline outline-0  placeholder-shown:border focus:border-pink-500 focus:border-t-transparent  disabled:border-0 "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-black text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] form-control">
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 text-sm  outline outline-0  placeholder-shown:border focus:border-pink-500 focus:border-t-transparent  disabled:border-0 "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-black text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 hover:from-red-400 hover:to-purple-500 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 text-xl font-semibold">
                Login
              </button>
            </div>
          </div>
          {error && <p className="text-red-700 mt-2">{error}</p>}
        </form>
        <p className="mt-2 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
          Don't Have an Account?
          <Link
            to="/register"
            className="block ml-1 font-sans text-xl font-bold text-white underline"
          >
            Register
          </Link>
        </p>
        <h4 className="text-xl font-semibold text-white text-center mb-2">
          {" "}
          Or Login With
        </h4>
        <p>
          <button
            onClick={handleGoogleSignIn}
            className="btn glass btn-wide ml-16"
          >
            Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
