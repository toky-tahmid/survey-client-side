import { useEffect, useState } from "react";
const DisplaySurvey = () => {
  const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    fetch(`https://survey-server-mu.vercel.app/pendingSurvey?pending=Publish`)
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
        <h1 className="text-3xl font-bold text-center">Featured Surveys</h1>
        <br />
        <hr />
        <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 gap-2">
        {featuredSurveys.map((survey) => (
            <div key={survey._id}>
              <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="p-6">
                  <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                    {survey.title}
                  </h5>
                  <h5 className="text-xl antialiased font-semibold">
                  Description  :{survey.short_description}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {survey.total_votes}
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>

        <h1 className="text-3xl font-bold text-center mt-7 ">Latest Surveys</h1>
        <br />
        <hr />
        <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 mb-8 gap-2">
        {latestSurveys.map((survey) => (
          <div key={survey._id}>
          <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="p-6">
              <h5 className="block mb-2 text-xl antialiased font-bold leading-snug tracking-normal text-gray-900 bg-gradient-to-r from-purple-500 to-red-400 text-transparent bg-clip-text">
                {survey.title}
              </h5>
              <h5 className="text-xl antialiased font-semibold">
              Description  :{survey.short_description}
              </h5>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySurvey;
