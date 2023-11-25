import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SurveysAll = () => {
    const [surveys, setSurveys] = useState([]);
    const fetchSurveys = () => {
      fetch('http://localhost:5000/allSurveys')
        .then((res) => res.json())
        .then((data) => setSurveys(data));
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
                  Title: 
                  {survey.title}
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
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default SurveysAll;