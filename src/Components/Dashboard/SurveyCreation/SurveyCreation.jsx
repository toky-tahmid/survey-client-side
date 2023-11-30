import Swal from "sweetalert2";

const SurveyCreation = () => {
  const handleAddSurvey = (event) => {
    event.preventDefault();
    const form = event.target;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const title = form.title.value;
    const category = form.category.value;
    const pending = 'unPublish'

    const newJobs = {
      title,
      short_description,
      long_description,
      category,
      pending
    };

    fetch("https://survey-server-mu.vercel.app/allSurveys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
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
            title: "Survey Added Successfully",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Create a Survey
          </h1>
          <form onSubmit={handleAddSurvey}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Survey Title
              </label>
              <input
                type="text"
                name="title"
                className="mt-1 p-2 w-full rounded"
                placeholder="Enter survey title"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                type="text"
                name="short_description"
                className="mt-1 p-2 w-full rounded"
                placeholder="Enter short description"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                long Description
              </label>
              <textarea
                type="text"
                name="long_description"
                className="mt-1 p-2 w-full rounded"
                placeholder="Enter long description"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Category
              </label>
              <select
                className="w-full px-4 py-2 rounded "
                name="category"
                required>
                <option value="Customer Satisfaction Surveys">Hobbies Surveys</option>
                <option value="Employee Engagement Surveys">Fitness Goals Surveys </option>
                <option value="Market Research Surveys"> Language Learning Surveys </option>
                <option value="Product Feedback Surveys">Pet Stories Surveys </option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded hover:from-pink-600 hover:to-purple-600 transition duration-300"
            >
              Add Survey   
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SurveyCreation;
