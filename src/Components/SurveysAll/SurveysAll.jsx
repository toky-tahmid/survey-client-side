import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SurveysAll = () => {
  const [surveys, setSurveys] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchSurveys = () => {
    fetch("http://localhost:5000/allSurveys")
      .then((res) => res.json())
      .then((data) => setSurveys(data));
  };

  const handleJoinSurvey = () => {
    setTimeout(() => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for joining the survey!",
        showConfirmButton: false,
        timer: 1500,
      });
    }, 1000);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <div>
      <div className="grid-col-1 lg:grid grid-cols-2 gap-3 ml-20">
        {surveys.map((survey) => (
          <div key={survey._id} className="mb-8">
            <div className="relative flex justify-evenly max-w-xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="p-6">
                <h5 className="block mb-2 text-2xl text-center antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                  Title: {survey.title}
                </h5>
                <h5 className="text-xl text-center antialiased font-semibold">
                  Description: {survey.short_description}
                </h5>
                <h5 className="text-xl text-center antialiased font-semibold">
                  Votes: {survey.total_votes}
                </h5>
              </div>
              <div className="flex my-auto">
                <Link to={`/allSurveys/${survey._id}`}>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 mr-2 rounded focus:outline-none focus:ring h-12 focus:border-blue-300">
                    Details
                  </button>
                </Link>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 rounded focus:outline-none focus:ring h-12 focus:border-blue-300"
                  onClick={handleJoinSurvey}
                >
                  Join Survey
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveysAll;
