/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const SurveysAll = () => {
  const [surveys, setSurveys] = useState([]);
  const { user } = useContext(AuthContext);
  const [minVotes, setMinVotes] = useState(0);
  console.log(user);
  const userEmail = user?.email;
  console.log(userEmail);
  const [joinedSurveys, setJoinedSurveys] = useState([]);
  const fetchSurveys = () => {
    fetch(`https://survey-server-mu.vercel.app/pendingSurvey?pending=Publish`)
      .then((res) => res.json())
      .then((data) => setSurveys(data));
      
  };
  useEffect(() => {
    let currentUser;
    fetch("https://survey-server-mu.vercel.app/users")
      .then((response) => response.json())
      .then((usersData) => {
        console.log("All Users Data:", usersData);
        currentUser = usersData.find(
          (userData) => userData?.email === user?.email
        );
        console.log("Current User:", currentUser);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, [user?.email]);
  const handleJoinSurvey = (surveyId) => {
    if (joinedSurveys.includes(surveyId)) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "You have already joined this survey!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    setJoinedSurveys((alreadyJoinedSurvey) => [
      ...alreadyJoinedSurvey,
      surveyId,
    ]);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for joining the survey!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  useEffect(() => {
    fetchSurveys();
  }, []);
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const handleFilterChange = (event) => {
    setMinVotes(Number(event.target.value));
  };
  return (
    <>
      <div>
        <div className="mx-auto my-4">
          <label className="text-lg font-semibold text-gray-800">
            Minimum Votes:
          </label>
          <input
            type="number"
            id="minVotes"
            name="minVotes"
            value={minVotes}
            onChange={handleFilterChange}
            className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="grid-col-1 lg:grid grid-cols-2 gap-3 ml-20">
          {surveys
            .filter((survey) => survey.total_votes >= minVotes)
            .map((survey) => (
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
                      onClick={() => handleJoinSurvey(survey._id)}
                    >
                      Join Survey
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <BarChart
          width={500}
          height={300}
          data={surveys}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Bar
            dataKey="total_votes"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {surveys.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </>
  );
};

export default SurveysAll;
