import { useEffect, useState } from "react";
const DisplaySurvey = () => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allSurveys")
      .then((response) => response.json())
      .then((data) => setSurveys(data))
      .catch((error) => console.error("Error fetching surveys:", error));
  }, []);
  const getMostVotedSurveys = () => {
    const sortedSurveys = [...surveys].sort((a, b) => b.total_votes - a.total_votes);
    return sortedSurveys.slice(0, 6);
  };
  const getLatestSurveys = () => {
    const sortedSurveys = [...surveys].sort((a, b) => b.timestamp - a.timestamp);
    return sortedSurveys.slice(0, 6);
  };
  const featuredSurveys = getMostVotedSurveys();
  const latestSurveys = getLatestSurveys();
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center">Featured Surveys</h1>
        {featuredSurveys.map((survey) => (
          <div key={survey._id}>
            <h2>{survey.title}</h2>
            {/* <p>{survey.short_description}</p>
            <p>Total Votes: {survey.total_votes}</p> */}
            <hr />
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center">Latest Surveys</h1>
        {latestSurveys.map((survey) => (
          <div key={survey._id}>
            <h2>{survey.title}</h2>
            {/* <p>{survey.short_description}</p>
            <p>Total Votes: {survey.total_votes}</p> */}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySurvey;
