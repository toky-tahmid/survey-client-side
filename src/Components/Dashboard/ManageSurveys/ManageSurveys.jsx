import { Link, useLoaderData } from "react-router-dom";

const ManageSurveys = () => {
  const surveys = useLoaderData();
  return (
    <div className="grid grid-cols-2">
      {surveys.map((survey) => (
        <div key={survey._id} className="card w-96 mx-auto bg-gradient-to-r from-blue-300 to-purple-300 shadow-2xl rounded-lg p-6 mb-4">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-white">Title: {survey.title}</h2>
            <p className="text-lg text-white">{survey.short_description}</p>
            <p className="text-lg text-white">{survey.long_description}</p>
            <Link to={`/dashboard/updateSurvey/${survey._id}`}>
            <button className="btn btn-sm btn-primary">Update Survey</button>
                </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageSurveys;
