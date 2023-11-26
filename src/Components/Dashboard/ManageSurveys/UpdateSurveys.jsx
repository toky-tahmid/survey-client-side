import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateSurveys = () => {
    const posted = useLoaderData();
  console.log(posted);
  const {title,short_description,long_description} = posted;
  const handleUpdateSurvey = (event) => {
    event.preventDefault();
    const form = event.target;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const title = form.title.value;
    const newSurveys = {
      title,
      short_description,
      long_description,
    };
    console.log(newSurveys);
    fetch(`http://localhost:5000/dashboard/updateSurvey/${posted._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSurveys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Survey Updated Successfully",
          });
        }
      });
  };
    return (
        <div className="bg-gray-100 min-h-screen -mt-28 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Update Survey Info</h1>
        <form onSubmit={handleUpdateSurvey}>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Survey Title
            </label>
            <input
              type="text"
              name="title"
              className="mt-1 p-2 w-full rounded"
              placeholder="Enter job title"
              defaultValue={title}
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
            Short_Description
            </label>
            <textarea
              type="text"
              name="short_description"
              className="mt-1 p-2 w-full rounded"
              placeholder="Update short_description"
              required
              defaultValue={short_description}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
            Long_Description
            </label>
            <textarea
              type="text"
              name="long_description"
              className="mt-1 p-2 w-full rounded"
              placeholder="Update long_description"
              required
              defaultValue={long_description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded hover:from-pink-600 hover:to-purple-600 transition duration-300">
           Update Survey
          </button>
        </form>
      </div>
    </div>
    );
};
export default UpdateSurveys;