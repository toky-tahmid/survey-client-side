import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, UpdateProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!strongPasswordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res);
        UpdateProfile(name, photo).then(() => {
          setSuccessMessage("Registered successfully!");
          setErrorMessage("");
        });
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setErrorMessage("Registration failed.");
        setSuccessMessage("");
      });
  };
  return (
    <div className="min-w-screen flex items-center justify-center">
      
      <div className="relative flex flex-col rounded-xl bg-gradient-to-r  from-pink-500 to-red-500 text-black shadow-lg p-8">
        <h4 className="ml-14 text-4xl font-bold text-white ">Register Now!!</h4>
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <form
          onSubmit={handleRegister}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px] form-control">
              <input
                type="text"
                required
                name="photo"
                placeholder="Photo Url"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 text-sm  outline outline-0  placeholder-shown:border focus:border-t-transparent "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-black text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Photo Url
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] form-control">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent px-3 py-3 text-sm  outline outline-0  placeholder-shown:border focus:border-pink-500 focus:border-t-transparent  disabled:border-0 "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-black text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Your Name
              </label>
            </div>
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
                Register
              </button>
            </div>
          </div>

          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
            Already have an account?
            <Link
              to="/login"
              className="block ml-1 font-sans text-xl antialiased font-bold leading-normal text-white underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
