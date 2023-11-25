import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";    
const SurveyDetails = () => {
  const surveyDetailsCard = useLoaderData();
  const { title, long_description, _id } = surveyDetailsCard;
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };
  const handleVote = async () => {
    try {
      const response = await fetch(`http://localhost:5000/allSurveys/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ $inc: { total_votes: 1 } })
      });
  
      const updatedSurvey = await response.json();
      console.log(updatedSurvey);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p className="text-xl">{long_description}</p>
        <div className="card-actions mt-5 justify-centre">
          <button className="btn btn-sm" onClick={handleLike}>
            <FaThumbsUp></FaThumbsUp>
            Like
            <div className="badge badge-secondary">{likeCount}</div>
          </button>
          <button className="btn btn-sm" onClick={handleDislike}>
            <FaThumbsUp className="transform rotate-180"></FaThumbsUp>
            Dislike
            <div className="badge badge-secondary">{dislikeCount}</div>
          </button>
        </div>
        <button className="btn btn-sm mt-5 btn-primary" onClick={handleVote}>
          Vote
        </button>
        <button className="btn btn-sm btn-primary">Report</button>
      </div>
    </div>
  );
};

export default SurveyDetails;
