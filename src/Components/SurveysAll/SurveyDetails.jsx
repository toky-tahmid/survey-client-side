import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import Swal from "sweetalert2";
import  { AuthContext } from "../../providers/AuthProvider";
const SurveyDetails = () => {
  const surveyDetailsCard = useLoaderData();
  const { title, long_description, _id } = surveyDetailsCard;
  console.log(surveyDetailsCard);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [comment, setComment] = useState("");
  const {user} = useContext(AuthContext)
  const userEmail = user?.email;
  console.log(userEmail);
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };
  const handleVote = async () => {
    try {
      const response = await fetch(`http://localhost:5000/allSurveys/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ $inc: { total_votes: 1 } }),
      });
      const updatedSurvey = await response.json();
      console.log(updatedSurvey);
    } catch (error) {
      console.error("Error", error);
    }
  };
  const handleReport = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (text) {
      Swal.fire({
        title: "Report submitted!",
        text: "Thank you for your feedback.",
        icon: "success",
      });
    }
  };
  const handlePost = async () => {
    try {
      const newReview = {
        review_text: comment,
        email: user?.email,
      };
      const updatedReviews = [newReview];
      const response = await fetch("http://localhost:5000/api/add-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review_id: _id,
          reviews: updatedReviews,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  }; 
  
  return (
    <div className="card w-96 mx-auto bg-gradient-to-r from-blue-300 to-purple-300 shadow-2xl rounded-lg p-6">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold text-white">
          Title: {title}
        </h2>
        <p className="text-lg text-white">{long_description}</p>
        <div className="card-actions mt-5 flex justify-between items-center">
          <button
            className="btn btn-sm bg-blue-600 text-white"
            onClick={handleLike}
          >
            <FaThumbsUp className="text-white"></FaThumbsUp>
            <div className="badge badge-secondary">{likeCount}</div>
          </button>
          <button
            className="btn btn-sm bg-red-300 text-white"
            onClick={handleDislike}
          >
            <FaThumbsUp className="transform rotate-180"></FaThumbsUp>
            <div className="badge">{dislikeCount}</div>
          </button>
        </div>
        <button className="btn btn-sm mt-5 btn-primary" onClick={handleVote}>
          Vote
        </button>
        <button className="btn btn-sm btn-primary" onClick={handleReport}>
          Report
        </button>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-800">
            Comment
          </label>
          <textarea
            type="text"
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="mt-1 p-2 w-full rounded"
            placeholder="Give a Comment"
          ></textarea>
          <button onClick={handlePost} className="btn btn-sm btn-primary">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
