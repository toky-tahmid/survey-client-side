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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-red-400">
  <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8">
    <h4 className="text-4xl text-center font-bold text-pink-500 mb-6">Login Now!!</h4>
    <form onSubmit={handleLogIn} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input"
        />
        <label className="label">Email</label>
      </div>
      <div className="relative">
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          className="input"
        />
        <label className="label">Password</label>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="btn btn-primary w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-red-400 hover:to-purple-500 transform hover:scale-105 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 text-xl font-semibold"
        >
          Login
        </button>
      </div>
    </form>
    {error && <p className="text-red-700 mt-2">{error}</p>}
    <p className="mt-4 text-center text-gray-700">
      Don't Have an Account?
      <Link to="/register" className="ml-1 text-purple-500 underline">
        Register
      </Link>
    </p>
    <h4 className="text-xl font-semibold text-gray-800 text-center mt-6">
      Or Login With
    </h4>
    <button
      onClick={handleGoogleSignIn}
      className="btn glass btn-wide mt-2 ml-16 bg-red-500 hover:bg-red-600 text-white"
    >
      Google
    </button>
  </div>
</div>

  );
};

export default Login;
